import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
}));

export default function Calendar({ checked }) {
  const classes = useStyles();

  return (
    <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <div className={classes.paper}>
          <Paper>
            <Grid container spacing={2}>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <h2>Aqui iria el pdf</h2>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>
    </Slide>
  );
}
