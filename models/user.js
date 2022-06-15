const Sequelize = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const user = sequelize.define("user", {
      user_id: { // 사용자 아이디
        type: Sequelize.STRING(45),
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      user_pw: { // 사용자 비밀번호
        type: Sequelize.STRING(45),
        allowNull: false
      },
      user_name: { // 사용자 닉네임
        type: Sequelize.STRING(45),
        allowNull: false
      },
  },
  {
      timestamps: false,
      underscored: false,
      modelName: 'User',
      tableName: 'user_table',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
    return user;
  }