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
    status?: "Incomplete" | "In-progress" | "Completed",
    content?: string
  ) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          status: status || todo.status,
          content: content || todo.content,
        };
      }
      return todo;
    });
    setTodos([...newTodos]);
  };

  const deleteTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos([...newTodos]);
  };

  const clearAllCompletedTodos = () => {
    const newTodos = todos.filter((todo) => todo.status !== "Completed");
    setTodos([...newTodos]);
  };

  return (
    <div className="main">
      <Header addTodo={addTodo} />
      <section className="body">
        <div className="todo-container">
          <StatusList
            todos={todos}
            filterValue={filterValue}
            setValue={setFilterValue}
          />
          {filteredTodos.length === 0 ? (
            <p className="empty">No todos yet. Add a todo to get started.</p>
          ) : (
            <Fragment>
              <TodoList
                todos={filteredTodos}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
              />
              {(filterValue === "Completed" || filterValue === "All") && (
                <button onClick={clearAllCompletedTodos} className="clear-all">
                  <i className="fa-regular fa-trash"></i> Completed
                </button>
              )}
            </Fragment>
          )}
        </div>
      </section>
    </div>
  );
}

export default App;
