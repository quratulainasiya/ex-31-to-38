// // Q 31

// // let user_names:string[]=["Admin","Annee","Amna","Abdullah","Asad"];
// // // user_names=[] // updated array = empty.

// // if (user_names.length=== 0){
// //  console.log("Your array is empty you need to find some users.");
// //     }
// // else {
// // for (let i = 0; i < user_names.length ;i++) 
// //     if (user_names[i] === "Admin") {
// //     console.log("Wpuld you like to see a status report?");
// //     } 
// // else {
// // console.log(`Hello ! ${user_names[i]}, Thanks for logging in again!`);
// // }}

// //  Q 32

//     // List of current usernames
// let currentUsers: string[] = ["Hooria","AbuZar","BehLool","Taha","Buraaq"];

// // List of new usernames to check
// let newUsers: string[] = ["umair","TaHa","aamir","Abuzar","Umama"];

// // Convert currentUsers list to lowercase for case insensitive comparison
// // let currentUsersLower: string[] = currentUsers.map(user => user.toLowerCase());

// // Loop through newUsers and check for availability
// newUsers.forEach(newUser => {
//     let lowerCase:string=newUser.toLowerCase();
//     if (currentUsers.map(c_user =>c_user.toLowerCase()).includes(lowerCase)) {
//         console.log(`The username '${newUser}' is already taken. Please enter a new username.`);
//     } else {
//         console.log(`The username '${newUser}' is available.`);
//     }
// });

// Q 33:

// let number : number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < number.length; i++) {
//     const numbers = number[i];
//     let ordinalEnding: string;

//     if (numbers === 1) {
//         ordinalEnding = "st";
//     } else if (numbers === 2) {
//         ordinalEnding = "nd";
//     } else if (numbers === 3) {
//         ordinalEnding = "rd";
//     } else {
//         ordinalEnding = "th";
//     }
//     console.log(`${numbers}${ordinalEnding}`);
// }

    
// Q 34:

// let myPizza:string[]=["Cheese Pizza","Pepperoni Pizza","Vegetarian Pizza"];

//  For printing only names of pizza.

// for (let i = 0; i < myPizza.length; i++) {
//     console.log(myPizza[i]);
// }

// //  For printing names of pizza with a message.

// for (let i = 0; i < myPizza.length; i++) {
//     console.log(`I like to eat ${myPizza[i]}`);
// }

// //  Q 35

// let animals:string[]=["Lion","Dog","Rabbit"];
// for (let i = 0; i < animals.length; i++) {
//     console.log(` A ${animals[i]} would make a great pet`);
//     }
//     console.log(`Any of these animals would make a great pet.`);
    

// //  Q 36

// function make_shirt(size:string,text:string){
//     console.log(`Make a shirt of ${size} size with a message ${text} printed on it.`);
// }
// make_shirt("medium","Coding is a fun")    

// // Q 37

// function makeShirt(size:string="Large",text:string="I love Typescript"){
//     console.log(`Make a shirt of ${size} size with a message ${text} printed on it.`);
// }
// makeShirt()  //  For by default large size and text
// makeShirt("medium","Coding is a fun") // For medium size and default message
// makeShirt("small", "Learn code to earn money.") // for custom message and small size 

// //     Q 38

function  describe_city(nameOfcity:string,country:string="Pakistan"){
    return (`${nameOfcity} is in ${country}.`);
}
let city1=describe_city("Karachi");
let city2=describe_city("Dehli","India");
let city3=describe_city("Dubai","UAE");
let city4=describe_city("Newyork","America");

console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);



