import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import ListRoundedIcon from "@material-ui/icons/ListRounded";
import { Sidebar } from "./Sidebar";
import styled from "styled-components";
import Tooltip from "@material-ui/core/Tooltip";

const Styles = styled.div`
  .but1 {
    margin-top: -620px;
    margin-left: 10px;
  }
  @media only screen and (min-width: 1300px) {
    .but1 {
      margin-left: -280px;
      margin-top: -600px;
    }
    #side {
      background-color: black;
    }
  }
`;

const useStyles = makeStyles({
  list: {
    width: 250
  }
});

export default function Navbar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, true)}
      onKeyDown={toggleDrawer(side, true)}
      id="side"
    >
      <Sidebar />
    </div>
  );

  return (
    <Styles>
      <div>
        <Tooltip title="Main Menu" placement="right">
          <Button className="but1" onClick={toggleDrawer("left", true)}>
            <ListRoundedIcon style={{ fontSize: 40 }} />
          </Button>
        </Tooltip>

        <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
          {sideList("left")}
        </Drawer>
      </div>
    </Styles>
  );
}
