const hour = document.querySelector('#hours')
const minute = document.querySelector('#minutes')
const second = document.querySelector('#seconds')
const msecond = document.querySelector('#ms')
let h = 0, m = 0, s = 0, ms = 0;
hour.innerHTML = '00';
minute.innerHTML = '00';
second.innerHTML = '00';
msecond.innerHTML = '00';
let Int;
document.querySelector('#start').addEventListener('click', function () {
    if (!Int) {
        Int = setInterval(function () {
            if (ms == 99) {
                ms = -1;
                if (s == 59) {
                    s = -1
                    if (m == 59) {
                        m = -1;
                        h++;
                    }
                    m++;
                }
                s++;
            }
            ms++;
            msecond.innerHTML = ms < 10 ? '0' + ms : ms;
            second.innerHTML = s < 10 ? '0' + s : s;
            minute.innerHTML = m < 10 ? '0' + m : m;
            hour.innerHTML = h < 10 ? '0' + h : h;
        }, 10)
    }
})
document.querySelector('#stop').addEventListener('click', function () {
    clearInterval(Int);
    Int = null;
})
document.querySelector('#reset').addEventListener('click', function () {
    clearInterval(Int);
    Int = null;
    ms = s = m = h = 0;
    hour.innerHTML = '00';
    minute.innerHTML = '00';
    second.innerHTML = '00';
    msecond.innerHTML = '00';
})