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
      </Jumbotron>
    );
}

export default contact
