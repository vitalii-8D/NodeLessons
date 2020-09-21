const {userService} = require('../services');
const {statusCodes, errors, ErrorHandler} = require('../errors');
const {comparePass, tokenizer} = require('../helpers');

module.exports = {
    login: async (req, res, next) => {
        try {
            const user = req.user;
            const { password } = req.body;

            await comparePass(password, user.password);

            const tokens = tokenizer();

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
    refreshToken: async (req,res,next) => {
        try {
            const token = req.get('Authorization');
            // TODO remove old tokens from DB

            const newTokensPair = tokenizer();

            // TODO insert new tokens in DB

            res.json(newTokensPair)
        } catch (e) {
            next(e);
        }
    }
}
