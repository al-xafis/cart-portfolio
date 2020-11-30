import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../Button/Button';
import { exit } from '../User/userSlice';
import './Navbar.css';
import '../App.css';
import { auth } from '../../firebase';

const Navbar = () => {
  const dispatch = useDispatch();
  const [empty, setEmpty] = useState(true);

  const user = useSelector(state => state.user);
  console.log(user);

  function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }
    return true;
  }
  useEffect(() => {
    if (isEmpty(user)) {
      console.log('user is empty');
      setEmpty(true);
    } else if (!isEmpty(user.user)){
      console.log('user is not empty');
      setEmpty(false);
    }
  }, []);
  

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

  const logout = (event) => {
    auth.signOut();
    dispatch(exit());
    setEmpty(true);
    console.log(empty);
  }

  let AuthButton;
  if (empty === true) {
    AuthButton = <React.Fragment><Button to="/login" text="Sign in"/>
    <Button to="/register" text="Sign up" classh="ml" yel="true"/></React.Fragment>;
  } else if (empty === false) {
    AuthButton = <button onClick={logout} text="Sign Out" className="signout__button">sign out</button>;
  }

  
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
          {AuthButton}
        </div>
      </nav>
    )   
 
};

export default Navbar;
