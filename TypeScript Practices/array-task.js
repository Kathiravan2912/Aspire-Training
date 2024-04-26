
var employeeTypes = ["Ajay", "Balaji", "chandru", "Ram", "Sam"];
console.log(employeeTypes[0]);
console.log(employeeTypes[1]);
console.log(employeeTypes[2]);
console.log(employeeTypes[3]);
employeeTypes.push("Kathir");
console.log("The new Students list is: " + employeeTypes);
employeeTypes.forEach(function (name) {
    console.log("The names of Student are : " + name);
});
var employeeTypes = ["Manager", "Assistent", "TeamHead", "Developers", "Security", "Sweepers", "Cleaners"];
console.log(employeeTypes[0]);
console.log(employeeTypes[1]);
console.log(employeeTypes[2]);
console.log(employeeTypes[4]);
console.log(employeeTypes[5]);
console.log(employeeTypes[6]);
employeeTypes.push("Drivers");
console.log("The new Employee list is: " + employeeTypes);
employeeTypes.forEach(function (post) {
    console.log("The types of Posts available are : " + post);
});
