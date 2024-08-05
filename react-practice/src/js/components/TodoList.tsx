import * as React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList: React.FC = () => {
  const todos = [
    { id: 123, task: "掃除", person: "山田太郎", deadline: "明日まで" },
    { id: 456, task: "洗濯", person: "田中謙太", deadline: "明後日まで" },
    { id: 789, task: "買い物", person: "浅井じろう", deadline: "明後日まで" },
  ];

  return (
    <ul className="mt-4 ml-4 bg-emerald-100 p-4 rounded">
      <li className="grid grid-cols-3 font-bold">
        <div>タスク名</div>
        <div>担当者名</div>
        <div>締切</div>
      </li>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          task={todo.task}
          person={todo.person}
          deadline={todo.deadline}
        />
      ))}
    </ul>
  );
};
