import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function Raspis() {
    const token = localStorage.getItem("api_token")
    const role = localStorage.getItem('user_role')
    const  [zapici, setZapici]= useState([])
    let logout = () => {
        // Make a request to logout endpoint, e.g., invalidate session/token
        fetch('http://127.0.0.1:8000/api/logout', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          
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
      let zapic = () => {
        // Make a request to logout endpoint, e.g., invalidate session/token
        fetch('http://127.0.0.1:8000/api/zapici', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify()
        })
          .then(response => response.json())
          .then(data => {
            // Execute these actions after successful logout response
            setZapici(data)
            console.log(zapici)

          })
          .catch(error => {
            console.error('Произошла ошибка:', error);
          });
      }
      useEffect(() => {
        zapic()
      }, []);
  
  
  return (

    <div className="raspisanie">
        <div className="head">
            <Link to="/"><p className="plogo">MNG-FIT</p></Link>
            {token === null ? (
                <div className="head-home" style={{ justifyContent: "flex-start", display: "none" }}>
                </div>
            ) : (
                <div className="head-home" style={{ justifyContent: "flex-start", display: "flex" }}>
                    {role === "3" ? 
                        <Link to='/user'>
                        <a href="/user"><h6 style={{ margin: "20px" }}>ПРОФИЛЬ</h6></a>
                        </Link>
                     : role==='2'?
                        <Link to='/trener'>
                        <a href="/trener"><h6 style={{ margin: "20px" }}>ПРОФИЛЬ</h6></a>
                        </Link>
                        : <Link to='/admin'>
                        <a href="/admin"><h6 style={{ margin: "20px" }}>ПРОФИЛЬ</h6></a>
                        </Link>
                    }
                </div>
            )}
            {token===null? <Link to="/login" style={{ textDecoration: "none" }}>
                <button className="red-button" style={{ fontSize: '16px' }} >ВОЙТИ</button>
            </Link>:<Link to="/login" style={{ textDecoration: "none" }}>
                <button className="red-button" style={{ fontSize: '16px' }} onClick={logout}>ВЫЙТИ</button>
            </Link> }
        </div>
        <div className="main" style={{width:'100%',margin:"0", display:'flex',alignItems:'center',justifyContent:'center'}}>
            <div className="raspisanie-main">
            <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "prev", // will normally be on the left. if RTL, will be on the right
          center: "title",
          end: "next", // will normally be on the right. if RTL, will be on the left
        }}
        events={zapici.map(zapic => ({
          title: 'Запись на тренировку',
          content: [zapic.tren_id, zapic.user_id],
          date: zapic.date
        }))}
        
        height={"700px"}
      />
            </div>
        </div>
    </div>
  );
}

export default Raspis;