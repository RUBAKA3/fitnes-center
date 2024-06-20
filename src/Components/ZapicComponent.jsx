import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Zapic() {
  const token = localStorage.getItem('api_token');
  const role = localStorage.getItem("user_role");
  const [userName, setUserName] = useState({});
  const [treners, setTreners] = useState([]);
  const [zapici, setZapici] = useState([]);

  const logout = () => {
    fetch('http://127.0.0.1:8000/api/logout', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ token: token })
    })
      .then(response => response.json())
      .then(data => {
        localStorage.removeItem('api_token');
        localStorage.removeItem('user_role');
        window.location.href = "/";
      })
      .catch(error => {
        console.error('Произошла ошибка:', error);
      });
  }

  const fetchUserName = () => {
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

  const fetchAllTreners = () => {
    fetch('http://127.0.0.1:8000/api/treners', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(response => response.json())
      .then(data => {
        setTreners(data);
      })
      .catch(error => {
        console.error('An error occurred while fetching trainers:', error);
      });
  }

  const newZapic = (id, tren_id) => {
    fetch(`http://127.0.0.1:8000/api/${id}/newZapic`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ tren_id: tren_id })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data); // Logging the response data
        // Depending on your use case, you might want to update your state here
      })
      .catch(error => {
        console.error('An error occurred while making a new appointment:', error);
        alert("Вы уже подали заявку к этому тренеру")
      });
  }

  const fetchAllZapic = (id) => {
    fetch(`http://127.0.0.1:8000/api/${id}/Zapicall`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({})
    })
      .then(response => response.json())
      .then(data => {
        setZapici(data);
        console.log(zapici)
      })
      .catch(error => {
        console.error('An error occurred while fetching appointments:', error);
      });
  }
  const ZapicAcces = (id, zapic_id) => {
    fetch(`http://127.0.0.1:8000/api/${id}/newZapic`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: zapic_id })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data); // Logging the response data
        // Depending on your use case, you might want to update your state here
      })
      .catch(error => {
        console.error('An error occurred while making a new appointment:', alert(error));
      });
  }

  useEffect(() => {
    fetchAllTreners();
    fetchUserName();
    fetchAllZapic(userName.id); // Assuming userName is an object with an id property
  }, [userName.id]);

  return (
    <div className="Zapic">
      <div className="head">
        <Link to="/"><p className="plogo">MNG-FIT</p></Link>
        <div className="head-home" style={{ justifyContent: "flex-start" }}>
          {role === "3" ? <Link to='/user'><a href="/user"><h6 style={{ margin: "20px" }}>ПРОФИЛЬ</h6></a></Link> : <Link to='/trener'><a href="/trener"><h6 style={{ margin: "20px" }}>ПРОФИЛЬ</h6></a></Link>}
        </div>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <button className="red-button" style={{ fontSize: '16px' }} onClick={logout}>ВЫЙТИ</button>
        </Link>
      </div>

      <div className="main">
        <div className="name" style={{ height: "20vh" }}>
          <div className="img" style={{ margin: "15px", width: "170px", height: "170px" }}></div>
          <h1>{userName.name}</h1>
        </div>

        {role === "3" ?
          <div className="user" style={{width:"100%"}}>
            <ul style={{ margin: 0, padding: 0 }}>
            {Object.values(treners).map(user => (
                  <div className="user-trener" key={user.id}>
                    <img src='' style={{ width: "250px", height: "250px", borderRadius: "30px", margin: "0 0 0 120px" }} />
                    <div className="user-trener-opis">
                      <h6 style={{ margin: "0" }}>{user.name}</h6>
                      <p style={{ fontSize: "16px", width: "500px" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis natus, error fugiat atque neque asperiores non? Fuga, sapiente deserunt tempore quod quisquam vel ipsa, animi voluptatem nam perspiciatis sed a perferendis officia, aliquam debitis commodi aliquid ab pariatur! Magni, provident.</p>
                      <button className="red-button" style={{ width: "250px", height: "30px", margin: "10px 0 0 0" }} onClick={() => newZapic(userName.id, user.id)}>Подать заявку</button>
                    </div>
                  </div>
                ))}
              </ul>
            </div> :
          <div>
            <ul style={{ margin: 0, padding: 0 }}>
              {Object.values(zapici).map(zap => {

                if (zap.user_id !== userName.id) {
                  return (
                    <div className="user-trener" key={zap.id}>
                      <img src='' style={{ width: "250px", height: "250px", borderRadius: "30px", margin: "0 0 0 120px" }} />
                      <div className="user-trener-opis">
                        <h6 style={{ margin: "0" }}>{zap.name}</h6>
                        <p style={{ fontSize: "32px", width: "500px" }}>Дата: {zap.date}</p>
                        <button className="red-button" style={{ width: "250px", height: "30px", margin: "10px 0 0 0" }} onClick={() => ZapicAcces(userName.id, zap.id)}>Подтвердить заявку</button>
                      </div>
                    </div>
                  );
                } else {
                  return null; 
                }
              })}
          </ul>
          </div>
        }
      </div>
    </div>
  );
}

export default Zapic;
