var Websocket = require("ws").Server;
var server = new Websocket({port:2000});
var clients = [];
var history = [];
var users = [];
var counter = 0;

server.on("connection", function(ws)
  {
  clients.push(ws);
  var y = clients.indexOf(ws);
  usercontent = {type:"servermsg",position:y};
  var idmessage = JSON.stringify(usercontent);
  ws.send(idmessage);
  clients.forEach(function(client)
    {
    client.send("Client connected!");
    counter += 1;
    var historymsg=history.join("\n");
    ws.send(historymsg);
    })

    console.log(clients.length+" clients are in the room");

    ws.on("message",function(message)
      {
      var usercontent = JSON.parse(message);

      if(usercontent.type==="openmessage")
        {
          users.push(usercontent.name);
          usercontent["type"] = "servermsg";
          usercontent["position"] = y;
          usercontent["usersList"] = users;
          var usersList = JSON.stringify(usercontent);
          ws.send(usersList);
        }

      if(usercontent.type==="usermessage")
        {
          history.push(usercontent.name+": "+usercontent.lines);
          usercontent["type"] = "clientmsg";
          usercontent["history"] = history;
          var justMessage = JSON.stringify(usercontent);

           for (i=0;i<clients.length;i++)
              {
                //usercontent["type"] = "clientmsg";
                  if(i!=y)
                    {
                    //clients[i].send(usercontent.name+": "+usercontent.lines);//check this line
                    clients[i].send(justMessage);
                    }
              }
        };
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
