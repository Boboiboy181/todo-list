import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Todo } from "../../types/Todo";
import "./styles.scss";

type TodoItemProps = {
  item: Todo;
  deleteTodo: (id: string) => void;
  updateTodo: (
    id: string,
    status?: "Incomplete" | "In-progress" | "Completed",
    content?: string
  ) => void;
};

const TodoItem = ({ item, deleteTodo, updateTodo }: TodoItemProps) => {
  const { content, id, status } = item;

  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
    }
  }, [isEditing]);

  const handleChangeStatus = (e: ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value as
      | "Incomplete"
      | "In-progress"
      | "Completed";
    updateTodo(id, newStatus);
  };

  const handleOpenEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    const content = inputRef.current?.value || "";

    if (!content) return;

    updateTodo(id, status, content);
    setIsEditing(false);
  };

  const isCompleted = status === "Completed" ? "completed" : "";

  return (
    <li className={`todo-item ${isCompleted}`}>
      <div className="todo-item-container">
        <div className="todo-item-content">
          {isEditing ? (
            <input type="text" defaultValue={content} ref={inputRef} />
          ) : (
            <p>{content}</p>
          )}
        </div>
        <div className="todo-item-action">
          <select defaultValue={status} onChange={(e) => handleChangeStatus(e)}>
            <option value="Incomplete">Incomplete</option>
            <option value="In-progress">In-progress</option>
            <option value="Completed">Completed</option>
          </select>

          {isEditing ? (
            <button onClick={handleSaveEdit} className="todo-item-action__edit">
              <i className="fa-regular fa-check"></i>
            </button>
          ) : (
            <button onClick={handleOpenEdit} className="todo-item-action__edit">
              <i className="fa-light fa-pen-to-square"></i>
            </button>
          )}

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
