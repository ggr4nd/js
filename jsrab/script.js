"use strict";

let users = [
    {
        "lg" : "admin",
        "ps" : "admin"
    },
    {
        "lg" : "user",
        "ps" : "user"
    }
];

let btnLOGIN = document.querySelector(".btnlog");
btnLOGIN.addEventListener("click", formwrap);

let butUP = document.querySelector(".btnUP");
butUP.addEventListener("click", formup);

function formup() {
    let SUP = document.querySelector(".SUP");
    SUP.style.display = "block";
    let blform = document.querySelector(".blform");
    blform.style.display = "none";

    let butt = document.querySelector(".butt");
    butt.addEventListener("click", getRegPass);
}

function formwrap() {
    let blform = document.querySelector(".blform");
    blform.style.display = "block";
    let SUP = document.querySelector(".SUP");
    SUP.style.display = "none";

    let but = document.querySelector(".but");
    but.addEventListener("click", getLogPass);
    let butt = document.querySelector(".butt");
    butt.addEventListener("click", getRegPass);
}
function getLogPass() {
    let frmlog = document.querySelector("#frmlog").value;
    let frmpass = document.querySelector("#frmpass").value;

    console.log("Login -> "+frmlog);
    console.log("Password -> "+frmpass);
    checkLogPass(frmlog, frmpass);
}
function checkLogPass(frmlog, frmpass) {
    let flag = false;
    let content = document.querySelector(".content");
    for (const user of users) {
        if (user.lg == frmlog && user.ps == frmpass) {
            flag = true;
            content.innerHTML = `Hello, ${frmlog}`;

            let blform = document.querySelector(".blform");
            blform.style.display = "none";
            
            break;
        }
    }
    if (!flag) {
        content.innerHTML = `Error!`;
    }
}

function getRegPass() {
    let logup = document.querySelector("#logup").value;
    let passup = document.querySelector("#passup").value;
    let emailup = document.querySelector("#emailup").value;

    console.log("Login -> "+logup);
    console.log("Password -> "+passup);
    console.log("Email -> "+emailup);
    checkRegPass(logup, passup, emailup);
}

function checkRegPass(logup, passup,emailup) {
    let flagg = false;
    let content = document.querySelector(".content");
        if (logup != "" && passup != "" && emailup != "") {
            flagg = true;
            content.innerHTML = `Вы зарегистрировались`;

            let SUP = document.querySelector(".SUP");
            SUP.style.display = "none";
        }
    
    if (!flagg) {
        content.innerHTML = `Error!`;
    }
}



  