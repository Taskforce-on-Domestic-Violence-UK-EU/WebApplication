// Components
import Article from "../Article";
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
