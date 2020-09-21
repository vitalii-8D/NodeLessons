'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        name: 'Vitalii',
        username: 'Shlomenko',
        age: 20,
        password: '$2b$10$bUXuO90btu1NfAUSxDy7pekqUj4i8Y1aJ0mLp.E2g5OhrxIAzl.H.'
        // password: 'password'
      },
      {
        name: 'Yulia',
        username: 'Didukh',
        age: 23,
        password: '$2b$10$A5SE1QmnZONPs7QOCMGdFeiGiqqhwiCGhOdusMOvpw/pnKfn3a7TC'
        // password: '0000'
      },
      {
        name: 'Oleksiy',
        username: 'Zhadanov',
        age: 19,
        password: '$2b$10$m81uJoA3JWt2VgzeUsWdK.rch.kQo.YXuUcUha7Fs1NxvHyJmi6fC'
        // password: '12345'
      },
      {
        name: 'Ira',
        username: 'Samilo',
        age: 22,
        password: "$2b$10$wkOiIy7k1BfQGs9fj0UEVuMX2i1fAy38CyO.5LYO8OVzFO7mE.YSW"
        // password: "cutie"
      },
      {
        name: 'Some',
        username: 'Human',
        age: 48,
        password: "$2b$10$4jl/HwnVjjfsOZiPic5aHOjiHJv4hWkpDZxyDn9ch6/Cl/.AiHlPu"
        // password: "somePass"
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
};
