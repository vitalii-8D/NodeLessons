const emailAction = require('../configs/email-action.enum')

module.exports = {
    [emailAction.WELCOME]: {
        subject: '[CAR SHOP] Welcome!',
        templateFilename: 'welcome'
    },
    [emailAction.FORGOT_PASS]: {
        subject: '[CAR SHOP] Forgot Password!',
        templateFilename: 'forgot-pass'
    }
}
