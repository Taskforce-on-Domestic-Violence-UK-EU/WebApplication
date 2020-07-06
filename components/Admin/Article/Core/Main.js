// Components
import { useEffect } from "react";
// Components
import Article from "../Content/Article";
// Contexts
import { AdminStore } from "../contexts/AdminContext";

function Main({ article }) {
  return (
    <AdminStore article={article}>
      <Article />
    </AdminStore>
  );
}

export default Main;
