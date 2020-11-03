// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import { IconButton, Button, ButtonGroup } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useEffect } from "react";
// Contexts

const useStyles = makeStyles((theme) => ({
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    margin: 0,
    padding: 0,
  },

  dialog: {
    display: "flex",
    flexDirection: "column",
    margin: 0,
    padding: 0,
  },
  close: {
    width: "50px",
    height: "50px",
    marginTop: 1,
  },
  dialogActions: {
    zIndex: 2,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    height: 65,

    backgroundColor: "white",
    margin: 0,
    padding: 0,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    width: "100vw",
  },
  header: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Noto Sans, sans-serif",
    fontWeight: 700,
    fontSize: 18,
    textAlign: "center",
    margin: 0,
    marginLeft: 10,
    marginTop: 0,
  },
  arrowForwardIosIcon: {
    position: "fixed",
    top: "50%",
    right: "5%",
    color: "white",
  },
  arrowBackIosIcon: {
    position: "fixed",
    top: "50%",
    left: "5%",
    color: "white",
  },
  textField: {
    width: "80%",
    textDecoration: "none",
    color: "black",
    fontFamily: "Frank Ruhl Libre, serif",
    fontWeight: 300,
    fontSize: 22,
    lineHeight: "32px",
  },

  saveButton: {
    padding: 0,
    textTransform: "none",
    marginBottom: 5,
    color: "blue",
    margin: 0,
  },
}));

const Modal = ({ open, setOpen, newArticle, newWorkshop }) => {
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {}, [open]);

  return (
    <Dialog
      scroll="body"
      open={open}
      fullWidth={true}
      className={classes.dialog}
      maxWidth={"md"}
      onClose={handleClose}
    >
      <DialogActions className={classes.dialogActions}>
        <IconButton className={classes.close} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogActions>

      <div className={classes.body}>
        <ButtonGroup
          color="secondary"
          aria-label="outlined primary button group"
        >
          <Button onClick={() => newWorkshop()}>Workshop</Button>
          <Button onClick={() => newArticle()}>Article</Button>
        </ButtonGroup>
      </div>
    </Dialog>
  );
};

export default Modal;
