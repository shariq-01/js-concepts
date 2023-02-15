
// ***********************************Debouncing and Throttling**************************************************
let comments = []

fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        comments = data
    })

function debounce(delay) {
    let interval;
    return function (e) {
        clearTimeout(interval)
        interval = setTimeout(() => {
            const filterComments = comments.filter(comment => comment.email.toLowerCase().includes(e.target.value.toLowerCase()))
            console.log(filterComments)
        }, delay)
    }
}


function throttle(delay) {
    let shouldCall = true;
    return function (e) {

        if (shouldCall) {
            const filterComments = comments.filter(comment => comment.email.toLowerCase().includes(e.target.value.toLowerCase()))
            console.log(filterComments)
            shouldCall = false;

            setTimeout(() => {
                shouldCall = true;
            }, delay)
        }

    }
}

const input = document.querySelector("input")
input.addEventListener('keyup', debounce(500))
input.addEventListener('keyup', throttle(500))





