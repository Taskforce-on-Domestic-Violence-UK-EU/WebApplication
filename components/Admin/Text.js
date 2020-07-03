import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import { useRef, useEffect } from "react";
import { IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Modal from "./Modal";

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

  text: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Frank Ruhl Libre, serif",
    fontWeight: 300,
    fontSize: 22,

    height: "100%",
    lineHeight: "32px",
  },
}));

function Text({ reRender, item, content, setContent }) {
  const classes = useStyles();
  const [edit, setEdit] = useState(false);
  const [display, setDisplay] = useState(true);

  const getIndex = () => content.indexOf(item);

  const update = (value) => {
    let copy = content;
    let index = getIndex();
    copy[index].content = value;
    setContent(copy);
  };

  const create = () => {
    let copy = content;
    let index = getIndex();
    let item = { type: "text", content: "new text paragraph" };
    copy.splice(index + 1, 0, item);
    reRender();
    setContent(copy);
  };

  const remove = () => {
    let copy = content;
    let index = getIndex();
    copy.splice(index, 1);
    setContent(copy);
    setDisplay(false);
  };

  if (display) {
    return (
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <Modal
            remove={remove}
            update={update}
            item={item}
            open={edit}
            setOpen={setEdit}
          />
          <p className={classes.text}>{item.content}</p>
          <div className={classes.buttonContainer}>
            <IconButton onClick={() => setEdit(true)}>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <IconButton onClick={() => create()}>
            <AddCircleIcon />
          </IconButton>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Text;
