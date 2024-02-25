'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Posts',
      [
        {
          content: 'First post content',
          authorId: 1, // Assuming the user with id 1 is John Doe
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: 'Second post content',
          authorId: 2, // Assuming the user with id 2 is Jane Smith
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Posts', null, {});
  },
};
