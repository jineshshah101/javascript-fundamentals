console.log('Hello');

// Variables

var k = 'apple';
console.log(k);

var num = 50;
console.log(num);

// Can call html file
// Can change a value from html file directly from javascript file
// getElementById is where the javascript code can look for a piece from html file based on ID specifications

document.getElementById('cat').innerHTML = "Hello World";

// Prompt is where you ask the user for something to fill in the site
// That information is stored in the variable
// And it will be printed on html page due to document tab

var age = prompt("What is your age?");
document.getElementById('dog').innerHTML = age;