import { FaFolder } from "react-icons/fa";

export const Folder = ({ name, margin }) => {
  return (
    <div
      style={{
        margin: `10px ${margin || 0}px`,
        display: "flex",
        gap: "5px",
        alignItems: "center",
        cursor: "pointer",
      }}
      // onClick={() => handleExpanded()}
    >
      <FaFolder />
      {name}
    </div>
  );
};
