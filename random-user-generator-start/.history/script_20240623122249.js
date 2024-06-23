function fetchUser() {
    fetch ('https://randomuser.me/api/')
.then((response) => response.json())
.then((data) => {
    displayUser(data.results[0]);
})
}

function displayUser(user) {
    const userDisplay = document.querySelector('#user');
        if (user.gender === 'female') {
        document.body.style.backgroundColor = 'pink';
    } else {
        document.body.style.backgroundColor = 'lightblue';
    }

    user
}

const button = document.querySelector('button');

fetchUser();