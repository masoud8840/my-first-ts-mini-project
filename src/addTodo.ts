import Todos from "./todos";
import Todo from "./todoInterface";
import RefreshTodos from "./refreshTodos";

export default function AddTodo(event: SubmitEvent) {
  event.preventDefault();
  const input = document.getElementById("todo-input")! as HTMLInputElement;
  if (input.value.trim() === "") return;

  const newTodo: Todo = {
    id: Math.random(),
    text: input.value,
    status: "pending",
  };

  Todos.push(newTodo);
  input.value = "";
  const emptyListSign = document.querySelector(
    ".empty-list-sign"
  )! as HTMLHeadingElement;
  if (Todos.length > 0) {
    emptyListSign.dataset.visibility = "false";
  }
  RefreshTodos();
}
