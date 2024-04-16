import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Login() {
    const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [obj, setObj] = useState({});
  const [redirectToProfile, setRedirectToProfile] = useState(false);
  
  const handlerEmail = (e) => {
    setLogin(e.target.value);
    console.log(e.target.value)
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
          console.log(data.role)
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
            } else {
                window.location.href = "/user";
            }
  
    }
  }, [redirectToProfile]);
  return (
    <div>
      <div className="head">
            <p>MNG-FIT</p>
            <Link to="/register"><button>Зарегистрироваться</button></Link>
        </div>
        <div className="modal">
        
        <input onChange={(e) => { handlerEmail(e) }} value={login} type="text" placeholder="login" />
        <input onChange={(e) => { handlerPassword(e) }} value={password} type="password" placeholder="password" />
        <button onClick={() => { zapis() }}>Войти</button>
      </div>
    </div>
  );
}

export default Login;