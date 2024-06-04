// Topic: collections
// Author : Kathiravan A
// created date: 31.05.2024
// last modified date: 03.06.2024

let students = {
    "01": { name: "Ajay", age: 20, Department: "Computer Science", grades: [90, 85, 88] },
    "02": { name: "Bharath", age: 21, Department: "Mathematics", grades: [78, 82, 80] }
};

let enrolledStudents = ["01", "02"];


let studentIds = new Set(["01", "02"]);


let newStudentId = "03";
if (!studentIds.has(newStudentId)) {
    studentIds.add(newStudentId);
    students[newStudentId] = { name: "Kathir", age: 22, Department: "Physics", grades: [85, 87, 90] };
    enrolledStudents.push(newStudentId);
}


let registrationQueue = ["01", "03"];
registrationQueue.push("02");   


while (registrationQueue.length > 0) {
    let studentId = registrationQueue.shift();
    console.log(`Processing registration for ${students[studentId].name}`);
}

let recentProfiles = ["01", "02"];
recentProfiles.push("03");
let lastAccessed = recentProfiles.pop();
console.log(`Last accessed profile: ${students[lastAccessed].name}`);
