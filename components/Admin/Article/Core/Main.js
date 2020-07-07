// Components
import { useEffect } from "react";
// Components
import Article from "../Content/Article";
import UpdateButton from "./UpdateButton";
import DeleteButton from "./DeleteButton";
import DetailsButton from "./DetailsButton";
// Contexts
import { AdminStore } from "../contexts/AdminContext";

function Main({ article }) {
  return (
    <AdminStore article={article}>
      <Article />
      <DetailsButton />
      <DeleteButton />
      <UpdateButton />
    </AdminStore>
  );
}

export default Main;
