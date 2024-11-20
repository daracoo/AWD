const sort_by_num_calls = function(funcs) {
    function countCalls(fn){
    	let count =0;
    	for(let result = fn; typeof result==='function'; result = result()) count++;
    	return count;
    }
    return funcs.sort((a, b) => countCalls(a) - countCalls(b));
};

/*
    function countCalls(fn) {
        let count = 0;
        let result = fn;
        while (typeof result === 'function') {
            result = result();
            count++;
        }
        return count;
*/