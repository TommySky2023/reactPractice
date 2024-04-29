let todoList = [];

// 入力された新しいTODOの値を取得し、todoList変数に代入する関数
const registerNewTodo = () => {
  const newTodoName = document.getElementById("new-todo-name");
  const newPerson = document.getElementById("new-person");
  const newDeadline = document.getElementById("new-deadline");
  todoList.push({
    todoName: newTodoName.value,
    person: newPerson.value,
    deadline: newDeadline.value,
  });
};

// TODO一覧を全て削除する関数
const removeTodoListElem = () => {
  const tbodyElem = document.getElementById("todo-list");
  while (tbodyElem.firstChild) {
    tbodyElem.firstChild.remove();
  }
};

// TODO一覧を表示する関数
const appendTodoListElem = () => {
  todoList.forEach((todo) => {
    // todoNameのtd要素を生成
    const todoNameTdElem = document.createElement("td");
    todoNameTdElem.textContent = todo.todoName;
    // personのtd要素を生成
    const personTdElem = document.createElement("td");
    personTdElem.textContent = todo.person;
    // deadlineのtd要素を生成
    const deadlineTdElem = document.createElement("td");
    deadlineTdElem.textContent = todo.deadline;

    // tr要素を生成し、td要素を挿入する
    const trElem = document.createElement("tr");
    trElem.appendChild(todoNameTdElem);
    trElem.appendChild(personTdElem);
    trElem.appendChild(deadlineTdElem);

    // tdody要素の中に、tr要素を挿入する
    const tbodyElem = document.getElementById("todo-list");
    tbodyElem.appendChild(trElem);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const registerButtonElem = document.getElementById("register");
  registerButtonElem.addEventListener("click", () => {
    // 入力されたTODOの値を取得しtodoList変数に代入
    registerNewTodo();
    // TODO一覧を全て削除
    removeTodoListElem();
    // TODO一覧を表示
    appendTodoListElem();
  });
});
