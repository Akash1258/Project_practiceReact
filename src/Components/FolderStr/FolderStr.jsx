import { useState } from "react";
import { Folder } from "./Folder";
import { File } from "./File";

export const FolderStr = ({ node, margin }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div key={node?.id}>
      {node?.isFolder ? (
        <>
          <div onClick={() => setIsExpanded((prev) => !prev)}>
            <Folder name={node?.name} margin={margin} />
          </div>
          {isExpanded && (
            <div key={node?.id}>
              {node?.children?.map((item) => (
                <FolderStr key={item?.id} node={item} margin={margin + 10} />
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
