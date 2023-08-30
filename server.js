let fs = require('fs');
let http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

let server = http.createServer(function(req, res){
    res.statusCode = 200;

    if(req.url=='/'){
        let data = fs.readFileSync('home.html');
        res.end(data);
    }
    else if(req.url=='/about'){
        let data = fs.readFileSync('about.html','utf8');
        res.end(data);
    }
    else if(req.url=='/contact'){
        let data = fs.readFileSync('contact.html');
        res.end(data);
    }
    else if(req.url=='/file-write'){
        let error = fs.writeFileSync('demo.txt','Hello World');
        if(error){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write("The File Run Fail!");
            res.end();
        }
        else{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write('The File Run Success');
            res.end();
        }
    }
    else {
        res.end("404 not found")
    }
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});