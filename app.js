//alert("Hello from APPJS File!");
const name = "Julia";
const age = 34;
const city = "Tallinn";
const job = "Junior Software Developer";

console.log('Name: ', name, typeof(name));
console.log('Age:', age, typeof(age));

function hello(){
    console.log("Hello!");
}
//hello();

//create an unordered list ES5
//let html = '<ul><li>Name:' + name + '</li><li>Age:'+ age + '</li></ul>';


//Template Literal ES6
let html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>City: ${city}</li>
        <li>Occupation: ${job}</li>
    </ul>
`;

document.body.innerHTML = html;

//Arrays
const numbers1 = [1, 2, 3, 4, 5];
console.log(typeof(numbers1));
//add an element to the end of the array
numbers1.push(6);
//add an element to the beginning of the array
numbers1.unshift(0);

//remove the last element of an array
let removedElement = numbers1.pop();
console.log('Removed element: ', removedElement);
//remove the first element of an array
numbers1.shift();
//remove an element from a certain position using SPLICE()
let splicedElement = numbers1.splice(2, 1);
console.log(numbers1);
console.log('Spliced element: ', splicedElement);
//search for an element with a ceetain value
let index = numbers1.indexOf(10);
console.log(index);

let mixedArray = [22, 'banana', true];
//forEach loop
mixedArray.forEach(element=>{
    console.log(element, typeof(element));
});