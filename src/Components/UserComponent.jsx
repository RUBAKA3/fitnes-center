import React from "react";
import { Link } from "react-router-dom";

function User() {
    const token = localStorage.getItem('api_token');
    let logout = () => {
        // Make a request to logout endpoint, e.g., invalidate session/token
        fetch('http://127.0.0.1:8000/api/logout', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ token: token })
        })
          .then(response => response.json())
          .then(data => {
            // Execute these actions after successful logout response
            localStorage.removeItem('api_token');
            window.location.href = "/login";
          })
          .catch(error => {
            console.error('Произошла ошибка:', error);
          });
      }
  
  
  return (
    <div>
        <div className="head">
        <p>MNG-FIT</p>
        <Link to="/login"><button onClick={logout}>Выйти</button></Link>
      </div>
        <div className="main">
            <div className="name">
                <div className="img"></div>
                <h1>Степан Джаваскриптер</h1>
            </div>
            <div className="user">
                <Link to='/aboniment' >
                    <div className="pod">
                        <div className="imgu"></div>
                        <p>Абонименты</p>
                    </div>
                </Link>
              
            </div>
        </div>
    </div>
  );
}

export default User;
