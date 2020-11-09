import React from 'react';
import './Button.css';

const Button = ({ text, classh, yel }) => {
  
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
  return (
  <a className={helperClass}>{text}</a>
  )
};

export default Button;