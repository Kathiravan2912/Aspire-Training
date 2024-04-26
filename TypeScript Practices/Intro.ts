// <!-- Topic: Intro of typescript.
// Author: Kathiravan A
// Created Date: 23.03.2024
// Last modified date: 26.03.2024
// Reviewed by: 
// Reviewed Date:
//  -->

var studentName: string = "Kathiravan";
var studentAge: number = 22;
var isPresent: boolean = true;
var Subjects: string[] = ["DAA", "PQT","ML", "WT"];

function student(student: string): string {
    return `Hello, ${student}!`;
}

function subject(student: string): string {
    return `you need to study, ${Subjects}!`;
}

console.log(student(studentName)); 
console.log("your are "+ studentAge+ " old,"); 
console.log(subject(Subjects[2])); 
