var number = document.querySelector(".current");
var nnumber = document.querySelector(".next");
var nextNum = containesNum();
genereteNumber();

var col0 = document.querySelectorAll(".c0");
var col1 = document.querySelectorAll(".c1");
var col2 = document.querySelectorAll(".c2");
var col3 = document.querySelectorAll(".c3");
var col4 = document.querySelectorAll(".c4");

var diamondCount = (localStorage.getItem('diamond')) ? localStorage.getItem('diamond') : 100;



var diamondDisplay = document.querySelector(".diamond-num");

diamondDisplay.innerText = diamondCount

var hammer = document.querySelector(".hammer");
var swap = document.querySelector(".swap");

var isHammerEnable = false;
var isSwapEnable = false;

var blocksForSwap = [];

hammer.addEventListener("click", () => {
    if(isSwapEnable) return
    enableClicked()
})

swap.addEventListener("click", () => {
    if(isHammerEnable) return
    swapClicked()
})

var isChanged = false;

document.querySelector('.best-score').innerText = localStorage.getItem('score');

document.querySelector('.toggle').addEventListener('click', () => {
    isChanged = true;
    let helper = number.innerText;
    number.innerText = nnumber.innerText;
    number.id = nnumber.id;
    nnumber.id = 'n-' + helper;
    nnumber.innerText = helper;
    nextNum = helper;
})



function enableClicked(){
    isHammerEnable = !isHammerEnable
    if(isHammerEnable){
        hammer.classList.add("enable")
    }else{
        hammer.classList.remove("enable")
    }
}


function swapClicked(){
    isSwapEnable = !isSwapEnable
    if(isSwapEnable){
        swap.classList.add("enable")
    }else{
        swap.classList.remove("enable")
        blocksForSwap = []
    }
}
var columns = [col0, col1, col2, col3, col4];

let scores = 0;

//Column 0
for (let i = 0; i < col0.length; i++) {
    col0[i].addEventListener('click', (event) => { columnsClicked(0, event) });
}
//Column 1
for (let i = 0; i < col1.length; i++) {
    col1[i].addEventListener('click', (event) => { columnsClicked(1, event) });
}
//Column 2
for (let i = 0; i < col2.length; i++) {
    col2[i].addEventListener('click', (event) => { columnsClicked(2, event) });
}
//Column 3
for (let i = 0; i < col3.length; i++) {
    col3[i].addEventListener('click', (event) => { columnsClicked(3, event) });
}
//Column 4
for (let i = 0; i < col4.length; i++) {
    col4[i].addEventListener('click', (event) => { columnsClicked(4, event ) });
}

function getRow(event){
    let button = event.target;
    let row = button.classList[1];
    let rowPos = 0
    switch (row) {
        case "r0":
            rowPos = 0
            break;
        case "r1":
            rowPos = 1
            break;
        case "r2":
            rowPos = 2
            break;
        case "r3":
            rowPos = 3
            break;
        case "r4":
            rowPos = 4
            break;    
    }
    return rowPos;
}

function getColumn(element){
    let row = element.classList[0];
    let rowPos = 0
    switch (row) {
        case "c0":
            rowPos = 0
            break;
        case "c1":
            rowPos = 1
            break;
        case "c2":
            rowPos = 2
            break;
        case "c3":
            rowPos = 3
            break;
        case "c4":
            rowPos = 4
            break;    
    }
    return rowPos;
}

var streak = 0

//Column clicked
function columnsClicked(pos, event) {
    if(isHammerEnable) {
        if(isEmpty(columns[pos][getRow(event)])){
            alert("O bloco selecionado esta vazio");
        }else{
            columns[pos][getRow(event)].setAttribute("id", "");
            columns[pos][getRow(event)].innerText = "";
            enableClicked()
            updatecolumns(pos);
        }
        return
    }

    if(isSwapEnable) {

        if(isEmpty(columns[pos][getRow(event)])){
            alert("O bloco selecionado esta vazio");
        }else{
            
            if(blocksForSwap.length < 2){
                columns[pos][getRow(event)].classList.add("selected");
                blocksForSwap.push(columns[pos][getRow(event)])
                
            }
            if(blocksForSwap.length == 2){
                var tempValue = blocksForSwap[0].id
                var num = blocksForSwap[0].textContent
                blocksForSwap[0].setAttribute("id", blocksForSwap[1].id)
                blocksForSwap[0].innerText = blocksForSwap[1].textContent;

                blocksForSwap[1].setAttribute("id", tempValue)
                blocksForSwap[1].innerText = num;

                blocksForSwap[0].classList.remove('selected')
                blocksForSwap[1].classList.remove('selected')

                
                updateRows()
            
                updatecolumns(getColumn(blocksForSwap[0]))
                updatecolumns(getColumn(blocksForSwap[1]))
                
                swapClicked()
                
            }
        }

        return
    }



    let audio = new Audio('audio.mp3');
    audio.play();
    let cnum = parseInt(number.innerText);
    if (isEmpty(columns[pos][0])) {
        columns[pos][0].setAttribute("id", "n-" + cnum);
        columns[pos][0].innerText = cnum;
    } else if ((!isEmpty(columns[pos][0]) && columns[pos][0].innerText == cnum) &&
        isEmpty(columns[pos][1])) {
        //
        scores += cnum + parseInt(columns[pos][0].innerText);
        streak +=1
        //
        columns[pos][0].setAttribute("id", "n-" + (cnum + parseInt(columns[pos][0].innerText)));
        columns[pos][0].innerText = cnum + parseInt(columns[pos][0].innerText);

    } else if ((!isEmpty(columns[pos][0]) && columns[pos][0].innerText != cnum) &&
        isEmpty(columns[pos][1])) {
        columns[pos][1].setAttribute("id", "n-" + cnum);
        columns[pos][1].innerText = cnum;
    } else if ((!isEmpty(columns[pos][1]) && columns[pos][1].innerText == cnum) &&
        isEmpty(columns[pos][2])) {
        let out = cnum + parseInt(columns[pos][1].innerText)
        if (columns[pos][0].innerText == out) {
            scores += out + parseInt(columns[pos][0].innerText);
            streak +=1
            columns[pos][0].setAttribute("id", "n-" + (out + parseInt(columns[pos][0].innerText)));
            columns[pos][0].innerText = out + parseInt(columns[pos][0].innerText);
            columns[pos][1].setAttribute("id", "");
            columns[pos][1].innerText = "";
            updatecolumns(pos);
        } else {
            columns[pos][1].setAttribute("id", "n-" + out);
            columns[pos][1].innerText = out;
        }
    } else if ((!isEmpty(columns[pos][1]) && columns[pos][1].innerText != cnum) &&
        isEmpty(columns[pos][2])) {
        columns[pos][2].setAttribute("id", "n-" + cnum);
        columns[pos][2].innerText = cnum;
    } else if ((!isEmpty(columns[pos][2]) && columns[pos][2].innerText == cnum) &&
        isEmpty(columns[pos][3])) {
        let out = cnum + parseInt(columns[pos][2].innerText);
        if (columns[pos][1].innerText == out) {
            //
            scores += (out + parseInt(columns[pos][1].innerText));
            streak +=1
            //
            columns[pos][1].setAttribute("id", "n-" + (out + parseInt(columns[pos][1].innerText)));
            columns[pos][1].innerText = out + parseInt(columns[pos][1].innerText);
            columns[pos][2].setAttribute("id", "");
            columns[pos][2].innerText = "";
            updatecolumns(pos);
        } else {
            //
            scores += cnum + parseInt(columns[pos][2].innerText);
            streak +=1
            //
            columns[pos][2].setAttribute("id", "n-" + (cnum + parseInt(columns[pos][2].innerText)));
            columns[pos][2].innerText = cnum + parseInt(columns[pos][2].innerText);

        }/**
        I`m Here */

    } else if ((!isEmpty(columns[pos][2]) && columns[pos][2].innerText != cnum) &&
        isEmpty(columns[pos][3])) {
        columns[pos][3].setAttribute("id", "n-" + cnum);
        columns[pos][3].innerText = cnum;
    } else if ((!isEmpty(columns[pos][3]) && columns[pos][3].innerText == cnum) &&
        isEmpty(columns[pos][4])) {
        let out = cnum + parseInt(columns[pos][3].innerText);
        if (columns[pos][2].innerText == out) {
            columns[pos][2].setAttribute("id", "n-" + (out + parseInt(columns[pos][2].innerText)));
            //
            scores += out + parseInt(columns[pos][2].innerText);
            streak +=1
            //
            columns[pos][2].innerText = out + parseInt(columns[pos][2].innerText);
            columns[pos][3].setAttribute("id", "");
            columns[pos][3].innerText = "";
            updatecolumns(pos);
        } else {
            columns[pos][3].setAttribute("id", "n-" + (cnum + parseInt(columns[pos][3].innerText)));
            //score
            scores += (cnum + parseInt(columns[pos][3].innerText));
            streak +=1
            //
            columns[pos][3].innerText = cnum + parseInt(columns[pos][3].innerText);
        }

    } else if ((!isEmpty(columns[pos][3]) && columns[pos][2].innerText != cnum) &&
        isEmpty(columns[pos][4])) {
        columns[pos][4].setAttribute("id", "n-" + cnum);
        columns[pos][4].innerText = cnum;
    } else if ((!isEmpty(columns[pos][4]) && columns[pos][4].innerText == cnum)) {
        let out = cnum + parseInt(columns[pos][4].innerText);
        if (columns[pos][3].innerText == out) {
            columns[pos][3].setAttribute("id", "n-" + (out + parseInt(columns[pos][3].innerText)));
            //
            scores += out + parseInt(columns[pos][3].innerText);
            streak +=1
            //
            columns[pos][3].innerText = out + parseInt(columns[pos][3].innerText);
            columns[pos][4].setAttribute("id", "");
            columns[pos][4].innerText = "";
            updatecolumns(pos);
        } else {
            scores += (cnum + parseInt(columns[pos][4].innerText));
            streak +=1
            columns[pos][4].setAttribute("id", "n-" + (cnum + parseInt(columns[pos][4].innerText)));
            columns[pos][4].innerText = cnum + parseInt(columns[pos][4].innerText);
        }
    }
    updateRows()
    genereteNumber();
    UpdateScore();
    if(streak >= 3){
        diamondCount +=10
        localStorage.setItem("diamond",diamondCount) 
    }
    console.log("Streak: "+streak);
    streak = 0
    if (isGameOver()) { 
        document.querySelector('.win-card').style.display = 'flex';
        scores = 0;
        streak = 0
     };
     
    document.querySelector('.score').innerText = scores;
}

document.querySelector('.bt-play').onclick = () =>{
    reset(); 
    document.querySelector('.win-card').style.display = 'none';
}


//Update
function updatecolumns(position) {
    for(let i = 0; i < 5; i++){
        for(let j = 0; j < 4; j++){
            if(isEmpty(columns[position][j]) && !isEmpty(columns[position][j+1])){
                let out = parseInt(columns[position][j+1].innerText);
                scores += out;
                streak +=1
                columns[position][j].setAttribute("id", "n-" + (out));
                columns[position][j].innerText = out;
                columns[position][j+1].setAttribute("id", "");
                columns[position][j+1].innerText = "";
                joinAfterColumnUpdate(position)
            }
        }
    }
    //columnsClicked(position);
    joinAfterColumnUpdate(position)
    updateRows();
    if (isGameOver()) alert('Game over'); 
}

function joinAfterColumnUpdate(position){
    for(let i = 0; i < 5; i++){
        for(let j = 0; j < 4; j++){
            if(columns[position][j].innerText == columns[position][j+1].innerText && !isEmpty(columns[position][j+1]) && !isEmpty(columns[position][j])){
                let out = parseInt(columns[position][j].innerText) + parseInt(columns[position][j+1].innerText);
                columns[position][j].setAttribute("id", "n-" + (out));
                columns[position][j].innerText = out;
                columns[position][j+1].setAttribute("id", "");
                columns[position][j+1].innerText = "";
            }
        }
    }
}

function updateRows() {
    if (col1[0].innerText == col0[0].innerText && !isEmpty(col0[0])) {
        let out = parseInt(col1[0].innerText) + parseInt(col0[0].innerText);
        scores += out;
        streak +=1
        col1[0].setAttribute("id", "n-" + (out));
        col1[0].innerText = out;
        col0[0].setAttribute("id", "");
        col0[0].innerText = "";
        updatecolumns(0);
        updatecolumns(1);
        rebuid(0);
    }

    if (col1[0].innerText == col2[0].innerText && !isEmpty(col2[0])) {
        let out = parseInt(col1[0].innerText) + parseInt(col2[0].innerText);
        scores += out;
        streak +=1
        col1[0].setAttribute("id", "n-" + (out));
        col1[0].innerText = out;
        col2[0].setAttribute("id", "");
        col2[0].innerText = "";
        updatecolumns(2);
        updatecolumns(1);
        rebuid(2)
    }

    if (col2[0].innerText == col3[0].innerText && !isEmpty(col3[0])) {
        let out = parseInt(col2[0].innerText) + parseInt(col3[0].innerText);
        scores += out;
        streak +=1
        col2[0].setAttribute("id", "n-" + (out));
        col2[0].innerText = out;
        col3[0].setAttribute("id", "");
        col3[0].innerText = "";
        updatecolumns(3);
        updatecolumns(2);
        rebuid(3)
    }

    if (col3[0].innerText == col4[0].innerText && !isEmpty(col4[0])) {
        let out = parseInt(col3[0].innerText) + parseInt(col4[0].innerText);
        scores += out;
        streak +=1
        col3[0].setAttribute("id", "n-" + (out));
        col3[0].innerText = out;
        col4[0].setAttribute("id", "");
        col4[0].innerText = "";
        updatecolumns(4);
        updatecolumns(3);
        rebuid(4)
    }

    //==================================================
    if (col1[1].innerText == col0[1].innerText && !isEmpty(col0[1])) {
        let out = parseInt(col1[1].innerText) + parseInt(col0[1].innerText);
        scores += out;
        streak +=1
        col1[1].setAttribute("id", "n-" + (out));
        col1[1].innerText = out;
        col0[1].setAttribute("id", "");
        col0[1].innerText = "";
        updatecolumns(0);
        updatecolumns(1);
        rebuid(0);
    }

    if (col1[1].innerText == col2[1].innerText && !isEmpty(col2[1])) {
        let out = parseInt(col1[1].innerText) + parseInt(col2[1].innerText);
        scores += out;
        streak +=1
        col1[1].setAttribute("id", "n-" + (out));
        col1[1].innerText = out;
        col2[1].setAttribute("id", "");
        col2[1].innerText = "";
        rebuid(2);
        updatecolumns(2);
        updatecolumns(1);
    }

    if (col2[1].innerText == col3[1].innerText && !isEmpty(col3[1])) {
        let out = parseInt(col2[1].innerText) + parseInt(col3[1].innerText);
        scores += out;
        streak +=1
        col2[1].setAttribute("id", "n-" + (out));
        col2[1].innerText = out;
        col3[1].setAttribute("id", "");
        col3[1].innerText = "";
        rebuid(3);
        updatecolumns(3);
        updatecolumns(2);

    }

    if (col3[1].innerText == col4[1].innerText && !isEmpty(col4[1])) {
        let out = parseInt(col3[1].innerText) + parseInt(col4[1].innerText);
        scores += out;
        streak +=1
        col3[1].setAttribute("id", "n-" + (out));
        col3[1].innerText = out;
        col4[1].setAttribute("id", "");
        col4[1].innerText = "";
        rebuid(4)
        updatecolumns(4);
        updatecolumns(3);
    }

    //=====================================================================
    //==================================================
    if (col1[2].innerText == col0[2].innerText && !isEmpty(col0[2])) {
        let out = parseInt(col1[2].innerText) + parseInt(col0[2].innerText);
        scores += out;
        col1[2].setAttribute("id", "n-" + (out));
        col1[2].innerText = out;
        col0[2].setAttribute("id", "");
        col0[2].innerText = "";
        updatecolumns(0);
        updatecolumns(1);
        rebuid(0);
    }

    if (col1[2].innerText == col2[2].innerText && !isEmpty(col2[2])) {
        let out = parseInt(col1[2].innerText) + parseInt(col2[2].innerText);
        scores += out;
        col1[2].setAttribute("id", "n-" + (out));
        col1[2].innerText = out;
        col2[2].setAttribute("id", "");
        col2[2].innerText = "";
        rebuid(2);
        updatecolumns(2);
        updatecolumns(1);
    }

    if (col2[2].innerText == col3[2].innerText && !isEmpty(col3[2])) {
        let out = parseInt(col2[2].innerText) + parseInt(col3[2].innerText);
        scores += out;
        col2[2].setAttribute("id", "n-" + (out));
        col2[2].innerText = out;
        col3[2].setAttribute("id", "");
        col3[2].innerText = "";
        rebuid(3);
        updatecolumns(3);
        updatecolumns(2);

    }

    if (col3[2].innerText == col4[2].innerText && !isEmpty(col4[2])) {
        let out = parseInt(col3[2].innerText) + parseInt(col4[2].innerText);
        scores += out;
        col3[2].setAttribute("id", "n-" + (out));
        col3[2].innerText = out;
        col4[2].setAttribute("id", "");
        col4[2].innerText = "";
        rebuid(4)
        updatecolumns(4);
        updatecolumns(3);
    }

    //=======================================================================================//==================================================
    if (col1[3].innerText == col0[3].innerText && !isEmpty(col0[3])) {
        let out = parseInt(col1[3].innerText) + parseInt(col0[3].innerText);
        scores += out;
        col1[3].setAttribute("id", "n-" + (out));
        col1[3].innerText = out;
        col0[3].setAttribute("id", "");
        col0[3].innerText = "";
        updatecolumns(0);
        updatecolumns(1);
        rebuid(0);
    }

    if (col1[3].innerText == col2[3].innerText && !isEmpty(col2[3])) {
        let out = parseInt(col1[3].innerText) + parseInt(col2[3].innerText);
        scores += out;
        col1[3].setAttribute("id", "n-" + (out));
        col1[3].innerText = out;
        col2[3].setAttribute("id", "");
        col2[3].innerText = "";
        rebuid(2);
        updatecolumns(2);
        updatecolumns(1);
    }

    if (col2[3].innerText == col3[3].innerText && !isEmpty(col3[3])) {
        let out = parseInt(col2[3].innerText) + parseInt(col3[3].innerText);
        scores += out;
        col2[3].setAttribute("id", "n-" + (out));
        col2[3].innerText = out;
        col3[3].setAttribute("id", "");
        col3[3].innerText = "";
        rebuid(3);
        updatecolumns(3);
        updatecolumns(2);

    }

    if (col3[3].innerText == col4[3].innerText && !isEmpty(col4[3])) {
        let out = parseInt(col3[3].innerText) + parseInt(col4[3].innerText);
        scores += out;
        col3[3].setAttribute("id", "n-" + (out));
        col3[3].innerText = out;
        col4[3].setAttribute("id", "");
        col4[3].innerText = "";
        rebuid(4)
        updatecolumns(4);
        updatecolumns(3);
    }

    //===========================================================//==================================================
    if (col1[4].innerText == col0[4].innerText && !isEmpty(col0[4])) {
        let out = parseInt(col1[4].innerText) + parseInt(col0[4].innerText);
        scores += out;
        col1[4].setAttribute("id", "n-" + (out));
        col1[4].innerText = out;
        col0[4].setAttribute("id", "");
        col0[4].innerText = "";
        updatecolumns(0);
        updatecolumns(1);
        rebuid(0);
    }

    if (col1[4].innerText == col2[4].innerText && !isEmpty(col2[4])) {
        let out = parseInt(col1[4].innerText) + parseInt(col2[4].innerText);
        scores += out;
        col1[4].setAttribute("id", "n-" + (out));
        col1[4].innerText = out;
        col2[4].setAttribute("id", "");
        col2[4].innerText = "";
        rebuid(2);
        updatecolumns(2);
        updatecolumns(1);
    }

    if (col2[4].innerText == col3[4].innerText && !isEmpty(col3[4])) {
        let out = parseInt(col2[4].innerText) + parseInt(col3[4].innerText);
        scores += out;
        col2[4].setAttribute("id", "n-" + (out));
        col2[4].innerText = out;
        col3[4].setAttribute("id", "");
        col3[4].innerText = "";
        rebuid(3);
        updatecolumns(3);
        updatecolumns(2);

    }

    if (col3[4].innerText == col4[4].innerText && !isEmpty(col4[4])) {
        let out = parseInt(col3[4].innerText) + parseInt(col4[4].innerText);
        scores += out;
        col3[4].setAttribute("id", "n-" + (out));
        col3[4].innerText = out;
        col4[4].setAttribute("id", "");
        col4[4].innerText = "";
        rebuid(4)
        updatecolumns(4);
        updatecolumns(3);
    }
    document.querySelector('.score').innerText = scores;
}

function rebuid(pos) {
    if (columns[pos][0].innerText == '' && columns[pos][1].innerText != '') {
        columns[pos][0].innerText = columns[pos][1].innerText;
        columns[pos][0].setAttribute("id", "n-" + columns[pos][1].innerText);

        columns[pos][1].setAttribute("id", "");
        columns[pos][1].innerText = "";
        updateRows();
        rebuid(pos);
    } else if (columns[pos][1].innerText == '' && columns[pos][2].innerText != '') {
        columns[pos][1].innerText = columns[pos][2].innerText;
        columns[pos][1].setAttribute("id", "n-" + columns[pos][2].innerText);
        columns[pos][2].setAttribute("id", "");
        columns[pos][2].innerText = "";
        updateRows();
        rebuid(pos);
    } else if (columns[pos][2].innerText == '' && columns[pos][3].innerText != '') {
        columns[pos][2].innerText = columns[pos][3].innerText;
        columns[pos][2].setAttribute("id", "n-" + columns[pos][3].innerText);
        columns[pos][3].setAttribute("id", "");
        columns[pos][3].innerText = "";
        updateRows();
        rebuid(pos);
    } else if (columns[pos][3].innerText == '' && columns[pos][4].innerText != '') {
        columns[pos][3].innerText = columns[pos][4].innerText;
        columns[pos][3].setAttribute("id", "n-" + columns[pos][4].innerText);
        columns[pos][4].setAttribute("id", "");
        columns[pos][4].innerText = "";
        updatecolumns(pos);
        rebuid(pos);
    }
}

function reset() {
    let nums = document.querySelectorAll('.num');
    for (let i = 0; i < nums.length; i++) {
        nums[i].innerText = '';
        nums[i].id = '';
    }
    UpdateScore();
    scores = 0;
    alert(localStorage.getItem('score'))
}

function UpdateScore() {
    let bestScore = localStorage.getItem('score');
    if(!bestScore){
        localStorage.setItem("score", 0)
        bestScore = 0
    }
    if (bestScore && scores > parseInt(bestScore)) {
        localStorage.setItem('score', scores);
        document.querySelector('.best-score').innerText = localStorage.getItem('score');
    }
    document.querySelector('.best-score-end').innerText = localStorage.getItem('score');
    document.querySelector('.c-score').innerText = scores;
    
}

function isGameOver() {
    let nums = document.querySelectorAll('.num');
    let isOver = true;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i].innerText.trim() == "") {
            isOver = false;
            break;
        }
    }
    return isOver;
}

function isEmpty(v) { return v.innerText == " " || v.innerText == "" }

function genereteNumber() {
    if (isChanged) {
        
        isChanged = false;
    } else {
        
    }
    
    let currentNum = nextNum;
    number.setAttribute("id", "n-" + currentNum);
    number.innerText = currentNum;
    nextNum = containesNum();
    nnumber.setAttribute("id", "n-" + nextNum);
    nnumber.innerHTML = `<span>${nextNum}</span> <i class='bx bxs-diamond' ></i>`;
}

function containesNum() {
    let nums = document.querySelectorAll('.num');
    let num = getNumber();
    let isEmpty = true;
    for (let i = 0; i < nums.length; i++) {

        if (parseInt(nums[i].innerText.trim()) == 64) {
            console.log('64 fouded' + num);
        }

        if ((parseInt(nums[i].innerText.trim()) == num || parseInt(nums[i].innerText.trim()) > num)) {
            return num;
        }
        if (nums[i].innerText != "") {
            isEmpty = false;
        }

    }
    if (isEmpty) { return 2 }else{return containesNum()}
    
}

function getNumber() {
    let num = 0;

    switch (Math.floor(Math.random() * 10)) {
        case 0:
            num = 2;
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
        case 4:
            num = 32;
            break;
        case 5:
            num = 64;
            break;
        /*case 6:
            num = 128;
            break;
        case 7:
            num = 256;
            break;
        case 8:
            num = 512;
            break;
        case 9:
            num = 1024;
            break;*/
        default:
            num = 4;
    }
    return num;
}