const { userService, oAuthService } = require('../services');
const { statusCodes, errors, ErrorHandler } = require('../errors');
const { comparePass, tokenizer } = require('../helpers');
const {AUTHORIZATION} = require('../configs/constants')
const {ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET} = require('../configs/config')

module.exports = {
    login: async (req, res, next) => {
        try {
            const user = req.user;
            const { password } = req.body;

            await comparePass(password, user.password);

            const tokens = tokenizer();

            await oAuthService.create({
                ...tokens,
                user_id: user.id
            })

            res.json(tokens);
        } catch (e) {
            next(e);
            /*return next(new ErrorHandler(
                errors.NOT_FOUND_USER.message,
                statusCodes.NOT_FOUND,
                errors.NOT_FOUND_USER.code
            ))*/
        }
    },
    refreshToken: async (req, res, next) => {
        try {
            const token = req.get(AUTHORIZATION);

            // TODO remove old tokens from DB
            const oldToken = await oAuthService.deleteByParams({ refresh_token: token })

            const newTokensPair = tokenizer();

            // TO+DO insert new tokens in DB
            oAuthService.create({
                ...newTokensPair,
                user_id: oldToken.user_id
            })

            res.json(newTokensPair)
        } catch (e) {
            next(e);
        }
    }
}
