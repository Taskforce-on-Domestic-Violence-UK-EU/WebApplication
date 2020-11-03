import React, { useState, useEffect } from "react";

// Material UI

import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";

// Hooks

import { useForm } from "../../../../hooks/useForm";

// Components

import UpdateButton from "./UpdateButton";
import DeleteButton from "./DeleteButton";

// Utils

import { updateWorkshop } from "../utils/updateWorkshop";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    marginTop: 25,
  },
  header: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    fontSize: 32,
    marginBottom: 40,
  },
  formHeader: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    fontSize: 16,
    width: "80%",
    marginBottom: 5,
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    width: "70%",
  },

  textField: {
    width: "100%",
    marginTop: 15,
    marginBottom: 30,
    flexGrow: 1,
    flexShrink: 1,
  },
  button: {
    borderRadius: 5,
    textDecoration: "none",
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    fontSize: 16,
    textAlign: "center",
    textTransform: "none",
    width: 140,
    backgroundColor: "black",
    color: "white",
    padding: 9.5,
    marginTop: 10,
    "&:hover": {
      opacity: 0.6,
    },
  },
}));

const Main = ({ workshop }) => {
  const classes = useStyles();

  const {
    errors,
    values,
    step,
    submitting,
    setStep,
    setSubmitting,
    handleChange,
    handleDirectChange,
    handleErrors,
  } = useForm(
    {
      title: workshop.title,
      description: workshop.description,
      date: workshop.date,
      image: workshop.image,
    },
    () => {}
  );

  return (
    <form className={classes.root}>
      <UpdateButton values={values} workshop={workshop} />
      <DeleteButton workshop={workshop} />
      <div className={classes.wrapper}>
        <header className={classes.header}>Workshop</header>
        <p className={classes.formHeader}>Title</p>
        <TextField
          className={classes.textField}
          name="title"
          value={values.title}
          onChange={(e) => handleChange(e)}
          error={errors.title ? true : false}
          helperText={errors.title}
          size={"small"}
        />
        <p className={classes.formHeader}>Description</p>
        <TextField
          className={classes.textField}
          name="description"
          value={values.description}
          onChange={(e) => handleChange(e)}
          error={errors.description ? true : false}
          helperText={errors.description}
          size={"small"}
          multiline
        />
        <p className={classes.formHeader}>Date</p>
        <TextField
          className={classes.textField}
          name="date"
          value={values.date}
          onChange={(e) => handleChange(e)}
          error={errors.date ? true : false}
          helperText={errors.date}
          size={"small"}
        />
        <p className={classes.formHeader}>Image</p>
        <TextField
          className={classes.textField}
          name="image"
          value={values.image}
          onChange={(e) => handleChange(e)}
          error={errors.image ? true : false}
          helperText={errors.image}
          size={"small"}
        />
      </div>
    </form>
  );
};

export default Main;
