// Immediately Invoked Function Expressions (IIFE)
// to reduce the globally pollution 


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();  // use ; at the end of the iife function 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('kartik')