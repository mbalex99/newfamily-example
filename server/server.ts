import express = require('express');
import path = require('path');
var engine = require('ejs-mate');
var port: number = process.env.PORT || 3000;
var app = express();

app.use('/client', express.static(path.resolve('./client')));
app.use('/node_modules', express.static(path.resolve('./node_modules')));

var renderIndex = (req: express.Request, res: express.Response) => {
    res.render(path.resolve('./client/index.html'));
}

app.get('/*', renderIndex);

var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('This express app is listening on %s', host, port);
});