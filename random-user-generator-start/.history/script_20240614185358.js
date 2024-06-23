function fetchUser() {
    fetch ('https://randomuser.me/api/')
.then((response) => response.json())
.then((data) => {
    console.log(data);
})
}

const button = document.querySelector('button');

fetchUser();