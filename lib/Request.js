// LICENSE : MIT
"use strict";
(function (deps, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(deps, factory);
    }
})(["require", "exports"], function (require, exports) {
    var Request = (function () {
        function Request() {
        }
        Request.prototype.post = function (options) {
            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.open("post", options.url);
                xhr.onload = function () {
                    if (xhr.status === 200) {
                        resolve(xhr.responseText);
                    }
                    else {
                        reject(new Error(xhr.statusText));
                    }
                };
                xhr.send(options.body);
            });
        };
        return Request;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Request;
});
//# sourceMappingURL=Request.js.map