import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Admin() {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem('api_token')
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
  
  useEffect(() => {
    ; // Получение токена из localStorage
    
    // Выполнение запроса при монтировании компонента
    fetch('http://127.0.0.1:8000/api/allUsers', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ token: token })
    })
      .then(response => response.json())
      .then(data => {
        setUsers(data); // Установка данных в состояние
      })
      .catch(error => {
        console.error('Произошла ошибка:', error);
      });
  }, []); // Пустой массив зависимостей для выполнения эффекта только один раз

  return (
    <div>
      <div className="head">
        <p>MNG-FIT</p>
        <Link to><button onClick={logout}>Выйти</button></Link>
      </div>
      <div className="main">
        <div className="name">
          <div className="img"></div>
          <h1>Степан Джаваскриптер</h1>
        </div>
        <div className="users">
          <h1 align='center'>Пользователи</h1>
          <ul style={{margin:0, padding:0}}>
            {users.map(user => (
              <div style={{height:'70px'}} key={user.id}>
                  <h3>{user.name}</h3>
                  <p>{user.role_id === 2 ? ' тренер' :user.role_id=== 3? 'пользователь':''} </p>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Admin;
