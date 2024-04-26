var studentAges = new Map();
studentAges.set("Alice", 20);
studentAges.set("Bob", 22);
studentAges.set("Charlie", 21);
console.log(studentAges.get("Alice"));
console.log(studentAges.has("David"));
studentAges.forEach(function (age, name) {
    console.log("".concat(name, " is ").concat(age, " years old"));
});
