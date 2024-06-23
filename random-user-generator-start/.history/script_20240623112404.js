function fetchUser() {
    fetch ('https://randomuser.me/api/')
.then((response) => response.json())
.then((data) => {
    displa(data.results[0]);
})
}

const button = document.querySelector('button');

fetchUser();