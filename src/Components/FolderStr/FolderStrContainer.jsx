import { useState } from "react";
import { FolderStr } from "./FolderStr";
import { folderData } from "./constant";

export const FolderStrContainer = () => {
  const [data, setData] = useState(folderData);
  return (
    <div>
      {data?.map((node) => (
        <FolderStr node={node} margin={0} />
      ))}
    </div>
  );
};
