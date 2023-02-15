


// ***********************************Currying**************************************************

const multiply = (num) => {
    return (num2) => {
        return num * num2;
    }
}

const multiplyBy10 = multiply(10)
console.log(multiplyBy10(10)) //100

const multiplyBy20 = multiply(20)
console.log(multiplyBy20(10)) //200





