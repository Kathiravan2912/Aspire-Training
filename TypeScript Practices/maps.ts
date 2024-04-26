// <!-- Topic: map using typescript.
// Author: Kathiravan A
// Created Date: 24.03.2024
// Last modified date: 26.03.2024
// Reviewed by: 
// Reviewed Date:
//  -->


var studentAges: Map<string, number> = new Map();
studentAges.set("kathir", 20);
studentAges.set("Balaji", 22);
studentAges.set("karan", 21);
console.log(studentAges.get("kathir")); 
console.log(studentAges.has("balaji")); 
studentAges.forEach((age, name) => {
    console.log(`${name} is ${age} years old`);
});
