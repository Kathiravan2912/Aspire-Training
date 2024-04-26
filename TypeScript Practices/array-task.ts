// <!-- Topic: array using typescript.
// Author: Kathiravan A
// Created Date: 24.03.2024
// Last modified date: 26.03.2024
// Reviewed by: 
// Reviewed Date:
//  -->


var employeeTypes: string[] = ["Ajay", "Balaji", "chandru", "Ram", "Sam"];
console.log(employeeTypes[0]);
console.log(employeeTypes[1]);
console.log(employeeTypes[2]);
console.log(employeeTypes[3]);
employeeTypes.push("Kathir");
console.log("The new Students list is: "+ employeeTypes);
employeeTypes.forEach(name => {
    console.log("The names of Student are : "+name);
});


var employeeTypes: string[] = ["Manager", "Assistent", "TeamHead", "Developers", "Security", "Sweepers", "Cleaners"];
console.log(employeeTypes[0]);
console.log(employeeTypes[1]);
console.log(employeeTypes[2]);
console.log(employeeTypes[4]);
console.log(employeeTypes[5]);
console.log(employeeTypes[6]);
employeeTypes.push("Drivers");
console.log("The new Employee list is: "+ employeeTypes);
employeeTypes.forEach(post => {
    console.log("The types of Posts available are : "+post);
});