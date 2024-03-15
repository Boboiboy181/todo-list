import "./styles.scss";

type StatusItemProps = {
  status: string;
  count: number;
  filterValue: "All" | "Incomplete" | "In-progress" | "Completed";
  setValue: React.Dispatch<
    React.SetStateAction<"All" | "Incomplete" | "In-progress" | "Completed">
  >;
};

const StatusItem = ({
  status,
  count,
  filterValue,
  setValue,
}: StatusItemProps) => {
  const handleFilter = () => {
    setValue(status as "All" | "Incomplete" | "In-progress" | "Completed");
  };

  const active = filterValue === status ? "active" : "";

  return (
    <li className={`status-item-container ${active}`}>
      <button onClick={handleFilter}>
        <span className="status-item-container__status">{status}</span>
        <span className="status-item-container__count">{count}</span>
      </button>
    </li>
  );
};

export default StatusItem;
