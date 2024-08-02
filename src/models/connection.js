const { Pool } = require('pg');

const connection = new Pool({
    connectionString: 'postgresql://postgres:F1BWm7vDF1Ctbl1e@hesitantly-usable-koel.data-1.use1.tembo.io:5432/postgres?sslmode=verify-full&sslrootcert=ca.crt',
    ssl: true
});

module.exports = connection;