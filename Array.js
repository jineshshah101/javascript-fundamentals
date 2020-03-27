// Arrays

let emperor = newArray('Whitebeard', 'Kaido', 'BigMom', 'Shanks');
window.alert(emperor);

// Read one part of an array based on the index

let Kaido = emperor[1];
window.alert(Kaido);

// Replacing the first element of an array with something else

let Blackbeard = emperor[0] = 'Blackbeard';
window.alert(Blackbeard);

// Showing all the elements of the array

for(let i = 0; i<emperor.length; i++){
    window.alert(emperor(i));
}

// Adding a string to the array

let emperorstring = ('emperors', emperor.toString());
window.alert(emperorstring);

// Joining elements of an array together with a symbol

let emperorjoin = emperor.join('*');
window.alert(emperorjoin);

// remove an element of an array the last element

let emperorpop = emperor.pop(), emperor;
window.alert(emperorpop);

// append an element to an array

let emperorpush = emperor.push('Luffy'), emperor;
window.alert(emperor);

// creating another array

let firstmate = newArray('Marco', 'King', 'Katakuri', 'Beckman');
window.alert(firstmate);

// Combining 2 arrays together

let crew = emperor.concat(firstmate);
window.alert(crew);

// Slicing the combined array to get part of the array

let crewslice = crew.slice(3,6);
window.alert(crewslice);

// Reverse the array

let crewreverse = crew.reverse();
window.alert(crewreverse);

// an array of numbers

let num = newArray(2, 5, 3, 10, 25, 23, 18, 30, 45, 40);
window.alert(num);

// sort numbers ascending order

let numascend = num.sort(function(a,b) {return a-b});
window.alert(numascend);

// sort numbers descending order

let numdescend = num.sort(function(a,b) {return b-a});
window.alert(numdescend);

// Adding elements to an empty array

let empty = newArray();
for(let a = 0; a <= 15; a++){
    empty.push(a);
}
window.alert(empty);