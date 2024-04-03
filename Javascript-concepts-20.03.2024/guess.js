var num1= document.getElementById("num")
var box = document.getElementById("check")
// var c= num.value="3"
function check(){
    var a= Number(num.value)
    if(a==3){
        box.textContent="You win"
    }
    else{
        box.textContent="You lose"
    }
}