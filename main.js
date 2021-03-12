//Selectors
const Input = document.querySelector(".todo-app");
const Button = document.querySelector(".main-btn");
const dateElement = document.querySelector(".date");
const List = document.querySelector(".todo-list");

//Date
let options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
let today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-GB", options);


//EventListener
Button.addEventListener('click', addTodo);

//Functions

function addTodo(event) {
   event.preventDefault();
   //création de todo div avec une class
   const todoDiv = document.createElement("div");
   todoDiv.classList.add("todo");
   //création du liste
   const newTodo = document.createElement("li");
   newTodo.classList.add("todo-item");
   todoDiv.appendChild(newTodo);

   //button complété
   const checkedBtn = document.createElement("button");
   checkedBtn.innerHTML = '<i class="fas fa-check"></i>';
   checkedBtn.classList.add("check-btn");
   todoDiv.appendChild(checkedBtn);

   //button poubelle
   const binBtn = document.createElement("button");
   binBtn.innerHTML = '<i class="fas fa-trash"></i>';
   binBtn.classList.add("bin-btn");
   todoDiv.appendChild(binBtn);
   
   //On rajoute les nouvelle div à la liste déja présente.
   List.appendChild(todoDiv);
}