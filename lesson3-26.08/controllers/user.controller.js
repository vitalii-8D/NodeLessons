const userService = require('../services/user.service');

module.exports = {
    getAllUsers: (req, res) => {
        const users = userService.fetchAll();
        res.render('users', {arr: users});
    },
    createUser: (req, res) => {
        console.log(req.body);

        userService.create(req.body);
        res.end('User created');
    },
}
