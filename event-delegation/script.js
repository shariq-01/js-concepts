
// ***********************************Event Delegations**************************************************

const categories = document.querySelector("#categories")

categories.addEventListener("click", (e) => {
    console.log(e.target)
    console.log(e.target.id)
    console.log(e.target.tagName)
    console.log(e.target.textContent)
})



//Benefits
//1.memory save
//2.writing less code


//cons
//1.Not every event bubbles up ,so there we have to handle manually. eg(blur,focus etc)
//2.If we use stopPropagtion then we cannot use event propagtion.



