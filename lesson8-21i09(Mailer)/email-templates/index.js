const emailAction = require('../configs/email-action.enum')

module.exports = {
    [emailAction.WELCOME]: {
        subject: '[CAR SHOP] Welcome!',
        teplateFilename: 'welcome'
    },
    [emailAction.FORGOT_PASS]: {
        subject: '[CAR SHOP] Forgot Password!',
        teplateFilename: 'forgot-pass'
    }
}
