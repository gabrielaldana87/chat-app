/*
var Websocket = require("ws");
var cowsay = require("cowsay");
var ws = new Websocket("ws://localhost:3000");
ws.on("open",function()
{
  console.log("connected to server");
  ws.on("message",function(message)
  {
    var moo=cowsay.say({text:message})
    ws.send(moo);
  })
})


//client on the browser

var ws = new Websocket("ws://localhost:3000");
var addText = function(msg)
{
    var newLi = document.createElement("li");
    newLi.innerText=msg;

    var ul = document.createElement("ul");
    var FirstLi = ul.firstChild;
    ul.insertBefore(newLi,FirstLi);
}
ws.addEventListener("open",function(evt)
{
  addText('connected');
});

ws.addEventListener("message",function(evt){

  addText(evt.data);
});
*/
/*
var ws = new WebSocket("ws://localhost:3000");

ws.addEventListener("open", function(evt) {
console.log('connected');
document.write("connected...<br>")
});

ws.addEventListener("message", function(evt) {
console.log(evt.data);
document.write(evt.data + "<br>");
});



var ws = new WebSocket("ws://localhost:3000");
var ul = document.createElement("ul");
var body = document.querySelector("body");
var input = document.createElement("input");
body.appendChild(ul);

var addText = function(msg)
{
  var newLi = document.createElement("li");
  newLi.innerText=msg;
  var FirstLi = ul.firstChild;
  ul.insertBefore(newLi,FirstLi);
}
ws.addEventListener("open",function(evt)
{
  addText('connected');

});

ws.addEventListener("message",function(evt){
  addText(evt.data);
});



var ws = new WebSocket("ws://localhost:3000");
var ul = document.createElement("ul");
var body = document.querySelector("body");
var input = document.createElement("input");
var div = document.createElement("div");
body.appendChild(input);
body.appendChild(div);
div.appendChild(input);
var button = document.createElement("button");
div.appendChild(button);
button.innerText="Submit";
body.appendChild(ul);



var addText = function(msg)
{
  var newLi = document.createElement("li");
  newLi.innerText=msg;
  var FirstLi = ul.firstChild;
  ul.insertBefore(newLi,FirstLi);
}
ws.addEventListener("open",function(evt)
{
  addText('connected');

});

ws.addEventListener("message",function(evt){
  addText(evt.data);

  var lit = document.querySelectorAll("li");
  for (i=0;i<lit.length;i++)
    {
  lit[i].className="terminal";
    }
});

button.addEventListener("click",function(evt){
  ws.send(input.value);
  //addText("- "+input.value);
  input.value="";
  var lis=document.querySelectorAll("li");
  for (i=0;i<lis.length;i++)
    {
    lis[i].className="user";
    }
})
*/
var ws = new WebSocket("ws://localhost:3000");
var ul = document.createElement("ul");
var body = document.querySelector("body");
var input = document.createElement("input");
var div = document.createElement("div");
body.appendChild(input);
body.appendChild(div);
div.appendChild(input);
var button = document.createElement("button");
div.appendChild(button);
button.innerText="Submit";
body.appendChild(ul);

var name = window.prompt("What is your name?").trim();

var addText = function(msg)
{
  var newLi = document.createElement("li");
  newLi.innerText=msg;
  var FirstLi = ul.firstChild;
  ul.insertBefore(newLi,FirstLi);
}
ws.addEventListener("open",function(evt)
{
  addText('connected');

});

ws.addEventListener("message",function(evt){
  addText(evt.data);

  var lit = document.querySelectorAll("li");
  for (i=0;i<lit.length;i++)
    {
      lit[i].className="terminal";
    }
  });

  button.addEventListener("click",function(evt){
    var usercontent = {name:name};
    usercontent["lines"] = input.value;
    var messagecontent = JSON.stringify(usercontent);
    ws.send(messagecontent);
    //addText("- "+input.value);
    input.value="";
    var lis=document.querySelectorAll("li");
    for (i=0;i<lis.length;i++)
      {
        lis[i].className="user";
      }
    })
