import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

const Registr =() =>{
  const [login, setLogin] = useState('');
  const [email, setEmail]=useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState("")
  const [redirectToProfile, setRedirectToProfile] = useState(false);
  
  
  const handlerLogin = (e) => {
    setLogin(e.target.value);
  };
  const handlerEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlerPassword = (e) => {
    setPassword(e.target.value);
  };
  const handlerrePassword = (e) => {
    setRepassword(e.target.value);
  };


  const avtor = () => {
    prover(login,password,repassword)
    if (login !== "" && password !== "" && email !=="") {
      fetch('http://127.0.0.1:8000/api/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: email,name:login, password: password })
      })
      .then(response => response.json())
      .then(data => {
        console.log(data.email)
        //  setRedirectToProfile(true);
      })
      .catch(error => {
        console.error('Произошла ошибка:', error);
      });
    } else {
      alert("Необходимо ввести логин и пароль");
    }
    setEmail('')
    setLogin(''); 
  setPassword(''); 
  setRepassword('');
}
const prover =()=>{
  // if(login.length>1){
  //   if(!(/^.*[0-9].*/).exec(password)){
  //     alert("Добавьте цифру в ваш пароль")
  //   }
  //   else{
  //     if(!(/^.*[A-ZА-Я].*/).exec(password)){
  //       alert("Добавьте заглавную букву в ваш пароль")
  //     }else{
  //       if (!(/^(?=.*[0-9])(?=.*[!@#$%^&*])/.test(password))) {
  //         alert("Добавьте цифру и спец символ в ваш пароль");
  //       }else{ 
  //         if(password===repassword){
            
  //           }else(alert("Пароли не совпадают"))
  //       }
  //     }
  //   }}else(alert("Имя пользователя слишком маленькое"))
    
}
useEffect(() => {
  if (redirectToProfile) {
    window.location.href = "/login";
  }
}, [redirectToProfile]);

    return(
        <div >
          <div className="head">
            <p>MNG-FIT</p>
            <Link to="/login"><button>Войти</button></Link>
        </div>
      <div className="modal">
        <input  onChange={(e) => { handlerLogin(e)}}  type="text" placeholder="login" />
        <input onChange={(e)=>{handlerEmail(e)}} type="text" placeholder="email" />
        <input  onChange={(e) => { handlerPassword(e) }} value={password} type="password" placeholder="Придумайте пароль" />
        <input  onChange={(e) => { handlerrePassword(e) }} value={repassword} type="password" placeholder="Повторите пароль" />
        <button onClick={() => {avtor()}}>Зарегистрироваться</button>
      </div>


    </div>
    )
}
export default Registr