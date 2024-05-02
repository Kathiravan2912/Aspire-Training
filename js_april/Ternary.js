// Topic: Ternary operator in javascript.
// Author: Kathiravan A
// Created Date: 22.04.2024
// Last modified date: 22.04.2024
// Reviewed by: 
// Reviewed date:

var student = "Enrolled"
var StudentReport = student=="Enrolled" ? "Continue to perform programming better": "Please Enroll the course"
console.log(StudentReport);

//Mark report using ternary operator
var mark = 46;
var StudentMark = mark>90?"A" 
: mark>79?"B"
: mark>69?"C"
: mark>59?"D"
: mark>49?"E"
:"REAPPEAR"
console.log("Grade of Student: "+StudentMark);

var player1 = Math.floor(Math.random()*10);
var player2 = Math.floor(Math.random()*10);

var winner = player1>player2? "Player 1"
: player2>player1? "Player 2"
: player1===player2? "Match tie"
: "not played";

console.log("Winner is :"+ winner);