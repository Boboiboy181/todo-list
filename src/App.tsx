import { Fragment, useEffect, useState } from "react";
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

  useEffect(() => {
    const data = localStorage.getItem("todos");
    if (data) {
      setTodos(JSON.parse(data));
    }
  }, []);

  const filteredTodos = todos.filter((todo) => {
    if (filterValue === "All") {
      return true;
    }
    return todo.status === filterValue;
  });

  const setData = (todos: Todo[]) => {
    setTodos(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (todo: Todo) => {
    setData([...todos, todo]);
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
    setData(newTodos);
  };

  const deleteTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setData(newTodos);
  };

  const clearAllCompletedTodos = () => {
    const newTodos = todos.filter((todo) => todo.status !== "Completed");
    setData(newTodos);
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
