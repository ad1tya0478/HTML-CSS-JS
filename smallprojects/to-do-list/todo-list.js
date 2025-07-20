const todolist = [{
    name: 'make dinner',
    duedate: '2021-12-24'
},{
    name: 'Wash dishes',
    duedate: '2021-12-24'
}];

rendertodolist();

function rendertodolist() {

    let todolisthtml = '';

    for (let i = 0;i<todolist.length;i++){
        const todoObject = todolist[i];
        // const name = todoObject.name;
        //const duedate = todoObject.duedate;
        const { name, duedate} = todoObject;
        const html = `
        <div>${name}</div>
        <div> ${duedate} </div>
        <button onclick="
            todolist.splice(${i}, 1);
            rendertodolist();
        " class="delete-button">DELETE</button>
         `;
        todolisthtml += html;
    }

    console.log(todolisthtml);

    document.querySelector('.js-todo-list').innerHTML = todolisthtml;
}

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

    inputelement.value = '';

    rendertodolist();

}
