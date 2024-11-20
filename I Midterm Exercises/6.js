 function wait(f){
    let args = [];
    return{
        add: function(arg){
            args.push(arg);
        },
        remove: function(arg){
            let index = args.indexOf(arg);
            if(index>-1){
                args.splice(index, 1);
            }
        },
        calc: function(){
            return args.length > 0 ? f(args) : 0;
        } 
    }
}