const cron = require('node-cron');
const getRegisteredUserCron = require('./get-registered-users-count');
const crearOldTokens = require('./clear-old-tokens');

module.exports = () => {
    try {
        cron.schedule('* * * * *', async () => {
            /*console.log('----------  ITERATION START   -------------');
            console.log('--**--    DONE!!!   --**--');
            getRegisteredUserCron();
            console.log('----------  ITERATION FINISH   -------------');*/
            console.log('----------  CRON RUN   -------------');
        })
        cron.schedule('* * 1 * *', async () => {
            crearOldTokens();
        })
    } catch (e) {
        console.log(e);
    }
}
