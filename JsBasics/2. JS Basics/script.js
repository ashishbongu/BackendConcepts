let name;
Name="ashish";
console.log(Name);
Name+="bongu";
console.log(Name);

let age=10;
age+=20;
console.log(age);

setTimeout(() => {
    console.log('Am I first?');
  }, 0);
  
  function printData(data) {
    console.log('data');
  }
  
  // Assume this fetch request takes 200ms
  const futureData = fetch('https://jsonplaceholder.typicode.com/todos/1');
  
  futureData.then(printData);
  
  blockFor400ms();
  
  console.log('I am first!');