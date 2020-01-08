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
console.log(numbers1);
console.log(typeof(numbers1));