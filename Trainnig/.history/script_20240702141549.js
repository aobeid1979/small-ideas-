

const btn = document.querySelectorAll('.btn');

console.log(btn);

btn.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const currentBtn = e.currentTarget.parentElement.parentElement;
        currentBtn.remove();
    });
});

btn.s