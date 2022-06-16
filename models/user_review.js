const Sequelize = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const user_review = sequelize.define("user_review", {
      review_num: { // 후기 번호
        type: Sequelize.INTEGER,
        unique: true,
        primaryKey: true
      },
      user_num: { // 산책로 이름
        type: Sequelize.STRING(45),
        allowNull: true
      },
      user_id: { // 사용자 아이디
        type: Sequelize.STRING(45),
        allowNull: true
      },
      star: { // 별점
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      like: { // 좋아요 수
        type: Sequelize.INTEGER(45),
        allowNull: true,
        defaultValue: 0
      },
      level: { // 난이도
        type: Sequelize.STRING(45),
        allowNull: true
      },
      title: { // 후기 제목
        type: Sequelize.STRING(45),
        allowNull: true
      },
      content: { // 후기 내용
        type: Sequelize.TEXT,
        allowNull: true
      }
  },
  {
      timestamps: false,
      underscored: false,
      modelName: 'user_review',
      tableName: 'user_review_table',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
    return user_review;
  }