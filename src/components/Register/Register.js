import React from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  return (
    <div className="register">
      <Link to="/"><img src="/pics/snipcart_logo.svg" alt="snipcart-logo" className="register__logo"/></Link>
      <div className="register__account__container">
        <div className="account__title">
          <i className="fas fa-user account__title__icon"></i>
          <h1>Activate your Snipcart account</h1>
        </div>
        <form className="account__form">
          <div className="account__mail">
            <div className="account__mail__box"><i className="far fa-envelope envelope"></i></div>
            <input type="text" className="account__input" placeholder="Email" />
          </div>
          <div className="account__mail">
            <div className="account__mail__box"><i class="fas fa-unlock lock"></i></div>
            <input type="text" className="account__input" placeholder="Password" />
          </div>
          <div className="account__mail">
            <div className="account__mail__box"><i class="fas fa-unlock lock"></i></div>
            <input type="text" className="account__input" placeholder="Confirm Password" />
          </div>
          
          <Button text="complete my registration" classh="classh"/>
        </form>
        
      </div>
    </div>
  )
};

export default Register;