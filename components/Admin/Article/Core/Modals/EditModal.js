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
// Contexts
import { AdminContext } from "../../contexts/AdminContext";

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
  },
}));

const Modal = ({ item, open, setOpen, setContent }) => {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const { update, remove } = useContext(AdminContext);

  useEffect(() => {
    setValue(item.content);
  }, [item]);

  const handleClose = () => {
    setOpen(false);
  };

  const onChange = (e) => {
    setValue(e.target.value);
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
          onClick={() => {
            remove(item);
            handleClose();
          }}
        >
          <DeleteForeverIcon />
        </IconButton>
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
          id="standard-helperText"
          multiline
          value={value}
          onChange={(e) => onChange(e)}
        />
      </div>
    </Dialog>
  );
};

export default Modal;
