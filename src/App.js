
import './App.css';
import {BrowserRouter , Routes, Route, Link} from "react-router-dom";
import Departments from "./components/Department";
import Employee from "./components/Employee";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
<Route path="/" element={<Departments/>}></Route>
<Route path="/Employee" element={<Employee/>}></Route>
     </Routes>



     </BrowserRouter>
    </div>
  );
}

export default App;
