import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import { useRef, useEffect } from "react";
import { IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Modal from "./Modal";
import CreateModal from "./CreateModal";
import { useState } from "react";

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

  subheader: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Frank Ruhl Libre, serif",
    fontWeight: 700,
    fontSize: 20,
    height: "100%",
    lineHeight: "32px",
  },
}));

function Header({ item, content, setContent }) {
  const classes = useStyles();
  const [edit, setEdit] = useState(false);
  const [create, setCreate] = useState(false);

  const getIndex = () => content.indexOf(item);

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
        <Modal
          setContent={setContent}
          item={item}
          open={edit}
          setOpen={setEdit}
        />
        <CreateModal
          setContent={setContent}
          content={content}
          item={item}
          open={create}
          setOpen={setCreate}
        />
        <h3 className={classes.subheader}>{item.content}</h3>
        <div className={classes.buttonContainer}>
          <IconButton onClick={() => setEdit(true)}>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <IconButton onClick={() => setCreate(true)}>
          <AddCircleIcon />
        </IconButton>
      </div>
    </div>
  );
}
export default Header;
