import { Fragment, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import StatusList from "./components/StatusList/StatusList";
import TodoList from "./components/TodoList/TodoList";
import { Todo } from "./types/Todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos([...newTodos]);
  };

  const clearAll = () => {
    setTodos([]);
  };

  return (
    <div className="main">
      <Header addTodo={addTodo} />
      <section className="body">
        <div className="todo-container">
          {todos.length === 0 ? (
            <p className="empty">No todos yet. Add a todo to get started.</p>
          ) : (
            <Fragment>
              <StatusList todos={todos} />
              <TodoList todos={todos} deleteTodo={deleteTodo} />
              <button onClick={clearAll} className="clear-all">
                Clear All
              </button>
            </Fragment>
          )}
        </div>
      </section>
    </div>
  );
}

export default App;
