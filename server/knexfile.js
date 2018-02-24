// Update with your config settings.
const path = require('path')
module.exports = {

  development: {
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'kanban',
      password : 'password',
      database : 'react_kanban',
      charset: 'utf8'
    },
    migrations: {
      directory: path.join(__dirname + '/server/knex/migrations'),
    },
    seeds: {
      directory: path.join(__dirname + '/server/knex/seeds')
    },
    debug: true
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
