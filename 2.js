function add_to_agg(f){
    let args = "";
    return{
        insert: function(arg){
            args = f(args, arg);
        },
        result: function(){
            return args.length > 0 ? args : 0;
        },
    }
}
