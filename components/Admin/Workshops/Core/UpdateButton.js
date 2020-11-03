import { useContext } from "react";
import Router from "next/router";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import SaveIcon from "@material-ui/icons/Save";
// Utils
import { updateWorkshop } from "../utils/updateWorkshop";

const useStyles = makeStyles((theme) => ({
  floatingActionButton: {
    position: "fixed",
    bottom: 40,
    right: 40,
    fontFamily: "Noto Sans, sans serif",
    textTransform: "none",
  },
}));

const UpdateButton = ({ workshop, values }) => {
  const classes = useStyles();

  const update = async (body) => {
    await updateWorkshop(workshop, body);
    Router.reload();
  };

  return (
    <Fab
      onClick={() => {
        update(values);
      }}
      className={classes.floatingActionButton}
      color="primary"
      aria-label="add"
    >
      <SaveIcon />
    </Fab>
  );
};

export default UpdateButton;
