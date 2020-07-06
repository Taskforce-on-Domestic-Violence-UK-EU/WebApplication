// Components
import { useEffect } from "react";
// Components
import Article from "../Content/Article";
import UpdateButton from "./FloatingActionButton";
import DeleteButton from "./DeleteButton";
// Contexts
import { AdminStore } from "../contexts/AdminContext";

function Main({ article }) {
  return (
    <AdminStore article={article}>
      <Article />
      <DeleteButton />
      <UpdateButton />
    </AdminStore>
  );
}

export default Main;
