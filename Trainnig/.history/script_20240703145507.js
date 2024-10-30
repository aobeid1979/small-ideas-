const li = document.createElement('li');

li.textContent = `<li>
          Apples
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>`;
        
        
        console.log(li);

        const ul = document.querySelector('ul');

        console.log(ul);

        ul.appendChild(li);