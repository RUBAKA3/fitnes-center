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

  useEffect(() => {
    // Redirect to login page after successful registration
    if (redirectToProfile) {
      window.location.href = "/login";
    }
  }, [redirectToProfile]);

  return (
    <div>
      <div className="head">
        <p>MNG-FIT</p>
        <Link to="/login"><button>Log In</button></Link>
      </div>
      <div className="modal">
        <input onChange={handlerLogin} type="text" placeholder="Username" />
        <input onChange={handlerEmail} type="text" placeholder="Email" />
        <input onChange={handlerPassword} value={password} type="password" placeholder="Create Password" />
        <button onClick={registerUser}>Register</button>
      </div>
    </div>
  );
}

export default Registr;
