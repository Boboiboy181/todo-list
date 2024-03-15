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
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
    }
  }, [isEditing]);

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newStatus = e.target.checked ? "Completed" : "Incomplete";
    updateTodo(id, newStatus);
  };

  const handleButtonChange = () => {
    const newStatus = status === "In-progress" ? "Incomplete" : "In-progress";
    updateTodo(id, newStatus);
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
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
          <input
            type="checkbox"
            ref={checkboxRef}
            onChange={(e) => handleCheckboxChange(e)}
            checked={status === "Completed"}
          />
          {isEditing ? (
            <input type="text" defaultValue={content} ref={inputRef} />
          ) : (
            <p>{content}</p>
          )}
        </div>
        <div className="todo-item-action">
          <span className={`${status}`}>{status}</span>
          <button
            onClick={handleButtonChange}
            className="todo-item-action__play"
          >
            {status === "In-progress" ? (
              <i className="fa-regular fa-pause"></i>
            ) : (
              <i className="fa-regular fa-play"></i>
            )}
          </button>

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
