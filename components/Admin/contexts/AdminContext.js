import { useState, createContext } from "react";

export const AdminContext = createContext(null);

export const AdminStore = ({ children, article }) => {
  const [content, setContent] = useState([]);

  const getIndex = (item) => content.indexOf(item);

  const createItem = (item) => {
    const index = getIndex();
    setContent((content) => [
      ...content.slice(0, index + 1),
      item,
      ...content.slice(index + 1),
    ]);
  };

  const update = (value) => {
    let index = getIndex();
    let item = content[index];
    item.content = value;
    setContent((content) => [
      ...content.slice(0, index),
      item,
      ...content.slice(index + 1),
    ]);
  };

  const remove = () => {
    setContent((content) => content.filter((i) => i !== item));
  };

  return (
    <AdminContext.Provider
      value={{
        article,
        content,
        setContent,
        getIndex,
        createItem,
        update,
        remove,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
