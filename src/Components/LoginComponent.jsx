import React, { useEffect, useState } from "react";

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
      fetch('http://localhost:8000/api/vhod', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: login, password: password })
      })
      .then(response => response.json())
      .then(data => {
        localStorage.setItem("api_token",data.data.user_token);
        setRedirectToProfile(true);
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
      window.location.href = "/profile";
    }
  }, [redirectToProfile]);
  return (
    <div>
        <div className="registr">
        
        <input onChange={(e) => { handlerEmail(e) }} value={login} type="text" placeholder="login" />
        <input onChange={(e) => { handlerPassword(e) }} value={password} type="password" placeholder="password" />
        <button onClick={() => { zapis() }}>Войти</button>
      </div>
    </div>
  );
}

export default Login;