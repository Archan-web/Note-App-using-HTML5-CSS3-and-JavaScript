var title=document.getElementById("titleInput");
var text=document.getElementById("textArea");
var btn=document.getElementById("btn");
var ulEle=document.getElementById("notesUl");
var textNote=document.getElementById("showNote");

update();

function getUpdate(){
    if(localStorage.getItem("notes")==null){
        var l=[[title.value, text.value]];
        localStorage.setItem("notes",JSON.stringify(l));
    }
    else{
        var li=JSON.parse(localStorage.getItem("notes"));
        li.push([title.value,text.value]);
        localStorage.setItem("notes",JSON.stringify(li));
    }
    title.value="";
    text.value="";
    update();
}

function update(){
    if(localStorage.getItem("notes")!=null){
        var temp= JSON.parse(localStorage.getItem("notes"));
        var str="";
        for(let i=0;i<temp.length;i++){
            str+=`<li>${i+1}. ${temp[i][0]} <button onclick="show(${i})" class="titleBtn">Show</button><button onclick="deleted(${i})" class="titleBtn">Delete</button></li>`;
        }
        ulEle.innerHTML=str;
    }
}

function deleted(index){
    var items= JSON.parse(localStorage.getItem("notes"));
    if(textNote.innerHTML==items[index][1]){
        textNote.innerHTML="";
    }
    items.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(items));
    update();
}

function show(ind){
    TextEncoder.innerHTML="";
    var itm= JSON.parse(localStorage.getItem("notes"));
    textNote.innerHTML=itm[ind][1];
    localStorage.setItem("notes",JSON.stringify(itm));
}

btn.addEventListener("click",getUpdate);