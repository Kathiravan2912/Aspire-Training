var num1= document.getElementById("guess")
var box = document.getElementById("res")
var totscore=document.getElementById("score")
var score= 10
var RNum= Math.floor(Math.random()*10)+6
function check(){
   var Enum=num1.value
    if(Enum==RNum){
        // score=score+1
        box.textContent="You win"
        alert("yep..! you win")
    }
    else{
        score=score-1
        box.textContent="You lose"
        totscore.textContent="Score="+score
        alert("ahh..! you lose")
    }
}

// var RNum= Math.floor(Math.random()*10);
// console.log(RNum);