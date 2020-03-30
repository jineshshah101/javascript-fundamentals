// if and else statements

var height = prompt('What is your height');

// If you height is between the specified range then you have great height
// Else it is out of range

if( (height >= 170) && (height <= 240) ){
    result = 'Solid Height!';
    console.log(result);
} else {
    result = 'Out of Range';
    console.log(result);
}

// Switch Statements

// switching between different facts
// 0 --> Fantastic character
// 3 --> Fantastic Main Character
// 5 --> Fantastic Villain
// 6 --> Horrible Character

switch(6){
    case 0:
        text = 'Roxas is a Fantastic Character';
        break;
    case 3:
        text = 'Ezio is a Fantastic Main Character';
        break;
    case 5:
        text = 'Ardyn is a Fantastic Villain';
        break;
    case 6:
        text = 'Natsu is a Horrible Character';
        break;
    default:
        text = 'Ventus is an Okay Character';
}

console.log(text);