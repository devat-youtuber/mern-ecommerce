import React from 'react'
import { Jumbotron } from 'reactstrap';
import SingleSource1 from '../../SingleSource/SingleSource1';

const home = (props) => {

const images = [
  "https://res.cloudinary.com/qb1968/image/upload/v1627493349/Pressing/sfmydavmo0wek5m8qg9j.png",
  "https://res.cloudinary.com/qb1968/image/upload/v1627493349/Pressing/kv6krvt5z97gr2pzrqv5.png",
  "https://res.cloudinary.com/qb1968/image/upload/v1627493349/Pressing/mxwtbavsk5ttc93kukrm.png",
  "https://res.cloudinary.com/qb1968/image/upload/v1627493349/Pressing/w2r0tel714fu0ctktlqg.png",
  "https://res.cloudinary.com/qb1968/image/upload/v1627493349/Pressing/mneiygtdmmmcrb5umpjq.png",
  "https://res.cloudinary.com/qb1968/image/upload/v1627493349/Pressing/insvzjusudvful1qqy7x.png",
  "https://res.cloudinary.com/qb1968/image/upload/v1627493349/Pressing/ykkszlmmvx6gcaso8mw9.png",
  "https://res.cloudinary.com/qb1968/image/upload/v1627493349/Pressing/k5y6rqky0ruvvvzq1iee.png",
  "https://res.cloudinary.com/qb1968/image/upload/v1627493349/Pressing/y9qclh75yttizeziawru.png",
  "https://res.cloudinary.com/qb1968/image/upload/v1627493349/Pressing/y2xf7fspfjauwp4bywrx.png",
  "https://res.cloudinary.com/qb1968/image/upload/v1627493349/Pressing/oor8om3qbkytrmegcjmk.jpg",
  "https://res.cloudinary.com/qb1968/image/upload/v1627493349/Pressing/ik0fvudhnv8mfvr6pomi.jpg",
  "https://res.cloudinary.com/qb1968/image/upload/v1627493350/Pressing/t1ibumr6wme8re9l6kl4.png",
  "https://res.cloudinary.com/qb1968/image/upload/v1627493349/Pressing/cszm3iy00arvtcilxxth.png",
];

    return (
      <Jumbotron>
        <div>
          <img className="store" src="images/newDustin2.jpg" alt=""/>
        </div>
        <div className="press">
          <h1>Pressing Services</h1>
          <p className="press2">
            Pressing removes Bends, bunched spine, dents, digital code squares,
            dirt, production lines, non color breaking spine ticks, staple push
            & improper pressing mistakes. Cleaning services Dry cleaning removes
            dirt, soil and putty from comics. WE SUBMIT TO CGC with Forms. Check
            out this before and after samples below.
          </p>
        </div>
        <h3 className="click">Click on images to enlarge.</h3>
        <div className="pics">
          {images.map((image) => (
            <SingleSource1 key={image} src={image} />
          ))}
        </div>
        <div className="button">
          <h2 className="form-text">
            Interested download the form to get started
                </h2>
                
          <a href="/images/comics.pdf" target="_blank" rel="noopener noreferrer">
            <button className="btn">Download Form</button>
                </a>
                
        </div>
      </Jumbotron>
    );
}

export default home
