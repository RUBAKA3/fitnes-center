import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";


function Home() {
  let token=localStorage.getItem("api_token")
  let role =localStorage.getItem("user_role")
  const [name,setName]=useState('')
  const [number, setNumber]=useState('')
  const [quest,setQuest]=useState('')
  console.log(token)
  let send = () => {
    // Make a request to logout endpoint, e.g., invalidate session/token
    fetch('http://127.0.0.1:8000/api/send-email', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ number: number, name:name,question:quest })
    })
      .then(response => response.json())
      .then(data => {
        // Execute these actions after successful logout response

      })
      .catch(error => {
        console.error('Произошла ошибка:', error);
      });
      setName('');
    setNumber('');
    setQuest('');
    alert('Ваша заявка отправленна, скоро с вами свяжуться')
  }
  const handlerName = (e) => {
    setName(e.target.value);
  };
  const handlerNumber = (e) => {
    setNumber(e.target.value);
  };
  const handlerQuest = (e) => {
    setQuest(e.target.value);
  };
  return (
    <div className="home">
      <div className="head">
        <p className="plogo">MNG-FIT</p>
        <div className="head-home">
          <h6>Пермь</h6>
          <a href="/aboniment"><h6>АБОНИМЕНТЫ</h6></a>
          <a href="/raspisanie"><h6>РАСПИСАНИЕ</h6></a>
          <a href="#contact"><h6>КОНТАКТЫ</h6></a>
        </div>
        {token ===null?<Link to="/login" style={{textDecoration:"none"}}><button className="red-button" style={{fontSize:'16px',}}>ВОЙТИ</button></Link>: role==3?<Link to='/user'><button className="red-button"style={{fontSize:'16px',}}>Профиль</button></Link>:role==2?<Link to='/trener'><button className="red-button"style={{fontSize:'16px',}}>Профиль</button></Link>: <Link to='/admin'><button className="red-button"style={{fontSize:'16px',}}>Профиль</button></Link>}
        
      </div>
      <div className="s1">
        <div className="s1-block">
          <div className="s1-bl-left">
          <h1 style={{margin:"0", fontSize:"40px"}}>ФИТНЕС-КЛУБ</h1><h1 style={{color:"#009FF9",margin:"0", fontSize:"40px"}}>MNG-FIT</h1> 
          <p style={{fontSize:"18px"}}>Адрес: <br/> Комсомольский пр. 92</p>
          </div>
          <div className="s1-bl-rigth">
            <p>Клиентский сервис:</p>
            <h2>+7 (800) 000 00 00</h2>
            <hr style={{color:"#fffffff", width:"250px",margin:"0 0 10px 0", border:"1px solid #ffffff"}}/> 
            <p>Часы работы клуба:</p>
            <div className="s1-block-r-b">
              <div className="s1-block-time-left">
                <p>Пн-Пт</p>
                <p>Сб</p>
                <p>Вс</p>
              </div>
              <div className="s1-block-time-rigth">
                <p style={{color:"#00C6F1"}}>7:00-24:00</p>
                <p style={{color:"#00C6F1"}}>7:00-22:00</p>
                <p style={{color:"#00C6F1"}}>Выходной</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="s2">

        <div className="s2-main-block">
          <div className="s2-mb-top">
            <div className="s2-mb-inf">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3FAwFjoAfN_sXejDyrXmDh8K2PZzbonjLSjGDSUfECg&s" alt="" />
              <div className="s2-mb-opis">
                <p>ГРУППОВЫЕ ТРЕНИРОВКИ</p>
              </div>
            </div>
            <div className="s2-mb-inf">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrhRPB6keEHdEMwN0wDXMZvW-OWb_rxqROUi2EUm9Xjg&s" alt="" />
              <div className="s2-mb-opis">
                <p>ФУНКЦИОНАЛЬНЫЕ ТРЕНИРОВКИ</p>
              </div>
            </div>
            <div className="s2-mb-inf">
              <img src="https://i.mycdn.me/videoPreview?id=1975256421&type=47&idx=30&tkn=cCzEVki1RJeC4ev9hEYD8x7CW3Q&i=1&fn=external_8" alt="" />
              <div className="s2-mb-opis">
                <p>СИЛОВЫЕ ТРЕНИРОВКИ</p>
              </div>
            </div>
          </div>
          <div className="s2-mb-top"><div className="s2-mb-inf">
            <img src="https://cdn.lifehacker.ru/wp-content/uploads/2016/09/26508447651_c66dbf1c0e_h_1474894533.jpg" alt="" />
            <div className="s2-mb-opis">
              <p>КАРДИО ТРЕНИРОВКИ</p>
            </div>
          </div>
          <div className="s2-mb-inf">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBLIG_WJ6mqBnuCaXTizV6MbpYFyVZaCprtB5qLXhBBw&s" alt="" />
            <div className="s2-mb-opis">
              <p>ТРЕНИРОВКИ БОЕВЫХ ИСКУССТВ</p>
            </div>
          </div>
          <div className="s2-mb-inf">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_3xijMgQOy_LMqCDpfHA8-Ylvb4VJJBv_-ZOgKMVa8g&s" alt="" />
            <div className="s2-mb-opis">
              <p>BODY&MIND ТРЕНИРОВКИ</p>
            </div>
          </div></div>
          
        </div>
      </div>
      <div className="s3">
        <h1>Тренерский состав</h1>
        <div className="s3-main">
          <div className="s3-main-block">
            <img src="https://img.razrisyika.ru/kart/90/356661-krome-hellou-kitti-33.jpg" alt="" />
            <div className="s3-block-opis">
                <p>Жидких Степан</p>
              </div>
          </div>
          <div className="s3-main-block">
            <img src="" alt="" />
            <div className="s3-block-opis">
                <p>Жидких Степан</p>
              </div>
          </div>
          <div className="s3-main-block">
            <img src="" alt="" />
            <div className="s3-block-opis">
                <p>Жидких Степан</p>
              </div>
          </div>
          <div className="s3-main-block">
            <img src="" alt="" />
            <div className="s3-block-opis">
                <p>Жидких Степан</p>
              </div>
          </div>
          <div className="s3-main-block">
            <img src="" alt="" />
            <div className="s3-block-opis">
                <p>Жидких Степан</p>
              </div>
          </div>
        </div>
      </div>
      <div className="s4">
        <div className="s4-main">
          <div className="s4-form">
            <h1 style={{fontSize:"36px"}}>Узнать больше</h1>
            <div className="s4-input">
              <input type="text" placeholder="Ваше имя" onChange={(e) => { handlerName(e) }} value={name}/>
              <input type="text" placeholder="Контактный телефон" onChange={(e) => { handlerNumber(e) }} value={number}/>
              <input type="text" placeholder="Ваш вопрос" style={{height:"120px"}} onChange={(e) => { handlerQuest(e) }} value={quest}/>
            </div>
            <button className="red-button" style={{width:"100%", fontSize:"16px", height:"50px"}} onClick={()=>{send()}}>Отправить заявку</button>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-block" id="contact">
          <h1>MNG-FIT</h1>
          <div className=""><h3>Адрес:</h3> <p>ул. Комсомольский пр. 92</p></div>
          <div className=""><h3>Соц. сети:</h3> <p>Вконтакте</p></div>
          
        </div>
      </div>
    </div>
  )
}

export default Home;