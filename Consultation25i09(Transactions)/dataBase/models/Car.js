'use strict';
const {CARS} = require('../../configs/db-tables.enum')

const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Car extends Model {
        static associate(models) {
            Car.belongsTo(models.User,{foreignKey: 'userId', as: 'user', onDelete: 'SET NULL', onUpdate: 'CASCADE'});
        }
    }
    Car.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        sequelize,
        modelName: 'Car',
        tableName: CARS,
        timestamps: false
    });
    return Car;
};
