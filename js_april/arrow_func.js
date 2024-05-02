function greet(name) {
    return "Hello, " + name + "!";
  }
  

  const greetArrow = (name) => {
    return `Hello, ${name}!`;
  };
  

  const greetShort = name => `Hello, ${name}!`;
  
  console.log(greet("Kathir"));       
  console.log(greetArrow("Balaji"));    
  console.log(greetShort("Chandru"));

  const double = x => x * 2;
  const triple = x => x * 3;
  
  const applyOperation = (value, operation) => operation(value);
  console.log(applyOperation(5, double));  
  console.log(applyOperation(5, triple));  
// in arrays
  const numbers = [1, 2, 3, 4, 5];
  
  const doubledNumbers = numbers.map(x => x * 2);
  console.log(doubledNumbers);  
  
  // objects
  const person = {
    firstName: "kathiravan",
    lastName: "A",
    fullName: () => {
      return `${person.firstName} ${person.lastName}`;
    },
  };
  
  console.log(person.fullName());  
  