"use strict";
exports.__esModule = true;
exports.pool = void 0;
var Pool = require('pg').Pool;
var poolConfig = process.env.DATABASE_URL ? {
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
} : {
    user: 'postgres',
    password: '123456',
    host: 'localhost',
    port: '5432',
    database: 'fl'
};
exports.pool = new Pool(poolConfig);
