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
        <p>MNG-FIT</p>
        <div style={{height:'50px', width:'200px', display:'flex', justifyContent:'space-between'}}>
        <Link to="/zapic"><button>Записи</button></Link>
        <Link to="/"><button onClick={logout}>Выйти</button></Link>
        </div>
        
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