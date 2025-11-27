require('dotenv').config();

const number = name => ({ __name: name, __format: 'number' });

module.exports = {
  port: number('PORT'),
  appName: 'APP_NAME',
  allowOriginUrl: 'ALLOW_ORIGIN_URL',
};
