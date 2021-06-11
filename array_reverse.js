function arrayRotation(arr, d, n){
    let r = d%n;
    let j = 0;
    while (j < r){
        let removed = arr.shift();
        arr.push(removed);
        j++;
    }
    return arr;
}

array = [1, 2, 3, 4, 5];
console.log(arrayRotation(array, 9, 5));