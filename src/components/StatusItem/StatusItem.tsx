import "./styles.scss";

type StatusItemProps = {
  status: string;
  count: number;
  setValue: React.Dispatch<
    React.SetStateAction<"All" | "Incomplete" | "In-progress" | "Completed">
  >;
};

const StatusItem = ({ status, count, setValue }: StatusItemProps) => {
  const handleFilter = () => {
    console.log(status);

    setValue(status as "All" | "Incomplete" | "In-progress" | "Completed");
  };

  return (
    <li className="status-item-container">
      <button onClick={handleFilter}>
        <span className="status-item-container__status">{status}</span>
        <span className="status-item-container__count">{count}</span>
      </button>
    </li>
  );
};

export default StatusItem;
