(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

},{"./Request":1}]},{},[2]);
