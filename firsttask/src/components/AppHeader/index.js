import styles from "./styles.module.scss";

import React from "react";

import headerImage from "../../images/headerback.jpg";

import { Navbar, Nav } from "react-bootstrap";

import NewsViewer from "./newsViewer";

class AppHeader extends React.Component {
  render() {
    return (
      <div className={styles.headerContainer}>
        <img src={headerImage} className={styles.headerBackImg} />
        <div className={styles.headerNavbar}>
          <Navbar expand="lg">
            <Navbar.Brand href="#home" className={styles.navBrand}>
              LOGO
            </Navbar.Brand>
            <Navbar.Toggle
              className={styles.navBarToggle}
              aria-controls="basic-navbar-nav"
            />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className={styles.navItems}>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Buseet Business Transportation</Nav.Link>
                <Nav.Link href="#link">News and Updates</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                <Nav.Link href="#link">Connect</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <NewsViewer />
      </div>
    );
  }
}

export default AppHeader;
