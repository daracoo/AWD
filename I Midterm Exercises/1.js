function dropUntil(array, predicate){
    const result = [];
    let add = false;
    for(const element of array){
        if(add !== true && predicate(element)){
            add = true;
        }
        if(add){
            result.push(element);
        }
    }
    return result;
}