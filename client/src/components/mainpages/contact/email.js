import React from "react";
// import "../email_form/style.css";
import * as emailjs from "emailjs-com";
// 'service_68tukea', 'template_uyojpy3', e.target, 'user_ZwzQz54DI5UoSAiLTA0Z7'

import { Button, Form, FormGroup, Modal, Image } from "react-bootstrap";

class Email_Form extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false,
      loading: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
    this.setState({ name: "" });
    this.resetForm();
  }

  handleShow() {
    this.setState({ show: true, loading: false });
  }

  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
    show: false,
  };

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true });

    const { email, subject, message, name } = this.state;

    let templateParams = {
      from_name: email,
      to_name: "motasimfoad@gmail.com",
      name: name,
      subject: subject,
      message_html: message,
    };

    //=======================
    // Use your own API key
    //=======================

    emailjs
      .send(
        "service_3wdj5pe",
        "template_awdo6zl",
        templateParams,
        "user_ZwzQz54DI5UoSAiLTA0Z7"
      )
      .then(
        (result) => {
          this.handleShow();
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  resetForm() {
    this.setState({
      email: "",
      subject: "",
      message: "",
      modal: false,
    });
  }

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit.bind(this)} className="Contact-form">
        <p className="contact-form-header">Contact Us</p>
        <FormGroup className="contact_input">
          <Form.Control
            type="email"
            value={this.state.email}
            className="contact_input_text1"
            onChange={this.handleChange.bind(this, "email")}
            placeholder="Email Address"
            required
          />
        </FormGroup>
        <FormGroup controlId="formBasicName" className="contact_input">
          <Form.Control
            as="textarea"
            rows="1"
            value={this.state.name}
            onChange={this.handleChange.bind(this, "name")}
            placeholder="Your Name"
            className="contact_input_text"
            required
          />
        </FormGroup>
        <FormGroup controlId="formBasicSubject" className="contact_input">
          <Form.Control
            as="textarea"
            rows="1"
            value={this.state.subject}
            onChange={this.handleChange.bind(this, "subject")}
            placeholder="Subject"
            className="contact_input_text"
            required
          />
        </FormGroup>
        <FormGroup controlId="formBasicMessage" className="contact_input">
          <Form.Control
            as="textarea"
            rows="6"
            value={this.state.message}
            placeholder="Your text"
            onChange={this.handleChange.bind(this, "message")}
            className="contact_input_text"
            required
          />
        </FormGroup>
        <Button
          className="contact-email-text-btn"
          variant="outline-dark"
          size="lg"
          type="submit"
        >
          Submit
        </Button>

        <Modal
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          show={this.state.show}
          onHide={this.handleClose}
          centered
        >
          <Modal.Body className="contact_success_modal_body">
            <h5>
              Thank you{" "}
              <span>
                <strong>{this.state.name}</strong>!!
              </span>{" "}
              😇
            </h5>
            <h6>Your message was successfully recorded</h6>
            <br />
            <Button
              variant="outline-light"
              size="lg"
              onClick={this.handleClose}
              className="contact-email-text-btn"
            >
              Close
            </Button>
          </Modal.Body>
        </Modal>
      </Form>
    );
  }
}

export default Email_Form;
