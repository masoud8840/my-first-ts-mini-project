import RefreshTodos from "./refreshTodos";
import Todos from "./todos";

export default function DoTodo(updatedTodoStatusId: number) {
  return function () {
    Todos.map((todo) => {
      if (todo.id === updatedTodoStatusId) {
        if (todo.status === "pending") {
          todo.status = "done";
        } else {
          todo.status = "pending";
        }
      }
    });
    RefreshTodos();
  };
}
