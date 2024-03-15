import { Todo } from "../../types/Todo";
import StatusItem from "../StatusItem/StatusItem";

import "./styles.scss";

type StatusListProps = {
  todos: Todo[];
};

const StatusList = ({ todos }: StatusListProps) => {
  const countIncomplete = todos.filter(
    (todo) => todo.status === "Incomplete"
  ).length;

  const countInProgress = todos.filter(
    (todo) => todo.status === "In-progress"
  ).length;

  const countCompleted = todos.filter(
    (todo) => todo.status === "Completed"
  ).length;

  return (
    <ul className="status-list-container">
      <StatusItem status="Incomplete" count={countIncomplete}/>
      <StatusItem status="In-progress"count={countInProgress}/>
      <StatusItem status="Completed" count={countCompleted}/>
    </ul>
  );
};

export default StatusList;
