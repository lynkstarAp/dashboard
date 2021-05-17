import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Calendar from "./option/Calendar";
import Otro from "./option/Otro";

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

export default function ComponentDialog() {
  const classes = useStyles();
  const [value, setValue] = useState("recents");
  const [checked, setChecked] = useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setChecked(true);
  };

  return (
    <div>
      <div>
        <BottomNavigation
          value={value}
          onChange={handleChange}
          className={classes.root}
        >
          <BottomNavigationAction
            label="Cimpleaños"
            value="recents"
            icon={<CalendarTodayIcon />}
          />
          <BottomNavigationAction
            label="Otro"
            value="favorites"
            icon={<AssignmentIcon />}
          />
        </BottomNavigation>
      </div>
      {value === "recents" ? <Calendar checked={checked} /> : <Otro />}
    </div>
  );
}
