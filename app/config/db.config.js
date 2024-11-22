module.exports = {
  HOST: process.env.DB_HOST || "localhost",  // Read from DB_HOST env var, fallback to localhost
  USER: process.env.DB_USER || "root",      // Read from DB_USER env var, fallback to root
  PASSWORD: process.env.DB_PASSWORD || "",  // Read from DB_PASSWORD env var, fallback to empty string
  DB: process.env.DB_NAME || "testdb",      // Read from DB_NAME env var, fallback to testdb
  dialect: "mysql", 
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000

  }
};