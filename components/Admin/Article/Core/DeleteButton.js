import { useContext } from "react";
import Router from "next/router";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
// Utils
import { deleteArticle } from "../utils/deleteArticle";
// Contexts
import { AdminContext } from "../contexts/AdminContext";

const useStyles = makeStyles((theme) => ({
  floatingActionButton: {
    position: "fixed",
    bottom: 110,
    right: 40,
    fontFamily: "Noto Sans, sans serif",
    textTransform: "none",
  },
}));

const Main = () => {
  const classes = useStyles();
  const { article, content } = useContext(AdminContext);

  const remove = async () => {
    await deleteArticle(article);
    Router.push("/admin");
  };

  return (
    <Fab
      onClick={() => {
        remove();
      }}
      className={classes.floatingActionButton}
      color="primary"
      aria-label="add"
    >
      <DeleteIcon />
    </Fab>
  );
};

export default Main;
