import { useState, useContext } from "react";
import Router from "next/router";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import DescriptionIcon from "@material-ui/icons/Description";
// Components
import DetailsModal from "./Modals/DetailsModal";
// Utils
import { updateArticle } from "../utils/updateArticle";
// Contexts
import { AdminContext } from "../contexts/AdminContext";

const useStyles = makeStyles((theme) => ({
  floatingActionButton: {
    position: "fixed",
    bottom: 180,
    right: 40,
    fontFamily: "Noto Sans, sans serif",
    textTransform: "none",
  },
}));

const UpdateButton = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { article, content } = useContext(AdminContext);

  const update = async () => {
    await updateArticle(article, content);
    Router.reload();
  };

  return (
    <div>
      <DetailsModal open={open} setOpen={setOpen} />
      <Fab
        onClick={() => {
          setOpen(true);
        }}
        className={classes.floatingActionButton}
        color="primary"
        aria-label="add"
      >
        <DescriptionIcon />
      </Fab>
    </div>
  );
};

export default UpdateButton;
