import React, { useState } from "react";
import "./Sidebar.css";
import image from "../../assets/image.png";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CodeIcon from "@mui/icons-material/Code";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AddIcon from "@mui/icons-material/Add";
import FolderIcon from "@mui/icons-material/Folder";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import HelpIcon from "@mui/icons-material/Help";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  return (
    <div className="sidebar">
      <div className="sidebarMini">
        <img src={image} alt="" className="avatar" />

        <div className="incContainer">
          <span className="inc">INC</span>
          <span className="innovative"> InnovativeHub</span>
        </div>
        <img
          src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="avatar2"
        />
      </div>
      <div className="second">
        <div className="third">
          <DashboardIcon
            className="icon"
            style={{
              fontSize: "18px",
              color: "#436850",
            }}
          />
          <p className="text">Design team</p>
          <p className="text2">x + 1</p>
        </div>
        <div className="third">
          <CodeIcon
            className="icon"
            style={{
              fontSize: "18px",
              color: "#436850",
            }}
          />
          <p className="text">Development team</p>
          <p className="text2">x + 1</p>
        </div>
        <div className="third">
          <BusinessCenterIcon
            className="icon"
            style={{
              fontSize: "18px",
              color: "#436850",
            }}
          />
          <p className="text">Marketing team</p>
          <p className="text2">x + 1</p>
        </div>
      </div>
      <div className="third2">
        <AddBoxIcon
          className="icon"
          style={{
            fontSize: "18px",
            color: "#000",
          }}
        />
        <p className="text">Create a team</p>
      </div>
      <div className="third3">
        <p className="text3">FOLDERS</p>
        <AddIcon
          className="icon2"
          style={{
            fontSize: "18px",
            color: "#999",
          }}
        />
      </div>
      <div className="third4">
        <FolderIcon
          className="icon"
          style={{
            fontSize: "18px",
            color: "#436850",
          }}
        />
        <p className="text" onClick={toggleDropdown}>
          Products
        </p>
        {isOpen ? (
          <ArrowDropUpIcon
            className="icon"
            onClick={toggleDropdown}
            style={{
              fontSize: "18px",
              color: "#436850",
            }}
          />
        ) : (
          <ArrowDropDownIcon
            className="icon"
            onClick={toggleDropdown}
            style={{
              fontSize: "18px",
              color: "#436850",
            }}
          />
        )}
        {isOpen && (
          <ul className="dropdown-list">
            <li className="li">
              <span className="span">Dashboard</span>
            </li>
            <li className="li">
              <span className="span">Users</span>
            </li>
            <li className="li">
              <span className="span">Products</span>
            </li>
            <li className="li">
              <span className="span">Orders</span>
            </li>
            <li className="li">
              <span className="span">Delivery</span>
            </li>
          </ul>
        )}
      </div>
      <div className="third4" style={{ marginTop: isOpen ? "150px" : "10px" }}>
        <FolderIcon
          className="icon"
          style={{
            fontSize: "18px",
            color: "#436850",
          }}
        />
        <p className="text" onClick={toggleDropdown2}>
          Sales
        </p>
        {isOpen2 ? (
          <ArrowDropUpIcon
            className="icon"
            onClick={toggleDropdown2}
            style={{
              fontSize: "18px",
              color: "#436850",
            }}
          />
        ) : (
          <ArrowDropDownIcon
            className="icon"
            onClick={toggleDropdown2}
            style={{
              fontSize: "18px",
              color: "#436850",
            }}
          />
        )}
        {isOpen2 && (
          <ul className="dropdown-list">
            <li className="li">
              <span className="span">Dashboard</span>
            </li>
            <li className="li">
              <span className="span">Users</span>
            </li>
            <li className="li">
              <span className="span">Products</span>
            </li>
            <li className="li">
              <span className="span">Orders</span>
            </li>
            <li className="li">
              <span className="span">Delivery</span>
            </li>
          </ul>
        )}
      </div>
      <div className="third4" style={{ marginTop: isOpen2 ? "150px" : "10px" }}>
        <FolderIcon
          className="icon"
          style={{
            fontSize: "18px",
            color: "#436850",
          }}
        />
        <p className="text">Design</p>
      </div>
      <div className="third4" style={{ marginTop: "10px" }}>
        <FolderIcon
          className="icon"
          style={{
            fontSize: "18px",
            color: "#436850",
          }}
        />
        <p className="text">Office</p>
      </div>
      <div
        className="third4"
        style={{ marginTop: "10px", flex: 1, position: "relative" }}
      >
        <FolderIcon
          className="icon"
          style={{
            fontSize: "18px",
            color: "#436850",
          }}
        />
        <p className="text">Legal</p>
      </div>

      <div
        className="third5"
        style={{
          marginBottom: "60px",
          flex: 1,
          bottom: "0px",
        }}
      >
        <HelpIcon
          className="icon"
          style={{
            fontSize: "18px",
            color: "#436850",
          }}
        />
        <p className="text">Help and first steps</p>
      </div>
      <div
        className="third5"
        style={{
          marginBottom: "35px",
          flex: 1,
          bottom: "0px",
        }}
      >
        <PersonAddAltIcon
          className="icon"
          style={{
            fontSize: "18px",
            color: "#436850",
          }}
        />
        <p className="text">Invite teammates</p>
      </div>
      <div
        className="third5"
        style={{
          marginBottom: "10px",
          flex: 1,
          bottom: "0px",
          marginTop: "10px",
        }}
      >
        <p className="text2" style={{ marginLeft: "10px", marginRight: "5px" }}>
          7
        </p>
        <p className="text" style={{ flex: 1 }}>
          days left on trial
        </p>
        <p
          className="text2"
          style={{
            marginLeft: "20px",
            marginRight: "0px",
            right: "0px",
            backgroundColor: "#000",
            color: "#fff",
            paddingLeft: "5px",
            paddingRight: "5px",
          }}
        >
          Add billing
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
