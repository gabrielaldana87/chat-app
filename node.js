var Websocket = require("ws").Server;
var server = new Websocket({port:3000});
var clients = [];
var history = [];
var historymsg=history.join("\n");
var counter = 0;
server.on("connection", function(ws){

  clients.push(ws);
  var y = clients.indexOf(ws);
  usercontent = {position:y};
  var idmessage = JSON.stringify(usercontent);
  clients.forEach(function(client)
  {
    client.send(historymsg);
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
        if(i!=y)
          {
            clients[i].send(usercontent.name+": "+usercontent.lines);//check this line
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
