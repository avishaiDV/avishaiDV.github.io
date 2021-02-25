const sign = document.querySelectorAll('.sign');
const num = document.querySelectorAll(".num");
const screen = document.getElementById('screen');
const clear = document.getElementById('C');
const eq = document.getElementById('=');
const ans = document.getElementById('ans');
let result = '',
    temp = 0;
const error = 'Math error :/';
const darkMode = document.getElementById('darkMode');
const body = document.getElementById('body');

sign.forEach(s => {
    s.addEventListener('click', () => {
        if (result != '') {
            clear.click();
            result = '';
            s.click();
        } else {
            screen.value += s.innerText;
        }
    });
});

num.forEach(n => {
    n.addEventListener('click', () => {
        if (result != '' || screen.value == error) {
            clear.click();
            result = '';
            n.click();
        } else {
            screen.value += n.innerText;
        }
    });
});

clear.onclick = () => {
    screen.value = '';
}

eq.onclick = () => {
    result = eval(screen.value);
    if (result === undefined || result == Infinity) {
        result = error;
    }
    screen.value = result;
    if (result == error) {
        temp = 0;
    } else {
        temp = result;
    }
    result = '';
}

ans.onclick = () => {
    if (screen.value == error) {
        clear.click();
        result = '';
        ans.click();
    } else {
        screen.value += temp;
    }
}

darkMode.onclick = () => {
    if (body.className == 'day') {
        body.className = 'dark';
        darkMode.innerText = 'light';
        darkMode.className = 'btn btn-light mx-1 my-2';
    } else {
        body.className = 'day';
        darkMode.innerText = 'dark';
        darkMode.className = 'btn btn-dark mx-1 my-2';
    }
}