const {User} = require('../dataBase/models');
const {Car} = require('../dataBase/models');
/*const {User2: User} = require('../dataBase/models')
const {Car2: Car} = require('../dataBase/models');*/

module.exports = {
    fetchAllUsers: () => {
        return User.findAll({});
    },
    pushUser: (newUserObj) => {
        console.log('I`m in service !!!!!');
        return User.create(newUserObj, {new: true});
    },
    deleteUser: (id) => {
        return User.destroy({
            where: {id}
        });
    },
    fetchOneUser: (id) => {
        return User.findByPk(id);
    },
    findByParams: (searchObj) => {
        return User.findOne({
            where: searchObj
        })
    },
    updateOneUser: async (id, body) => {
        const updatedUser = await User.findByPk(id);
        for (const key in body) {
            updatedUser[key] = body[key];
        }
        return updatedUser.save().then(() => updatedUser);
    },
    fetchCarsOfUser: async (id) => {
        return await User.findAll({
            where: {id},
            include: 'cars'
        });
    }
}

