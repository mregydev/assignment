import styles from "./styles.module.scss";

import React from "react";

import headerImage from "../../images/headerback.jpg";

import { Navbar, Nav } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";

class AppHeader extends React.Component {
  render() {
    return (
      <div className={styles.headerContainer}>
        <img src={headerImage} className={styles.headerBackImg}></img>
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

        <div className={styles.headerContentContainer}>
          <div className={styles.headerTextContainer}>
            <div className={styles.overlay}></div>
            <button className={styles.topicBtn}>
              <FontAwesomeIcon icon={faAngleDoubleLeft}></FontAwesomeIcon>
            </button>
            <button className={styles.topicBtn}>
              <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
            </button>
            <article className={styles.headerText}>
              WE PROVIDE A <b> SUSTAINABLE SOLUTIONS </b> <br /> FROM STARTUPS
              TO CORPORTATES.
              <br /> GUARANTEENING A PRIVATE CAR LIKE EXPERIENCE WITH
              <br />
              <b> AFFORDABLE COST</b>
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default AppHeader;
