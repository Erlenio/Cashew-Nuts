function columnsClicked(pos) {
    let cnum = parseInt(number.innerText);
    if (isEmpty(columns[pos][0])) {
        columns[pos][0].setAttribute("id", "n-" + cnum);
        columns[pos][0].innerText = cnum;
    } else if ((!isEmpty(columns[pos][0]) && columns[pos][0].innerText == cnum) &&
        isEmpty(columns[pos][1])) {
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
            columns[pos][0].setAttribute("id", "n-" + (out + parseInt(columns[pos][0].innerText)));
            columns[pos][0].innerText = out + parseInt(columns[pos][0].innerText);
            columns[pos][1].setAttribute("id", "");
            columns[pos][1].innerText = "";
            updatecolumns[pos]();
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
            columns[pos][1].setAttribute("id", "n-" + (out + parseInt(columns[pos][1].innerText)));
            columns[pos][1].innerText = out + parseInt(columns[pos][1].innerText);
            columns[pos][2].setAttribute("id", "");
            columns[pos][2].innerText = "";
            updatecolumns[pos]();
        } else {
            columns[pos][2].setAttribute("id", "n-" + (cnum + parseInt(columns[pos][2].innerText)));
            columns[pos][2].innerText = cnum + parseInt(columns[pos][2].innerText);
        }

    } else if ((!isEmpty(columns[pos][2]) && columns[pos][2].innerText != cnum) &&
        isEmpty(columns[pos][3])) {
        columns[pos][3].setAttribute("id", "n-" + cnum);
        columns[pos][3].innerText = cnum;
    } else if ((!isEmpty(columns[pos][3]) && columns[pos][3].innerText == cnum) &&
        isEmpty(columns[pos][4])) {
        let out = cnum + parseInt(columns[pos][3].innerText);
        if (columns[pos][2].innerText == out) {
            columns[pos][2].setAttribute("id", "n-" + (out + parseInt(columns[pos][2].innerText)));
            columns[pos][2].innerText = out + parseInt(columns[pos][2].innerText);
            columns[pos][3].setAttribute("id", "");
            columns[pos][3].innerText = "";
            updatecolumns[pos]();
        } else {
            columns[pos][3].setAttribute("id", "n-" + (cnum + parseInt(columns[pos][3].innerText)));
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
            columns[pos][3].innerText = out + parseInt(columns[pos][3].innerText);
            columns[pos][4].setAttribute("id", "");
            columns[pos][4].innerText = "";
            updatecolumns[pos]();
        } else {
            columns[pos][4].setAttribute("id", "n-" + (cnum + parseInt(columns[pos][4].innerText)));
            columns[pos][4].innerText = cnum + parseInt(columns[pos][4].innerText);
        }
    }else{
        return;
    }
    genereteNumber();
}