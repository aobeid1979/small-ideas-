fetch ('https://randomruser.me/api')
.then(response => response.json())
.then(data => {
    document.getElementById('font-bold').innerText = data.results[0].name.first + ' ' + data.results[0].name.last
})