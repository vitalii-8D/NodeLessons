// const DB = require('../dataBase').getInstance();
const { OAuth, User } = require('../dataBase/models');

module.exports = {
    getByParams: async (params) => {
        return OAuth.findOne({
            where: params,
            // Allowes to hide all system informations
            raw: true,
            nest: true,
            include: [User]
            /*include: [ {
                model: User,
                /!*attributes: ['name']*!/
            } ]*/
        })
    },

    create: (tokenObj) => {
        return OAuth.create(tokenObj, { new: true })
    },

    deleteByParams: async (params) => {
        const token = await OAuth.findOne({ where: params });

        const userId = token.user_id;
        OAuth.destroy({
            where: params
        })
        return token;
    }
}
