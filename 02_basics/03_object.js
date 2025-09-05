// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "kartik",
    "full name": "kartik gupta",
    [mySym]: "mykey1", // syntax of symbol is denotde in []
    age: 18,
    location: "Jaipur",
    email: "kartik@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]) the value if take as a string so use [""]
// console.log(JsUser["full name"])
// console.log( JsUser[mySym]) // type of symbol is symbol

JsUser.email = "kartik@chatgpt.com"  // for overwrite and change
// Object.freeze(JsUser) for lock ka value
JsUser.email = "kartik@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log(`Hello JS user, ${this.name}`);
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this["full name"]}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());