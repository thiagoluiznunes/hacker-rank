'use strict'

const ex = {
    a: 1,
    b: 2,
    c: 3
};

for (let p in ex) {
    console.log(p + ':' + ex[p]);
}