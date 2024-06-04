import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Registr = () => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirectToProfile, setRedirectToProfile] = useState(false);

  const handlerLogin = (e) => {
    setLogin(e.target.value);
  };
  const handlerEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlerPassword = (e) => {
    setPassword(e.target.value);
  };


  const registerUser = () => {
    // You can implement password validation here
    if (login !== "" && password !== "" && email !== "") {
      fetch('http://127.0.0.1:8000/api/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: email, name: login, password: password })
      })
        .then(response => response.json())
        .then(data => {


        })
        .catch(error => {
          console.error('An error occurred:', error);
        });
    } else {
      alert("Please enter your login, email, and password");
    }
    // Clear input fields after registration
    setEmail('');
    setLogin('');
    setPassword('');

  }

 

  return (
    <div className="login">
      <div className="head">
        <Link to="/"><p className="plogo">MNG-FIT</p></Link>
        <Link to="/login" style={{textDecoration:"none"}}><button className="red-button" style={{fontSize:'16px'}}>ВОЙТИ</button></Link>
      </div>
      <div className="login-block">
      <h1 style={{color:"#ffffff", marginTop:"58px", marginBottom:"50px", fontSize:"48px",filter: "drop-shadow(2px 10px 2px  rgba(120, 75, 75))"}}>Регистрация</h1>
      <div className="modal">
        <input onChange={handlerLogin} value={login} type="text" placeholder="Username" />
        <input onChange={handlerEmail} value={email} type="text" placeholder="Email" />
        <input onChange={handlerPassword} value={password} type="password" placeholder="Create Password" />

        
        <button className="red-button" style={{width:"388px", fontSize:"18px", border:"solid black 1px",height: "50px",  marginTop: "28px"}} onClick={registerUser}>ЗАРЕГИСТРИРОВАТЬСЯ</button>
      </div>
      </div>
      
    </div>
  );
}

export default Registr;
