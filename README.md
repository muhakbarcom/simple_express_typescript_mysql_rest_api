# Simple REST API

## Tech Stack:

- Express (TypeScript)
- MySQL

## Requirements:

1. Node.js
2. NPM
3. TypeScript

## How To Run:

1. Open terminal.
2. Run command `cp .env.example .env` to copy Environment variables.
3. Set up your configuration in the `.env` file.
4. Create a MySQL database with the desired name.
5. Run Sequelize migration by executing the command `"npx sequelize-cli db:migrate"`.
6. Run Sequelize seeder by executing the command `"npx sequelize-cli db:seed:all"`.
7. Run command `npm install` to install all dependencies.
8. Run command `npm run dev` to start the application.
9. Access `/api-docs` to see Swagger API documentation.
10. Create Users (`/users/register`).
11. Hit the endpoint `/users/login` using the new user you created.
12. Click the "Authorize" button on the top right of the page.
13. Input the token you received from `/users/login`.
14. Enjoy exploring the other APIs! :)
