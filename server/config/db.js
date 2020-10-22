const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    passsword: "admin",
    host: "localhost",
    port: 5432,
    database: "cuponera"
});

module.exports = pool;
