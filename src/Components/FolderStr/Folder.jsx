import { useState } from "react";
import { FaFolder } from "react-icons/fa";

export const Folder = ({
  name,
  margin,
  setIsExpanded,
  id,
  handleAddNew,
  handleDelete,
}) => {
  const [addFileFolder, setAddFileFolder] = useState("");
  const [fileName, setFileName] = useState("");
  return (
    <>
      <div
        style={{
          margin: `10px ${margin || 0}px`,
          alignItems: "center",
          cursor: "pointer",
          display: "flex",
          gap: "10px",
        }}
      >
        <div
          style={{ display: "flex", gap: "5px" }}
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          <FaFolder />
          {name}
        </div>
        <button
          style={{
            border: "1px solid",
            padding: "4px",
            cursor: "pointer",
          }}
          type="button"
          onClick={() => setAddFileFolder("file")}
        >
          Add file
        </button>
        <button
          style={{
            border: "1px solid",
            padding: "4px",
            cursor: "pointer",
          }}
          type="button"
          onClick={() => setAddFileFolder("folder")}
        >
          Add Folder
        </button>
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
      {addFileFolder ? (
        <input
          style={{ margin: `10px ${margin || 10}px` }}
          type="text"
          onChange={(e) => {
            setFileName(e.target.value);
          }}
          onBlur={() => {
            if (fileName) {
              handleAddNew(id, {
                id: `${fileName}_${id}`,
                name: fileName,
                isFolder: addFileFolder === "folder",
                children: [],
              });
              setAddFileFolder("");
              setIsExpanded((prev) => true);
            }
          }}
        />
      ) : (
        ""
      )}
    </>
  );
};
