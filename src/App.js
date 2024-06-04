import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registr from "./Components/RegisterComponent";
import Login from "./Components/LoginComponent";
import Admin from "./Components/AdminComponent";
import User from "./Components/UserComponent";
import Aboniment from "./Components/AbonimentCompoinent";
import PrivetRoute from "./Route/PrivetRoute";
import { useState } from "react";
import Coach from "./Components/CoachComponent";
import Zapic from "./Components/ZapicComponent";
import Home from "./Components/HomeComponent";

function App() {
  const [user, setUser] = useState(localStorage.getItem('api_token')||false);
  if(user){
    console.log(true)
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<PrivetRoute user={user}/>}>
            <Route path="admin" element={<Admin/>}/>
            <Route path="user" element={<User/>}/>
            <Route path="trener" element={<Coach/>}/>
            <Route path="zapic" element={<Zapic/>}/>
          </Route>
          <Route path="aboniment" element={<Aboniment/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="login" element={<Login user={user} setUser={setUser}/>}/>
          <Route path="register" element={<Registr/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
