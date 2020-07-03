import { useState, useEffect, useContext } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import { IconButton, Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
    paddingBottom: 30,
  },

  dialog: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  close: {
    width: "50px",
    height: "50px",
    marginTop: 1,
  },
  dialogActions: {
    zIndex: 2,
    justifyContent: "space-between",
    width: "100%",
    height: 65,
    backgroundColor: "white",
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

const Modal = ({ remove, update, item, open, setOpen }) => {
  const classes = useStyles();

  const [content, setContent] = useState("");

  useEffect(() => {
    setContent(item.content);
  }, [item]);

  // TODO : each modal is referencing its data prop, is it making m copies if there are m modals?

  const handleClose = () => {
    setOpen(false);
  };

  const handelChange = (e) => {
    setContent(e.target.value);
  };

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

        <IconButton
          className={classes.close}
          onClick={async () => {
            await update(content);
            handleClose();
          }}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          onClick={async () => {
            await remove();
            handleClose();
          }}
        >
          <HighlightOffIcon />
        </IconButton>
      </DialogActions>
      <div className={classes.body}>
        {item.type === "text" ? (
          <TextField
            className={classes.textField}
            id="standard-helperText"
            multiline
            value={content}
            onChange={(e) => handelChange(e)}
          />
        ) : null}

        {item.type === "header" ? (
          <TextField
            className={classes.textField}
            id="standard-helperText"
            multiline
            value={content}
            onChange={(e) => handelChange(e)}
          />
        ) : null}
      </div>
    </Dialog>
  );
};

export default Modal;
