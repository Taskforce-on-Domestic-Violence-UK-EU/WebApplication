// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import { IconButton, Button, ButtonGroup } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    margin: 0,
    padding: 0,
  },

  dialog: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    margin: 0,
    padding: 0,
  },
  close: {
    width: "50px",
    height: "50px",
    marginTop: 15,
    marginRight: 10,
  },
  dialogActions: {
    zIndex: 2,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    height: 50,
    backgroundColor: "white",
    margin: 0,
    padding: 0,
  },
  imageContainer: {
    display: "flex",
    width: "80%",
    height: "auto",
    alignItems: "center",
    marginBottom: "1vh",
  },
  image: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
  },
}));

const ImageModal = ({ image, open, setOpen }) => {
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      scroll="paper"
      open={open}
      fullWidth={true}
      className={classes.dialog}
      fullScreen={true}
      onClose={handleClose}
    >
      <DialogActions className={classes.dialogActions}>
        <IconButton className={classes.close} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogActions>

      <div className={classes.body}>
        <div className={classes.imageContainer}>
          <img className={classes.image} src={image} alt="image" />
        </div>
      </div>
    </Dialog>
  );
};

export default ImageModal;
