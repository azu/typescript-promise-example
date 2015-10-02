// LICENSE : MIT
"use strict";
export interface RequestPostOptions {
    url: string;
    body: string;
}
export interface RequestPostResponse {
    string;
}
export default class Request {
    post(options: RequestPostOptions): Promise<RequestPostResponse> {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open("post", options.url);
            xhr.onload = function () {
                if (xhr.status === 200) {
                    resolve(xhr.responseText)
                } else {
                    reject(new Error(xhr.statusText));
                }
            };
            xhr.send(options.body);
        });
    }
}