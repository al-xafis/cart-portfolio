import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import './Navbar.css';
import '../App.css';

const Navbar = () => {

  useEffect(() => {
    const body = document.querySelector("body");
    const nav = document.querySelector(".nav");
    
    window.addEventListener("scroll", (e) => {
      let scrollTop = e.target.scrollingElement.scrollTop;
      if (scrollTop > 90) {
        console.log("went past 90");
        nav.classList.add("nav-att")
      } else {
        nav.classList.remove("nav-att");
      }


    });
  }, []);

  var useTag = '<use xlink:href="/svg/svg-sprite#my-icon" />';
  return (
  <nav className="nav">
    <a className="nav__logo">
      <img src="/pics/snipcart_logo.svg" alt="react" />
    </a>
    <ul className="nav__list">
      <li className="nav__item">
        <a className="nav__link">Features</a>
      </li>
      <li className="nav__item">
        <a className="nav__link">Resources</a>
      </li>
      <li className="nav__item">
        <a className="nav__link">Pricing</a>
      </li>
      <li className="nav__item">
        <a className="nav__link">Blog</a>
      </li>
      <li className="nav__item">
        <a className="nav__link">More</a>
      </li>
    </ul>
    <div className="nav__auth">
      <Button to="/login" text="Sign in"/>
      <Button to="/register" text="Sign up" classh="ml" yel="true"/>
    </div>
  </nav>
  )
};

export default Navbar;
