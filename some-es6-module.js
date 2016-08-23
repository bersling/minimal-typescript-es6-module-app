System.register([], function(exports_1) {
    var someVar;
    return {
        setters:[],
        execute: function() {
            exports_1("someVar", someVar = "Hello World");
        }
    }
});
