// Functions
// Functions are great way to organize code and have a specific part of the code do something

function Greet()
{
    window.alert("Hello");
}

// When a function is created it must be called

Greet();

// Functions can use string concatenation

function Sentence()
{
    var Character = prompt("Favorite Character?");
    window.alert(Character);
}

Sentence()

// Functions can have arguments inside of it
// Arguments are things that a function can only accept for that function to run properly.
// For example an arugment for a function could only be numbers

function sum(num1, num2)
{
    var Addition = num1 + num2;
    window.alert(Addition);
}

sum(15, 25)