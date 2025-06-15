import { FaFile } from "react-icons/fa";

export const File = ({ name, margin }) => {
  return (
    <div
      style={{
        margin: `10px ${margin || 0}px`,
        display: "flex",
        gap: "5px",
        alignItems: "center",
      }}
    >
      <FaFile />
      {name}
    </div>
  );
};
