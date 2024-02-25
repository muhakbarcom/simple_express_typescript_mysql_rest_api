'use strict';
/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');
module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('password123', 10);

    // Delete all rows before bulk inserting
    await queryInterface.bulkDelete('Users', null, {});

    // Reset auto increment value before bulk insert
    await queryInterface.sequelize.query(
      'ALTER TABLE Users AUTO_INCREMENT = 1;'
    );

    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'John Doe',
          email: 'john@example.com',
          password: hashedPassword,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Jane Smith',
          email: 'jane@example.com',
          password: hashedPassword,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});

    await queryInterface.sequelize.query(
      'ALTER TABLE Users AUTO_INCREMENT = 1;'
    );
  },
};
