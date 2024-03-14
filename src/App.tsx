import "./App.scss";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="main">
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
