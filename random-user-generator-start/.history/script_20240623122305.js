function fetchUser() {
    fetch ('https://randomuser.me/api/')
.then((response) => response.json())
.then((data) => {
    displayUser(data.results[0]);
})
}

function displayUser(user) {
    const userDisplay = document.querySelector('#user');
        if (user.gender === 'female') {
        document.body.style.backgroundColor = 'pink';
    } else {
        document.body.style.backgroundColor = 'lightblue';
    }

    userDisplay.innerHTML = `<div class="flex justify-between">
          <div class="flex">
            <img
              class="w-48 h-48 rounded-full mr-8"
              src="https://randomuser.me/api/portraits/women/45.jpg"
            />
            <div class="space-y-3">
              <p class="text-xl">
                <span class="font-bold">Name: </span>Sara Wilson
              </p>
              <p class="text-xl">
                <span class="font-bold">Email: </span> sarawilson@gmail.com
              </p>
              <p class="text-xl">
                <span class="font-bold">Phone: </span> (555) 555-5555
              </p>
              <p class="text-xl">
                <span class="font-bold">Location: </span> Boston MA
              </p>
              <p class="text-xl"><span class="font-bold">Age: </span> 30</p>
            </div>
          </div>
        </div>
      </div>`;
}

const button = document.querySelector('button');

fetchUser();