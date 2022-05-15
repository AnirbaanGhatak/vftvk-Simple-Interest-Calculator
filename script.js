var p
var r
var t
var ans

function compute() {
    p = document.getElementById("principal").value;
    r = document.getElementById('rate').value;
    t = document.getElementById('years').value;

    if (p == " " || p == "0" || parseInt(p) < 0) {
        alert("Please Enter a Positive number");
    } else {



        console.log(typeof (p) + "  " + typeof (r));

        let yr = new Date().getFullYear().toString();
        yr = (parseInt(yr) + parseInt(t)).toString();

        ans = ((p * r * t) / 100);


        // console.log(yr);

        document.getElementById('ci').innerHTML = `If you deposit <mark>${p}</mark>,<br/> at an interest rate of <mark>${r}%</mark>.<br/> You will recieve an amount of <mark>${ans}</mark>,<br/> in the year <mark>${yr}</mark>`;
    }
}


function rangeInp(val) {
    document.getElementById('rval').innerHTML = val + "%";
}


const slider = document.getElementById("rate");
const min = slider.min;
const max = slider.max;
const value = slider.value;

slider.style.background = `linear-gradient(to right, #1073F5 0%, #1073F5 ${(value - min) / (max - min) * 100}%, #DEE2E6 ${(value - min) / (max - min) * 100}%, #DEE2E6 100%)`;

slider.oninput = function () {


    slider.style.background = `linear-gradient(to right, #1073F5 0%, #1073F5 ${(this.value - this.min) / (this.max - this.min) * 100}%, #DEE2E6 ${(this.value - this.min) / (this.max - this.min) * 100}%, #DEE2E6 100%)`
};


