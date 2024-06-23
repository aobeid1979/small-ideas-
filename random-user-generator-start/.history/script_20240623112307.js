function fetchUser() {
    fetch ('https://randomuser.me/api/')
.then((response) => response.json())
.then((data) => {
    console.log(data.result);
})
}

const button = document.querySelector('button');

fetchUser();