require('dotenv').config();

module.exports = {
  local: {
    username: 'root',
    password: 'password',
    database: 'noblecraft_app',
    host: 'localhost',
    dialect: 'mysql',
    define: {
      timestamps: false,
    },
  },
  development: {
    host: process.env.DB_HOSTNAME,
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dialect: 'mysql',
    define: {
      timestamps: false,
    },
  },
  production: {
    host: process.env.DB_HOSTNAME,
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dialect: 'mysql',
    use_env_variable: 'DATABASE_URL',
    define: {
      timestamps: false,
    },
  },
};
