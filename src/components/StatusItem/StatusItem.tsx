import "./styles.scss";

type StatusItemProps = {
  status: string;
  count: number;
};

const StatusItem = ({ status, count }: StatusItemProps) => {
  return (
    <li className="status-item-container">
      <button>
        <span className="status-item-container__status">{status}</span>
        <span className="status-item-container__count">{count}</span>
      </button>
    </li>
  );
};

export default StatusItem;
