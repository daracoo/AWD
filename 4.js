function group(array, len) {
    const numOfArrays = Math.ceil(array.length / len);
    let emptyArrays = Array.from({ length: numOfArrays }, () => []);
    
    for(let i = 0; i<array.length; i++) {
        emptyArrays[Math.floor(i % numOfArrays)].push(array[i]);
    }
    
    return emptyArrays;
}