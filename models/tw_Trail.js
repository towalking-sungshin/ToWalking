const Sequelize = require('sequelize');

 

module.exports = (sequelize, Sequelize) => {

  const trail = sequelize.define("tw_trail", {

      tw_num: { // 산책로 번호

        type: Sequelize.INTEGER,

        allowNull: false,

        unique: true,

        primaryKey: true

      },

      tw_name: { // 산책로 이름

        type: Sequelize.STRING(45),

        allowNull: false

      },

      tw_geo: { // 지역

        type: Sequelize.STRING(45),

        allowNull: true

      },

      tw_pic: { // 사진

        type: Sequelize.STRING(1000),

        allowNull: true

      },

      tw_time: { // 시간

        type: Sequelize.INTEGER,

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

      map: { // 지도

        type: Sequelize.STRING(1000),

        allowNull: true

      }  

  },

  {

      timestamps: false,

      underscored: false,

      modelName: 'Trail',

      tableName: 'tw_table',

      paranoid: true,

      charset: 'utf8',

      collate: 'utf8_general_ci',

    });

    return trail;

  }