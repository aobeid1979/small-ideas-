function fetchUser() {
    fetch ('https://randomuser.me/api/')
.then((response) => response.json())
.then((data) => {
    displayUser(data.results[0]);
})
}

function displayUser(user) {
    if (uss)
}

const button = document.querySelector('button');

fetchUser();