import {
  Box,
  Button,
  Checkbox,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

const Register = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const nav = useNavigate();

  return (
    <Box sx={{ marginTop: "110px" }}>
      <Box className="block">
        <Typography
          sx={{ fontWeight: "500px", fontSize: "40px", letterSpacing: "1px" }}
        >
          Регистрация
        </Typography>
        <TextField
          sx={{ width: "450px" }}
          id="standard-basic"
          label="Введите свое имя"
          variant="standard"
        />
        <TextField
          sx={{ width: "450px" }}
          id="standard-basic"
          label="Введите свое фамилие"
          variant="standard"
        />
        <TextField
          sx={{ width: "450px" }}
          id="standard-basic"
          label="Введите свою почту"
          variant="standard"
        />
        <TextField
          sx={{ width: "450px" }}
          id="standard-basic"
          label="Введите свою пароль"
          variant="standard"
        />
        <Box
          sx={{
            marginRight: "250px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Checkbox {...label} />
          <Typography>Согласен с Условиями</Typography>
        </Box>
        <Button
          sx={{
            width: "450px",
            height: "50px",
            fontWeight: "bold",
            letterSpacing: "1px",
            fontSize: "18px",
          }}
          variant="outlined"
        >
          Зарегистрироваться
        </Button>
        <IconButton
          onClick={() => nav("/")}
          sx={{ "&:hover": { border: "1px solid black" } }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Register;
