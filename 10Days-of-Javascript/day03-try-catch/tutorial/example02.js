'use strict'

const arr = [4, 3, 2, 5];

try {
    arr = [4, 2];
    console.log(arr.sort());
} 
catch (e) {
    console.log(e.message);
}
finally {
    console.log(arr.sort());
}