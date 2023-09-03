import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import emailjs from "emailjs-com";
import Swal from 'sweetalert2';

const SERVICE_ID = "service_3wdj5pe";
const TEMPLATE_ID = "template_awdo6zl";
const USER_ID = "user_ZwzQz54DI5UoSAiLTA0Z7";

const contact = () => {

const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title:'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };

    return (
      <Jumbotron>
        <div>
          <img
            className="store"
            src="https://res.cloudinary.com/qb1968/image/upload/v1630301722/gvohn5azakytwhlccuk3.jpg"
            alt=""
          />
        </div>
        <div>
          <h1>Contact Us</h1>
        </div>

        <div className="contact1">
          <form className="contact-form1" onSubmit={handleOnSubmit}>
            <label>Name</label>
            <input type="text" name="from_name" />
            <label>Email</label>
            <input type="email" name="from_email" />
            <label>Subject</label>
            <input type="subject" name="subject"  />
            <label>Message</label>
            <textarea type="message" name="message" />
            <input className='submit' type="submit" color="green" value="Send" />
          </form>
        </div>
        <div className="address">
          <h4>RaceCity Comics </h4>
          <h4>PO Box 784</h4>
          <h4>Harrisburg NC 28075</h4>
        </div>
      </Jumbotron>
    );
}

export default contact
