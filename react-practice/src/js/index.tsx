import * as React from "react";
import { createRoot } from "react-dom/client";
import { TodoList } from "./components/TodoList";

const root = createRoot(document.getElementById("app")!);
root.render(<TodoList />);
