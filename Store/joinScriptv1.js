var number = document.querySelector(".current");
var nnumber = document.querySelector(".next");
var nextNum = getNumber();
genereteNumber();

var col0 = document.querySelectorAll(".c0");
var col1 = document.querySelectorAll(".c1");
var col2 = document.querySelectorAll(".c2");
var col3 = document.querySelectorAll(".c3");
var col4 = document.querySelectorAll(".c4");

var columns = [col0, col1, col2, col3, col4];

document.querySelector(".toggle").onclick = () => {
    let temp = number.innerText;
    number.setAttribute("id", "n-"+nnumber.innerText);
    nnumber.setAttribute("id", "n-"+temp);
    number.innerText = nnumber.innerText;
    nnumber.innerText = temp;

}

//column 0
for (let i = 0; i < col0.length; i++) {
    col0[i].addEventListener('click', col0Clicked);
}

function col0Clicked(event) {
    let button = event.target;
    let col = button.classList[1];
    let cnum = parseInt(number.innerText);
    if (isEmpty(col0[0])) {
        col0[0].setAttribute("id", "n-" + cnum);
        col0[0].innerText = cnum;
    } else if ((!isEmpty(col0[0]) && col0[0].innerText == cnum) &&
        isEmpty(col0[1])) {
        col0[0].setAttribute("id", "n-" + (cnum + parseInt(col0[0].innerText)));
        col0[0].innerText = cnum + parseInt(col0[0].innerText);
    } else if ((!isEmpty(col0[0]) && col0[0].innerText != cnum) &&
        isEmpty(col0[1])) {
        col0[1].setAttribute("id", "n-" + cnum);
        col0[1].innerText = cnum;
    } else if ((!isEmpty(col0[1]) && col0[1].innerText == cnum) &&
        isEmpty(col0[2])) {
        let out = cnum + parseInt(col0[1].innerText)
        if (col0[0].innerText == out) {
            col0[0].setAttribute("id", "n-" + (out + parseInt(col0[0].innerText)));
            col0[0].innerText = out + parseInt(col0[0].innerText);
            col0[1].setAttribute("id", "");
            col0[1].innerText = "";
            updateCol0();
        } else {
            col0[1].setAttribute("id", "n-" + out);
            col0[1].innerText = out;
        }
    } else if ((!isEmpty(col0[1]) && col0[1].innerText != cnum) &&
        isEmpty(col0[2])) {
        col0[2].setAttribute("id", "n-" + cnum);
        col0[2].innerText = cnum;
    } else if ((!isEmpty(col0[2]) && col0[2].innerText == cnum) &&
        isEmpty(col0[3])) {
        let out = cnum + parseInt(col0[2].innerText);
        if (col0[1].innerText == out) {
            col0[1].setAttribute("id", "n-" + (out + parseInt(col0[1].innerText)));
            col0[1].innerText = out + parseInt(col0[1].innerText);
            col0[2].setAttribute("id", "");
            col0[2].innerText = "";
            updateCol0();
        } else {
            col0[2].setAttribute("id", "n-" + (cnum + parseInt(col0[2].innerText)));
            col0[2].innerText = cnum + parseInt(col0[2].innerText);
        }

    } else if ((!isEmpty(col0[2]) && col0[2].innerText != cnum) &&
        isEmpty(col0[3])) {
        col0[3].setAttribute("id", "n-" + cnum);
        col0[3].innerText = cnum;
    } else if ((!isEmpty(col0[3]) && col0[3].innerText == cnum) &&
        isEmpty(col0[4])) {
        let out = cnum + parseInt(col0[3].innerText);
        if (col0[2].innerText == out) {
            col0[2].setAttribute("id", "n-" + (out + parseInt(col0[2].innerText)));
            col0[2].innerText = out + parseInt(col0[2].innerText);
            col0[3].setAttribute("id", "");
            col0[3].innerText = "";
            updateCol0();
        } else {
            col0[3].setAttribute("id", "n-" + (cnum + parseInt(col0[3].innerText)));
            col0[3].innerText = cnum + parseInt(col0[3].innerText);
        }

    } else if ((!isEmpty(col0[3]) && col0[2].innerText != cnum) &&
        isEmpty(col0[4])) {
        col0[4].setAttribute("id", "n-" + cnum);
        col0[4].innerText = cnum;
    } else if ((!isEmpty(col0[4]) && col0[4].innerText == cnum)) {
        let out = cnum + parseInt(col0[4].innerText);
        if (col0[3].innerText == out) {
            col0[3].setAttribute("id", "n-" + (out + parseInt(col0[3].innerText)));
            col0[3].innerText = out + parseInt(col0[3].innerText);
            col0[4].setAttribute("id", "");
            col0[4].innerText = "";
            updateCol0();
        } else {
            col0[4].setAttribute("id", "n-" + (cnum + parseInt(col0[4].innerText)));
            col0[4].innerText = cnum + parseInt(col0[4].innerText);
        }
    }else{
        return;
    }
    genereteNumber();
}

function updateCol0() {
    if (col0[0].innerText == col0[1].innerText &&
        !isEmpty(col0[1])) {
        let out = parseInt(col0[0].innerText) + parseInt(col0[1].innerText);
        col0[0].setAttribute("id", "n-" + (out));
        col0[0].innerText = out;
        col0[1].setAttribute("id", "");
        col0[1].innerText = "";
        updateCol0();
    } else if (col0[1].innerText == col0[2].innerText &&
        !isEmpty(col0[2])) {
        let out = parseInt(col0[1].innerText) + parseInt(col0[2].innerText);
        col0[1].setAttribute("id", "n-" + (out));
        col0[1].innerText = out;
        col0[2].setAttribute("id", "");
        col0[2].innerText = "";
        updateCol0();
    }else if (col0[2].innerText == col0[3].innerText &&
        !isEmpty(col0[3])) {
        let out = parseInt(col0[2].innerText) + parseInt(col0[3].innerText);
        col0[2].setAttribute("id", "n-" + (out));
        col0[2].innerText = out;
        col0[3].setAttribute("id", "");
        col0[3].innerText = "";
        updateCol0();
    }
}


//column 1
for (let i = 0; i < col1.length; i++) {
    col1[i].addEventListener('click', col1Clicked);
}

function col1Clicked(event) {
    let button = event.target;
    let col = button.classList[1];
    let cnum = parseInt(number.innerText);
    if (isEmpty(col1[0])) {
        col1[0].setAttribute("id", "n-" + cnum);
        col1[0].innerText = cnum;
    } else if ((!isEmpty(col1[0]) && col1[0].innerText == cnum) &&
        isEmpty(col1[1])) {
        col1[0].setAttribute("id", "n-" + (cnum + parseInt(col1[0].innerText)));
        col1[0].innerText = cnum + parseInt(col1[0].innerText);
    } else if ((!isEmpty(col1[0]) && col1[0].innerText != cnum) &&
        isEmpty(col1[1])) {
        col1[1].setAttribute("id", "n-" + cnum);
        col1[1].innerText = cnum;
    } else if ((!isEmpty(col1[1]) && col1[1].innerText == cnum) &&
        isEmpty(col1[2])) {
        let out = cnum + parseInt(col1[1].innerText)
        if (col1[0].innerText == out) {
            col1[0].setAttribute("id", "n-" + (out + parseInt(col1[0].innerText)));
            col1[0].innerText = out + parseInt(col1[0].innerText);
            col1[1].setAttribute("id", "");
            col1[1].innerText = "";
            updateCol1();
        } else {
            col1[1].setAttribute("id", "n-" + out);
            col1[1].innerText = out;
        }
    } else if ((!isEmpty(col1[1]) && col1[1].innerText != cnum) &&
        isEmpty(col1[2])) {
        col1[2].setAttribute("id", "n-" + cnum);
        col1[2].innerText = cnum;
    } else if ((!isEmpty(col1[2]) && col1[2].innerText == cnum) &&
        isEmpty(col1[3])) {
        let out = cnum + parseInt(col1[2].innerText);
        if (col1[1].innerText == out) {
            col1[1].setAttribute("id", "n-" + (out + parseInt(col1[1].innerText)));
            col1[1].innerText = out + parseInt(col1[1].innerText);
            col1[2].setAttribute("id", "");
            col1[2].innerText = "";
            updateCol1();
        } else {
            col1[2].setAttribute("id", "n-" + (cnum + parseInt(col1[2].innerText)));
            col1[2].innerText = cnum + parseInt(col1[2].innerText);
        }

    } else if ((!isEmpty(col1[2]) && col1[2].innerText != cnum) &&
        isEmpty(col1[3])) {
        col1[3].setAttribute("id", "n-" + cnum);
        col1[3].innerText = cnum;
    } else if ((!isEmpty(col1[3]) && col1[3].innerText == cnum) &&
        isEmpty(col1[4])) {
        let out = cnum + parseInt(col1[3].innerText);
        if (col1[2].innerText == out) {
            col1[2].setAttribute("id", "n-" + (out + parseInt(col1[2].innerText)));
            col1[2].innerText = out + parseInt(col1[2].innerText);
            col1[3].setAttribute("id", "");
            col1[3].innerText = "";
            updateCol1();
        } else {
            col1[3].setAttribute("id", "n-" + (cnum + parseInt(col1[3].innerText)));
            col1[3].innerText = cnum + parseInt(col1[3].innerText);
        }

    } else if ((!isEmpty(col1[3]) && col1[2].innerText != cnum) &&
        isEmpty(col1[4])) {
        col1[4].setAttribute("id", "n-" + cnum);
        col1[4].innerText = cnum;
    } else if ((!isEmpty(col1[4]) && col1[4].innerText == cnum)) {
        let out = cnum + parseInt(col1[4].innerText);
        if (col1[3].innerText == out) {
            col1[3].setAttribute("id", "n-" + (out + parseInt(col1[3].innerText)));
            col1[3].innerText = out + parseInt(col1[3].innerText);
            col1[4].setAttribute("id", "");
            col1[4].innerText = "";
            updateCol1();
        } else {
            col1[4].setAttribute("id", "n-" + (cnum + parseInt(col1[4].innerText)));
            col1[4].innerText = cnum + parseInt(col1[4].innerText);
        }
    }else{
        return;
    }
    genereteNumber();
}

function updateCol1() {
    if (col1[0].innerText == col1[1].innerText &&
        !isEmpty(col1[1])) {
        let out = parseInt(col1[0].innerText) + parseInt(col1[1].innerText);
        col1[0].setAttribute("id", "n-" + (out));
        col1[0].innerText = out;
        col1[1].setAttribute("id", "");
        col1[1].innerText = "";
        updateCol1();
    } else if (col1[1].innerText == col1[2].innerText &&
        !isEmpty(col1[2])) {
        let out = parseInt(col1[1].innerText) + parseInt(col1[2].innerText);
        col1[1].setAttribute("id", "n-" + (out));
        col1[1].innerText = out;
        col1[2].setAttribute("id", "");
        col1[2].innerText = "";
        updateCol1();
    }else if (col1[2].innerText == col1[3].innerText &&
        !isEmpty(col1[3])) {
        let out = parseInt(col1[2].innerText) + parseInt(col1[3].innerText);
        col1[2].setAttribute("id", "n-" + (out));
        col1[2].innerText = out;
        col1[3].setAttribute("id", "");
        col1[3].innerText = "";
        updateCol1();
    }
}

//column 2
for (let i = 0; i < col2.length; i++) {
    col2[i].addEventListener('click', col2Clicked);
}

function col2Clicked(event) {
    let button = event.target;
    let col = button.classList[1];
    let cnum = parseInt(number.innerText);
    if (isEmpty(col2[0])) {
        col2[0].setAttribute("id", "n-" + cnum);
        col2[0].innerText = cnum;
    } else if ((!isEmpty(col2[0]) && col2[0].innerText == cnum) &&
        isEmpty(col2[1])) {
        col2[0].setAttribute("id", "n-" + (cnum + parseInt(col2[0].innerText)));
        col2[0].innerText = cnum + parseInt(col2[0].innerText);
    } else if ((!isEmpty(col2[0]) && col2[0].innerText != cnum) &&
        isEmpty(col2[1])) {
        col2[1].setAttribute("id", "n-" + cnum);
        col2[1].innerText = cnum;
    } else if ((!isEmpty(col2[1]) && col2[1].innerText == cnum) &&
        isEmpty(col2[2])) {
        let out = cnum + parseInt(col2[1].innerText)
        if (col2[0].innerText == out) {
            col2[0].setAttribute("id", "n-" + (out + parseInt(col2[0].innerText)));
            col2[0].innerText = out + parseInt(col2[0].innerText);
            col2[1].setAttribute("id", "");
            col2[1].innerText = "";
            updateCol2();
        } else {
            col2[1].setAttribute("id", "n-" + out);
            col2[1].innerText = out;
        }
    } else if ((!isEmpty(col2[1]) && col2[1].innerText != cnum) &&
        isEmpty(col2[2])) {
        col2[2].setAttribute("id", "n-" + cnum);
        col2[2].innerText = cnum;
    } else if ((!isEmpty(col2[2]) && col2[2].innerText == cnum) &&
        isEmpty(col2[3])) {
        let out = cnum + parseInt(col2[2].innerText);
        if (col2[1].innerText == out) {
            col2[1].setAttribute("id", "n-" + (out + parseInt(col2[1].innerText)));
            col2[1].innerText = out + parseInt(col2[1].innerText);
            col2[2].setAttribute("id", "");
            col2[2].innerText = "";
            updateCol2();
        } else {
            col2[2].setAttribute("id", "n-" + (cnum + parseInt(col2[2].innerText)));
            col2[2].innerText = cnum + parseInt(col2[2].innerText);
        }

    } else if ((!isEmpty(col2[2]) && col2[2].innerText != cnum) &&
        isEmpty(col2[3])) {
        col2[3].setAttribute("id", "n-" + cnum);
        col2[3].innerText = cnum;
    } else if ((!isEmpty(col2[3]) && col2[3].innerText == cnum) &&
        isEmpty(col2[4])) {
        let out = cnum + parseInt(col2[3].innerText);
        if (col2[2].innerText == out) {
            col2[2].setAttribute("id", "n-" + (out + parseInt(col2[2].innerText)));
            col2[2].innerText = out + parseInt(col2[2].innerText);
            col2[3].setAttribute("id", "");
            col2[3].innerText = "";
            updateCol2();
        } else {
            col2[3].setAttribute("id", "n-" + (cnum + parseInt(col2[3].innerText)));
            col2[3].innerText = cnum + parseInt(col2[3].innerText);
        }

    } else if ((!isEmpty(col2[3]) && col2[2].innerText != cnum) &&
        isEmpty(col2[4])) {
        col2[4].setAttribute("id", "n-" + cnum);
        col2[4].innerText = cnum;
    } else if ((!isEmpty(col2[4]) && col2[4].innerText == cnum)) {
        let out = cnum + parseInt(col2[4].innerText);
        if (col2[3].innerText == out) {
            col2[3].setAttribute("id", "n-" + (out + parseInt(col2[3].innerText)));
            col2[3].innerText = out + parseInt(col2[3].innerText);
            col2[4].setAttribute("id", "");
            col2[4].innerText = "";
            updateCol2();
        } else {
            col2[4].setAttribute("id", "n-" + (cnum + parseInt(col2[4].innerText)));
            col2[4].innerText = cnum + parseInt(col2[4].innerText);
        }
    }else{
        return;
    }
    genereteNumber();
}

function updateCol2() {
    if (col2[0].innerText == col2[1].innerText &&
        !isEmpty(col2[1])) {
        let out = parseInt(col2[0].innerText) + parseInt(col2[1].innerText);
        col2[0].setAttribute("id", "n-" + (out));
        col2[0].innerText = out;
        col2[1].setAttribute("id", "");
        col2[1].innerText = "";
        updateCol2();
    } else if (col2[1].innerText == col2[2].innerText &&
        !isEmpty(col2[2])) {
        let out = parseInt(col2[1].innerText) + parseInt(col2[2].innerText);
        col2[1].setAttribute("id", "n-" + (out));
        col2[1].innerText = out;
        col2[2].setAttribute("id", "");
        col2[2].innerText = "";
        updateCol2();
    }else if (col2[2].innerText == col2[3].innerText &&
        !isEmpty(col2[3])) {
        let out = parseInt(col2[2].innerText) + parseInt(col2[3].innerText);
        col2[2].setAttribute("id", "n-" + (out));
        col2[2].innerText = out;
        col2[3].setAttribute("id", "");
        col2[3].innerText = "";
        updateCol2();
    }
}


//Column 3
for (let i = 0; i < col3.length; i++) {
    col3[i].addEventListener('click', col3Clicked);
}

function col3Clicked(event) {
    let button = event.target;
    let col = button.classList[1];
    let cnum = parseInt(number.innerText);
    if (isEmpty(col3[0])) {
        col3[0].setAttribute("id", "n-" + cnum);
        col3[0].innerText = cnum;
    } else if ((!isEmpty(col3[0]) && col3[0].innerText == cnum) &&
        isEmpty(col3[1])) {
        col3[0].setAttribute("id", "n-" + (cnum + parseInt(col3[0].innerText)));
        col3[0].innerText = cnum + parseInt(col3[0].innerText);
    } else if ((!isEmpty(col3[0]) && col3[0].innerText != cnum) &&
        isEmpty(col3[1])) {
        col3[1].setAttribute("id", "n-" + cnum);
        col3[1].innerText = cnum;
    } else if ((!isEmpty(col3[1]) && col3[1].innerText == cnum) &&
        isEmpty(col3[2])) {
        let out = cnum + parseInt(col3[1].innerText)
        if (col3[0].innerText == out) {
            col3[0].setAttribute("id", "n-" + (out + parseInt(col3[0].innerText)));
            col3[0].innerText = out + parseInt(col3[0].innerText);
            col3[1].setAttribute("id", "");
            col3[1].innerText = "";
            updateCol3();
        } else {
            col3[1].setAttribute("id", "n-" + out);
            col3[1].innerText = out;
        }
    } else if ((!isEmpty(col3[1]) && col3[1].innerText != cnum) &&
        isEmpty(col3[2])) {
        col3[2].setAttribute("id", "n-" + cnum);
        col3[2].innerText = cnum;
    } else if ((!isEmpty(col3[2]) && col3[2].innerText == cnum) &&
        isEmpty(col3[3])) {
        let out = cnum + parseInt(col3[2].innerText);
        if (col3[1].innerText == out) {
            col3[1].setAttribute("id", "n-" + (out + parseInt(col3[1].innerText)));
            col3[1].innerText = out + parseInt(col3[1].innerText);
            col3[2].setAttribute("id", "");
            col3[2].innerText = "";
            updateCol3();
        } else {
            col3[2].setAttribute("id", "n-" + (cnum + parseInt(col3[2].innerText)));
            col3[2].innerText = cnum + parseInt(col3[2].innerText);
        }

    } else if ((!isEmpty(col3[2]) && col3[2].innerText != cnum) &&
        isEmpty(col3[3])) {
        col3[3].setAttribute("id", "n-" + cnum);
        col3[3].innerText = cnum;
    } else if ((!isEmpty(col3[3]) && col3[3].innerText == cnum) &&
        isEmpty(col3[4])) {
        let out = cnum + parseInt(col3[3].innerText);
        if (col3[2].innerText == out) {
            col3[2].setAttribute("id", "n-" + (out + parseInt(col3[2].innerText)));
            col3[2].innerText = out + parseInt(col3[2].innerText);
            col3[3].setAttribute("id", "");
            col3[3].innerText = "";
            updateCol3();
        } else {
            col3[3].setAttribute("id", "n-" + (cnum + parseInt(col3[3].innerText)));
            col3[3].innerText = cnum + parseInt(col3[3].innerText);
        }

    } else if ((!isEmpty(col3[3]) && col3[2].innerText != cnum) &&
        isEmpty(col3[4])) {
        col3[4].setAttribute("id", "n-" + cnum);
        col3[4].innerText = cnum;
    } else if ((!isEmpty(col3[4]) && col3[4].innerText == cnum)) {
        let out = cnum + parseInt(col3[4].innerText);
        if (col3[3].innerText == out) {
            col3[3].setAttribute("id", "n-" + (out + parseInt(col3[3].innerText)));
            col3[3].innerText = out + parseInt(col3[3].innerText);
            col3[4].setAttribute("id", "");
            col3[4].innerText = "";
            updateCol3();
        } else {
            col3[4].setAttribute("id", "n-" + (cnum + parseInt(col3[4].innerText)));
            col3[4].innerText = cnum + parseInt(col3[4].innerText);
        }
    }else{
        return;
    }
    genereteNumber();
}

function updateCol3() {
    if (col3[0].innerText == col3[1].innerText &&
        !isEmpty(col3[1])) {
        let out = parseInt(col3[0].innerText) + parseInt(col3[1].innerText);
        col3[0].setAttribute("id", "n-" + (out));
        col3[0].innerText = out;
        col3[1].setAttribute("id", "");
        col3[1].innerText = "";
        updateCol3();
    } else if (col3[1].innerText == col3[2].innerText &&
        !isEmpty(col3[2])) {
        let out = parseInt(col3[1].innerText) + parseInt(col3[2].innerText);
        col3[1].setAttribute("id", "n-" + (out));
        col3[1].innerText = out;
        col3[2].setAttribute("id", "");
        col3[2].innerText = "";
        updateCol3();
    }else if (col3[2].innerText == col3[3].innerText &&
        !isEmpty(col3[3])) {
        let out = parseInt(col3[2].innerText) + parseInt(col3[3].innerText);
        col3[2].setAttribute("id", "n-" + (out));
        col3[2].innerText = out;
        col3[3].setAttribute("id", "");
        col3[3].innerText = "";
        updateCol3();
    }
}

//Column 4
for (let i = 0; i < col4.length; i++) {
    col4[i].addEventListener('click', col4Clicked);
}

function col4Clicked(event) {
    let button = event.target;
    let col = button.classList[1];
    let cnum = parseInt(number.innerText);
    console.log(col);
    if (isEmpty(col4[0])) {
        col4[0].setAttribute("id", "n-" + cnum);
        col4[0].innerText = cnum;
    } else if ((!isEmpty(col4[0]) && col4[0].innerText == cnum) &&
        isEmpty(col4[1])) {
        col4[0].setAttribute("id", "n-" + (cnum + parseInt(col4[0].innerText)));
        col4[0].innerText = cnum + parseInt(col4[0].innerText);
    } else if ((!isEmpty(col4[0]) && col4[0].innerText != cnum) &&
        isEmpty(col4[1])) {
        col4[1].setAttribute("id", "n-" + cnum);
        col4[1].innerText = cnum;
    } else if ((!isEmpty(col4[1]) && col4[1].innerText == cnum) &&
        isEmpty(col4[2])) {
        let out = cnum + parseInt(col4[1].innerText)
        if (col4[0].innerText == out) {
            col4[0].setAttribute("id", "n-" + (out + parseInt(col4[0].innerText)));
            col4[0].innerText = out + parseInt(col4[0].innerText);
            col4[1].setAttribute("id", "");
            col4[1].innerText = "";
            updateCol4();
        } else {
            col4[1].setAttribute("id", "n-" + out);
            col4[1].innerText = out;
        }
    } else if ((!isEmpty(col4[1]) && col4[1].innerText != cnum) &&
        isEmpty(col4[2])) {
        col4[2].setAttribute("id", "n-" + cnum);
        col4[2].innerText = cnum;
    } else if ((!isEmpty(col4[2]) && col4[2].innerText == cnum) &&
        isEmpty(col4[3])) {
        let out = cnum + parseInt(col4[2].innerText);
        if (col4[1].innerText == out) {
            col4[1].setAttribute("id", "n-" + (out + parseInt(col4[1].innerText)));
            col4[1].innerText = out + parseInt(col4[1].innerText);
            col4[2].setAttribute("id", "");
            col4[2].innerText = "";
            updateCol4();
        } else {
            col4[2].setAttribute("id", "n-" + (cnum + parseInt(col4[2].innerText)));
            col4[2].innerText = cnum + parseInt(col4[2].innerText);
        }

    } else if ((!isEmpty(col4[2]) && col4[2].innerText != cnum) &&
        isEmpty(col4[3])) {
        col4[3].setAttribute("id", "n-" + cnum);
        col4[3].innerText = cnum;
    } else if ((!isEmpty(col4[3]) && col4[3].innerText == cnum) &&
        isEmpty(col4[4])) {
        let out = cnum + parseInt(col4[3].innerText);
        if (col4[2].innerText == out) {
            col4[2].setAttribute("id", "n-" + (out + parseInt(col4[2].innerText)));
            col4[2].innerText = out + parseInt(col4[2].innerText);
            col4[3].setAttribute("id", "");
            col4[3].innerText = "";
            updateCol4();
        } else {
            col4[3].setAttribute("id", "n-" + (cnum + parseInt(col4[3].innerText)));
            col4[3].innerText = cnum + parseInt(col4[3].innerText);
        }

    } else if ((!isEmpty(col4[3]) && col4[2].innerText != cnum) &&
        isEmpty(col4[4])) {
        col4[4].setAttribute("id", "n-" + cnum);
        col4[4].innerText = cnum;
    } else if ((!isEmpty(col4[4]) && col4[4].innerText == cnum)) {
        let out = cnum + parseInt(col4[4].innerText);
        if (col4[3].innerText == out) {
            col4[3].setAttribute("id", "n-" + (out + parseInt(col4[3].innerText)));
            col4[3].innerText = out + parseInt(col4[3].innerText);
            col4[4].setAttribute("id", "");
            col4[4].innerText = "";
            updateCol4();
        } else {
            col4[4].setAttribute("id", "n-" + (cnum + parseInt(col4[4].innerText)));
            col4[4].innerText = cnum + parseInt(col4[4].innerText);
        }
    }else{
        return;
    }
    genereteNumber();
}

function updateCol4() {
    if (col4[0].innerText == col4[1].innerText &&
        !isEmpty(col4[1])) {
        let out = parseInt(col4[0].innerText) + parseInt(col4[1].innerText);
        col4[0].setAttribute("id", "n-" + (out));
        col4[0].innerText = out;
        col4[1].setAttribute("id", "");
        col4[1].innerText = "";
        updateCol4();
    } else if (col4[1].innerText == col4[2].innerText &&
        !isEmpty(col4[2])) {
        let out = parseInt(col4[1].innerText) + parseInt(col4[2].innerText);
        col4[1].setAttribute("id", "n-" + (out));
        col4[1].innerText = out;
        col4[2].setAttribute("id", "");
        col4[2].innerText = "";
        updateCol4();
    }else if (col4[2].innerText == col4[3].innerText &&
        !isEmpty(col4[3])) {
        let out = parseInt(col4[2].innerText) + parseInt(col4[3].innerText);
        col4[2].setAttribute("id", "n-" + (out));
        col4[2].innerText = out;
        col4[3].setAttribute("id", "");
        col4[3].innerText = "";
        updateCol4();
    }
}



function isEmpty(v) { return v.innerText == " " || v.innerText == "" }

function genereteNumber() {

    currentNum = nextNum;
    number.setAttribute("id", "n-" + currentNum);
    number.innerText = currentNum;
    nextNum = getNumber();
    nnumber.setAttribute("id", "n-" + nextNum);
    nnumber.innerText = nextNum;
}

function getNumber() {
    let num = 0;
    switch (Math.floor(Math.random() * 8)) {
        case 0:
            num = 2;
            break;
        case 7:
            num = 32;
            break;
        case 1:
            num = 4;
            break;
        case 2:
            num = 8;
            break;
        case 3:
            num = 16;
            break;
        case 5:
            num = 32;
            break;
        case 6:
            num = 64;
            break;
        default:
            num = 4;
    }
    return num;
}
