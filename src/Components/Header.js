import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Home.css";

export default function Header() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="up-menu">
        <h1 className="logo">FOOD SELLER</h1>
        <ul className="links">
            <Link className="link" to={"/"}>Home</Link>
            <Link className="link" to={"/signup"}>Sign Up</Link>
             <li onClick={toggleModal} className="link btn">
                Cart
            </li>
        </ul>

            {modal && (
                <div className="modal">
                <div onClick={toggleModal} className="overlay"></div>
                <div className="modal-content">
                    <h2>Hello Modal</h2>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                    perferendis suscipit officia recusandae, eveniet quaerat assumenda
                    id fugit, dignissimos maxime non natus placeat illo iusto!
                    Sapiente dolorum id maiores dolores? Illum pariatur possimus
                    quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
                    placeat tempora vitae enim incidunt porro fuga ea.
                    </p>
                    <button className="close-modal" onClick={toggleModal}>
                    CLOSE
                    </button>
                    <Link onClick={toggleModal} className="link" to={"/cart"}>Cart</Link>
                </div>
                </div>
            )}
        </div>
    );
}