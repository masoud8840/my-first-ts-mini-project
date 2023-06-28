import "./Styles.scss";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <section class="container">
    <form class="card todo-form">
      <input type="text" id="todo-input" placeholder="Enter todo name"/>
      <button type="submit">Add This ToDo</button>
  </form>
  </section>  
`;

// setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
