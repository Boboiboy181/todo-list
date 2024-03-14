import { Todo } from "../../types/Todo";
import TodoItem from "../TodoItem/TodoItem";
import "./styles.scss";

const todos: Todo[] = [
  {
    id: 1,
    content: "Learn React",
    status: "Completed",
  },
  {
    id: 2,
    content: "Learn TypeScript",
    status: "In-progress",
  },
  {
    id: 3,
    content: "Learn Redux",
    status: "Incomplete",
  },
];

const TodoList = () => {
  return (
    <ul className="todo-list-container">
      {todos.map((todo) => (
        <TodoItem key={todo.id} item={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
