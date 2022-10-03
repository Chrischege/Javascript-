/* printing something on the screen */
console.log('hello'); // used to log messages to the console that comes with the web browser hence making it easy to identify errors and bugs.
document.write('hello'); // used for code testing and is just a way to view the javascript output.

/* variables */
let name;
name='chris';
console.log(name);

/* constants */
let length=20;
console.log(length);

/* CONTROL STATEMENTS */
/* for loop - used when the number of times we need to run the loop is known. It has clear syntax and is easier to read and understand. */
for (let i=0;i<=10;i++){
    i+=1;
    console.log(i);
}

/* if and else statements. One can also have nested if and else statements using 'else if' */
let num=20;
if (num< 10){
    console.log('less than 10');
}
else{
    console.log('more than 10');
}

/* The use of else if statements */
var course=1;
if(course == 1){
    document.write("<h1>HTML tutorial</h1>");
} else if(course==2){
    document.write("<h1>CSS tutorial</h1>");
} else{
    document.write("<h1>Javascript tutorial</h1>");
}

/* SWITCH STATEMENTS */
var day = 2;
switch(day){
    case 1:
        document.write("monday");
        break;
    
    case 2:
        document.write("tuesday");
        break;

    default:
        document.write("another day");
}

/* while statements - used when the condition of the loop is more complex and the number of times it runs is based on the expression in the loop*/
width=1;
while(width<10){
    console.log('width less than 10')
}

/*                       ********DO WHILE LOOP*********

do {
    code block
} while (condition);

*/
var i=10;
do{
    document.write(i + "<br/>");
    i++;
} while (i<=20);


/* BREAK - allows you to exit a loop prematurely. */
for (let m=0; m<10; m++){
    if (m==3){
        break
    }
    console.log(m);
}

/* CONTINUE - used to skip an iteration of the loop and continue from the next one. Can be useful to skip some particular elements in the loop. */
for (let b=0; b<10; b++){
    if (b==5){
        continue /* this will skip the number 5 */
    }
    console.log(b);
}

/*               ********** ARRAYS **********

- allow for storage of multiple values in a single variable */

let cart=['banana','apples','milk'];
console.log(cart[0])
cart[2]= 'bread'
console.log(cart)

/* using loops to iterate over arrays */
for (let x=0;x<3; x++){
    console.log(cart[x]);
}

let g;
g=0;
while (g<3){
    console.log(cart[g]);
    g++;
}

let nums=[1,2,3,4,5,6];
let res=0;

for (let h=0; h<6; h++){
    res+=nums[h];
}
console.log(res);

/*            ******** FUNCTIONS **********

- a block of code designed to perform a particular task. Example our app can have login(), logout() or convert()
purpose of a function is to create it and call it multiple times when needed to perform particular tasks.

function name(){
    //code to be executed
}

parameters - functions can have parameters that they can use in their code. Are defined in the parentheses, and can be used like variables in the function.
now when calling the function we need to pass it a value that it can then use inside the parentheses. A function can have multiple parameters.

A function can have a return statement that can be used to return values especially if there is some math to be calculated.

Built-in functions are those that come shipped together with the javascript npm and can be used readily e.g alert() that is used to output some message on the screen.
Function names can contain letter, digits, underscores, and dollar signs.
*/

function login(user){
    console.log('hello' + ',' + user);
}
login('chris');
login('chege');

function add(x,y){
    return x+y;
}
let sol=add(2,3);
console.log(sol);

function myFunction(a,b){
    return a*b;
}
var x = myFunction(2,3); // the return value will end up in x.

/* events - functions are usually called when some event happens e.g a button is clicked, or a keyboard is pressed. 

<button id=" myButton ">
    click me
</button>

lets say we want to call our function when the button is clicked, how do we do that?

*** STEPS ***
1. to handle a click event, first we need to take its reference using its id. e.g.  let btn= getElementById("myButton");
    the getelementbyid() allows you to select an HTML element using its id attribute.

2. set the event that you want to happen using your functions. e.g btn.onclick = hello;
    this will call the hello() function when the user clicks the button.

3. another important step is to make sure that the document has loaded before taking the reference of an element in javascript.
    can be done using the onload event of the window.

    window.onload= function(){
        let btn= document.getElementById("MyButton");
            btn.onclick= hello;
    };

4. we can also create a function right when defining the event handler. This way we do not need to declare a separate function and assign it to the event 
    instead we define a function as the event handler using this syntax.

    btn.onclick= function(){
        console.log("hello");
    };

*/

/*       ********** JAVASCRIPT POPUP BOXES ************

Javascript offers three types of popup boxes; Alert, Prompt and Confirm boxes.  

---> Alert box is used to ensure that info gets through to the user. When it popups up, the user must click ok to proceed. It takes a  single parameter, which is the text that
     is displayed in the popup box.

---> Prompt box is often used to have the user input a value before entering a page.
    When a prompt box pops up, the user will have to click either ok or cancel to proceed after entering the input value.
    If the user clicks ok, the box returns the input value else if the user clicks cancel, it returns null.
    The prompt() method takes two parameters;- The label you want to display in the text box and the second is a default string to display in the text box(optional).
    Do not overuse this method since it may prevent other users from accessing other parts of the page until the box is closed.

---> Confirm box is used to have the user verify or accept something.
    When a confirm box pops up, the user must click either ok or cancel to proceed,
    If user clicks ok, the box returns true else if the user clicks cancel, the box returns false.
*/

alert("Do you really want to leave the page");

var user= prompt("please enter your name");
alert(user)

var result = confirm("do you really want to leave this page?");
if (result==true){
    alert("Thanks for visiting");
}
else{
    alert("Thanks for staying with us!");
}

/*           ******** OBJECTS *********

javascript variables are containers for values.
objects are variables too, but can contain many values. Think of it as a name:value pair where the name and value are separated by colons. The values are called properties. e.g
        var person={
            name: "john", age:31,
            favColor: "green", height: 32,
        }

Object properties can be accessed in two ways.
        objectName.propertyName
        or
        objectName['propertyName'] e.g

        var x = person.age;
        var y = person['age'];

Object method is a property that contains a function definition. To access the object method, use objectName.methodName() e.g
        document.write();  is a method of the document object.

Object initialization is the process of creating objects. One can create singleline objects line for line or they can span. e.g
        singleline - var john = {name: "john", age: 34};
                     var peter= {name: "peter", age: 43};

        span - var john = {
                name: "john", 
                age: 34
                        };
               var peter= {
                name: "peter", 
                 age: 43
                        };
*/

/*              ********* ADDING METHODS **********

methods are functions that are stored as object properties.
Are created using the following syntax.    methodName = function() { code lines }
Defining methods is done inside the constructor function. e.g.

                function person(name, age){
                    this.name = name;
                    this.age = age;
                    this.changeName = function(name){
                        this.name = name;
                    }
                }

                var p = new person("David", 21);
                p.changeName("john");

                now p.name equals to "john"
*/