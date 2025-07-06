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
            if (ms < 10) {
                msecond.innerHTML = '0' + ms;
            } else {
                msecond.innerHTML = ms;
            }
            if (s < 10) {

                second.innerHTML = '0' + s;
            }
            else {
                second.innerHTML = s;
            }
            if (m < 10) {

                minute.innerHTML = '0' + m;
            } else {
                minute.innerHTML = m;
            }

            if (h < 10) {
                hour.innerHTML = '0' + h;
            } else {
                hour.innerHTML = h;
            }
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