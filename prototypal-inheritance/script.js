
// ***********************************Prototypal Inheritance **************************************************


//Prototypal inheritance is nothing but using one object method or properties into another object

//The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects.

//As we can see the everything forms from object so this is why we say everything in js is object.

//with __proto__ js goes through this prototypal chain.

//obj.__proto__ = {name:"shariq"}  this is how we can change the chain but it is not recommended strongly not recommended ..this can create huge optimization issue.

//So the best way is by Object.create()


const arr = ["name", "state"]
const obj = { name: "shariq", getName: function () { return (this.name) } }
function fn() {
    console.log("function")
}

//object
//(obj.__proto__ == Object.prototype ==> {...})
//(obj.__proto__.__proto__ == Object.prototype.__proto__ ==> null)

//Array
//(arr.__proto__ == Array.prototype ==> {...})
//(arr.__proto__.__proto__ == Array.prototype.__proto ==> {...} == Object.prototype)
//(arr.__proto__.__proto__.__proto__ == Array.prototype.__proto__.__proto__ ==> null)

//function
//(fn.prototype == {}) empty object only availble on function
//(fn.__proto__ == Function.prototype ==> f(){..})
//(fn.__proto__.__proto__ == Function.prototype.__proto__ ==> {...} == Object.prototype)
//(fn.__proto__.__proto__.__proto__ == Function.prototype.__proto__.__proto__ ==> null)

