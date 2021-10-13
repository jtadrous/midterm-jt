import React from "react";
import "semantic-ui-css/semantic.css";
import { Menu } from "semantic-ui-react";
import { Link } from "gatsby";

const NavBar = () => {
  return (
    <React.Fragment>
      <Menu>
        <Link to="/">
          <Menu.Item icon="home"></Menu.Item>
        </Link>
        <Link to="/games">
          <Menu.Item icon="game"></Menu.Item>
        </Link>
        <Link to="/contact">
          <Menu.Item icon="users"></Menu.Item>
        </Link>
      </Menu>
    </React.Fragment>
  );
};

export default NavBar;
