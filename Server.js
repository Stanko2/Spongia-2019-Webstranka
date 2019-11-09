var express = require('express')
var app = express();
var http = require('http').Server(app);

app.use(express.static(__dirname));
app.get('/', function (req, res) {
    res.sendFile('d:/games/Spongia 2019/Webstranka/index.html');
});

http.listen(3000,'192.168.0.137')