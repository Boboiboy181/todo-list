import { Todo } from "../../types/Todo";
import TodoItem from "../TodoItem/TodoItem";
import "./styles.scss";

type TodoListProps = {
  todos: Todo[];
  updateTodo: (
    id: string,
    status?: "Incomplete" | "In-progress" | "Completed",
    content?: string
  ) => void;
  deleteTodo: (id: string) => void;
};

const TodoList = ({ todos, deleteTodo, updateTodo }: TodoListProps) => {
  return (
    <ul className="todo-list-container">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          item={todo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
