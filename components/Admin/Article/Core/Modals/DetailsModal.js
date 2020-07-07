import { useState, useEffect, useContext } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
// Contexts
import { AdminContext } from "../../contexts/AdminContext";
import Item from "../../Content/Item";

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
  textField: {
    width: "80%",
    textDecoration: "none",
    color: "black",
    fontFamily: "Frank Ruhl Libre, serif",
    fontWeight: 300,
    fontSize: 22,
    lineHeight: "32px",
    marginBottom: 20,
  },
  formControl: {
    marginTop: 20,
    width: "80%",
    color: "black",
  },
}));

const Modal = ({ item, open, setOpen, setContent }) => {
  const classes = useStyles();
  const {
    update,
    title,
    setTitle,
    author,
    setAuthor,
    date,
    setDate,
    description,
    setDescription,
    content,
  } = useContext(AdminContext);

  const handleClose = () => {
    setOpen(false);
  };

  const onChange = (e, f) => {
    f(e.target.value);
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
        <IconButton
          className={classes.close}
          onClick={() => {
            update(value, item);
            handleClose();
          }}
        >
          <EditIcon />
        </IconButton>
        <IconButton className={classes.close} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogActions>
      <div className={classes.body}>
        <TextField
          className={classes.textField}
          label="Title"
          id="standard-helperText"
          multiline
          value={title}
          onChange={(e) => onChange(e, setTitle)}
        />
        <TextField
          className={classes.textField}
          label="Author"
          id="standard-helperText"
          multiline
          value={author}
          onChange={(e) => onChange(e, setAuthor)}
        />
        <TextField
          className={classes.textField}
          label="Date"
          id="standard-helperText"
          multiline
          value={date}
          onChange={(e) => onChange(e, setDate)}
        />
        <TextField
          className={classes.textField}
          label="Description"
          id="standard-helperText"
          multiline
          value={description}
          onChange={(e) => onChange(e, setDescription)}
        />
      </div>
    </Dialog>
  );
};

export default Modal;
