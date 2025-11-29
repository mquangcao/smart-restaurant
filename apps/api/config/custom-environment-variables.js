require('dotenv').config();

const number = name => ({ __name: name, __format: 'number' });
const boolean = name => ({ __name: name, __format: 'boolean' });

module.exports = {
  port: number('PORT'),
  appName: 'APP_NAME',
  allowOriginUrl: 'ALLOW_ORIGIN_URL',
  core: {
    database: {
      type: 'CORE_DATABASE_TYPE',
      host: 'CORE_DATABASE_HOST',
      port: number('CORE_DATABASE_PORT'),
      username: 'CORE_DATABASE_USERNAME',
      password: 'CORE_DATABASE_PASSWORD',
      dbName: 'CORE_DATABASE_DB_NAME',
      synchronize: boolean('CORE_DATABASE_SYNCHRONIZE'),
    },
  },
};
