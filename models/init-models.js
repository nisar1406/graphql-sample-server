var DataTypes = require("sequelize").DataTypes;
var _department = require("./department");
var _designation = require("./designation");
var _employee = require("./employee");

function initModels(sequelize) {
  var department = _department(sequelize, DataTypes);
  var designation = _designation(sequelize, DataTypes);
  var employee = _employee(sequelize, DataTypes);

  employee.belongsTo(department, { foreignKey: "id"});
  department.hasMany(employee, { foreignKey: "Department_id"});

  return {
    department,
    designation,
    employee,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
