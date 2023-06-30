import DoTodo from "./doTodo";
import { Todos } from "./todos";

export default function RefreshTodos() {
  const listContainer = document.querySelector(
    ".todo-list-inner"
  )! as HTMLUListElement;
  listContainer.textContent = "";

  // The list is loading
  const loadingListSign = document.querySelector(
    ".loading-list-sign"
  )! as HTMLHeadingElement;
  loadingListSign.dataset.visibility = "true";

  Todos.map((todo, index) => {
    const li = document.createElement("li");
    li.id = `todo-${index}`;
    const button = document.createElement("button");
    button.textContent = todo.text;

    button.className = `status-${todo.status}`;
    button.addEventListener("click", DoTodo(todo.id));

    li.appendChild(button);
    listContainer.appendChild(li);
  });
  // The list has been loaded
  loadingListSign.dataset.visibility = "false";
}
