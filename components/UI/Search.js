import { useState, useEffect } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",

    display: "flex",
    backgroundColor: "rgb(245, 245, 245)",
    borderRadius: 15,
    alignItems: "center",
    padding: 11,
    marginBottom: 90,
    "&:hover": {
      backgroundColor: "rgb(238, 240, 240)",
    },
  },

  searchIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  clearIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // marginRight: 12,
  },

  search: {
    fontFamily: "Open Sans, sans serif",
    fontSize: 100,
  },
}));

export default function Search({
  data = [],
  setResults,
  type,
  reset = () => {},
}) {
  const classes = useStyles();
  const [search, setSearch] = useState("");

  // const preformSearch = async (keyword, type) => {
  //   if (keyword.length > 0) {
  //     const req = await fetch(
  //       `https://taskforce-cms.vercel.app/api/search/${type}/${keyword}`
  //     );

  //     const res = await req.json();
  //     const data = res.status === "success" ? res.data : [];
  //     setResults(data);
  //   }
  // };

  const searchData = (list, value, attribute) => {
    return list.filter((item) => item[attribute].toLowerCase().includes(value));
  };

  const preformSearch = async (keyword, type) => {
    if (keyword.length > 0) {
      const filtered_data = searchData(data, keyword, "title");
      setResults(filtered_data);
    }
  };

  const handleChange = (e) => {
    let text = e.target.value;
    setSearch(text);
  };

  useEffect(() => {
    search.length === 0 ? reset() : () => {};
  }, [search]);

  return (
    <form
      className={classes.root}
      onSubmit={(e) => {
        e.preventDefault();
        preformSearch(search, type);
      }}
    >
      <IconButton
        onClick={() => preformSearch(search, type)}
        className={classes.serachIcon}
      >
        <SearchIcon />
      </IconButton>
      <TextField
        className={classes.search}
        onChange={(e) => handleChange(e)}
        id="filled-basic"
        fullWidth={true}
        value={search}
        InputProps={{ disableUnderline: true }}
      />
      {search.length !== 0 ? (
        <IconButton onClick={() => setSearch("")} className={classes.clearIcon}>
          <ClearIcon />
        </IconButton>
      ) : null}
    </form>
  );
}
