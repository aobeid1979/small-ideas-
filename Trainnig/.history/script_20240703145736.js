const li = document.createElement('li');

li.innerHTML = `
          Apples
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        `;
        
        
        console.log(li);

        const ul = document.querySelector('ul');

        console.log(ul);

        ul.appendChild(li);