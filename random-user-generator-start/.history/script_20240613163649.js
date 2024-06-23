fetch ('https://randomruser.me/api')
.then(response => response.json())
.then(data => {
    document.getElementById('font-bold').appendChild(document.createTextNode(data.results[0].name.first))
})