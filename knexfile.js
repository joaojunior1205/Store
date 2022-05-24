module.exports = { 
    client: 'postgresql',
    connection: {
      database: 'store',
      user:     'postgres',
      password: 'h2on2h2o'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
}