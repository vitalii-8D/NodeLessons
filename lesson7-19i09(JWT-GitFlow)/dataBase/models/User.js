'use strict';
const {USERS} = require('../../configs/db-tables.enum')

const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            User.hasMany(models.Car, {onDelete: null, foreignKey: 'userId', as: 'cars'});
            User.hasOne(models.OAuth, {onDelete: 'ONCASCADE', foreignKey: 'user_id'/*, as: 'tokens'*/});
        }
    };
    User.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: 'dsa'
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        sequelize,
        modelName: 'User',
        tableName: USERS,
        timestamps: false
    });
    return User;
};
