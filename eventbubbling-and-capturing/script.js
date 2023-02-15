
// ***********************************Bubbling and Capturing**************************************************

const grandParent = document.querySelector("#grandParent")
const parent = document.querySelector("#parent")
const child = document.querySelector("#child")


grandParent.addEventListener("click", (e) => {
    console.log("grandParent")
}, true) //3rd argument is useCapture,by default it is false,it means it is by default event bubbling.

parent.addEventListener("click", (e) => {
    console.log("parent")
}, false)

child.addEventListener("click", (e) => {
    e.stopPropagation()// it stops the propagation 
    console.log("child")
}, false)


//if mix and match is passed in useCapture then "U" order propagation will be followed top-bottom-top



