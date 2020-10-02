const { User } = require('../dataBase/models');
const { Car } = require('../dataBase/models');
const { sequelize } = require('../dataBase/models');

module.exports = {
    fetchAllUsers: () => {
        return User.findAll({});
    },
    pushUser: (newUserObj) => {
        // Тут транзакція впринципі і не треба)))
        /*return sequelize.transition(t => {
            return User.create(newUserObj, { new: true }, {transition: t});
        }).catch(error => {
            t.rollback();
        })*/
        return User.create(newUserObj, { new: true });
    },
    deleteUser: (id) => {
        return User.destroy({
            where: { id }
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
    updateById: async (id, updatedObj) => {
        // З Вітіної лекції
        return User.update(updatedObj, {
            where: { id },
            returning: true,
            plain: true
        })

        // Версія зі StackOverFlow
        /*return User.update(
            updatedObj,
            {
                returning: true,
                where: {id}
            }
        )*/

        // Так теж працює
        /*const updatedUser = await User.findByPk(id);
        for (const key in updatedObj) {
            updatedUser[key] = updatedObj[key];
        }
        return updatedUser.save().then(() => updatedUser);*/
    },
    fetchCarsOfUser: async (id) => {
        return await User.findAll({
            where: { id },
            include: 'cars'
        });
    }
}

