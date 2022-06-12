const Sequelize = require('sequelize');

module.exports = (sequelize, Sequelize) => {

  const tw_like = sequelize.define("tw_like", {
      id: { // 기본키
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      tw_num: { // 산책로 번호
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      user_id: { // 사용자 아이디
        type: Sequelize.STRING(45),
        allowNull: false,
      }
  },
  {
      timestamps: false,
      underscored: false,
      modelName: 'tw_like',
      tableName: 'tw_like_table',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
    return tw_like;
  }