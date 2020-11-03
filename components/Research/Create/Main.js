import React, { useState, useEffect } from "react";

// Material UI

import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";

// Hooks

import { useForm } from "../../../hooks/useForm";

// Components

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    paddingTop: 100,
  },
  header: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    fontSize: 50,
    width: "80%",
    marginBottom: 75,
  },
  formHeader: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 400,
    fontSize: 18,
    width: "80%",
    marginBottom: 5,
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    width: "70%",
  },
  textField: {
    width: 275,
    marginTop: 10,
    marginBottom: 30,
    flexGrow: 1,
    flexShrink: 1,
  },
  button: {
    borderRadius: 100,
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    fontSize: 16,
    textTransform: "none",
    width: 150,
    marginTop: 30,
    backgroundColor: "black",
    color: "white",
    padding: 10,
  },
}));

const Main = ({}) => {
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
      title: "",
      description: "",
      date: "",
      image: "",
    },
    () => {}
  );

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <header className={classes.header}>Create New Article</header>
        <p className={classes.formHeader}>Title</p>
        <TextField
          className={classes.textField}
          name="title"
          value={values.title}
          onChange={(e) => handleChange(e)}
          error={errors.title ? true : false}
          helperText={errors.title}
          size={"small"}
          variant={"outlined"}
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
          variant={"outlined"}
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
          variant={"outlined"}
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
          variant={"outlined"}
        />
      </div>
      <Button
        className={classes.button}
        variant={"contained"}
        onClick={() => {}}
      >
        Next
      </Button>
    </div>
  );
};

export default Main;
