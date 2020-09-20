const {ErrorHandler, errors, statusCodes} = require('../errors');

module.exports = {
    userValidator: (req, res, next) => {
        try {
            const user = req.body;
            if (!Object.keys(user).length) {
                return next(new ErrorHandler(
                    errors.NOT_FOUND_USER.message,
                    statusCodes.BAD_REQUEST,
                    errors.NOT_FOUND_USER.code)
                )}
            if (!user.name) {
                return next(new ErrorHandler(
                    errors.NOT_FOUND_USER_NAME.message,
                    statusCodes.BAD_REQUEST,
                    errors.NOT_FOUND_USER_NAME.code
                ))
            }
            if (!user.surname) {
                return next(new ErrorHandler('Missing user`s surname', 400, 40013))
            }
            if (!user.age) {
                return next(new ErrorHandler('Missing user`s age', 400, 40014))
            }
            next();
        } catch (e) {
            return res.status(400).end(e.message);
        }
    }
}
