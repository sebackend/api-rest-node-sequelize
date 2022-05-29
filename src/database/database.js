import Sequelize from 'sequelize'

export const sequelize = new Sequelize('nodejs_db', 'sebastian', '123123123', {
  host: 'localhost',
  dialect: 'postgres',
})
