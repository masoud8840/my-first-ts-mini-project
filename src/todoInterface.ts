export default interface Todo {
  id: number;
  text: string;
  status: "pending" | "done";
}
