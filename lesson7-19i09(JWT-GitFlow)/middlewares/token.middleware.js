const {ErrorHandler} = require("../errors");
const jwt = require('jsonwebtoken');

module.exports = {
    ckeckTokenAccess: (req, res, next) => {
        try {
            const token = req.get('Authorization');

            if (!token) {
                return next(new ErrorHandler('Token is not valid', 401, 40101))
            }

            jwt.verify(token, 'access-secret', err => {
                if (err) {
                    return next(new ErrorHandler('Token is not valid', 401, 40101))
                }
            })

            // TODO is token present in database
            next()
        } catch (e) {
            return next(e);
        }
    },
    ckeckTokenRefresh: (req, res, next) => {
        try {
            const token = req.get('Authorization');

            if (!token) {
                return next(new ErrorHandler('Token is not valid', 401, 40101))
            }

            jwt.verify(token, 'refresh-secret', err => {
                if (err) {
                    return next(new ErrorHandler('Token is not valid', 401, 40101))
                }
            })

            // TODO is token present in database
            next()
        } catch (e) {
            return next(e);
        }
    }
}
