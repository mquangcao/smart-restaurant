module.exports = {
  port: 3008,
  appName: 'ia06',
  allowOriginUrl: 'http://localhost:5173',
  core: {
    database: {
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'postgres',
      dbName: 'postgres',
      synchronize: false,
      logging: false,
    },
  },
  token: {
    secret: 'your_jwt_secret_key',
    expiresIn: 3600, // in seconds
  },
};
