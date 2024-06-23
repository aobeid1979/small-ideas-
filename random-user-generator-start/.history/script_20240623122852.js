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
                <span class="font-bold">Name: </span> ${user.name.first} ${user.name.last}
              </p>
              <p class="text-xl">
                <span class="font-bold">Email: </span> ${user.email}
              </p>
              <p class="text-xl">
                <span class="font-bold">Phone: </span> ${user.phone}
              </p>
              <p class="text-xl">
                <span class="font-bold">Location: </span> ${user.location.city}, ${user.location.country}
              </p>
              <p class="text-xl"><span class="font-bold">Age: </span> </p>
            </div>
          </div>
        </div>
      </div>`;
}

const button = document.querySelector('button');

fetchUser();