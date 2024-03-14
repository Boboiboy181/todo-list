import StatusItem from "../StatusItem/StatusItem";

import "./styles.scss";

const StatusList = () => {
  return (
    <ul className="status-list-container">
      <StatusItem status="Incomplete" />
      <StatusItem status="In-progress" />
      <StatusItem status="Completed" />
    </ul>
  );
};

export default StatusList;
