'use strict';
const {USERS} = require('../../configs/db-tables.enum')

const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            User.hasMany(models.Car, {onDelete: 'SET NULL', onUpdate: 'CASCADE', foreignKey: 'userId', as: 'cars'});
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
        email: {
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
        },
        avatar: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        sequelize,
        modelName: 'User',
        tableName: USERS,
        timestamps: false
    });
    return User;
};
