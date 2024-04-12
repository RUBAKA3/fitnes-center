import React from "react";
import { Link } from "react-router-dom";

function User() {


  
  
  return (
    <div>
        <div className="head">
            <p>MNG-FIT</p>
            <a href="/login"><button>Выйти</button></a>
        </div>
        <div className="main">
            <div className="name">
                <div className="img"></div>
                <h1>Степан Джаваскриптер</h1>
            </div>
            <div className="user">
                <Link to='/abonim' >
                    <div className="pod">
                        <div className="imgu"></div>
                        <p>Абонименты</p>
                    </div>
                </Link>
                <Link to='/traners'>
                    <div className="pod">
                        <div className="imgu"></div>
                        <p>Тренеры</p>
                    </div>
                </Link>
              
            </div>
        </div>
    </div>
  );
}

export default User;
