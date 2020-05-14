import React from "react";

import { Container, Col, Row, Modal, Button } from "react-bootstrap";

import styles from "./styles.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";

import { mapStatetoProps, mapDispatchtoProps } from "../reduxConfig";

class TopicsViewer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isRemoveDialogShown: false,
    };
  }

  toggleRemoveDialog = (selectedIndex = -1) => {
    this.setState({ selectedIndex });
    this.setState({ isRemoveDialogShown: !this.state.isRemoveDialogShown });
  };
  removeTopic = () => {
    this.props.removeTopic(this.state.selectedIndex);
    this.toggleRemoveDialog();
  };

  render() {
    return (
      <Container className={styles.topicsContainer}>
        <Row>
          {this.props.topics.map((topic, index) => (
            <Col xs={12} md={4} className={styles.articleItem}>
              <a
                className={styles.removeLink}
                onClick={(e) => {
                  this.toggleRemoveDialog(index);
                  e.preventDefault();
                }}
                href="#"
              >
                <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
              </a>
              <article>
                <h3 className={styles.topicTitle}>
                  {topic.title.toUpperCase()}
                </h3>
                <div className={styles.topicSummary}>{topic.summary}</div>
              </article>
              <div className={styles.moreLink}>
                <a href={topic.link} target="_blank">
                  Read More
                </a>
              </div>
            </Col>
          ))}
        </Row>
        <Modal show={this.state.isRemoveDialogShown || false}>
          <Modal.Header>
            <Modal.Title>Delete Confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete ? </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.removeTopic()}>
              Yes Delete
            </Button>
            <Button
              variant="secondary"
              onClick={() => this.toggleRemoveDialog()}
            >
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(TopicsViewer);
