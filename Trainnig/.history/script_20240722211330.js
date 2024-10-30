fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => document.querySelector('body').innerHTML = JSON.stringify(json));
      