import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import EmailForm from './email'

const contact = () => {
    return (
         <Jumbotron>
        <div>
          <img className="store" src="images/newDustin2.jpg" alt=""/>
        </div>
      
        <div className="contact">
          <EmailForm />
    
            </div>
            </Jumbotron>
    );
}

export default contact
