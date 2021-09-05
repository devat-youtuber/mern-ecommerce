import React, { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { GlobalState } from "../../../GlobalState";
import ProductItem from "../utils/productItem/ProductItem";
import SingleSource2 from "../../SingleSource/SingleSource2";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal"
import Offer from '../Offer/offer'
import emailjs from 'emailjs-com';

// import Modal from "../../modal/index"

function DetailProduct() {
  const params = useParams();
  const state = useContext(GlobalState);
  const [products] = state.productsAPI.products;
  const addCart = state.userAPI.addCart;
  const [detailProduct, setDetailProduct] = useState([]);
  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const triggerText = "Open form";
  const onSubmit = (event) => {
    event.preventDefault(event);
  };
  useEffect(() => {
    if (params.id) {
      products.forEach((product) => {
        if (product._id === params.id) setDetailProduct(product);
      });
    }
  }, [params.id, products]);

  if (detailProduct.length === 0) return null;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_68tukea","template_t046vdr", e.target, 'user_ZwzQz54DI5UoSAiLTA0Z7')

      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
  return (
    <>
      <div className="detail">
        <SingleSource2 src={detailProduct.images.url} alt="" />
        <SingleSource2 src={detailProduct.images2.url} alt="" />
        <div className="box-detail">
          <div className="row">
            <h2>{detailProduct.title}</h2>
            <h6>#id: {detailProduct.product_id}</h6>
          </div>
          <span>$ {detailProduct.price}</span>
          <p>{detailProduct.description}</p>
          <p>{detailProduct.content}</p>
          <p>Sold: {detailProduct.sold}</p>
          <Link
            to="/cart"
            className="cart"
            onClick={() => addCart(detailProduct)}
          >
            Buy Now
          </Link>

          <div
            className="d-flex align-items-center justify-content-center"
            style={{ height: "15vh" }}
          >
            <Button variant="primary" size="lg" onClick={handleShow}>
              Make Offer
            </Button>
          </div>
          <Modal
            className="d-flex align-items-center justify-content-center"
            show={showModal}
            onHide={handleClose}
          >
            <Modal.Header closeButton>
              <Modal.Title className="d-flex align-items-center justify-content-center">
                Make Offer
              </Modal.Title>
            </Modal.Header>
           
            <Modal.Body>
              <form className="contact-form" onSubmit={sendEmail}>
      
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="from_email" />
     <label>Subject</label>
     <input type="subject" name="subject"value={detailProduct.title}/>
      <label>Offer</label>
      <textarea type="offer" name="offer" />
      <input type="submit" value="Send" onClick={handleClose} />
    </form>
            </Modal.Body>
            {/* <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer> */}
          </Modal>
        </div>
      </div>

      <div>
        <h2>Related products</h2>
        <div className="products">
          {products.map((product) => {
            return product.category === detailProduct.category ? (
              <ProductItem key={product._id} product={product} />
            ) : null;
          })}
        </div>
      </div>
    </>
  );
}

export default DetailProduct;
