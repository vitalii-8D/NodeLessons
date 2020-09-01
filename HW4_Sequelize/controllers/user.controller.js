const {userService} = require('../services');

module.exports = {
    getAllUsers: (req, res) => {
        const users = userService.fetchAllUsers();
        res.json(users);
    },
    addUser: (req, res) => {
        console.log('addUser  **************');
        const newUsersArr = userService.pushUser(req.body);
        res.json(newUsersArr);
    },
    deleteUser: (req, res) => {
        const {id} = req.params;
        const newUsersArr = userService.deleteUser(+id);
        res.json(newUsersArr);
    },
    getOneUser: (req, res) => {
        const {id} = req.params;
        const newUsersArr = userService.fetchOneUser(+id);
        res.json(newUsersArr);
    },
    updateUser: (req, res) => {
        const {id} = req.params;
        const body = req.body;
        const newUsersArr = userService.updateOneUser(+id, body);
        res.json(newUsersArr);
    },
    getCarsOfUser: (req, res) => {
        const {id} = req.params;
        const carsArr = userService.fetchCarsOfUser(+id);
        res.json(carsArr);
    }
}
