import React, { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { GlobalState } from "../../../GlobalState";
import ProductItem from "../utils/productItem/ProductItem";
import SingleSource2 from "../../SingleSource/SingleSource2";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'

// import Modal from "../../modal/index"

function DetailProduct() {
  const params = useParams();
  const state = useContext(GlobalState);
  const [products] = state.productsAPI.products;
  const addCart = state.userAPI.addCart;
  const [detailProduct, setDetailProduct] = useState([]);
  

  const [modal, setModal] = useState(false);
 
  const toggle = () => setModal(!modal);


  
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

    emailjs
      .sendForm(
        "service_68tukea",
        "template_t046vdr",
        e.target,
        "user_ZwzQz54DI5UoSAiLTA0Z7"
      )

      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Message Sent Successfully",
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Ooops, something went wrong",
            text: error.text,
          });
        }
      );
    e.target.reset();
  };
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
          {/* <p>Sold: {detailProduct.sold}</p> */}
          <Link
            to="/cart"
            className="cart"
            onClick={() => addCart(detailProduct)}
          >
            Buy Now
          </Link>

          <div
            className="d-flex align-items-center justify-content-center"
            style={{ height: "1vh" }}
          ></div>
             <Button color="primary" onClick={toggle}>Make Offer</Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Offer Form</ModalHeader>
        <ModalBody>
              <form className="contact-form" onSubmit={sendEmail}>
      
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="from_email" />
     <label>Subject</label>
     <input className='subject1' type="subject" name="subject"value={detailProduct.title} />
      <label>Offer</label>
      <textarea type="offer" name="offer" />
      <input className="send" type="submit" value="Send"  />
    </form>
            </ModalBody>
        <ModalFooter>
          
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
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
