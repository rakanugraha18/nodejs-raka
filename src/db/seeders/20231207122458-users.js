'use strict';
const { encryptPayload } = require('../../../utils/encrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'users',
      [
        {
          id: 'aecbae29-2f8d-4393-ae13-e66362a33f3f',
          username: 'ujul',
          password: encryptPayload('password'),
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id: '57bb70df-ee2b-4a50-b0db-93aea2581d56',
          username: 'ajel',
          password: encryptPayload('password'),
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id: 'ffcd7710-a4be-4a0a-964a-917d4def3837',
          username: 'ujal',
          password: encryptPayload('password'),
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id: 'c595c906-c7c3-40e5-a1ce-ae14760158be',
          username: 'ojil',
          password: encryptPayload('password'),
          updatedAt: new Date(),
          createdAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  },
};
