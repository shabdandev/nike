import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import logo from "../../image/Link - Nike Homepage → Img.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../context/ProductContext";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";

const NavbarTest = () => {
  const { data, setData } = useProduct();
  const [search, setSearch] = useState("");
  const nav = useNavigate();

  function searchItem() {
    const res = data.filter((el) => el.name.includes(search));
    setData(res);
  }

  useEffect(() => {
    searchItem();
  }, [search]);

  const navigate = useNavigate();

  return (
    <Box id="navbar_test">
      <Box className="container">
        <Box className="navbar_test">
          <Avatar
            sx={{ objectFit: "cover", maxWidth: "80px", width: "100%" }}
            src={logo}
            alt="logo"
          />
          <Box className="navbar_test_icons">
            <Box className="navbar_test_nav">
              <IconButton
                onClick={() => navigate("/admin")}
                sx={{ p: 0, m: 0 }}
              >
                <AdminPanelSettingsIcon />
              </IconButton>
              <Typography>New & Featured</Typography>
              <Typography onClick={() => navigate("/")}>Men</Typography>
              <Typography>Women</Typography>
              <Typography>Kids</Typography>
              <Typography>Accessories</Typography>
            </Box>
            <Box className="navbar_test_search">
              <input
                className="input"
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search"
              />
              <IconButton>
                <FavoriteBorderIcon sx={{ fontSize: "25px" }} />
              </IconButton>
              <IconButton>
                <WorkOutlineIcon sx={{ fontSize: "25px" }} />
              </IconButton>
              <IconButton onClick={() => nav("/login")}>
                <PersonAddAltIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NavbarTest;
