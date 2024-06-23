fetch ('https://randomuser.me/api/')
.then((response) => response.json())
.then((data) => {
    document.getElementById('name').innerHTML = data.results[0].name.first + ' ' + data.results[0].name.last;
})