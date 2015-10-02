"use strict";
(function (deps, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(deps, factory);
    }
})(["require", "exports", "./Request"], function (require, exports) {
    var Request_1 = require("./Request");
    var request = new Request_1.default();
    request.post({
        url: "http://httpbin.org/post",
        body: "っっっっ"
    }).then(function (res) {
        console.log(res);
    }).catch(function (error) {
        console.error(error);
    });
});
//# sourceMappingURL=index.js.map