const {
  department, designation, employee
} = require('../models');

const Query = {
  getDepartments: async (root) => {
    try {
      const departments = await department.findAll();
      return departments;
    } catch (err) {
      console.log(err);
    }
  },
  getDepartment: async (root, { id }) => {
    try {
      const dept = await department.findByPk(id)
      return dept;
    } catch (err) {
      console.log(err);
    }
  },
  getDepartmentByName: async (root, { name }) => {
    try {
      const dept = await department.findOne({ where: { name } })
      return dept;
    } catch (err) {
      console.log(err);
    }
  },

  getDesignations: async () => {
    try {
      const designations = await designation.findAll();
      return designations;
    } catch (err) {
      console.log(err);
    }
  },
  getDesignation: async (root, { id }) => {
    try {
      const design = await designation.findByPk(id)
      return design;
    } catch (err) {
      console.log(err);
    }
  },
  getDesignationById: (root, { id }) => {
    const data = [];
    try {
      id.map(async element => {
        asdf = await designation.findByPk(element)
        await data.push(asdf)
        console.log(data);
        return data;
      });
    } catch (err) {
      console.log(err);
    }
  },

  getEmployeeDetails: async () => {
    try {
      const employees = await employee.findAll();
      return employees;
    } catch (err) {
      console.log(err);
    }
  },

  getEmployeeDetail: async (root, { id }) => {
    try {
      const emp = await employee.findByPk(id)
      return emp;
    } catch (err) {
      console.log(err);
    }
  },
}

const Mutation = {
  createDepartment: (root, { name }) => {
    return department.create({ name })
  },
  updateDepartment: async (root, { id, name }) => {
    const department = await department.update({ name }, { where: { id } });
    let message;
    if (department) message = "Department updated successfully"
    else message = "Cannot find the department."
    return message
  },
  deleteDepartment: async (root, { id }) => {
    const department = await department.destroy({ where: { id } });
    let message;
    if (department) message = "Department deleted successfully"
    else message = "Cannot find the department."
    return message
  },
  createDesignation: (root, { name }) => {
    return designation.create({ name })
  },
  updateDesignation: async (root, { id, name }) => {
    const designation = await designation.update({ name }, { where: { id } });
    let message;
    if (designation) message = "Designation updated successfully"
    else message = "Cannot find the designation."
    return message
  },
  deleteDesignation: async (root, { id }) => {
    const designation = await designation.destroy({ where: { id } });
    let message;
    if (designation) message = "Designation deleted successfully"
    else message = "Cannot find the designation."
    return message
  },
  createEmployee: async (root, {
    Name,
    Email,
    Designation_id,
    Department_id,
    Manager_id
  }) => {
    try {
      await employee && employee.create({
        Name,
        Email,
        Designation_id,
        Department_id,
        Manager_id
      })
      return "Employee created successfully"
    } catch (err) {
      console.log(err)
    }
  },
  updateEmployee: async (root, {
    id,
    Name,
    Email,
    Designation_id,
    Department_id,
    Manager_id
  }) => {
    try {
      await employee && employee.update({
        Name,
        Email,
        Designation_id,
        Department_id,
        Manager_id
      }, { where: { id: id } });
      return "Employee updated successfully";
    } catch (err) {
      console.log(err)
    }
  },
  deleteEmployee: async (root, { id }) => {
    await employee.destroy({ where: { id: id } })
    return "Employee updated successfully";
  }
}

const Employee = {
  department: (emp) => department.findByPk(emp.Department_id),
  designation: (emp) => designation.findByPk(emp.Designation_id),
  manager: (emp) => employee.findByPk(emp.Manager_id)
}

module.exports = { Query, Mutation, Employee }