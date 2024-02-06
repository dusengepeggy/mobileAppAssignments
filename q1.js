const colors = ['red', 'green', 'blue', 'yellow', 'orange'];
// Using the join() method, create a string that joins all elements of the colors array into a single string separated by commas.

var joined= colors.join();
console.log(joined);

// Apply the splice() method to remove the second and third elements from the colors array and replace them with 'purple' and 'pink'.
var spliceDemo = colors.splice(1,2,"purple","pink");
console.log(colors);

// Utilize the copyWithin() method to copy the elements from index 1 to index 3 within the colors array to index 0.
 var copyDemo = colors.copyWithin(0,1,3);
 console.log(colors);

// Finally, transform all elements of the colors array to uppercase using the toUpperCase() method.

for (let i = 0; i < colors.length; i++) {
    colors[i] = colors[i].toUpperCase();
    
}
console.log(colors);

// Apply the find() method to find the first element in the colors array that starts with the letter 'b'.
const color = ['red', 'green', 'blue', 'yellow', 'orange'];
 var foundcolor = color.find(ele=>ele.startsWith('b')||ele.startsWith('B'));
 console.log(foundcolor);

// Apply the slice() method to create a new array selectedColors containing the elements from index 1 to index 3 (inclusive) from the colors array.
 var sliceDemo = colors.slice(1,4);
 console.log(sliceDemo);

