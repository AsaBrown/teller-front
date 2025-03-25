import logo from './logo.svg';
import './App.css';
import { Sidebar, Menu, MenuItem, SidebarHeader} from 'react-pro-sidebar';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  NavLink,
  Link,
  useNavigate,
} from "react-router-dom";
import styles from './App.css';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Home from "./pages/Home"
import Bank from './pages/Bank';
import Login from './pages/Login'

function App() {
  const navigate = useNavigate();

  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);
  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
  //condition checking to change state from true to false and vice versa
  menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <div className="App" style={({ height: "100vh" }, { display: "flex" })}>

      <Sidebar collapsed={menuCollapse} style={{ height: "100vh" }}>
        <Menu>
          <MenuItem
              icon={<MenuOutlinedIcon />}
              onClick={() => {
                menuIconClick();
              }}
              style={{ textAlign: "center" }}
          >
            Menu
          </MenuItem>
          <MenuItem onClick={() => navigate("/home")}>
            Home
          </MenuItem>
          <MenuItem onClick={() => navigate("/login")}>
            Login
          </MenuItem>
          <MenuItem onClick={() => navigate("/bank")}>
            Bank
          </MenuItem>
        </Menu>
      </Sidebar>

        <Routes>
          <Route
          path="/home"
          element={<Home/>}/>

          <Route
          path="/bank"
          element={<Bank/>}
          />

          <Route
          path="/login"
          element={<Login/>}
          />
        </Routes>

    </div>
  );
}

export default App;
