import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Login({ user, setUser }) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [redirectToProfile, setRedirectToProfile] = useState(false);
  
  const handlerEmail = (e) => {
    setLogin(e.target.value);
  };

  const handlerPassword = (e) => {
    setPassword(e.target.value);
  };

  const zapis = () => {
    if (login !== "" && password !== "") {
      fetch('http://127.0.0.1:8000/api/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: login, password: password })
      })
      .then(response => response.json())
      .then(data => {
        localStorage.setItem("api_token",data.token);
        localStorage.setItem("user_role", data.role);
        if(data.token!==undefined){
          setRedirectToProfile(true);
        }
      })
      .catch(error => {
        console.error('Произошла ошибка:', error);
      });
    } else {
      alert("Необходимо ввести логин и пароль");
    }
  };

  useEffect(() => {
    if (redirectToProfile) {
      const userRole = localStorage.getItem("user_role");
      if (userRole === "1") {
        window.location.href = "/admin";
      } if(userRole=== "3") {
        window.location.href = "/user";
      }if(userRole=== "2"){
        window.location.href = "/trener"
      }
    }
  }, [redirectToProfile]);

  return (
    <div className="login">
      <div className="head">
        <Link to="/"><p className="plogo">MNG-FIT</p></Link>
        <Link to="/register" style={{textDecoration:"none"}}><button className="red-button" style={{fontSize:'16px'}}>ЗАРЕГИСТРИРОВАТЬСЯ</button></Link>
      </div>
      <div className="login-block">
        <h1 style={{color:"#ffffff", marginTop:"58px", marginBottom:"50px", fontSize:"48px",filter: "drop-shadow(2px 10px 2px  rgba(120, 75, 75))"}}>Авторизация</h1>
        <div className="modal">
          <input style={{marginTop:"80px"}} onChange={(e) => { handlerEmail(e) }} value={login} type="text" placeholder="login" />
          <div>
            <input onChange={(e) => { handlerPassword(e) }} value={password} type="password" placeholder="password" />
            <a href="" style={{color:"black"}}><p style={{margin:"0", fontSize:"12px"}}>Забыли пароль?</p></a>
          </div>
          
          <button className="red-button" style={{width:"395px", fontSize:"24px", border:"solid black 1px",   marginTop: "28px"}} onClick={() => { zapis() }}>Войти</button>
        </div>
      </div>
      
    </div>
  );
}

export default Login;
