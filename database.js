const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
    ssl: {
    rejectUnauthorized: false, // You might want to import the CA cert instead of using rejectUnauthorized
    require: true
  }
});

module.exports = pool;
