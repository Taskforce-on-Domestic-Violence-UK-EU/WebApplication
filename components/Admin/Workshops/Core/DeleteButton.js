import { useContext } from "react";
import Router from "next/router";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
// Utils
import { deleteWorkshop } from "../utils/deleteWorkshop";
// Contexts

const useStyles = makeStyles((theme) => ({
  floatingActionButton: {
    position: "fixed",
    bottom: 110,
    right: 40,
    fontFamily: "Noto Sans, sans serif",
    textTransform: "none",
  },
}));

const Main = ({ workshop }) => {
  const classes = useStyles();

  const remove = async () => {
    await deleteWorkshop(workshop);
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
