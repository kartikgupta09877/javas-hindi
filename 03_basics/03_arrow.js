const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); //show th current context in the fuction
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); show empty {} because golabally current context is {}

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);  undefined
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);  undefined
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);  
}


//  chai()  show the context { username: 'hitesh' }

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()