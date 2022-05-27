const Sequelize = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const trail = sequelize.define("user_trail", {
      user_tw_num: { // 산책로 번호
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      user_tw_name: { // 산책로 이름
        type: Sequelize.STRING(45),
        allowNull: false
      },
      user_id: { // 사용자 아이디
        type: Sequelize.STRING(45),
        allowNull: false
      },
      user_tw_geo: { // 지역
        type: Sequelize.STRING(45),
        allowNull: true
      },
      user_tw_pic: { // 사진
        type: Sequelize.STRING(1000),
        allowNull: true
      },
      theme: { // 테마1
        type: Sequelize.STRING(45),
        allowNull: false
      },
      theme2: { // 테마2
        type: Sequelize.STRING(45),
        allowNull: true
      },
      theme3: { // 테마3
        type: Sequelize.STRING(45),
        allowNull: true
      },
      star: { // 별점
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      like: { // 공감
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      start: { // 시작 지점
        type: Sequelize.STRING(45),
        allowNull: true
      },
      end: { // 끝지 지점
        type: Sequelize.STRING(45),
        allowNull: true
      },  
      map: { // 끝지 지점
        type: Sequelize.STRING(1000),
        allowNull: true
      }  
  },
  {
      timestamps: false,
      underscored: false,
      modelName: 'Trail',
      tableName: 'user_tw_table',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
    return trail;
  }