import { Todo } from "../../types/Todo";
import StatusItem from "../StatusItem/StatusItem";

import "./styles.scss";

type StatusListProps = {
  todos: Todo[];
  setValue: React.Dispatch<
    React.SetStateAction<"All" | "Incomplete" | "In-progress" | "Completed">
  >;
};

const statuses = ["All", "Incomplete", "In-progress", "Completed"];

const StatusList = ({ todos, setValue }: StatusListProps) => {
  return (
    <ul className="status-list-container">
      {statuses.map((status) => {
        return (
          <StatusItem
            key={status}
            status={status}
            count={
              status === "All"
                ? todos.length
                : todos.filter((todo) => todo.status === status).length
            }
            setValue={setValue}
          />
        );
      })}
    </ul>
  );
};

export default StatusList;
