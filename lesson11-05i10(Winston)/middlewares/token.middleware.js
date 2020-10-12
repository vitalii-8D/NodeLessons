const { ErrorHandler } = require("../errors");
const jwt = require('jsonwebtoken');

const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = require('../configs/config');
const { oAuthService } = require('../services');
const { AUTHORIZATION } = require('../configs/constants');
const winston = require('../logger/winston');

const logger = winston('CHECK-ACCES-TOKEN');

module.exports = {
    checkToken: (tokenType, validToken) => async (req, res, next) => {
        try {
            const token = req.get(AUTHORIZATION);

            if ( !token ) {
                // logger.info({message: 'Token is not valid'})
                return next(new ErrorHandler('Token is not valid', 401, 40101))
            }

            jwt.verify(token, validToken, err => {
                if ( err ) {
                    return next(new ErrorHandler('Token is not valid', 401, 40101))
                }
            })

            // TOD+O is token present in database
            let toketWithUser = await oAuthService.getByParams({ [tokenType]: token })

            if ( !toketWithUser ) {
                return next(new ErrorHandler('Token is not valid', 401, 40101))
            }

            req.body.userId = toketWithUser.User.id;

            next()
        } catch (e) {
            next(e);
        }
    },

    // Замість цих двох ми використовуємо мідлвару вище
    /*ckeckTokenAccess: async (req, res, next) => {
        try {
            const token = req.get(AUTHORIZATION);

            if ( !token ) {
                // logger.info({message: 'Token is not valid'})
                return next(new ErrorHandler('Token is not valid', 401, 40101))
            }

            jwt.verify(token, ACCESS_TOKEN_SECRET, err => {
                if ( err ) {
                    return next(new ErrorHandler('Token is not valid', 401, 40101))
                }
            })

            // TOD+O is token present in database
            let toketWithUser = await oAuthService.getByParams({ access_token: token })

            if ( !toketWithUser ) {
                return next(new ErrorHandler('Token is not valid', 401, 40101))
            }

            req.body.userId = toketWithUser.User.id;

            next()
        } catch (e) {
            next(e);
        }
    },
    ckeckTokenRefresh: async (req, res, next) => {
        try {
            const token = req.get(AUTHORIZATION);

            if ( !token ) {
                return next(new ErrorHandler('Token is not valid', 401, 40101))
            }

            jwt.verify(token, REFRESH_TOKEN_SECRET, err => {
                if ( err ) {
                    return next(new ErrorHandler('Token is not valid', 401, 40101))
                }
            })

            // TO+DO is token present in database
            const toketWithUser = await oAuthService.getByParams({ refresh_token: token })

            if ( !toketWithUser ) {
                return next(new ErrorHandler('Token is not valid', 401, 40101))
            }
            req.body.userId = toketWithUser.User.id;

            next()
        } catch (e) {
            next(e);
        }
    },*/
    isUserAlreadyLoggedIn: async (req, res, next) => {
        try {
            const user = req.user;

            const tokens = await oAuthService.getByParams({ user_id: user.id });

            if ( tokens ) {
                // logger.info({message: 'User already logged in'})
                return next(new ErrorHandler('User already logged in', 401, 40120))
            }

            next()
        } catch (e) {
            next(e);
        }
    }
}
