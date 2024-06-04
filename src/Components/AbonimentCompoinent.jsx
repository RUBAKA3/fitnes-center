import React from "react";
import { Link } from "react-router-dom";

function Aboniment() {


  
  
  return (

    <div>
        <div className="head">
            <p>MNG-FIT</p>
            <div style={{height:'70px', width:'150px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <Link to="/user"><button>Профиль</button></Link>
            <Link to="/"><button>Выйти</button></Link>
            </div>
            
        </div>
        <h1 align='center'>Абонименты</h1>
        <div style={{width:'60%', margin: '0% 20%', height: 'auto', minHeight: '400px'}}>
            <div className="abonim">
                <h1>На 6 месяцев</h1>
                <div style={{backgroundColor:'blue', height:'100px', width:'100px'}}></div>
            </div>
            <div className="abonim">
                <h1>На 9 месяцев</h1>
                <div style={{backgroundColor:'blue', height:'100px', width:'100px'}}></div>
            </div>
            <div className="abonim">
                <h1>На год</h1>
                <div style={{backgroundColor:'blue', height:'100px', width:'100px'}}></div>
            </div>
        </div>
    </div>
  );
}

export default Aboniment;