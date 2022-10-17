let http = require('http');
let url = require('url');

let {random} = require('lodash');

let {add, sub} = require('./compute');

//http://localhost:1234/add?x=10&y=5
let server = http.createServer((request, response) => {
    let pathname = url.parse(request.url).pathname;
    let query = url.parse(request.url, true).query;

    if(pathname === '/add'){
        let x = parseInt(query['x']);
        let y = parseInt(query['y']);
        response.end(add(x,y).toString());
    }else if(pathname === '/sub') {
        let x = parseInt(query['x']);
        let y = parseInt(query['y']);
        response.end(sub(x,y).toString());
    }else{
        response.end(random(1,100).toString());
    }
})

server.listen(1234, () => console.log("server started"));