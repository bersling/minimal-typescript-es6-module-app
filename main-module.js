System.register(["./some-es6-module.js"], function(exports_1) {
    var some_es6_module_js_1;
    return {
        setters:[
            function (some_es6_module_js_1_1) {
                some_es6_module_js_1 = some_es6_module_js_1_1;
            }],
        execute: function() {
            console.log(some_es6_module_js_1.someVar);
        }
    }
});
