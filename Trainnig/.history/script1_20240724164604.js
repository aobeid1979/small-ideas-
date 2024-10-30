// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Success');
//     }, 1000);
// })


// async function getPromise() {
//     const  response = await promise;
//     console.log(response);
// }

// using async and await with fetch, the first is normal function and the seconde is arrow function
async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    console.log(data);
}

const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    console.log(data);
}

// using fetch with then 
function getUsers1() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => console.log(data));   
}

// getUsers();
// getPosts();
// getUsers1();


