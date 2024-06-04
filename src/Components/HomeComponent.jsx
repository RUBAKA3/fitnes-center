import React from "react";
import { Link } from "react-router-dom";


function Home() {
  let token=localStorage.getItem("api_token")
  let role =localStorage.getItem("user_role")
  console.log(token)
  return (
    <div className="home">
      <div className="head">
        <p className="plogo">MNG-FIT</p>
        <div className="head-home">
          <h6>Пермь</h6>
          <a href="/aboniment"><h6>АБОНИМЕНТЫ</h6></a>
          <a href="/zapic"><h6>РАСПИСАНИЕ</h6></a>
          <a href="#contact"><h6>КОНТАКТЫ</h6></a>
        </div>
        {token ===null?<Link to="/login" style={{textDecoration:"none"}}><button className="red-button" style={{fontSize:'16px',}}>ВОЙТИ</button></Link>: role==3?<Link to='/user'><button className="red-button"style={{fontSize:'16px',}}>Профиль</button></Link>:<Link to='/trener'><button className="red-button"style={{fontSize:'16px',}}>Профиль</button></Link> }
        
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
            <p>-----------------------------------------------------</p>
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
              <input type="text" placeholder="Ваше имя" />
              <input type="text" placeholder="Контактный телефон"/>
            </div>
            <button className="red-button" style={{width:"100%", fontSize:"16px", height:"50px"}}>Отправить заявку</button>
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