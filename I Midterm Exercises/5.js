function func(array){
    let resultEven = 0;
    let oddResult = 0;
    array.forEach(element => {
        if(element % 2 === 0){
            resultEven += element;
        }else{
            oddResult += element;
        }
    });
    let result = resultEven - oddResult;
    return Math.abs(result);
}

console.log( func([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243]) )