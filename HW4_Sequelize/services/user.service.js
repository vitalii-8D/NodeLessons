const {UserModel} = require('../dataBase/models');
const {CarModel} = require('../dataBase/models');
const {Op} = require('sequelize');

module.exports = {
    fetchAllUsers: () => {
        return UserModel.findAll({});
    },
    pushUser: (newUserObj) => {
        return UserModel.create(newUserObj, {new: true});
    },
    deleteUser: (id) => {
        return UserModel.destroy({
            where: {id: id}
        });
    },
    fetchOneUser: (id) => {
        return UserModel.findByPk(id);
    },
    updateOneUser: async (id, body) => {
        const updatedUser = await UserModel.findByPk(id);
        for (const key in body) {
            updatedUser[key] = body[key];
        }
        return updatedUser.save().then(() => updatedUser);
    },
    fetchCarsOfUser: async (id) => {
        console.log('STrting fetching')
        // const user1 = await UserModel.findByPk(id);
        const user1 = await UserModel.findOne({
            where: {id: id}
        });

        // getCars(); - автоматически созданый метод. (по названию таблицы)
        const cars1 = await user1.getCars();
        console.log(cars1[0].dataValues);
        console.log(cars1[1].dataValues);

        // Можна по названию таблицы или по её модели.
        // const user2 = await UserModel.findByPk(id, {include: 'cars'});
        /*const user2 = await UserModel.findByPk(id, {include: CarModel});
        console.log('cars1');
        console.log(user2.cars);*/

        return cars1;
        // return cars1;
    }
}

