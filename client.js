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
var colorpos = ["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth"];
var ws = new WebSocket("ws://localhost:3000");//ws://gabriel.princesspeach.nyc:3000
var ul = document.createElement("ul");
var body = document.querySelector("body");
var input = document.createElement("input");
var div = document.createElement("div");
body.appendChild(div);
div.appendChild(input);
var button = document.createElement("button");
div.appendChild(button);
button.innerText="Submit";
body.appendChild(ul);
var div2=document.createElement("div");
body.appendChild(div2);
div2.id="images";

var name = window.prompt("What is your name?").trim();
var usercontent = {name:name};


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
  var string = "";
  var string = evt.data;
  var imglength = string.substring(string.length,string.length-3);
  if(imglength==="jpg")
    {
    var imagehold = string.split(": ")
    var img = document.createElement("img");
    div2.appendChild(img);
    img.src=imagehold[1];
    img.height="100";
    }

  else
    {
  addText(evt.data);
  var usercontent = JSON.parse(evt.data);
  //addText(evt.data);
  var lit = document.querySelectorAll("li");
  ul.className="first";
    }
});

button.addEventListener("click",function(evt){

  usercontent["lines"] = input.value;
  var messagecontent = JSON.stringify(usercontent);
  ws.send(messagecontent);
  input.value="";
  var lis=document.querySelectorAll("li");
})

var clear = function()
{input.value=""}

input.addEventListener("keydown",function(evt){
  if(evt.keyCode===13)
    {
        var wordfilter=input.value;
        var filter = wordfilter.split(" ");
        var commands=input.value;
        var transform=commands.split("/ ");
        var string = "";
        var string = input.value;
        var imglength = string.substring(string.length,string.length-3);

filter.forEach(function(strings)
{ if(strings==="fuck")
  {
    addText("that word is banned!");
    clear();
  }
  else if(input.value!=="" && transform[0]!=="yell")
    {
      usercontent["lines"] = wordfilter;
      var messagecontent = JSON.stringify(usercontent);
      ws.send(messagecontent);
      var lis=document.querySelectorAll("li");
      addText(name+": "+input.value);
      //input.value="";
      clear();
    }
})
        if(transform[0]==="yell")
          {
            usercontent["lines"]=transform[1].toUpperCase();
            var messagecontent = JSON.stringify(usercontent);
            console.log(messagecontent);
          ws.send(messagecontent);
          addText(name+": "+transform[1].toUpperCase())
            clear();
         }
        else if(transform[0]==="table flip")
          {
            usercontent["lines"]="(╯°□°）╯︵ ┻━┻";
            var messagecontent = JSON.stringify(usercontent);
            console.log(messagecontent);
            ws.send(messagecontent);
            addText(name+": "+"(╯°□°）╯︵ ┻━┻")
            clear();
          }
        else if(imglength==="jpg")
          {
            var img = document.createElement("img");
            div2.appendChild(img);
            img.src=string;
            img.height="100";
          }
    }
  })

input.addEventListener("keyup",function()
{
  var lick = document.createElement("li");
  var FirstLi = ul.firstChild;
  var wordfilter=input.value;
  var filter = wordfilter.split(" ");

  var commands=input.value;
  var transform=commands.split("/ ")

    for(i=0;i<=filter.length;i++)
      {
        if(filter[i]==="fuck"||filter[i]==="shit"||filter[i]==="fag"||filter[i]==="faggot"||filter[i]==="bitch")
          {
            FirstLi.innerText="That word is banned!";
            clear();
          }
        else if(input.value!=="" && transform[0]!=="yell" && transform[0]!=="table flip")
          {
            FirstLi.innerText=name+": "+input.value;
            FirstLi.id="test";
          }
        else if(transform[0]==="yell")
          {
            FirstLi.innerText=name+": "+transform[1].toUpperCase();
            FirstLi.id="test";
          }
        else if(transform[0]==="table flip")
          {
            var pre = document.createElement("pre");
            FirstLi.appendChild(pre);
            FirstLi.innerText=name+": "+"(╯°□°）╯︵ ┻━┻";
            FirstLi.id="test";
          }

}
  })
