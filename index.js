/* 
String
const what = "Daekeon";
*/
/*
Boolean
const wat = true;
*/
/*
Number
const wat = 666;
*/
/* Float
const wat = 55.1;
*/
// const monday = "Mon";
// const tue = "Tue";
// const wed = "Wed";
// const thu = "Thu";
// const fri = "Fri";
// console.log(monday, tue, wed, thu, fri);
// const daysOfWeek = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
// console.log(daysOfWeek[2]);
// const dkInfo = {
//     name: "Daekeon",
//     age: 31,
//     gender: "Male",
//     inHandsome: true,
//     favMovies: ["Avengers", "LOTR", "Oldboy"],
//     favFood: [
//         {
//             name: "Kimchi", 
//             fatty: false
//         }, 
//         {
//             name: "Burger", 
//             fatty: true
//         }
//     ]
// }
// console.log(dkInfo.console);
// function sayHello(parameter, argument){
//    return `Hello ${parameter}, you are ${argument} years old`;
// }

// const greetDaekeon = sayHello("Daekeon", 31)

// console.log(greetDaekeon)

// const calculator = {
//     plus: function(a, b){
//         return a + b;
//     },
//     minus: function(a, b){
//         return a - b;
//     },
//     divide: function(a, b){
//         return a / b;
//     },
//     multiple: function(a, b){
//         return a * b;
//     },
//     power: function(a, b){
//         return a ** b;
//     }
// };

// const a = 5;
// const b = 5;

// const plus = calculator.plus(a, b);
// const minus = calculator.minus(a, b);
// const divide = calculator.divide(a, b);
// const multiple = calculator.multiple(a, b);
// const power = calculator.power(a, b);

// console.log(plus);
// console.log(minus);
// console.log(divide);
// console.log(multiple);
// console.log(power);

// const age = prompt("How old are you");
// if(age >= 18 && age <= 21){
//     console.log("you can drink but you should not");
// } else if(age > 21){
//     console.log("go ahead");
// } else {
//     console.log("too young");
// };

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
    title.classList.toggle(CLICKED_CLASS);
    // const hasClass = title.classList.contains(CLICKED_CLASS); 
    // if (hasClass) {
    //     title.classList.remove(CLICKED_CLASS);        
    // } else {
    //     title.classList.add(CLICKED_CLASS);
    // }
}

// const BASE_COLOR = "rgb(52, 73, 94)"
// const OTHER_COLOR = "#7F8C8D"

// function handleClick(){
//     const currentColor = title.style.color;
//     if (currentColor === BASE_COLOR){
//         title.style.color = OTHER_COLOR;
//     } else {
//         title.style.color = BASE_COLOR;
//     }
// }

function init(){
    title.addEventListener("click", handleClick);
}
init();

// function handleOffline() {
//     console.log("Bye");
// }

// function handleOnline() {
//     console.log("Welcome back");
// }

// window.addEventListener("offline", handleOffline);
// window.addEventListener("online", handleOnline);

