var studentName = "Kathiravan";
var studentAge = 22;
var isPresent = true;
var Subjects = ["DAA", "PQT", "ML", "WT"];
function student(student) {
    return "Hello, ".concat(student, "!");
}
function subject(student) {
    return "you need to study, ".concat(Subjects, "!");
}
console.log(student(studentName));
console.log("your are " + studentAge + " old,");
console.log(subject(Subjects[2]));
