const {userService} = require('../services');
const {statusCodes, errors, ErrorHandler} = require('../errors');
const {comparePass} = require('../helpers');

module.exports = {
    login: async (req, res, next) => {
        try {
            const user = req.user;
            const { password } = req.body;

            await comparePass(password, user.password);
            res.json('Login is success !');
        } catch (e) {
            return next(new ErrorHandler(
                errors.NOT_FOUND_USER.message,
                statusCodes.NOT_FOUND,
                errors.NOT_FOUND_USER.code
            ))
        }
    }
}
