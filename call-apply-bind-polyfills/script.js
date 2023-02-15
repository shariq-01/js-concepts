
// ***********************************call apply bind polyfills********************************
const name2 = {
    firstName: "Tariq",
    lastName: "khan",
}

function fullName(city, country, state, number) {
    console.log(`${this.firstName} ${this.lastName} living in ${city} ,${country} ${state} ${number}`)
}

// bind polyfill
Function.prototype.myBind = function (...args) {
    const [context, ...rest] = args
    const outerContext = this
    return function (...innerArgs) {
        outerContext.call(context, ...rest, ...innerArgs)
    }
}

const myName = fullName.myBind(name2, "mumbai", "India")
myName("maharashtra", "3545345")

// call polyfill
Function.prototype.myCall = function (...args) {
    const [context, ...rest] = args
    context.fnReference = this
    context.fnReference(...rest)
}

fullName.myCall(name2, "mumbai", "India", "maharashtra", "3545345")

// apply polyfill
Function.prototype.myApply = function (...args) {
    const [context, ...rest] = args
    context.fnReference = this
    context.fnReference(...rest[0])
}

fullName.myApply(name2, ["mumbai", "India", "maharashtra", "3545345"])








