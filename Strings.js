// Strings

let color = "purple";
window.alert(color);

// New Line for a string

var colornew = "purple\ngreen";
window.alert(colornew);

// Getting the length of a string

let colorlen = color.length;
window.alert(colorlen);

// Can search a string for a specific keyword and get the index of it

let colorind = color.indexOf('rp');
window.alert(colorind);

// Can get part of a string by slicing it

var colorsli = color.slice(2,4);
window.alert(colorsli);

// Can replace part of a string with something else

var colorrep = color.replace('pur', 'sam');
window.alert(colorrep);

// Make string uppercase

let colorupper = color.toUpperCase();
window.alert(colorupper);

// Make string lowercase

let colorlower = color.toLowerCase();
window.alert(colorlower);

// get a character of a string based off the index

let colorchar = color.charAt(3);
window.alert(colorchar);

// split a string its very useful for reading through csv files

var colorspl = color.split(',');
window.alert(colorspl);
