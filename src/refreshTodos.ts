import Todos from "./todos";

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
    button.classList.add(`status-${todo.status}`);

    li.appendChild(button);
    listContainer.appendChild(li);
  });
  // The list has been loaded
  loadingListSign.dataset.visibility = "false";
}
