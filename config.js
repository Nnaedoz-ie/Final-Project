// config.js

module.exports = {
  dbHost: process.env.DB_HOST,       // Database host
  dbUser: process.env.DB_USER,       // Database username
  dbPassword: process.env.DB_PASSWORD,// Database password
  dbName: process.env.DB_NAME,       // Database name
  apiKey: process.env.API_KEY,       // Any other API keys you may need
  port: process.env.PORT || 5000      // Port for the server, defaulting to 5000
};
