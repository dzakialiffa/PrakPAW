const btnklick = document.getElementById("submit");
const inputjwb = document.getElementById("jawab");

const M2 = document.querySelectorAll(".m2");
const M4 = document.querySelectorAll(".m4");
const M5 = document.querySelectorAll(".m5");
const M6 = document.querySelectorAll(".m6");

const T1 = document.querySelectorAll(".t1");
const T3 = document.querySelectorAll(".t3");
const T2 = document.querySelectorAll(".t2");

btnklick.addEventListener("click", function () {
    let soal = document.getElementById("pilih").value;
    let jwbn = inputjwb.value.toLowerCase();
    if (soal === "1" && jwbn === "takjil") {
        for (let i = 0; i < T1.length; i++) {
            T1[i].innerHTML = jwbn[i];
        }
    } else if (soal === "2" && jwbn === "tadarus") {
        for (let i = 0; i < T2.length; i++) {
            T2[i].innerHTML = jwbn[i];
        }
    } else if (soal === "3" && jwbn === "idulfitri") {
        for (let i = 0; i < T3.length; i++) {
            T3[i].innerHTML = jwbn[i];
        }
    } else if (soal === "4" && jwbn === "tarawih") {
        for (let i = 0; i < M2.length; i++) {
            M2[i].innerHTML = jwbn[i];
        }
    } else if (soal === "5" && jwbn === "ramadan") {
        for (let i = 0; i < M4.length; i++) {
            M4[i].innerHTML = jwbn[i];
        }
    } else if (soal === "6" && jwbn === "haus") {
        for (let i = 0; i < M5.length; i++) {
            M5[i].innerHTML = jwbn[i];
        }
    } else if (soal === "7" && jwbn === "nabuburit") {
        for (let i = 0; i < M6.length; i++) {
            M6[i].innerHTML = jwbn[i];
        }
    } else {
        alert("jawaban anda salah");
    }
});