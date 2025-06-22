import { useState } from "react";
import { FolderStr } from "./FolderStr";
import { folderData } from "./constant";

export const FolderStrContainer = () => {
  const [data, setData] = useState(folderData);

  const handleAddNew = (parentId, itemToAdd) => {
    let updated = false;
    const findAndAddNode = (node) => {
      return node?.map((item) => {
        if (updated) return item;

        if (item?.id === parentId) {
          updated = true;
          return { ...item, children: [...(item.children || []), itemToAdd] };
        } else if (item?.children) {
          return {
            ...item,
            children: findAndAddNode(item.children),
          };
        }
        return item;
      });
    };

    const updatedNode = findAndAddNode(data);
    setData([...(updatedNode || [])]);
  };

  const handleDelete = (idToDelete) => {
    const findByIdAndDelete = (node) => {
      return node
        .filter((item) => item?.id !== idToDelete)
        .map((item) => ({
          ...item,
          children: item?.children ? findByIdAndDelete(item.children) : [],
        }));
    };
    const result = findByIdAndDelete(data);
    setData([...(result || [])]);
  };

  return (
    <div>
      {data?.map((node) => (
        <FolderStr
          node={node}
          margin={0}
          handleAddNew={handleAddNew}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};
