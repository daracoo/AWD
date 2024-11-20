function arrayPartition(array){
    if(array.length === 0) return [];

    const partitions = [];
    for(let i=0;i<array.length;i++){
        const left = array.slice(0, i+1);
        const right = array.slice(i+1);
        partitions.push([left, right]);
    }

    return partitions;
}