import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Zapic() {
    const token = localStorage.getItem('api_token');
    const role = localStorage.getItem("role_id")
    const [userName, setUserName] = useState('');
    const [treners, setTreners] = useState([]);
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
            setUserName(data);
          })
          .catch(error => {
            console.error('An error occurred while fetching users:', error);
          });
      };
      const allTreners=()=>{
        fetch('http://127.0.0.1:8000/api/treners', {
          method: "POST",
          headers: 
          {
            "Content-Type": "application/json"
          },
          })
          .then(response => response.json())
            .then(data => {
                setTreners(data);
                console.log(treners) // Обновление состояния имени пользователя
            })
          .catch(error => {
          console.error('An error occurred while fetching users:', error);
          });
      }
      useEffect(() => {
        allTreners()
        thisName()
      }, []);
  return (
    <div>
        <div className="head">
        <p>MNG-FIT</p>
        <div className="head-home" style={{justifyContent:"flex-start"}}>
        { userName.role_id == 3? <Link to='/user'><a href="/user"><h6 style={{margin:"20px"}}>Профиль</h6></a></Link>:<Link to='/trener'><a href="/trener"><h6 style={{margin:"20px"}}>Профиль</h6></a></Link>}
        </div>
        <Link to="/login" style={{textDecoration:"none"}}><button className="red-button" style={{fontSize:'16px',}} onClick={logout}>ВЫЙТИ</button></Link>
      </div>
        <div className="main" >
            <div className="name" style={{height:"20vh"}}>
                <div className="img" style={{margin:"15px", width:"170px", height:"170px"}}></div>
                <h1>{userName.name}</h1>
            </div>
            {userName.role_id===3?<div className="user">
            <ul style={{ margin: 0, padding: 0 }}>
              {treners && treners.map(user => (
                <div className="user-trener" key={user.id}>
                  <img src=''  style={{ width: "250px", height: "250px", borderRadius: "30px", margin: "0 0 0 120px" }} />
                  <div className="user-trener-opis" style={{}}>
                    <h6 style={{ margin: "0" }}>{user.name}</h6>
                    <p style={{ fontSize: "16px", width: "500px" }}></p>
                    <button className="red-button" style={{ width: "250px", height: "30px", margin: "10px 0 0 0" }}>Подать заявку</button>
                  </div>
                </div>
              ))}
            </ul>
            
          
            </div>:<div></div>}
        </div>
    </div>
  );
}

export default Zapic;