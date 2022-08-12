// Write your solution in this file!
let employee = {
    "name": "Kevin Kipkoech",
    "streetAddress": "15 Zumaridi Estate, Thika"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    let newNewEMployee = {...employee};
    delete newNewEMployee[key];
    return newNewEMployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}