const { userService } = require('../services');
const cron = require('node-cron');

module.exports = async () => {
    let users = await userService.fetchAllUsers();

    console.log(users.length);
}
