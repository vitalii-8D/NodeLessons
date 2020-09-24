const { ErrorHandler } = require("../errors");
const jwt = require('jsonwebtoken');

const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = require('../configs/config');
const { oAuthService } = require('../services');
const { AUTHORIZATION } = require('../configs/constants')

module.exports = {
    ckeckTokenAccess: async (req, res, next) => {
        try {
            const token = req.get(AUTHORIZATION);

            if ( !token ) {
                return next(new ErrorHandler('Token is not valid', 401, 40101))
            }

            jwt.verify(token, ACCESS_TOKEN_SECRET, err => {
                if ( err ) {
                    return next(new ErrorHandler('Token is not valid', 401, 40101))
                }
            })

            // TODO is token present in database
            let toketWithUser = await oAuthService.getByParams({ access_token: token })
            console.log('toketWithUser////////////////////********');
            console.log(toketWithUser);
            console.log('toketWithUser////////////////////********');

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
            const isTokenPresentInDB = await oAuthService.getByParams({ refresh_token: token })

            if ( !isTokenPresentInDB ) {
                return next(new ErrorHandler('Token is not valid', 401, 40101))
            }

            next()
        } catch (e) {
            next(e);
        }
    },
    isUserAlreadyLoggedIn: async (req, res, next) => {
        try {
            const user = req.user;

            const tokens = await oAuthService.getByParams({ user_id: user.id });

            if ( tokens ) {
                return next(new ErrorHandler('User already logged in', 401, 40120))
            }

            next()
        } catch (e) {
            next(e);
        }
    }
}
