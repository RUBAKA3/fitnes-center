import { BrowserRouter, Route, Routes} from "react-router-dom";
import Registr from "./Components/RegisterComponent";
import Login from "./Components/LoginComponent";
import Admin from "./Components/AdminComponent";
import User from "./Components/UserComponent";
import Aboniment from "./Components/AbonimentCompoinent";


function App() {


  
  
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Registr/>}/>
        <Route path="admin" element={<Admin/>}/>
        <Route path="user" element={<User/>}></Route>
        <Route path="aboniment" element={<Aboniment/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
