import { useState, useContext } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AddCircleIcon from "@material-ui/icons/AddCircle";
// Components
import Value from "./Value";
import EditModal from "./EditModal";
import CreateModal from "./CreateModal";
// Contexts
import { AdminContext } from "./contexts/AdminContext";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },

  container: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  text: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Frank Ruhl Libre, serif",
    fontWeight: 300,
    fontSize: 22,
    height: "100%",
    lineHeight: "32px",
  },
  header: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Frank Ruhl Libre, serif",
    fontWeight: 700,
    fontSize: 20,
    height: "100%",
    lineHeight: "32px",
  },
  imageContainer: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    marginBottom: "1vh",
  },
  image: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
  },
}));

function Item({ item }) {
  const classes = useStyles();
  const [showEdit, setShowEdit] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const { getIndex } = useContext(AdminContext);

  return (
    <div className={classes.wrapper}>
      {getIndex() === 0 ? (
        <div className={classes.buttonContainer}>
          <IconButton onClick={() => setCreate(true)}>
            <AddCircleIcon />
          </IconButton>
        </div>
      ) : null}
      <div className={classes.container}>
        <EditModal item={item} open={showEdit} setOpen={setShowEdit} />
        <CreateModal item={item} open={showCreate} setOpen={setShowCreate} />
        <Value item={item} />
        <div className={classes.buttonContainer}>
          <IconButton onClick={() => setShowEdit(true)}>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <IconButton onClick={() => setShowCreate(true)}>
          <AddCircleIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Item;
