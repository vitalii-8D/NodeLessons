const {ErrorHandler, errors, statusCodes} = require('../errors');
const {userService} = require('../services');
const {userValidator} = require('../validators')

module.exports = {
    isUserValid: (req, res, next) => {
        try {
            const user = req.body;

            let {error} = userValidator.newUserValidator.validate(user);

            if (error) {
                return next(new ErrorHandler(
                    error.details[0].message,
                    statusCodes.BAD_REQUEST,
                    errors.NOT_FOUND_USER.code
                ))
            }

            /*if (error) {
                return next(new ErrorHandler(
                    errors.NOT_FOUND_USER.message,
                    statusCodes.BAD_REQUEST,
                    errors.NOT_FOUND_USER.code)
                )}*/

            next();
        } catch (e) {
            return res.status(400).end(e.message);
        }
    },
    isUserPresent: async (req, res, next) => {
        try {
            const inputCredentials = req.body;
            const user = await userService.findByParams({username: inputCredentials.username})

            if (!user) {
                return next(new ErrorHandler(
                    errors.NOT_FOUND_USER.message,
                    statusCodes.NOT_FOUND,
                    errors.NOT_FOUND_USER.code))
            }

            req.user = user;
            next()
        } catch (e) {
            return next(e)
        }
    },
    isUsernameUsed: async (req, res, next) => {
        try {
            const {username} = req.body;
            console.log('username*************************');
            console.log(username);
            const user = await userService.findByParams({username});
            console.log('user****************************');
            console.log(user);

            if (user) {
                return next(new ErrorHandler(
                    errors.USERNAME_IS_USED.message,
                    statusCodes.BAD_REQUEST,
                    errors.USERNAME_IS_USED.code
                ))
            }
            next();
        } catch (e) {
            next(e);
        }
    }
}
