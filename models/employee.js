/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employee', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Designation_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Manager_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Department_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'department',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'employee',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "id_idx",
        using: "BTREE",
        fields: [
          { name: "Department_id" },
        ]
      },
      {
        name: "id_idx1",
        using: "BTREE",
        fields: [
          { name: "Designation_id" },
        ]
      },
    ]
  });
};
