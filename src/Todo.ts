import { v4 as uuidV4 } from "uuid";
interface ITodo {
  id: string;
  title: string;
  completed: boolean;
  addedDate: Date;
}

export class CTodo {
  emptyListSign = document.querySelector("h3")!;
  listContainer = document.querySelector(
    ".todo-list-inner"
  )! as HTMLUListElement;
  input = document.getElementById("todo-input")! as HTMLInputElement;
  private Todos: Array<ITodo> = [];
  Save() {
    const stringfiedTodos = JSON.stringify(this.Todos);
    localStorage.setItem("TODOS", stringfiedTodos);
  }
  Load() {
    const savedTodos = localStorage.getItem("TODOS");
    if (savedTodos === null) {
      this.Todos = [];
    } else {
      this.Todos = JSON.parse(savedTodos);
    }

    this.RefreshDOM();
  }
  Add() {
    if (this.input.value.trim() === "") return;
    
    const newTodo: ITodo = {
      id: uuidV4(),
      title: this.input.value,
      completed: false,
      addedDate: new Date(),
    };

    this.Todos.push(newTodo);
    this.input.value = "";
    this.Save();
    this.RefreshDOM();
  }
  RefreshDOM() {
    this.listContainer.textContent = "";

    if (this.Todos.length > 0) {
      this.emptyListSign.style.display = "none";
    }

    this.Todos.map((todo, index) => {
      const li = document.createElement("li");
      li.id = `todo-${index}`;

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = todo.completed;

      checkbox.addEventListener("input", () => {
        todo.completed = checkbox.checked;
        this.Save();
      });

      const span = document.createElement("span");
      span.textContent = todo.title;

      li.append(checkbox, span);
      this.listContainer.appendChild(li);
    });
  }
}
