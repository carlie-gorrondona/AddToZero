// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]
//let array = [1, 4, 11, 2, 37, -4];
//let array = [0, 1, 2, 3, 4, 5];
//let array = [1, 2, -2, 3, 4, 5];


// Write your solution below:

let addToZero = false;

for (let i = 0; i < array.length; i++) {

    for (let j = array.length-1; j >= 0; j--) {

        if (array[i] + array[j] === 0 && i !== j) {

            addToZero = true;
           
        } 

    }

}

console.log(addToZero);
