'use strict'

function throwString() {
    throw "some excepetion";
}
function throwMyError() {
    throw new Error("My error message!");
}

try {
    throwString();
} 
catch (e) {
    console.log(e);
}
try {
    throwMyError();
}
catch (e) {
    console.log(e.message);
}