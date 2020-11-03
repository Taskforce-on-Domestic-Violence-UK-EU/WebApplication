import Router from "next/router";
import { useState } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
// Utils
import { createArticle } from "../utils/createArticle";
import { createWorkshop } from "../utils/createWorkshop";
// Components
import CreateModal from "./CreateModal";

const useStyles = makeStyles((theme) => ({
  floatingActionButton: {
    position: "fixed",
    bottom: 40,
    right: 40,
    fontFamily: "Noto Sans, sans serif",
    textTransform: "none",
  },
}));

const newArticle = async () => {
  try {
    const response = await createArticle();
    if (response.status === "success") {
      const article = response.data;
      Router.push(`/admin/articles/${article._id}`);
    }
  } catch (error) {
    console.log(error);
  }
};

const newWorkshop = async () => {
  try {
    const response = await createWorkshop();
    if (response.status === "success") {
      const workshop = response.data;
      Router.push(`/admin/workshops/${workshop._id}`);
    }
  } catch (error) {
    console.log(error);
  }
};

const Main = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <Fab
      onClick={() => setOpen(true)}
      className={classes.floatingActionButton}
      color="primary"
      aria-label="add"
    >
      <CreateModal
        open={open}
        setOpen={setOpen}
        newArticle={newArticle}
        newWorkshop={newWorkshop}
      />
      <AddIcon />
    </Fab>
  );
};

export default Main;
