import "../css/index.css";
import {
  Todo,
  appendTodoList,
  getNewTodo,
  removeTodoListElement,
} from "./todo";
import { getElementById } from "./utils/dom";

let todoList: Todo[] = [];

document.addEventListener("DOMContentLoaded", () => {
  const registerButton = getElementById("register");
  registerButton.addEventListener("click", () => {
    // 新しいTODOをDOMから取得して、todoListに追加する
    todoList = [...todoList, getNewTodo()];
    // TODO一覧を表示する
    removeTodoListElement();
    appendTodoList(todoList);
  });
});
