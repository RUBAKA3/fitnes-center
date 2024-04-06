import { BrowserRouter, Route, Routes} from "react-router-dom";
import Registr from "./Components/RegisterComponent";
import Login from "./Components/LoginComponent";


function App() {


  
  
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="vhod" element={<Login/>}/>
        <Route path="register" element={<Registr/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
