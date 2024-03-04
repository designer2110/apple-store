import React, { Component } from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { cartContext } from "../../storage/cartContext";
import { useContext } from "react";
import UserMenu from "./UserMenu";
import "./navbar.css";

function NavbarComp ({onLogin}) {
  function handleSubmit(evt) {
    evt.preventDefault();
    let username = evt.target.elements[0].value;
    onLogin(username);
  }

  const { getTotalItems } = useContext(cartContext);
      
    return (
      <div>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/page/1">
        <Navbar.Brand className="navbartext">Apple store</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Link className="nav-link" to="/category/Mac">
            <a>Mac</a>
          </Link>
          <Link className="nav-link" to="/category/Ipad">
            <a>Ipad</a>
          </Link>
          <Link className="nav-link" to="/category/Iphone">
          <a>Iphone</a>
          </Link>
          <Link className="nav-link" to="/category/Watch">
          <a>Watch</a>
          </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    )
  }

  export default NavbarComp;