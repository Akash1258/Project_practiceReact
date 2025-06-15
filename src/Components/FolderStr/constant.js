export const folderData = [
  {
    id: 1,
    name: "public",
    isFolder: true,
    children: [
      {
        id: 2,
        name: "images",
        isFolder: true,
        children: [],
      },
    ],
  },
  {
    id: 3,
    name: "src",
    isFolder: true,
    children: [
      {
        id: 4,
        name: "Components",
        isFolder: false,
        children: [],
      },
      {
        id: 5,
        name: "Hooks",
        isFolder: true,
        children: [
          {
            id: 6,
            name: "useFetchData",
            isFolder: false,
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 7,
    name: "package.json",
    isFolder: false,
    children: [],
  },
];
