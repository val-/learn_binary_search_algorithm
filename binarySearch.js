function binarySearch(value, list) {

    let left = 0;
    let right = list.length - 1;
    let result = -1;
    let found = false;
    let middle;
    let loopCount = 0;
 
    while (!found && left <= right) {
        middle = Math.floor((left + right)/2);
        if (list[middle] === value) {
            found = true;
            result = middle;
        } else if (list[middle] > value) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
        loopCount++;
    }

    console.log('List length: ', list.length);
    console.log('Loop count: ', loopCount);
    

    return {
        result,
        loopCount
    };

}


module.exports = binarySearch;
