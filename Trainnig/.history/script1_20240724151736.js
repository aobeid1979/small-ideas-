const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success');
    }, 1000);
})


async function getPromise() {
    const  response = await promise()
}