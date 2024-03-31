var qoute = "Have a good day peeps...!";
// var userInput = prompt("Please enter the quote:");
// if(userInput === 1){
//     console.log(qoute);
// }
// else{
//     console.log("no qoutes!");
// }
 
var fruits = ["orange", "kiwi", "mango"];
fruits.map((friut) => {
    console.log(friut);
})


var products=["mobilephone","laptop","keychain","dolls","charger"]
products.map((product)=>{

   console.log(product)

})
var productDescription=[

{
   pid:"P101",
   pName:"Samsung F5",
   price:13000
},
{
   pid:"P102",
   pName:"Samsung F9",
   price:26000
},
{
   pid:"P103",
   pName:"OPPO F5",
   price:12000
}

]

 productDescription.map((product,index)=>{
   console.log(" Description of Product No:"+(index+1))
   console.log(product.pid);
   console.log(product.pName);
   console.log(product.price);

})



let employees = [];


employees.push({id: "A", name: 'John', age: 30});
employees.push({id: "B", name: 'Alice', age: 25});
employees.push({id: "C", name: 'Bob', age: 35});
employees.map((employees,index) => {
   console.log(index+1);
console.log(employees.id +" "+ employees.name +" "+ employees.age);
console.log(employees.name);
console.log(employees.age);
})
