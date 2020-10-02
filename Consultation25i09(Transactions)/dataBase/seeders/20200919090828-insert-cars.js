'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('cars', [
      {
        model: 'Volvo VNL 760',
        year: 2016,
        price: 24000,
        userId: 1
      },
      {
        model: 'Ferarri',
        year: 2020,
        price: 31000,
        userId: 3
      },
      {
        model: 'Lada',
        year: 2016,
        price: 22000,
      },
      {
        model: 'Peugeot',
        price: 16000,
        year: 2019
      },
      {
        model: 'Ford F350',
        year: 2017,
        price: 23000,
        userId: 1
      },
      {
        model: 'Volkswagen Golf',
        year: 2018,
        price: 17000,
        userId: 3
      },
      {
        model: 'Nisan',
        year: 2017,
        price: 20000,
        userId: 1
      },
      {
        model: 'Mitsubishi',
        year: 2015,
        price: 16000,
        userId: 4
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cars', null, {})
  }
};
