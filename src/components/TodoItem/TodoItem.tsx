import { ChangeEvent } from "react";
import { Todo } from "../../types/Todo";
import "./styles.scss";

type TodoItemProps = {
  item: Todo;
  deleteTodo: (id: string) => void;
  updateTodo: (
    id: string,
    status: "Incomplete" | "In-progress" | "Completed"
  ) => void;
};

const TodoItem = ({ item, deleteTodo, updateTodo }: TodoItemProps) => {
  const { content, id, status } = item;

  const handleChangeStatus = (e: ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value as
      | "Incomplete"
      | "In-progress"
      | "Completed";
    updateTodo(id, newStatus);
  };

  return (
    <li className="todo-item">
      <div className="todo-item-container">
        <div className="todo-item-content">
          <p>{content}</p>
        </div>
        <div className="todo-item-action">
          <select defaultValue={status} onChange={(e) => handleChangeStatus(e)}>
            <option value="Incomplete">Incomplete</option>
            <option value="In-progress">In-progress</option>
            <option value="Completed">Completed</option>
          </select>
          <button className="todo-item-action__edit">
            <i className="fa-light fa-pen-to-square"></i>
          </button>
          <button
            onClick={() => deleteTodo(id)}
            className="todo-item-action__del"
          >
            <i className="fa-regular fa-x"></i>
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
