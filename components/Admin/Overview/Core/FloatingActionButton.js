import Router from "next/router";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
// Utils
import { createArticle } from "../utils/createArticle";

const useStyles = makeStyles((theme) => ({
  floatingActionButton: {
    position: "fixed",
    bottom: 40,
    right: 40,
    fontFamily: "Noto Sans, sans serif",
    textTransform: "none",
  },
}));

const create = async () => {
  try {
    const response = await createArticle();
    if (response.status === "success") {
      const article = response.data;
      Router.push(`/admin/${article._id}`);
    }
  } catch (error) {
    console.log(error);
  }
};

const Main = () => {
  const classes = useStyles();

  return (
    <Fab
      onClick={create}
      className={classes.floatingActionButton}
      color="primary"
      aria-label="add"
    >
      <AddIcon />
    </Fab>
  );
};

export default Main;
