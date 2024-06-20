import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Admin() {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem('api_token');
  const [role, setRole] = useState('');
  const [userName, setUserName] = useState('');

  const handlerRole = (e) => {
    setRole(e.target.value);
  };
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
  // Function to delete a user
  const deleteUser = (userId) => {
    fetch('http://127.0.0.1:8000/api/delete', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: userId }) // Passing the user ID for deletion
    })
      .then(response => response.json())
      .then(data => {
        // Update the user list after successful deletion
        setUsers(users.filter(user => user.id !== userId));
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  }

  // Function to assign a new role to a user
  const newRole = (userId) => {
    if (role !== '') {
      fetch('http://127.0.0.1:8000/api/rolenew', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ id: userId, role_id: role })
      })
        .then(response => response.json())
        .then(data => {
          console.log(data.email);
          // Update the user list after assigning a new role
          updateUserList(); // Call the function to update the user list
        })
        .catch(error => {
          console.error('An error occurred:', error);
        });
    } else {
      alert("Please enter a role number");
    }
    setRole('');
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
  // Function to update the user list
  const updateUserList = () => {
    fetch('http://127.0.0.1:8000/api/allUsers', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ token: token })
    })
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        console.log(userName)
      })
      .catch(error => {
        console.error('An error occurred while fetching users:', error);
      });
  };

  useEffect(() => {
    thisName()
    updateUserList()
  }, []);
  return (
    <div>
      <div className="head">
          <Link to="/"><p className="plogo">MNG-FIT</p></Link>
          <div className="head-home" style={{justifyContent:"flex-start"}}>
          </div>
          <Link to="/login" style={{textDecoration:"none"}}><button className="red-button" style={{fontSize:'16px',}} onClick={logout}>ВЫЙТИ</button></Link>
        </div>
      <div className="main" style={{ minHeight:'89.5vh'}}>
        <div className="name">
          <div className="img"></div>
          <h1>{userName.name}</h1>
        </div>
        <div className="users">
          <h1 align='center'>Пользователи</h1>
          <ul style={{ margin: 0, padding: 0 }}>
            {users.map(user => (
              <div style={{ height: '70px', display: 'flex', justifyContent: "space-between", alignItems:"center", padding: "0px 30px" }} key={user.id}>
                <div>
                  <h3>{user.name}</h3>
                  <p>{user.role_id === 2 ? ' тренер' : user.role_id === 3 ? 'пользователь' : 'Администратор'}</p>
                </div>
                <div className="admin-panel">
                  {/* Показывать кнопку "Удалить" только для пользователей с ролью 3 (пользователь) */}
                  { user.role_id === 3? <input type="text" onChange={(e) => { handlerRole(e)}} placeholder="Номер роли"/>:''}
                  { user.role_id === 2? <input type="text" onChange={(e) => { handlerRole(e)}} placeholder="Номер роли"/>:''}
                  { user.role_id === 3? <button onClick={() => newRole(user.id)} style={{ backgroundColor: "#009FF9" }}>Поменять</button>:''}
                  { user.role_id === 2? <button onClick={() => newRole(user.id)} style={{ backgroundColor: "#009FF9" }}>Поменять</button>:''}                  
                  { user.role_id === 3? <button onClick={() => deleteUser(user.id)} style={{ backgroundColor: "red" }}>Удалить</button>:''}
                  { user.role_id === 2? <button onClick={() => deleteUser(user.id)} style={{ backgroundColor: "red" }}>Удалить</button>:''}

                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Admin;
