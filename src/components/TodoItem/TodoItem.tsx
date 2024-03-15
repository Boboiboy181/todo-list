import { Todo } from "../../types/Todo";
import "./styles.scss";

type TodoItemProps = {
  item: Todo;
  deleteTodo: (id: string) => void;
};

const TodoItem = ({ item, deleteTodo }: TodoItemProps) => {
  const { content, id } = item;

  return (
    <li className="todo-item">
      <div className="todo-item-container">
        <div className="todo-item-content">
          <p>{content}</p>
        </div>
        <div className="todo-item-action">
          <select name="" id="">
            <option value="Incomplete">Incomplete</option>
            <option value="In-progress">In-progress</option>
            <option value="Completed">Completed</option>
          </select>
          <button className="todo-item-action__edit">
            <i className="fa-light fa-pen-to-square"></i>
          </button>
          <button onClick={() => deleteTodo(id)} className="todo-item-action__del">
            <i className="fa-regular fa-x"></i>
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
