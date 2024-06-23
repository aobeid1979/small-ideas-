fetch ('https://randomruser.me/api/resu')
.then((response) => response.json())
.then((data) => {
    console.log(data)
})