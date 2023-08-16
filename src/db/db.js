const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATEBASE,
  port: process.env.DB_PORT,
  ssl: true
});
(async () => {
  await pool.connect();
  console.log('Database connected successfully');
})();

module.exports = pool;
