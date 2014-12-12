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

var Websocket = require("ws").Server;
var server = new Websocket({port:3000});
var clients = [];
server.on("connection", function(ws){
ws.on("message",function(message)
{
  console.log(message);
})
})



var Websocket = require("ws").Server;
var server = new Websocket({port:3000});
var clients = [];
server.on("connection", function(ws){
  clients.push(ws);
  clients.forEach(function(client)
  {
    client.send("Client connected!");

  //  setInterval(function(ws){
  //  client.send("Hello!");
  //  },3000)

  })
  console.log(clients.length+" clients are in the room");
  ws.on("message",function(message)
  {
    console.log(message);
    var y = clients.indexOf(ws);
    for (i=0;i<clients.length;i++)
      {
        if(i!=y)
          {
        clients[i].send(message);
          }
      }
  })
  ws.on("close",function()
  {

    var x = clients.indexOf(ws);
    clients.splice(x,1);
    console.log(clients.length+" clients are  still in the room");
    clients.forEach(function(client)
    {
      client.send("Oh no someone left!");

    })
  })
})
*/


var Websocket = require("ws").Server;
var server = new Websocket({port:3000});
var clients = [];
var history = [];
var counter = 0;
server.on("connection", function(ws){
  clients.push(ws);
  var y = clients.indexOf(ws);
  usercontent = {position:y};
  var idmessage = JSON.stringify(usercontent);
  ws.send(idmessage);
  clients.forEach(function(client)
  {
    client.send("Client connected!");
    counter += 1;
  })
  console.log(clients.length+" clients are in the room");
  ws.on("message",function(message)
  {
    var usercontent = JSON.parse(message);
    history.push(usercontent.name+": "+usercontent.lines);
    console.log(usercontent.name+": "+usercontent.lines);
    //usercontent["position"]=y;
    for (i=0;i<clients.length;i++)
      {
        //  if(i!=y)
        //    {
        clients[i].send(usercontent.name+": "+usercontent.lines);//check this line
        //      }
      }
    })
    var historymsg=history.join("\n");
    ws.send(historymsg);

    ws.on("close",function()
    {
      var x = clients.indexOf(ws);
      clients.splice(x,1);
      console.log(clients.length+" clients are  still in the room");
      clients.forEach(function(client)
      {
        client.send("Oh no someone left!");
      })
    })
  })
