import { Todo } from "../../types/Todo";
import TodoItem from "../TodoItem/TodoItem";
import "./styles.scss";

type TodoListProps = {
  todos: Todo[];
  deleteTodo: (id: string) => void;
};

const TodoList = ({ todos, deleteTodo }: TodoListProps) => {
  return (
    <ul className="todo-list-container">
      {todos.map((todo) => (
        <TodoItem key={todo.id} item={todo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
