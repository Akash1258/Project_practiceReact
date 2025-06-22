import { FaFile } from "react-icons/fa";

export const File = ({ name, margin, id, handleDelete }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "5px",
        alignItems: "center",
      }}
    >
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
      <button
        type="button"
        onClick={() => handleDelete(id)}
        style={{
          border: "1px solid",
          padding: "4px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </div>
  );
};
