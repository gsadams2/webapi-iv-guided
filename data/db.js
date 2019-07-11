const knex = require("knex");

const dbEnvironment = process.env.DATABASE_URL || "development";

const config = require("../knexfile.js").development;

module.exports = knex(config[dbEnvironment]);
