
const title = document.getElementById('app-title');

// Get/change content
console.log(title.textContent);
title.textContent = 'New Title';
title.innerHTML = '<h1>New Title</h1>';

title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '10px';
title.style.borderRadius = '10px';