import * as React from "react";
import { TextField } from "../parts/TextField";
import { useState } from "react";
import { Todo } from "./type";

type Props = {
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export const NewTodoForm = ({ setTodoList }: Props) => {
  const [newTask, setNewTask] = useState<string>("");
  const [newPerson, setNewPerson] = useState<string>("");
  const [newDeadline, setNewDeadline] = useState<string>("");

  const addNewTodo = () => {
    setTodoList((prev: Todo[]) => [
      ...prev,
      {
        id: Date.now(),
        task: newTask,
        person: newPerson,
        deadline: newDeadline,
      },
    ]);

    setNewTask("");
    setNewPerson("");
    setNewDeadline("");
  };

  return (
    <div className="flex gap-1">
      <TextField
        id="new-task"
        label="タスク名"
        type="text"
        value={newTask}
        onChange={setNewTask}
      />
      <TextField
        id="new-person"
        label="担当者名"
        type="text"
        value={newPerson}
        onChange={setNewPerson}
      />
      <TextField
        id="new-deadline"
        label="締切"
        type="date"
        value={newDeadline}
        onChange={setNewDeadline}
      />
      <button className="border bg-cyan-400 w-16 rounded" onClick={addNewTodo}>
        追加
      </button>
    </div>
  );
};
