import React from "react";
import { withStyles } from "@material-ui/core/styles";
import "./_Movie.scss";

const styles = (theme) => ({
  root: {
    padding: "0",
    textAlign: "center",
    background: "gray",
    maxWidth: "100%",
  },
  vid: {
    height: "50vh",
    maxWidth: "100%",
  },
  container: {
    maxWidth: "100%",
    margin: "auto",
  },
  img: {
    width: "100%",
    objectFit: "contain",
  },
});

const Iframe = ({ url }) => {
  if (!url) {
    return <div>Loading...</div>;
  }
  return (
    // basic bootstrap classes. you can change with yours.
    <iframe src={url} frameBorder="0" title="movie"></iframe>
  );
};

function Movie(props) {
  const classes = props.classes;
  return (
    <div className={classes.root} id={props.id}>
      <div className="hytPlayerWrapOuter">
        <div className="hytPlayerWrap">
          <Iframe
            className={classes.vid}
            url={
              "https://www.youtube.com/embed/BTciK1vJ8QY?rel=0&enablejsapi=1"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Movie);
