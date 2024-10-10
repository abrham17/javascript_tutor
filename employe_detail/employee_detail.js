const array = [
    { id: 1, name: 'Abrhame', department: 'CS', salary: 12000 },
    { id: 2, name: 'Leul', department: 'HR', salary: 13000 },
    { id: 3, name: 'Yohanes', department: 'HR', salary: 14000 },
    { id: 4, name: 'Yonas', department: 'EN', salary: 15000 },
];

function displayEmployee() {
    const allEmployee = array.map(employee => 
        `Employee ID: ${employee.id} - Name: ${employee.name} - Department: ${employee.department} - Salary: $${employee.salary}`
    ).join('<br>'); 
    document.getElementById('employeedisplay').innerHTML = allEmployee;
}

function calculateTotalSalaries() {
    const totalSalaries = array.reduce((total, employee) => total + employee.salary, 0);
    document.getElementById('employeedisplay').innerHTML = `Total Salaries: $${totalSalaries}`;
}

function displayHREmployee() {
    const hrEmployee = array
        .filter(employee => employee.department === 'HR')
        .map(employee => 
            `Employee ID: ${employee.id} - Name: ${employee.name} - Department: ${employee.department} - Salary: $${employee.salary}`
        ).join('<br>');
    document.getElementById('employeedisplay').innerHTML = hrEmployee;
}

function findEmployeeById() {
    id = parseInt(document.getElementById('employeeidinput').value)
    const employee = array.find(employee => employee.id === id);
    if (employee) {
        document.getElementById('employeedisplay').innerHTML = 
            `Employee ID: ${employee.id} - Name: ${employee.name} - Department: ${employee.department} - Salary: $${employee.salary}`;
    } else {
        alert('No employee with the given ID found.');
    }
}

function addNewEmployee() {
    const id = parseInt(document.getElementById('newEmployeeId').value);
    const name = document.getElementById('newEmployeeName').value;
    const department = document.getElementById('newEmployeeDepartment').value;
    const salary = parseInt(document.getElementById('newEmployeeSalary').value);

    if (array.some(employee => employee.id === id)) {
        alert('Employee with this ID already exists.');
        return;
    }

    array.push({ id, name, department, salary });
    
    document.getElementById('newEmployeeId').value = '';
    document.getElementById('newEmployeeName').value = '';
    document.getElementById('newEmployeeDepartment').value = '';
    document.getElementById('newEmployeeSalary').value = '';

    displayEmployee();
}
