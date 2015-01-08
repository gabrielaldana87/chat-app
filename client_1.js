
var colorpos = ["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth"];
var ws = new WebSocket("ws://gabriel.princesspeach.nyc:2000");//ws://gabriel.princesspeach.nyc:3000
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
var div4=document.createElement("div");
body.appendChild(div4);
var ul2 = document.createElement("ul");
div4.appendChild(ul2);
ul2.id="UsersList";

var name = window.prompt("What is your name?").trim();
var usercontent = {name:name};


var addLink = function(strings)
{
  var a = document.createElement("a");
  var li = document.querySelector("li");
  var placement  = ul.firstChild;
  var test = placement.appendChild(a);
  a.href = strings;
  a.innerText="\n: "+strings;
}

var addText = function(msg)
{
  var newLi = document.createElement("li");
  newLi.innerText=msg;
  var FirstLi = ul.firstChild;
  ul.insertBefore(newLi,FirstLi);
}

var addUsers = function(msg)
{
  var ul2 = document.getElementById("UsersList");
  var newLi2 = document.createElement("li");
  ul2.appendChild(newLi2);
  newLi2.innerText=msg;

}

ws.addEventListener("open",function(evt)
{
  addText('connected');
  usercontent["type"] = "openmessage";
  var messagecontent = JSON.stringify(usercontent);
  ws.send(messagecontent);
  console.log(messagecontent);
});


ws.addEventListener("message",function(evt)
{
  var usercontent = JSON.parse(evt.data);
  if(usercontent.type==="clientmsg")
  {
    //console.log(usercontent);
  var string = "";
  var string = evt.data;
  var imglength = string.substring(string.length,string.length-3);

  var linkholder = string.split(": ");
  //console.log(linkholder);
  //var hyperlink = linkholder[1].charAt(0)+linkholder[1].charAt(1)+linkholder[1].charAt(2)+linkholder[1].charAt(3);
  linkholder.forEach(function(strings)
  {
    var hyperlink = strings.charAt(0)+strings.charAt(1)+strings.charAt(2)+strings.charAt(3);
    if(hyperlink==="http")
      {
        addLink(strings);
      }
  })

  if(imglength==="jpg" || imglength==="gif"|| imglength==="png" || imglength==="bmp")
    {
    var imagehold = string.split(": ");
    var img = document.createElement("img");
    div2.appendChild(img);
    img.src=imagehold[1];
    img.height="100";
    }


  }
  var lit = document.querySelectorAll("li");
  ul.className=colorpos[usercontent.position];
  var header = document.createElement("h1");
  var div3 = document.createElement("div");
  body.appendChild(div3);
  div3.appendChild(header);
  var imgheader = document.createElement("img");
  div3.appendChild(imgheader);
  imgheader.src="http://www.gamesprays.com/images/icons/cheshire-cat-2-3118_preview.png";
  imgheader.height="50px";
  header.innerText="Hi "+name+". Welcome to SimpleChat!\nYou are # "+usercontent.position+" in line";
  div3.id="headerdiv";
  imgheader.id="headerimg";

    if(usercontent.type==="servermsg")
    {
      console.log(usercontent);

      for(i=0;i<usercontent.usersList.length;i++)
      {
      addUsers(usercontent.usersList[i]);
      console.log(usercontent.usersList[i]);
      }
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
        var wordbegin = string.charAt(0)+string.charAt(1)+string.charAt(2)+string.charAt(3);

filter.forEach(function(strings)
{ if(strings==="fuck")
    {
    addText("that word is banned!");
    clear();
    }

//  else if(wordbegin==="http")
//  {
//    addLink(strings);
//  }

    else if(input.value!=="" && transform[0]!=="yell")
      {
        usercontent["lines"] = wordfilter;
        usercontent["type"] = "usermessage";
        var messagecontent = JSON.stringify(usercontent);
        console.log(messagecontent);
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
            usercontent["type"] = "usermessage";
            var messagecontent = JSON.stringify(usercontent);
            console.log(messagecontent);
          ws.send(messagecontent);
          addText(name+": "+transform[1].toUpperCase())
            clear();
         }
        else if(transform[0]==="table flip")
          {
            usercontent["lines"]="(╯°□°）╯︵ ┻━┻";
            usercontent["type"] = "usermessage";
            var messagecontent = JSON.stringify(usercontent);
            ws.send(messagecontent);
            console.log(messagecontent);
            addText(name+": "+"(╯°□°）╯︵ ┻━┻")
            clear();
          }
        else if(imglength==="jpg" || imglength==="gif"|| imglength==="png" || imglength==="bmp")
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
  var transform=commands.split("/ ");
  var string = "";
  var string = input.value;
  var wordbegin = string.charAt(0)+string.charAt(1)+string.charAt(2)+string.charAt(3);

    for(i=0;i<=filter.length;i++)
      {
        if(filter[i]==="fuck"||filter[i]==="shit"||filter[i]==="fag"||filter[i]==="faggot"||filter[i]==="bitch")
          {
            FirstLi.innerText="That word is banned!";
            clear();
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
        else if(input.value!=="" && transform[0]!=="yell" && transform[0]!=="table flip")
          {
            FirstLi.innerText=name+": "+input.value;
            FirstLi.id="test";
          }
        else if(wordbegin==="http")
          {
            input.addEventListener("keydown",function(evt)
              {
              if(evt.keyCode===13)
                {
                  addLink(strings);
                }
              })
          }
      }
  })
