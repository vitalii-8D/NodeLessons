const { userService, emailService } = require('../services');
const { hashPass } = require('../helpers');
const { WELCOME } = require('../configs/email-action.enum');

module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const users = await userService.fetchAllUsers();
            res.json(users);
        } catch (e) {
            return res.status(400).end(e.message);
        }
    },
    addUser: async (req, res) => {
        try {
            let user = req.body;
            user.password = await hashPass(user.password);

            const newUsersArr = await userService.pushUser(user);

            await emailService.sendMail(user.email, WELCOME, { userName: user.name })

            res.json(newUsersArr);
        } catch (e) {
            return res.status(400).end(e.message);
        }
    },
    deleteUser: async (req, res) => {
        try {
            const { id } = req.params;
            const newUsersArr = await userService.deleteUser(+id);
            res.json(newUsersArr);
        } catch (e) {
            return res.status(400).end(e.message);
        }
    },
    getOneUser: async (req, res) => {
        try {
            const { id } = req.params;
            const newUsersArr = await userService.fetchOneUser(+id);
            res.json(newUsersArr);
        } catch (e) {
            return res.status(400).end(e.message);
        }
    },
    updateUser: async (req, res) => {
        try {
            const { id } = req.params;
            const body = req.body;
            const newUsersArr = await userService.updateOneUser(+id, body);
            res.json(newUsersArr);
        } catch (e) {
            return res.status(400).end(e.message);
        }
    },
    getCarsOfUser: async (req, res) => {
        try {
            const { id } = req.params;
            const carsArr = await userService.fetchCarsOfUser(+id);
            res.json(carsArr);
        } catch (e) {
            return res.status(400).end(e.message);
        }
    }
}
