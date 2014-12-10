/*
var Websocket = require("ws").Server;
var cowsay = require("cowsay");
var server = new Websocket({port: 3000});
server.on("connection",function(ws)
{
  console.log("connected to client!");
  ws.on("message",function(message)
  {
  var moo=cowsay.say({text:message})
  ws.send(moo);
  })
})

//server on the browsers
var Websocket = require("ws").Server;
var cowsay = require("cowsay");
var server = new Websocket({port: 3000});
server.on("connection",function(ws)
{
  console.log("connected to client!");
  ws.on("message",function(message)
  {
    var moo=cowsay.say({text:message})
    ws.send(moo);
  })
})

var Websocket = require("ws").Server;
var server = new Websocket({port:3000});
var clients = [];
server.on("connection", function(ws){
  clients.push(ws);
  ws.on("close",function()
  {
    var x = clients.indexOf(ws);
    clients.splice(x,1);
  })
  console.log(ws);
  clients.forEach(function(client)
  {
    client.send("Sean has lots of Hair");
  })
})
*/
var Websocket = require("ws").Server;
var server = new Websocket({port:3000});
var clients = [];
server.on("connection", function(ws){
ws.on("message",function(message)
{
  console.log(message);
})
})
