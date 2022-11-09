const Sequelize = require('sequelize');
const db = require('../config/database');

const User = db.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true  
  }, 
  username: {
    type: Sequelize.STRING
  },
  githubId: {
    type: Sequelize.INTEGER
  },
  avatarUrl: {
    type: Sequelize.STRING
  },
  role: {
    type: Sequelize.STRING
  }

});

User.sync({force: true}).then(() => {
  console.log('User table up to date')
});



module.exports = User;

// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('./database');

// class User extends Model {};

// User.init({
//   username: {
//     type: DataTypes.STRING
//   },
//   email: {
//     type: DataTypes.STRING
//   },
//   password: {
//     type: DataTypes.STRING
//   }
// }, {
//   sequelize,
//   modelName: 'user',
//   timestamps: false
// })

// module.exports = User;