fetch ('https:randomuser.me/')
.then((response) => response.json())
.then((data) => {
    console.log(data)
})