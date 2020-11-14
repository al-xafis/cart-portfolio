import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ text, classh, yel, to }) => {
  
  let helperClass
  if (yel && classh) {
    helperClass = "button--yel" + " " + classh;
  } else if (classh){
    helperClass = "button" + " " + classh;
  } else if (yel) {
    helperClass="button--yel";
  } else {
    helperClass="button";
  }
  if (to) {
    console.log(to);
    return (
      <Link to={to} className={helperClass}>{text}</Link>
    )
  } else {
  return (
  <Link to="#" className={helperClass}>{text}</Link>
  )
}
};

export default Button;