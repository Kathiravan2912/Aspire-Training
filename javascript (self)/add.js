
var box1= document.getElementById("num1")
var box2=document.getElementById("num2")
var result=document.getElementById("result")

function totaladd(){
var value1= Number(num1.value)
var value2= Number(num2.value)
var tot = value1+value2
result.textContent="Result="+tot
}
function totalsub(){
    var value1= Number(num1.value)
    var value2= Number(num2.value)
    var tot = value1-value2
    result.textContent="Result="+tot
    }
function totalmul(){
    var value1= Number(num1.value)
    var value2= Number(num2.value)
    var tot = value1*value2
    result.textContent="Result="+tot
    }
function totaldiv(){
     var value1= Number(num1.value)
     var value2= Number(num2.value)
     var tot = value1/value2
     result.textContent="Result="+tot
     }