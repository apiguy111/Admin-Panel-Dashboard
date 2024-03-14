import React from "react";
import "./container.css";
import SearchIcon from "@mui/icons-material/Search";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import TuneIcon from "@mui/icons-material/Tune";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Table from "../table/Table";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ArchiveIcon from "@mui/icons-material/Archive";
import CloseIcon from "@mui/icons-material/Close";

function Container() {
  return (
    <div
      className="mainContainer"
      style={{ display: "flex", flexDirection: "column", height: "100vh" }}
    >
      <div style={{ flex: "0 0 auto" }}>
        <div className="firstRow">
          <h3
            style={{
              marginTop: "0px",
              flex: 1,
            }}
          >
            Products
          </h3>
          <div className="searchRow">
            <SearchIcon
              style={{
                fontSize: "18px",
                color: "#888",
                marginLeft: "10px",
              }}
            />
            <p className="searchText">Search here...</p>
          </div>
          <ContentCopyIcon
            className="copyIcon"
            style={{
              fontSize: "18px",
              color: "#888",
              padding: "4px",
            }}
          />
          <SettingsIcon
            className="copyIcon"
            style={{
              fontSize: "18px",
              color: "#888",
              padding: "4px",
            }}
          />
        </div>
        <div className="line"></div>
        <div className="secondRow">
          <div className="gridBox">
            <DashboardIcon
              style={{
                fontSize: "16px",
                color: "#000",
              }}
            />
            <p className="brandText">All brands</p>
            <ArrowDropDownIcon
              style={{
                fontSize: "16px",
                color: "#000",
              }}
            />
          </div>
          <div className="gridBox">
            <p className="brandText">Desk</p>
            <ArrowDropDownIcon
              style={{
                fontSize: "16px",
                color: "#000",
              }}
            />
          </div>
          <div className="gridBox">
            <p className="brandText">Tags</p>
            <ArrowDropDownIcon
              style={{
                fontSize: "16px",
                color: "#000",
              }}
            />
          </div>
          <div className="gridBox">
            <SwapVertIcon
              style={{
                fontSize: "16px",
                color: "#888",
              }}
            />
            <p className="brandText" style={{ color: "#888" }}>
              Sort
            </p>
          </div>
          <div className="gridBox">
            <TuneIcon
              style={{
                fontSize: "16px",
                color: "#888",
              }}
            />
            <p className="brandText" style={{ color: "#888" }}>
              Filter
            </p>
          </div>
          <div style={{ flex: 1 }}></div>
          <div className="gridBox">
            <AddCircleOutlineIcon
              style={{
                fontSize: "16px",
                color: "#000",
              }}
            />
            <p className="brandText">Meeting</p>
          </div>
          <div className="gridBox" style={{ marginRight: "10px" }}>
            <CloudDownloadIcon
              style={{
                fontSize: "16px",
                color: "#000",
              }}
            />
            <p className="brandText">Import/Export</p>
          </div>
        </div>
      </div>
      <div style={{ flex: "1 1 auto", overflowY: "auto" }}>
        <Table />
      </div>
      <div
        style={{
          flex: "0 0 auto",
          display: "flex",
          flexDirection: "row",
          marginBottom: 10,
          justifyContent: "center",
        }}
      >
        <div></div>
        <p className="textThird">3</p>
        <p
          style={{
            fontSize: 13,
          }}
        >
          Selected
        </p>
        <div className="gridBox" style={{ marginLeft: 10, marginTop: 10 }}>
          <ArchiveIcon
            style={{
              fontSize: "16px",
              color: "#000",
            }}
          />
          <p className="brandText">Archive</p>
        </div>
        <div className="gridBox" style={{ marginTop: 10 }}>
          <DeleteOutlineIcon
            style={{
              fontSize: "16px",
              color: "#D13131",
            }}
          />
          <p className="brandText" style={{ color: "#D13131" }}>
            Delete
          </p>
        </div>
        <div className="gridBox" style={{ marginTop: 10 }}>
          <p className="brandText">More</p>
          <ArrowDropDownIcon
            style={{
              fontSize: "16px",
              color: "#000",
            }}
          />
        </div>
        <CloseIcon
          style={{
            fontSize: "16px",
            color: "#888",
            marginTop: 15,
          }}
        />
      </div>
    </div>
  );
}

export default Container;
