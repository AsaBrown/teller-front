import logo from './logo.svg';
import './App.css';
import { Sidebar, Menu, MenuItem, SidebarHeader} from 'react-pro-sidebar';
import React, { useState } from "react";
import styles from './App.css';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

function App() {

  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false)

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
            Hello
          </MenuItem>
          <MenuItem>Home</MenuItem>
          <MenuItem>Login</MenuItem>
          <MenuItem>Bank</MenuItem>
        </Menu>
      </Sidebar>

      <h1 style={{ color: "white", marginLeft: "5rem" }}>
        REACT
      </h1>

    </div>
  );
}

export default App;
