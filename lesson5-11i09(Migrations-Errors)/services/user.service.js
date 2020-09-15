const {User} = require('../dataBase/models');
const {Car} = require('../dataBase/models');
const {Op} = require('sequelize');

module.exports = {
    fetchAllUsers: () => {
        return User.findAll({});
    },
    pushUser: (newUserObj) => {
        return User.create(newUserObj, {new: true});
    },
    deleteUser: (id) => {
        return User.destroy({
            where: {id: id}
        });
    },
    fetchOneUser: (id) => {
        return User.findByPk(id);
    },
    updateOneUser: async (id, body) => {
        const updatedUser = await User.findByPk(id);
        for (const key in body) {
            updatedUser[key] = body[key];
        }
        return updatedUser.save().then(() => updatedUser);
    },
    fetchCarsOfUser: async (id) => {
        console.log('STrting fetching')
        const user1 = await User.findOne({
            where: {id: id}
        });

        const cars1 = await user1.getCars();
        console.log(cars1[0].dataValues);
        console.log(cars1[1].dataValues);

        return cars1;
    }
}

