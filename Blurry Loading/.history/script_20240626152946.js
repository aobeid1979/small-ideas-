const loadingText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
    load++;

    if (load > 99) {
        clearInterval(int);
    }

    loadingText.innerHTML = `${load}%`
    loadingText.style.opacity = scale(load, 0, 100, 1, 0)
}

const scale = (num, in_min, )