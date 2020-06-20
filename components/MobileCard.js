import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Chip from "@material-ui/core/Chip";
import CardContent from "@material-ui/core/CardContent";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexWrap: "wrap",
    height: "100%",
    width: "100vw",
    padding: 0,
    borderRadius: 0,
    border: 0,
    boxShadow: "none",
  },

  innerWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    height: "100%",
    width: "100%",
    flexWrap: "wrap",
    padding: 0,
    "&:hover": {
      opacity: 0.8,
      cursor: "pointer",
    },
  },
  imageContainer: {
    display: "flex",
    width: "100%",
    minHeight: 200,
    alignItems: "center",
    padding: 0,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  content: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    marginTop: "1rem",
    padding: 20,
  },

  title: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Playfair Display, serif",
    fontSize: 22,
    textAlign: "left",
    fontWeight: 700,
    margin: 0,
    width: "90%",
  },
  details: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    marginTop: 0,
    marginBottom: 15,
  },
  author: {
    color: "black",
    fontFamily: "Frank Ruhl Libre, serif",
    fontWeight: 500,
    fontSize: 14,
    margin: 0,
    marginRight: 25,
  },
  date: {
    color: "black",
    fontFamily: "Frank Ruhl Libre, serif",
    fontWeight: 500,
    fontSize: 14,
    margin: 0,
  },
  description: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Frank Ruhl Libre, serif",
    fontWeight: 300,
    fontSize: 16,
    maxWidth: "90%",
    marginTop: 15,
  },
  chip: {
    marginRight: theme.spacing(1),
    paddingLeft: 5,
    paddingRight: 5,
    fontFamily: "Frank Ruhl Libre, serif",
    fontWeight: 700,
    backgroundColor: "#E5E5E5",
  },
  chipArray: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "90%",
    marginTop: 5,
  },
}));

function Preview() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Link href={"/article"}>
        <CardContent className={classes.innerWrapper}>
          <div className={classes.imageContainer}>
            <img
              className={classes.image}
              src="https://images.unsplash.com/photo-1473123091594-424e04babfe1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            />
          </div>

          <div className={classes.content}>
            <div className={classes.details}>
              <h2 className={classes.author}>Safia Bolton</h2>
              <h2 className={classes.date}>May 20, 2020</h2>
            </div>
            <h1 className={classes.title}>
              Why Are Domestic Abuse Perpetrators Getting Away With Their
              Crimes?
            </h1>
            <p className={classes.description}>
              The term ‘domestic abuse’ is tightly wrapped in a layer of
              misconceptions and misunderstandings: widespread inaccurate
              beliefs about what abuse looks like, and what a victim looks like,
              extend not only to the general public, but also exist within
              essential services, including the police service.
            </p>
            <div className={classes.chipArray}>
              <Chip
                color="primary"
                label={"Social Policy"}
                className={classes.chip}
              />
              <Chip label={"Law"} className={classes.chip} />
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}

export default Preview;
