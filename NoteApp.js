var titleInput = document.getElementById('titleInput');
var textArea = document.getElementById('textArea');
var notesUl = document.getElementById('notesUl');
var noteDiv = document.getElementById('showNote');
var btn = document.getElementById('btn');

update();

function update() {
    if (localStorage.getItem("pending") != null) {
        let str = "";
        let l = JSON.parse(localStorage.getItem("pending"));
        for (let i = 0; i < l.length; i++) {
            str += `<li>${l[i][0]} <button class="titleBtn" onclick="show(${i})">Show</button> <button class="titleBtn" onclick="deleted(${i})">Delete</button></li>`;
        }
        notesUl.innerHTML = str;
    }
}

function show(i) {
    noteDiv.innerHTML = "";
    let l = JSON.parse(localStorage.getItem("pending"));
    noteDiv.innerHTML = l[i][1];
}

function deleted(ind) {
    let l = JSON.parse(localStorage.getItem("pending"));
    if(noteDiv.innerHTML==l[ind][1]){
        noteDiv.innerHTML="";
    }
    l.splice(ind, 1);
    localStorage.setItem("pending", JSON.stringify(l));
    update();
}

btn.addEventListener('click', () => {
    if (titleInput.value == "" && textArea.value == "") {
        titleInput.style.border = "3px red ridge";
        textArea.style.border = "3px red ridge";
    }
    else if (titleInput.value == "") {
        textArea.style.border = "3px ridge rgb(82,1,82)";
        titleInput.style.border = "3px red ridge";
    }
    else if (textArea.value == "") {
        titleInput.style.border = "3px ridge rgb(82,1,82)";
        textArea.style.border = "3px red ridge";
    }
    else if (localStorage.getItem("pending") == null) {
        localStorage.setItem("pending", JSON.stringify([[titleInput.value, textArea.value]]));
        titleInput.style.border = "3px ridge rgb(82,1,82)";
        textArea.style.border = "3px ridge rgb(82,1,82)";
        titleInput.value = "";
        textArea.value = "";
    }
    else {
        let l = JSON.parse(localStorage.getItem("pending"));
        l.push([titleInput.value, textArea.value]);
        localStorage.setItem("pending", JSON.stringify(l));
        titleInput.style.border = "3px ridge rgb(82,1,82)";
        textArea.style.border = "3px ridge rgb(82,1,82)";
        titleInput.value = "";
        textArea.value = "";
    }
    update();
})
