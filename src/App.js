import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbarui";
import Homepage from "./pages/Homepage";
import "./customcss/custombootstrap.scss";
import "./customcss/customstyles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";

function App() {
  
  return (
    <div className="App bg-primary">
      <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />}/>
        <Route exact path="/adduser" element={<AddUser />}/>
        <Route exact path="/edituser/:id" element={<EditUser />}/>
        <Route exact path="/viewuser/:id" element={<ViewUser />}/>



      </Routes>
      
      </Router>
    </div>
  );
}

export default App;
