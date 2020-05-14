import React from "react";
import styles from "./styles.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowUp,
  faArrowDown,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

export default (props) => {
  return (
    <div className={styles.newsContentContainer}>
      <div className={styles.newsNavBtns}>
        <button className={styles.newsBtn}>
          <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
        </button>
        <button className={styles.newsBtn}>
          <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
        </button>
      </div>
      <div className={styles.newsTextContainer}>
        <div className={styles.overlay}></div>

        <article className={styles.headerText}>
          WE PROVIDE A <b> SUSTAINABLE SOLUTIONS </b> <br /> FROM STARTUPS TO
          CORPORTATES.
          <br /> GUARANTEENING A PRIVATE CAR LIKE EXPERIENCE WITH
          <br />
          <b> AFFORDABLE COST</b>
        </article>
        <div className={styles.newsNavBtns2}>
          <button className={styles.newsBtn}>
            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
          </button>
          <button className={styles.newsBtn}>
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};
