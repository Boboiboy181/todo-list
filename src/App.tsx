import "./App.scss";
import Header from "./components/Header/Header";
import StatusList from "./components/StatusList/StatusList";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="main">
      <Header />
      <section className="body">
        <div className="todo-container">
          <StatusList />
          <TodoList />
          <button className="clear-all">Clear All</button>
        </div>
      </section>
    </div>
  );
}

export default App;
