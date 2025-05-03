/*const input = document.getElementById('input-box');
const container = document.getElementById('list-container');
const addButton = document.getElementById('add-btn');

addButton.addEventListener('click', addTask);

function addTask() {
  if (input.value.trim() === "") {
    alert("Please write something!");
  } else {
    let li = document.createElement('li');
    li.textContent = input.value;
    container.appendChild(li);

    li.addEventListener("click", () => {
      li.classList.toggle("checked");
    });

    li.addEventListener("dblclick", () => {
      li.remove();
    });
  }

  input.value = "";
}*/

const input=document.getElementById('input-box');
const container=document.getElementById('list-container');
const addbutton=document.getElementById('add-btn');

addbutton.addEventListener('click',addTask);


function addTask(){
  if(input.value.trim()===""){
    alert("plz write something");
  }else{
    let li=document.createElement('li');
    li.innerHTML=input.value;
    container.appendChild(li);

   li.addEventListener("click",()=>{
    li.classList.toggle("checked");
   });
     
   li.addEventListener("dblclick",()=>{
    li.remove();
   });
  input.value="";
  }

}
