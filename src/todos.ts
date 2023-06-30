import Todo from "./todoInterface";
let Todos: Array<Todo> = [];
function SetTodos(todos: Array<Todo>) {
  Todos = todos;
}
export { Todos, SetTodos };
