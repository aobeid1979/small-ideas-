const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success');
    }, 1000);
})


async function getPromise() {
    const  response = await promise;
    console.log(response);
}

async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    console.log(data);
}

getUsers();