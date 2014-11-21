var express = require('express');
var path = require('path');
var app = module.exports.app = exports.app = express();


app.get("*", function (req, res, next) {
    console.log('GET ' + req.originalUrl);
    next();
});

app.get("/navigation/:id", function(req, res) {
    res.send({title:"navitem", id:req.param('id'), pageType:"nav", items:[{title: "item 1", id: 1, pageType: 'nav'}, {title: "item 2", id: 2, pageType: 'nav'}, {title: "item 3", id: 3, pageType: 'nav'}, {title: "item 4", id: 4, pageType: 'content'}]});
});

app.get("/content/:id", function(req, res) {
    res.send({title:"contentitem", id:req.param('id'), pageType:"content", content:"arsoteinaioresnteioanriotnarsient"});
});

app.use(express.static(path.join(__dirname, 'app')));

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
