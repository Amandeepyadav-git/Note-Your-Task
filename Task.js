function new1(){
     let textArea= document.createElement("textarea");
     textArea.className="newNote"
     textArea.placeholder="Add your note heree";
     document.getElementsByClassName("container")[0].appendChild(textArea);
     var values= document.getElementById("notespace").value;
     if(values!== ""){
     localStorage.setItem('notes',values);
     }
}
function del(){
    document.getElementById('notespace').value='';
    document.getElementsByClassName("container").value='';
}
function rem(){
        let container=document.querySelector(".container");
        let allNotes=document.querySelectorAll("textarea");
        if(allNotes.length>0){
        const end = allNotes[allNotes.length-1];
        if(end.value.trim()!==''){
            const ok= confirm('This note has text. Delete It?');
            if(!ok) return;
        }
        end.remove();
    }
}
function add(click){
 event.preventDefault();
const input= document.getElementsByClassName("input")[0];
const save=document.getElementsByClassName("set-btn")[0];
const task=document.getElementById("new-task");


const addTask=input.value;
if(input.value==="") return;

const li = document.createElement("li");
li.innerText=addTask;
li.classList.add("li")

const delEte= document.createElement("button");
delEte.innerText="❌";
delEte.classList.add("del")

delEte.addEventListener("click",()=>{
    li.remove();
})

li.appendChild(delEte);

task.appendChild(li);

input.value='';
} 