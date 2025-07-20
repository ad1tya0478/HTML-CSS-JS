const todolist = [];

rendertodolist();

function rendertodolist() {

    let todolisthtml = '';

    todolist.forEach((todoObject, index) => {
        const { name, duedate} = todoObject;
        const html = `
        <div class="task-box">
        <div>${name}</div>
        <div> ${duedate} </div>
        <button  
        class="delete-button js-delete-todo-button">DELETE</button>
        </div>
         `;
        todolisthtml += html;

    });

    console.log(todolisthtml);

    document.querySelector('.js-todo-list').innerHTML = todolisthtml;

    document.querySelectorAll('.js-delete-todo-button')
        .forEach((deletebutton, index) => {
            deletebutton.addEventListener('click',()=>{
                todolist.splice(index, 1);
            rendertodolist();
            });
        });


    if (todolist.length === 0) {
    document.querySelector('.enter-tasks').textContent = 'Enter your tasks...!';
    }

}

document.querySelector('.js-add-todo-button')
.addEventListener('click', () => {
    addtodo();
});



function addtodo() {
    const inputelement = document.querySelector('.js-name-input');

    let name = inputelement.value; // value - text in the text box

    const dateinputelement = document.querySelector('.js-duedate-input');
    const duedate = dateinputelement.value;

    todolist.push({
      //  name: name,
      //  duedate: duedate
      name,
      duedate
    }
    );
    console.log(todolist);

    document.querySelector('.enter-tasks').textContent = 'Your Tasks.!';

    inputelement.value = '';

    rendertodolist();

}
