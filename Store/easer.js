//==================================================
if(col1[4].innerText == col0[4].innerText && !isEmpty(col0[4])){
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

if(col1[4].innerText == col2[4].innerText && !isEmpty(col2[4])){
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

if(col2[4].innerText == col3[4].innerText && !isEmpty(col3[4])){
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

if(col3[4].innerText == col4[4].innerText && !isEmpty(col4[4])){
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


//UpdateColumn v1
function updatecolumns(position) {
    if (columns[position][0].innerText == columns[position][1].innerText &&
        !isEmpty(columns[position][1])) {
        let out = parseInt(columns[position][0].innerText) + parseInt(columns[position][1].innerText);
        scores += out;
        columns[position][0].setAttribute("id", "n-" + (out));
        columns[position][0].innerText = out;
        columns[position][1].setAttribute("id", "");
        columns[position][1].innerText = "";
        updateRows();
        updatecolumns(position);
    } else if (columns[position][1].innerText == columns[position][2].innerText &&
        !isEmpty(columns[position][2])) {
        let out = parseInt(columns[position][1].innerText) + parseInt(columns[position][2].innerText);
        scores += out;
        columns[position][1].setAttribute("id", "n-" + (out));
        columns[position][1].innerText = out;
        columns[position][2].setAttribute("id", "");
        columns[position][2].innerText = "";
        updateRows();
        updatecolumns(position);
    } else if (columns[position][2].innerText == columns[position][3].innerText &&
        !isEmpty(columns[position][3])) {
        let out = parseInt(columns[position][2].innerText) + parseInt(columns[position][3].innerText);
        scores += out;
        columns[position][2].setAttribute("id", "n-" + (out));
        columns[position][2].innerText = out;
        columns[position][3].setAttribute("id", "");
        columns[position][3].innerText = "";
        updateRows();
        updatecolumns(position);
    }
    updateRows();
    if (isGameOver()) alert('Game over');
    

}

//UpdateColumn v1.1
function updatecolumns(position) {
    if(isEmpty(columns[position][0]) && !isEmpty(columns[position][1])){
        let out = parseInt(columns[position][1].innerText);
        scores += out;
        columns[position][0].setAttribute("id", "n-" + (out));
        columns[position][0].innerText = out;
        columns[position][1].setAttribute("id", "");
        columns[position][1].innerText = "";
    }
    updateRows();
    if (isGameOver()) alert('Game over');
    
}

function joinafterColumnUpdate(position){
    for(let i = 0; i < 5; i++){
        for(let j = 0; j < 4; j++){
            if(columns[j][j+1].innerText == columns[j][j+1].innerText && !isEmpty(columns[j+1]) && !isEmpty(columns[j])){
                let out = parseInt(columns[position][0].innerText) + parseInt(columns[position][1].innerText);
                columns[position][j].setAttribute("id", "n-" + (out));
                columns[position][j].innerText = out;
                columns[position][j+1].setAttribute("id", "");
                columns[position][j+1].innerText = "";
            }
        }
    }
}


//UpdateColumn v1.1.1
function updatecolumns(position) {
    for(let i = 0; i < 5; i++){
        for(let j = 0; j < 4; j++){
            if(isEmpty(columns[position][j]) && !isEmpty(columns[position][j+1])){
                let out = parseInt(columns[position][j+1].innerText);
                scores += out;
                columns[position][j].setAttribute("id", "n-" + (out));
                columns[position][j].innerText = out;
                columns[position][j+1].setAttribute("id", "");
                columns[position][j+1].innerText = "";
            }
        }
    }
    updateRows();
    if (isGameOver()) alert('Game over'); 
}

