import "./Styles.scss";
import { CTodo } from "./Todo";
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<section class="container">
  <form class="card todo-form">
      <input type="text" id="todo-input" placeholder="Enter todo name"/>
      <button type="submit"}>Add This ToDo</button>
  </form>
  <section class="card todo-list">
    <h3 class="empty-list-sign" data-visibility="true">There is no todo, Maybe add one.</h3>
    <h3 class="loading-list-sign" data-visibility="false">Refreshing the list, Please wait...</h3>
    <ul class="todo-list-inner"></ul>
  </section>
</section>  
`;

const app = new CTodo();
app.Load();

const form = document.querySelector(".todo-form")! as HTMLFormElement;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  app.Add();
});

