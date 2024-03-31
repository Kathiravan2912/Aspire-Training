//var String = "Employees";
//var RandomNum = String.charAt(Math.floor(Math.random()*10));
//console.log(RandomNum);



var word = document.getElementById('word').value;
var letter = document.getElementById('letter').value;
// var word = word1.value;
// var letter = letter1.value;
var length = word.length;
var randomLetter = word.charAt(Math.floor(Math.random() * length));
console.log(randomLetter);
var score = document.getElementById('score');
var score = 0;
var randomletter = document.getElementById('randomletter');

function CheckAlphabet() {
    if ((word == "") || (letter == "")) {
        alert("Enter the values!");
    }
    else if ((word == "") && (letter != "")) {
        alert("Enter the word!");
    } 
    else if ((word != "") && (letter == "")) {
        alert("Enter the letter!");
    }
    if (letter == randomLetter) {
        alert("You won...!");
        var score = score + 1;
    }
    else {
        alert("you lost...!");
        randomletter.textContent = "Random generated letter: "+ randomLetter;
    }
}