import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Coach() {
    const token = localStorage.getItem('api_token');
    const [userName, setUserName] = useState('');
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
            localStorage.removeItem('user_role');
            window.location.href = "/";
          })
          .catch(error => {
            console.error('Произошла ошибка:', error);
          });
      }
      const thisName = () => {
        fetch('http://127.0.0.1:8000/api/thisuser', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ token: token })
        })
          .then(response => response.json())
          .then(data => {
            setUserName(data); // Обновление состояния имени пользователя
          })
          .catch(error => {
            console.error('An error occurred while fetching users:', error);
          });
      };
      useEffect(() => {
        thisName()
      }, []);
  return (
    <div>
        <div className="head">
          <Link to="/"><p className="plogo">MNG-FIT</p></Link>
          <div className="head-home" style={{justifyContent:"flex-start"}}>
            <a href="/zapic"><h6 style={{margin:"20px"}}>ЗАПИСИ</h6></a>
          </div>
          <Link to="/login" style={{textDecoration:"none"}}><button className="red-button" style={{fontSize:'16px',}} onClick={logout}>ВЫЙТИ</button></Link>
        </div>
        <div className="main">
            <div className="name">
                <div className="img"></div>
                <h1>{userName.name}</h1>
            </div>
            <div className="user">
            </div>
        </div>
    </div>
  );
}

export default Coach;