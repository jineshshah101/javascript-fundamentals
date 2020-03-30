// Objects in Javascript

// Character is an object

let character = {
    first: 'Edward',
    last: 'Newgate',
    age: 72,
    bounty: '5,046,000,000',
    rank: 'Emperor',

    // This is an example of object oriented programming

    characterInfo: function(){
        return this.first + '\n' + this.last + '\n' + this.bounty;
    }
}

// To access properties of an object

console.log(character.age);
console.log(character.rank);

// To access object oriented programming

console.log(character.characterInfo());