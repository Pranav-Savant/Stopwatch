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
let startflag = false;
let lapbutton = document.querySelector('#lap')
lapbutton.setAttribute('disabled', '');
document.querySelector('#start-stop').addEventListener('click', function (e) {

    if (!startflag) {
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
        startflag = true
        document.querySelector('#start-stop').innerHTML = 'Stop';
        if (numoflaps < 20) {
            lapbutton.removeAttribute('disabled', '')
        }
    }
    else {
        clearInterval(Int);
        Int = null;
        startflag = false;
        document.querySelector('#start-stop').innerHTML = 'Start';
        lapbutton.setAttribute('disabled', '');
    }
})

let Laprecord = document.querySelector('#Laps-record');
let numoflaps = 0;
document.querySelector('#lap').addEventListener('click', function () {
    let timestamp = document.querySelector("#time-stamp").innerHTML;
    let old = Laprecord.innerHTML
    Laprecord.innerHTML = `<p><span id="lap-count">&#128681;</span>${timestamp}</p>` + old;
    numoflaps++;
    if (numoflaps >= 20) {
        lapbutton.setAttribute('disabled', '');
    }
})


document.querySelector('#reset').addEventListener('click', function () {
    clearInterval(Int);
    Int = null;
    if (startflag) {
        document.querySelector('#start-stop').innerHTML = 'Start';
        startflag = false;
        lapbutton.setAttribute('disabled', '');
    }
    ms = s = m = h = 0;
    hour.innerHTML = '00';
    minute.innerHTML = '00';
    second.innerHTML = '00';
    msecond.innerHTML = '00';
    Laprecord.innerHTML = '';
    numoflaps = 0;
})