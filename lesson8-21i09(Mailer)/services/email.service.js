const mailer = require('nodemailer');
const EmailTemplates = require('email-templates');
const path = require('path');
const {ROOT_EMAIL, ROOT_EMAIL_PASS} = require('../configs/config');

const htmlTemplates = require('../email-templates')

const emailTemplates = new EmailTemplates({
    message: null,
    views: {
        root: path.join(process.cwd(), 'email-templates')
    }
})

const transport = mailer.createTransport({
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
            const html = await emailTemplates.render(templateInfo.templateFileName, {...context})

            const mailOptions = {
                from: 'NO REPLY CAR SHOP',
                to: userMail,
                subject: templateInfo.subject,
                html
            }
            return transporter.sendMail(mailOptions)
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new EmailService();
