"use strict";
import Request from "./Request"
const request = new Request();
request.post({
    url: "http://httpbin.org/post",
    body: "っっっっ"
}).then(res => {
    console.log(res);
}).catch(error => {
    console.error(error);
});