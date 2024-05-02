// Topic:classes in javascript.
// Author: Kathiravan A
// Created Date: 22.04.2024
// Last modified date: 22.04.2024
// Reviewed by: 
// Reviewed date:


class Student{
    constructor(){
        this.student="kathir";
        this.mark= 87;
    }
    result(){
        return console.log(`This is ${this.student} and the mark is ${this.mark}`);
    }
}

// let Student2 = new Student("Kathir", 89);
// Student2.result();