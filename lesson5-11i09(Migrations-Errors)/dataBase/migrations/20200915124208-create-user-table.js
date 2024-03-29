'use strict';
const {DataTypes} = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable('users2', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'VITALIONS'
      },
      surname: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'VITALIONS'
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 90
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable('users2');
  }
};
