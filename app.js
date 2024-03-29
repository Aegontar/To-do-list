const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

const generateTemplate = todo => {

const html =  `
<li class="list-group-item d-flex justify-content-between align-items-center">
  <span>${todo}</span>
   <i class="fas fa-edit edit"></i>
  <i class="far fa-trash-alt delete"></i>
  </li>
`;

list.innerHTML += html;

};

addForm.addEventListener('submit', e => {

e.preventDefault();
const todo = addForm.add.value.trim();

if(todo.length) {
generateTemplate(todo);
addForm.reset();
}

});


// delete todos

list.addEventListener("click", e => {

if (e.target.classList.contains('delete')){
e.target.parentElement.remove();
}
  
});

// edit todos


list.addEventListener("click", e => {

if (e.target.classList.contains('edit')){

addForm.add.value = e.target.parentElement.textContent.trim();

e.target.parentElement.remove();

};

});
