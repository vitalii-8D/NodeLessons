const {Model, DataTypes} = require('sequelize');
const sequelize = require('../configs');

class UserModel extends Model{ }

UserModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {min: 18, max: 110}
    },
},{
    sequelize,
    modelName: 'user',
    tableName: 'users',
    timestamps: false,
})

module.exports = UserModel;
