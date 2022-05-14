// content for big screen.
var about = document.getElementById('about');
var struct = document.getElementById('struct');
var time = document.getElementById('time');
var faq = document.getElementById('faq');
var rule = document.getElementById('rule');
var contact = document.getElementById('contact');

// Getting buttons.
var b1 = document.getElementById('btn1');
var b2 = document.getElementById('btn2');
var b3 = document.getElementById('btn3');
var b4 = document.getElementById('btn4');
var b5 = document.getElementById('btn5');
var b6 = document.getElementById('btn6');


function showAbout() {
    about.style.transform = "translateX(0)";
    struct.style.transform = "translateX(100%)";
    time.style.transform = "translateX(100%)";
    faq.style.transform = "translateX(100%)";
    rule.style.transform = "translateX(100%)";
    contact.style.transform = "translateX(100%)";

    about.style.display = "block";
    struct.style.display = "none";
    time.style.display = "none";
    faq.style.display = "none";
    rule.style.display = "none";
    contact.style.display = "none";

    b1.style.color = "#f8f4f4";
    b1.style.textDecoration = "underline";
    b2.style.color = "rgba(255,255,255,0.4)";
    b2.style.textDecoration = "none";
    b3.style.color = "rgba(255,255,255,0.4)";
    b3.style.textDecoration = "none";
    b4.style.color = "rgba(255,255,255,0.4)";
    b4.style.textDecoration = "none";
    b5.style.color = "rgba(255,255,255,0.4)";
    b5.style.textDecoration = "none";
    b6.style.color = "rgba(255,255,255,0.4)";
    b6.style.textDecoration = "none";

}

function showStruct() {
    about.style.transform = "translateX(100%)";
    struct.style.transform = "translateX(0)";
    time.style.transform = "translateX(100%)";
    faq.style.transform = "translateX(100%)";
    rule.style.transform = "translateX(100%)";
    contact.style.transform = "translateX(100%)";

    about.style.display = "none";
    struct.style.display = "block";
    time.style.display = "none";
    faq.style.display = "none";
    rule.style.display = "none";
    contact.style.display = "none";

    b1.style.color = "rgba(255,255,255,0.4)";
    b1.style.textDecoration = "none";
    b2.style.color = "#f8f4f4";
    b2.style.textDecoration = "underline";
    b3.style.color = "rgba(255,255,255,0.4)";
    b3.style.textDecoration = "none";
    b4.style.color = "rgba(255,255,255,0.4)";
    b4.style.textDecoration = "none";
    b5.style.color = "rgba(255,255,255,0.4)";
    b5.style.textDecoration = "none";
    b6.style.color = "rgba(255,255,255,0.4)";
    b6.style.textDecoration = "none";

}

function showTime() {
    about.style.transform = "translateX(100%))";
    struct.style.transform = "translateX(100%)";
    time.style.transform = "translateX(0)";
    faq.style.transform = "translateX(100%)";
    rule.style.transform = "translateX(100%)";
    contact.style.transform = "translateX(100%)";

    about.style.display = "none";
    struct.style.display = "none";
    time.style.display = "block";
    faq.style.display = "none";
    rule.style.display = "none";
    contact.style.display = "none";

    b1.style.color = "rgba(255,255,255,0.4)";
    b1.style.textDecoration = "none";
    b2.style.color = "rgba(255,255,255,0.4)";
    b2.style.textDecoration = "none";
    b3.style.color = "#f8f4f4";
    b3.style.textDecoration = "underline";
    b4.style.color = "rgba(255,255,255,0.4)";
    b4.style.textDecoration = "none";
    b5.style.color = "rgba(255,255,255,0.4)";
    b5.style.textDecoration = "none";
    b6.style.color = "rgba(255,255,255,0.4)";
    b6.style.textDecoration = "none";

}

function showFaq() {
    about.style.transform = "translateX(100%))";
    struct.style.transform = "translateX(100%)";
    time.style.transform = "translateX(100%)";
    faq.style.transform = "translateX(0)";
    rule.style.transform = "translateX(100%)";
    contact.style.transform = "translateX(100%)";

    about.style.display = "none";
    struct.style.display = "none";
    time.style.display = "none";
    faq.style.display = "block";
    rule.style.display = "none";
    contact.style.display = "none";

    b1.style.color = "rgba(255,255,255,0.4)";
    b1.style.textDecoration = "none";
    b2.style.color = "rgba(255,255,255,0.4)";
    b2.style.textDecoration = "none";
    b3.style.color = "rgba(255,255,255,0.4)";
    b3.style.textDecoration = "none";
    b4.style.color = "#f8f4f4";
    b4.style.textDecoration = "underline";
    b5.style.color = "rgba(255,255,255,0.4)";
    b5.style.textDecoration = "none";
    b6.style.color = "rgba(255,255,255,0.4)";
    b6.style.textDecoration = "none";

}

function showRule() {
    about.style.transform = "translateX(100%))";
    struct.style.transform = "translateX(100%)";
    time.style.transform = "translateX(100%)";
    faq.style.transform = "translateX(100%)";
    rule.style.transform = "translateX(0)";
    contact.style.transform = "translateX(100%)";

    about.style.display = "none";
    struct.style.display = "none";
    time.style.display = "none";
    faq.style.display = "none";
    rule.style.display = "block";
    contact.style.display = "none";

    b1.style.color = "rgba(255,255,255,0.4)";
    b1.style.textDecoration = "none";
    b2.style.color = "rgba(255,255,255,0.4)";
    b2.style.textDecoration = "none";
    b3.style.color = "rgba(255,255,255,0.4)";
    b3.style.textDecoration = "none";
    b4.style.color = "rgba(255,255,255,0.4)";
    b4.style.textDecoration = "none";
    b5.style.color = "#f8f4f4";
    b5.style.textDecoration = "underline";
    b6.style.color = "rgba(255,255,255,0.4)";
    b6.style.textDecoration = "none";

}

function showContact() {
    about.style.transform = "translateX(100%))";
    struct.style.transform = "translateX(100%)";
    time.style.transform = "translateX(100%)";
    faq.style.transform = "translateX(100%)";
    rule.style.transform = "translateX(100%)";
    contact.style.transform = "translateX(0)";

    about.style.display = "none";
    struct.style.display = "none";
    time.style.display = "none";
    faq.style.display = "none";
    rule.style.display = "none";
    contact.style.display = "block";

    b1.style.color = "rgba(255,255,255,0.4)";
    b1.style.textDecoration = "none";
    b2.style.color = "rgba(255,255,255,0.4)";
    b2.style.textDecoration = "none";
    b3.style.color = "rgba(255,255,255,0.4)";
    b3.style.textDecoration = "none";
    b4.style.color = "rgba(255,255,255,0.4)";
    b4.style.textDecoration = "none";
    b5.style.color = "rgba(255,255,255,0.4)";
    b5.style.textDecoration = "none";
    b6.style.color = "#f8f4f4";
    b6.style.textDecoration = "underline";

}
// For small screen.

// content for small screen.
var sc1 = document.getElementById('c1');
var sc2 = document.getElementById('c2');
var sc3 = document.getElementById('c3');
var sc4 = document.getElementById('c4');
var sc5 = document.getElementById('c5');
var sc6 = document.getElementById('c6');

// Getting buttons for small screen.
var sb1 = document.getElementById('sbtn1');
var sb2 = document.getElementById('sbtn2');
var sb3 = document.getElementById('sbtn3');
var sb4 = document.getElementById('sbtn4');
var sb5 = document.getElementById('sbtn5');
var sb6 = document.getElementById('sbtn6');

function sshowAbout() {
    c1.style.display = "block";
    c2.style.display = "none";
    c3.style.display = "none";
    c4.style.display = "none";
    c5.style.display = "none";
    c6.style.display = "none";

    sb1.style.color = "#f8f4f4";
    sb1.style.textDecoration = "underline";
    sb2.style.color = "rgba(255,255,255,0.4)";
    sb2.style.textDecoration = "none";
    sb3.style.color = "rgba(255,255,255,0.4)";
    sb3.style.textDecoration = "none";
    sb4.style.color = "rgba(255,255,255,0.4)";
    sb4.style.textDecoration = "none";
    sb5.style.color = "rgba(255,255,255,0.4)";
    sb5.style.textDecoration = "none";
    sb6.style.color = "rgba(255,255,255,0.4)";
    sb6.style.textDecoration = "none";


}

function sshowStruct() {
    c1.style.display = "none";
    c2.style.display = "block";
    c3.style.display = "none";
    c4.style.display = "none";
    c5.style.display = "none";
    c6.style.display = "none";

    sb1.style.color = "rgba(255,255,255,0.4)";
    sb1.style.textDecoration = "none";
    sb2.style.color = "#f8f4f4";
    sb2.style.textDecoration = "underline";
    sb3.style.color = "rgba(255,255,255,0.4)";
    sb3.style.textDecoration = "none";
    sb4.style.color = "rgba(255,255,255,0.4)";
    sb4.style.textDecoration = "none";
    sb5.style.color = "rgba(255,255,255,0.4)";
    sb5.style.textDecoration = "none";
    sb6.style.color = "rgba(255,255,255,0.4)";
    sb6.style.textDecoration = "none";

}

function sshowTime() {
    c1.style.display = "none";
    c2.style.display = "none";
    c3.style.display = "block";
    c4.style.display = "none";
    c5.style.display = "none";
    c6.style.display = "none";

    sb1.style.color = "rgba(255,255,255,0.4)";
    sb1.style.textDecoration = "none";
    sb2.style.color = "rgba(255,255,255,0.4)";
    sb2.style.textDecoration = "none";
    sb3.style.color = "#f8f4f4";
    sb3.style.textDecoration = "underline";
    sb4.style.color = "rgba(255,255,255,0.4)";
    sb4.style.textDecoration = "none";
    sb5.style.color = "rgba(255,255,255,0.4)";
    sb5.style.textDecoration = "none";
    sb6.style.color = "rgba(255,255,255,0.4)";
    sb6.style.textDecoration = "none";

}

function sshowFaq() {
    c1.style.display = "none";
    c2.style.display = "none";
    c3.style.display = "none";
    c4.style.display = "block";
    c5.style.display = "none";
    c6.style.display = "none";

    sb1.style.color = "rgba(255,255,255,0.4)";
    sb1.style.textDecoration = "none";
    sb2.style.color = "rgba(255,255,255,0.4)";
    sb2.style.textDecoration = "none";
    sb3.style.color = "rgba(255,255,255,0.4)";
    sb3.style.textDecoration = "none";
    sb4.style.color = "#f8f4f4";
    sb4.style.textDecoration = "underline";
    sb5.style.color = "rgba(255,255,255,0.4)";
    sb5.style.textDecoration = "none";
    sb6.style.color = "rgba(255,255,255,0.4)";
    sb6.style.textDecoration = "none";

}

function sshowRule() {
    c1.style.display = "none";
    c2.style.display = "none";
    c3.style.display = "none";
    c4.style.display = "none";
    c5.style.display = "block";
    c6.style.display = "none";

    sb1.style.color = "rgba(255,255,255,0.4)";
    sb1.style.textDecoration = "none";
    sb2.style.color = "rgba(255,255,255,0.4)";
    sb2.style.textDecoration = "none";
    sb3.style.color = "rgba(255,255,255,0.4)";
    sb3.style.textDecoration = "none";
    sb4.style.color = "rgba(255,255,255,0.4)";
    sb4.style.textDecoration = "none";
    sb5.style.color = "#f8f4f4";
    sb5.style.textDecoration = "underline";
    sb6.style.color = "rgba(255,255,255,0.4)";
    sb6.style.textDecoration = "none";

}

function sshowContact() {
    c1.style.display = "none";
    c2.style.display = "none";
    c3.style.display = "none";
    c4.style.display = "none";
    c5.style.display = "none";
    c6.style.display = "block";

    sb1.style.color = "rgba(255,255,255,0.4)";
    sb1.style.textDecoration = "none";
    sb2.style.color = "rgba(255,255,255,0.4)";
    sb2.style.textDecoration = "none";
    sb3.style.color = "rgba(255,255,255,0.4)";
    sb3.style.textDecoration = "none";
    sb4.style.color = "rgba(255,255,255,0.4)";
    sb4.style.textDecoration = "none";
    sb5.style.color = "rgba(255,255,255,0.4)";
    sb5.style.textDecoration = "none";
    sb6.style.color = "#f8f4f4";
    sb6.style.textDecoration = "underline";

}