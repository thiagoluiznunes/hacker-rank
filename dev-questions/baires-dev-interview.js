const average = (x1, y1, x2, y2, x3, y3) => {
    let result;
    let x1Tox2 = Math.sqrt(((x2-x1)*2) + (y2-y1)*2); 
    let x2Tox3 = Math.sqrt(((x3-x2)*2) + (y3-y2)*2);
    let x1Tox3 = Math.sqrt(((x3-x1)*2) + (y3-y1)*2);

    result = (x1Tox2 + x2Tox3 + x1Tox3)/3;

    return result;
}

const isAlmostPalindrome = (s) => {
    let result;
    let splitString = s.split("");
    let reverseArray = splitString.reverse();
    let count = 0;
    let arraySize = splitString.length;
    
    for (let i = 0; i <= arraySize; i++) {
        if (splitString[i] != reverseArray[arraySize-1]) {
            count++;
        }
    }
    if (count > 1) {
        result = false;
    } 
    else {
        result = true;
    }
    return result;
}

const mostPopularNumber = (array, size) => {
    let most = 0;
    let position = 0;

    let bucket = new Array(size).fill(0);

    for (let i = 0; i <= array.length; i++) {
        bucket[array[i]]++;
        if (bucket[array[i]] > most) {
            most = bucket[array[i]];
            position = array[i];
        }
        else if (bucket[array[i]] == most) {
            if (array[i] < position) {
                most = bucket[array[i]];
                position = array[i];
            }
        }
    }
    return most;
}