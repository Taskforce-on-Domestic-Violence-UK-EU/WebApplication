import { useContext } from "react";
import Router from "next/router";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import SaveIcon from "@material-ui/icons/Save";
// Utils
import { updateArticle } from "../utils/updateArticle";
// Contexts
import { AdminContext } from "../contexts/AdminContext";

const useStyles = makeStyles((theme) => ({
  floatingActionButton: {
    position: "fixed",
    bottom: 40,
    right: 40,
    fontFamily: "Noto Sans, sans serif",
    textTransform: "none",
  },
}));

const Main = () => {
  const classes = useStyles();
  const { article, content } = useContext(AdminContext);

  const update = async () => {
    await updateArticle(article, content);
    Router.reload();
  };

  return (
    <Fab
      onClick={() => {
        update();
      }}
      className={classes.floatingActionButton}
      color="primary"
      aria-label="add"
    >
      <SaveIcon />
    </Fab>
  );
};

export default Main;
