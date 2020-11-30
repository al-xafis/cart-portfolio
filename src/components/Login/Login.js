import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';
import { enter, exit } from '../User/userSlice';
import Button from '../Button/Button';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  console.log(user);

  const login = (event) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .catch((err) => console.log(err))
  }

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(enter(authUser.email));
        history.push('/');
      } 
      else {
        dispatch(exit());
      }
    })
  }, []);

  return (
    <div className="login">
      <Link to="/"><img src="/pics/snipcart_logo.svg" alt="snipcart-logo" className="login__logo"/></Link>
      <div className="register__account__container">
        <div className="account__title">
          <i className="fas fa-door-open account__title__icon"></i>
          <h1>Login</h1>
        </div>
        <form className="account__form">
          <div className="account__mail">
            <div className="account__mail__box"><i className="far fa-envelope envelope"></i></div>
            <input type="text" className="account__input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="account__mail">
            <div className="account__mail__box"><i className="fas fa-unlock lock"></i></div>
            <input type="password" className="account__input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" onClick={login} className="button button--yel">Login</button>
        </form>
        
      </div>
    </div>
  )
};

export default Login;