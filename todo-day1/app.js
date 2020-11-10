console.log('hello world');


const inpNewTodoTitle = document.getElementById('inp-newtodo-title');
inpNewTodoTitle.focus();

const btnNewTodo = document.getElementById('btn-newtodo');

function onNewTodoBtnClicked() {
    alert('button clicked');
}

btnNewTodo.addEventListener('click', onNewTodoBtnClicked);
