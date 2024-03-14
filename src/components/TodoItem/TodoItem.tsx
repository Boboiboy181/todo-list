import { Todo } from "../../types/Todo";
import "./styles.scss";

const TodoItem = ({ item }: { item: Todo }) => {
  const { content } = item;

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
          <button className="todo-item-action__del">
            <i className="fa-regular fa-x"></i>
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
