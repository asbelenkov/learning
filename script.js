let start = document.querySelector('#start');
let stop = document.querySelector('#stop');

start.addEventListener('click', function func() {
    let i = 0;

    let timerId = setInterval(() => {
        console.log('!');
    }, 1000)
});

stop.addEventListener('click', function func() {});