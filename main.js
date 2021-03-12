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
List.addEventListener('click', deleteChecked);

//Functions

function addTodo(event) {
   event.preventDefault();
   //création de todo div avec une class
   const todoDiv = document.createElement("div");
   todoDiv.classList.add("todo");
   //création du liste
   const newTodo = document.createElement("li");
   newTodo.innerHTML = Input.value;
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

   //Efface l'input après chaque ajoute
   Input.value = " ";
}

function deleteChecked(e) {
   const item = e.target;
   const todo = item.parentElement;
   if(item.classList[0] === "bin-btn") {
      todo.remove();
   }
   //liste vérifié comme etant finie
   const checked = item.parentElement;
   if(item.classList[0] === "check-btn") {checked.classList.toggle("checked")}
}

