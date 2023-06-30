import { SetTodos, Todos } from "./todos";

export default function DeleteTodo(todoId: number) {
  let newTodos = Todos.filter((todo) => todo.id !== todoId);
  SetTodos(newTodos);
}
