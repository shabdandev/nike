import React, { useEffect, useState } from "react";
import "./Navbar.css";
import {
  Box,
  FormControl,
  FormControlLabel,
  Menu,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import PaginationProduct from "../products/PaginationProduct";
import { useProduct } from "../../context/ProductContext";

const NavbarSort = () => {
  const { fetchByParams, readProduct } = useProduct();
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    readProduct();
  }, [fetchByParams]);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box id="navbar_sort">
      <Box className="container">
        <Box className="navbar_sort">
          <Typography variant="h5">All Shoes(999)</Typography>
          <Box className="navbar_sort_box">
            <Box
              sx={{
                width: "1400px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <PaginationProduct />
            </Box>
            <Typography>Hide Filters</Typography>
            <Typography onClick={handleMenu}>Sort by</Typography>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <FormControl sx={{ p: "12px" }}>
                {/* <FormLabel id="demo-radio-buttons-group-label"></FormLabel> */}
                <RadioGroup
                  onChange={(e) => fetchByParams("type", e.target.value)}
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="all"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="all"
                    control={<Radio />}
                    label="All"
                    onClick={handleClose}
                  />
                  <FormControlLabel
                    value="men"
                    control={<Radio />}
                    label="Men"
                    onClick={handleClose}
                  />
                  <FormControlLabel
                    value="women"
                    control={<Radio />}
                    label="Women"
                    onClick={handleClose}
                  />
                  <FormControlLabel
                    value="kids"
                    control={<Radio />}
                    label="Kids"
                    onClick={handleClose}
                  />
                  <FormControlLabel
                    value="high-low"
                    control={<Radio />}
                    label="Price: High-Low"
                    onClick={handleClose}
                  />
                  <FormControlLabel
                    value="low-high"
                    control={<Radio />}
                    label="Price: Low-High"
                    onClick={handleClose}
                  />
                </RadioGroup>
              </FormControl>
            </Menu>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NavbarSort;
