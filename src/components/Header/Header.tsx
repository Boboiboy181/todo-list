import { v4 as uuidv4 } from "uuid";
import { Todo } from "../../types/Todo";
import "./styles.scss";

type HeaderProps = {
  addTodo: (todo: Todo) => void;
};

const Header = ({ addTodo }: HeaderProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputElement = e.currentTarget[0] as HTMLInputElement;

    if (inputElement.value === "") return;

    const newTodo: Todo = {
      id: uuidv4(),
      content: inputElement.value,
      status: "Incomplete",
    };

    addTodo(newTodo);
    // Clear the input
    inputElement.value = "";
  };

  return (
    <header className="header">
      <div className="header-container">
        <h1>Today</h1>
        <form className="input-container" onSubmit={handleSubmit}>
          <input type="text" placeholder="e.g. Do hackerrank" />
          <button type="submit">ADD TO-DO</button>
        </form>
      </div>
    </header>
  );
};

export default Header;
