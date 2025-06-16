import { useState } from "react";
import { Folder } from "./Folder";
import { File } from "./File";

export const FolderStr = ({ node, margin, handleAddNew }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div key={node?.id}>
      {node?.isFolder ? (
        <>
          <div>
            <Folder
              name={node?.name}
              margin={margin}
              handleAddNew={handleAddNew}
              id={node?.id}
              setIsExpanded={setIsExpanded}
            />
          </div>
          {isExpanded && (
            <div key={node?.id}>
              {node?.children?.map((item) => (
                <FolderStr
                  key={item?.id}
                  node={item}
                  margin={margin + 10}
                  handleAddNew={handleAddNew}
                />
              ))}
            </div>
          )}
        </>
      ) : (
        <File name={node?.name} margin={margin} />
      )}
    </div>
  );
};
