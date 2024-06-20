import React from "react";
import { Link } from "react-router-dom";

function Aboniment() {
    const token = localStorage.getItem("api_token")
    console.log(token)
    const role = localStorage.getItem('user_role')
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

  
  
  return (

    <div className="aboniment">
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
        <div style={{width:"80%", backgroundColor: "#5C5C5C", margin:"0 10%", display:"flex",flexDirection:"column", alignItems:"center", height:"91.5vh"}}>
            <h1 align='center'>Абонименты</h1>
            <div className="abonim-main">
                <div className="abonim-top">
                    <div className="abonim">
                        <img src="https://kartinki.pics/pics/uploads/posts/2022-08/thumbs/1661416437_2-kartinkin-net-p-zadnii-fon-sportzal-krasivo-2.jpg" alt="" />
                        <div className="abonim-text">
                            
                            <p>6 месяцев безлимит</p>
                            <p style={{color:"#ff3a3a"}}>Цена</p>
                            <Link to="/"><button className="red-button" style={{fontSize:"12px", backgroundColor:"##ff2626;",marginTop:'20px'}}>Отправить заявку</button></Link>
                            
                        </div>
                    </div>
                    <div className="abonim">
                        <img src="https://kartinki.pics/pics/uploads/posts/2022-08/thumbs/1661416437_2-kartinkin-net-p-zadnii-fon-sportzal-krasivo-2.jpg" alt="" />
                        <div className="abonim-text">
                            
                            <p>9 месяцев безлимит</p>
                            <p style={{color:"#ff3a3a"}}>Цена</p>
                            <Link to="/"><button className="red-button" style={{fontSize:"12px", backgroundColor:"##ff2626;",marginTop:'20px'}}>Отправить заявку</button></Link>
                        </div>
                    </div>
                </div>
                <div className="abonim-top">
                    <div className="abonim">
                        <img src="https://kartinki.pics/pics/uploads/posts/2022-08/thumbs/1661416437_2-kartinkin-net-p-zadnii-fon-sportzal-krasivo-2.jpg" alt="" />
                        <div className="abonim-text">
                            <p>12 месяцев безлимит</p>
                            <p style={{color:"#ff3a3a"}}>Цена</p>
                            <Link to="/"><button className="red-button" style={{fontSize:"12px", backgroundColor:"##ff2626;",marginTop:'20px'}}>Отправить заявку</button></Link>
                        </div>
                    </div>
                    <div className="abonim">
                        <img src="https://kartinki.pics/pics/uploads/posts/2022-08/thumbs/1661416437_2-kartinkin-net-p-zadnii-fon-sportzal-krasivo-2.jpg" alt="" />
                        <div className="abonim-text">
                            <p>12 месяцев дневной</p>
                            <p style={{color:"#ff3a3a"}}>Цена</p>
                            <Link to="/"><button className="red-button" style={{fontSize:"12px", backgroundColor:"##ff2626;",marginTop:'20px'}}>Отправить заявку</button></Link>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
        
    </div>
  );
}

export default Aboniment;