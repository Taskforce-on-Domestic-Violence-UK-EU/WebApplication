import { useState, createContext, useEffect } from "react";

export const AdminContext = createContext(null);

export const AdminStore = ({ children, article }) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    console.log(content);
  }, [content]);

  const getIndex = (item) => content.indexOf(item);

  const createItem = (new_item, current) => {
    const index = getIndex(current);
    setContent((content) => [
      ...content.slice(0, index + 1),
      new_item,
      ...content.slice(index + 1),
    ]);
  };

  const update = (value, current) => {
    let index = getIndex(current);
    let item = content[index];
    item.content = value;
    setContent((content) => [
      ...content.slice(0, index),
      item,
      ...content.slice(index + 1),
    ]);
  };

  const remove = (item) => {
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
