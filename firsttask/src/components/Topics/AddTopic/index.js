import React from "react";

import { Container, Col, Row, Form, Button } from "react-bootstrap";

import styles from "./styles.module.scss";

import { mapStatetoProps, mapDispatchtoProps } from "../reduxConfig";

import { connect } from "react-redux";

class AddTopic extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      summary: "",
      link: "",
    };
  }

  UpdateState = (fieldName, fieldValue) => {
    this.setState({ [fieldName]: fieldValue });
  };

  AddNewTopic = () => {
    this.props.addTopic(this.state);

    //this.resetControl();
  };

  resetControl = () => {
    this.setState({
      title: "",
      summary: "",
      link: "",
    });
  };

  render() {
    return (
      <Container className={styles.addTopicContainer}>
        <Form
          onSubmit={(e) => {
            this.AddNewTopic();
            e.target.reset();
            e.preventDefault();
          }}
        >
          <Row>
            <Col xs={12} md={4}>
              <Form.Group>
                <Container>
                  <Row>
                    <Col xs={12} md={2}>
                      <Form.Label>Title</Form.Label>
                    </Col>

                    <Col xs={12} md={9}>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Article Title"
                        onChange={(e) =>
                          this.UpdateState("title", e.target.value)
                        }
                      />
                    </Col>
                  </Row>
                </Container>
              </Form.Group>

              <Form.Group>
                <Container>
                  <Row>
                    <Col xs={12} md={2}>
                      <Form.Label>Link</Form.Label>
                    </Col>

                    <Col xs={12} md={9}>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Article Link"
                        onChange={(e) =>
                          this.UpdateState("link", e.target.value)
                        }
                      />
                    </Col>
                  </Row>
                </Container>
              </Form.Group>
            </Col>

            <Col xs={12} md={5}>
              <Form.Group>
                <Container>
                  <Row>
                    <Col xs={12} md={3}>
                      <Form.Label>Summary</Form.Label>
                    </Col>

                    <Col xs={12} md={9}>
                      <Form.Control
                        required
                        as="textarea"
                        rows="3"
                        placeholder="Article Summary"
                        onChange={(e) =>
                          this.UpdateState("summary", e.target.value)
                        }
                      />
                    </Col>
                  </Row>
                </Container>
              </Form.Group>
            </Col>

            <Col xs={12} md={3} className={styles.submitBtnContainer}>
              <Button
                variant="success"
                className={styles.submitBtn}
                type="submit"
              >
                ADD
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(AddTopic);
