import "./App.css";
import "typeface-roboto";
import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Router, Route, Switch, Link } from "react-router-dom";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";

function App({ links }) {
  const [open, setOpen] = useState(false);

  function toggleDrawer(type, key) {
    if (type === "keydown" && (key === "tab" || key === "Shift")) {
      return;
    }
    setOpen(!open);
  }

  return (
    <Router>
      <Button onClick={toggleDrawer}>Open Nav</Button>
      <section>
        <Route path="/first" component={First} />
        <Route path="/second" component={Second} />
        <Route path="/third" component={Third} />
      </section>
      <Drawer open={open} onClose={toggleDrawer}>
        <div
          style={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            {links.map((link) => (
              <ListItem Button key={link.url} component={link} to={link.url}>
                <Switch>
                  <Route
                    exact
                    path={link.url}
                    render={() => (
                      <ListItemText
                        primary={link.name}
                        primaryTypographyProps={{ color: "primary" }}
                      />
                    )}
                  />
                  <Route
                    path="/"
                    render={() => <ListItemText primary={link.name} />}
                  />
                </Switch>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </Router>
  );
}

export default App;
