import "./styles.scss";

const StatusItem = ({ status }: { status: string }) => {
  return (
    <li className="status-item-container">
      <button>
        <span className="status-item-container__status">{status}</span>
        <span className="status-item-container__count">2</span>
      </button>
    </li>
  );
};

export default StatusItem;
