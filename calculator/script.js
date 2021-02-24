let sign = document.querySelectorAll('.sign');
let num = document.querySelectorAll(".num");
let screen = document.getElementById('screen');
let clear = document.getElementById('C');
let eq = document.getElementById('=');
let ans = document.getElementById('ans');
let result ='', temp = 0;

sign.forEach(s => {
    s.addEventListener('click', () => {
        if(result != ''){
            clear.click();
            result = '';
            s.click();
        } else {
            screen.value += s.innerText;
        }    });
});

num.forEach(n => {
    n.addEventListener('click', () => {
        if(result != ''){
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
    if(result === undefined || result == Infinity){
        result = 'Math error :/';
    }
    screen.value = result;
    temp = result;
}

ans.onclick = () => {
    if(result != ''){
        clear.click();
        result = '';
        ans.click();
    } else {
        screen.value += temp;
}
}