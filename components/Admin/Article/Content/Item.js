import { useState, useContext, useRef, useEffect } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AddCircleIcon from "@material-ui/icons/AddCircle";
// Components
import Value from "./Value";
import EditModal from "../Core/Modals/EditModal";
import CreateModal from "../Core/Modals/CreateModal";
// Contexts
import { AdminContext } from "../contexts/AdminContext";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    "&:hover": {
      opacity: 0.9,
      cursor: "pointer",
    },
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
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: 10,
  },
}));

function Item({ item }) {
  const classes = useStyles();
  const [showEdit, setShowEdit] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const { getIndex } = useContext(AdminContext);

  // Ref

  const itemRef = useRef(null);
  const [displayButtons, setDisplayButtons] = useState(false);

  useEffect(() => {
    let event = itemRef.current;

    const handleHover = () => {
      event.addEventListener("mouseover", () => {
        setDisplayButtons(true);
      });
      event.addEventListener("mouseleave", () => {
        setDisplayButtons(false);
      });
      cleanUp();
    };

    const cleanUp = () => {
      event.removeEventListener("mouseover", () => {});
      event.removeEventListener("mouseleave", () => {});
    };

    handleHover();
  }, []);

  return (
    <div ref={itemRef} className={classes.wrapper}>
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
        <div
          style={{ opacity: displayButtons ? 0.9 : 0 }}
          className={classes.buttonContainer}
        >
          <IconButton onClick={() => setShowEdit(true)}>
            <MoreVertIcon />
          </IconButton>
          <IconButton onClick={() => setShowCreate(true)}>
            <AddCircleIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Item;
