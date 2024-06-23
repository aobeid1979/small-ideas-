fetch ('https://randomuser.me/api/')
.then((response) => response.json())
.then((data) => {
    document.querySelector('space-y-3').innerHTML = ;
})

fetch('https://randomuser.me/api/').then(response => response.json()).then(data => document.querySelector('.space-y-3').innerHTML = data.results[0].name.first + " " + data.results[0].name.last);