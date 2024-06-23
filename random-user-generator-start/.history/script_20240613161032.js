fetch ('https://randomruser.me/api')
.then(response => response.json())
.then(data => {
    console.log(data)
}