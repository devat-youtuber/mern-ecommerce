import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import EmailForm from './email'

const contact = () => {
    return (
      <Jumbotron>
        <div>
          <img
            className="store"
            src="https://res.cloudinary.com/qb1968/image/upload/v1630301722/gvohn5azakytwhlccuk3.jpg"
            alt=""
          />
        </div>

        <div className="contact">
          <EmailForm />
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
