/*
intoduction
*/
console.log("Running t01_introduction.js")
console.log("it works.")

// Variables

var year="2026"
var name="Shaun"
var age=15
var dollars=100
var number1=502.75
var number2=10
var number3=2
var number4=3
var futureage= age+ number2
var moneyleft= dollars/number3
var addmoney= moneyleft + number4



console.log("hi my name is "+name+". i was born in "+number1*4+". As of "+year+", I am "+age+" years old. I have "+dollars+" dollars. In "+number2+" years, I will be "+futureage+". I will have "+moneyleft+" dollars left if i spent half of my money. If i add "+number4+" dollars, I will have "+addmoney+" dollars.")

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML = "<h2>hi my name is "+name+". i was born in "+number1*4+". As of "+year+", I am "+age+" years old. I have "+dollars+" dollars. In "+number2+" years, I will be "+futureage+". I will have "+moneyleft+" dollars left if i spent half of my money. If i add "+number4+" dollars, I will have "+addmoney+" dollars.<h2/>"



/*
Main code
*/

welcome()

/*
Functions
*/

function welcome(){
OUTPUT.innerHTML += "<p> Welcome to the shop</p>";}