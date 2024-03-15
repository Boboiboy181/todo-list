import { Fragment, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import StatusList from "./components/StatusList/StatusList";
import TodoList from "./components/TodoList/TodoList";
import { Todo } from "./types/Todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filterValue, setFilterValue] = useState<
    "All" | "Incomplete" | "In-progress" | "Completed"
  >("All");

  const filteredTodos = todos.filter((todo) => {
    if (filterValue === "All") {
      return true;
    }
    return todo.status === filterValue;
  });

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const updateTodo = (
    id: string,
    status: "Incomplete" | "In-progress" | "Completed"
  ) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.status = status;
      }
      return todo;
    });
    setTodos([...newTodos]);
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
          <StatusList todos={todos} setValue={setFilterValue} />
          {filteredTodos.length === 0 ? (
            <p className="empty">No todos yet. Add a todo to get started.</p>
          ) : (
            <Fragment>
              <TodoList
                todos={todos}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
              />
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
