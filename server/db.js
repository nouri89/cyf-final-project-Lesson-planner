const { Pool } = require('pg')

let pool;
let config;

if (process.env.DATABASE_URL) { //it's set in Heroku
  const connectionString = process.env.DATABASE_URL
  config = {
    connectionString: connectionString,
    sslmode: require,
    ssl: {
      rejectUnauthorized: false
    }
  }
} else { //default local config
  config = {
    host: 'localhost',
    user:'Owner', //'ALI HAIDER',
    database: 'class_planner',
    password: '12345',
    port: 5432
  }
}
pool = new Pool(config)  

exports.Connection = pool
/*
const { Pool } = require('pg')

let pool;
let config;

if (process.env.DATABASE_URL) { //it's set in Heroku
  const connectionString = process.env.DATABASE_URL
  config = {
    connectionString: connectionString,
    sslmode: require,
    ssl: {
      rejectUnauthorized: false
    }
  }
} else { //default local config
  config = {
    host: 'localhost',
    user:'Owner', //'ALI HAIDER',
    database: 'class_planner',
    password: '12345',
    port: 5432
  }
}
pool = new Pool(config)  

exports.Connection = pool
*/