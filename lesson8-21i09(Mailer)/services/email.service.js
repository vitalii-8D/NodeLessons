const mailer = require('nodemailer');
const EmailTemplates = require('email-templates');
const path = require('path');
const htmlTemplates = require('../email-templates')

const {ROOT_EMAIL, ROOT_EMAIL_PASS, FRONTEND_URL} = require('../configs/config');

const emailTemplates = new EmailTemplates({
    message: null,
    views: {
        root: path.join(process.cwd(), 'email-templates')
    }
})

const transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: ROOT_EMAIL,
        pass: ROOT_EMAIL_PASS
    }
})

class EmailService {
    async sendMail(userMail, action, context) {
        try {
            const templateInfo = htmlTemplates[action];

            const html = await emailTemplates.render(templateInfo.templateFilename, {...context, frontendUrl: FRONTEND_URL});
 
            const mailOptions = {
                from: 'NO REPLY CAR SHOP',
                to: userMail,
                subject: templateInfo.subject,
                html
            }

            return transporter.sendMail(mailOptions);
        } catch (e) {
            console.log('-----*****-----');
            console.log(e);
            console.log('-----*****-----');
        }
    }
}

module.exports = new EmailService();
