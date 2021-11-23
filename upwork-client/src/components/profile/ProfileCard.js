import React from "react";
import { makeStyles, styled } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    minHeight: 100,
    border: "1px solid #666",
  },

  media: {
    height: 80,
  },

  fontStyle: {
    fontWeight: 800,
    fontSize: 16,
  },

  bodyFontStyle: {
    fontSize: 14,
  },
});

export default function ProfileCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          {props.image ? (
            <CardMedia className={classes.media} image={props.image} />
          ) : null}
          {props.children}

          <Typography
            gutterBottom
            variant="h5"
            component="h5"
            className={classes.fontStyle}
          >
            {props.name}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="h5"
            className={classes.fontStyle}
          >
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.skills && (
              <div className={classes.bodyFontStyle}>
                <b> My Skills </b>
                {props.skills.map((skill) => (
                  <ul>
                    <li>{skill}</li>
                  </ul>
                ))}
              </div>
            )}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={"/" + props.redirect} rel="noopener">
          About me...
        </Link>
      </CardActions>
    </Card>
  );
}
