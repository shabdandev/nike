import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useProduct } from "../../context/ProductContext";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ el }) => {
  const { deleteProduct, getOneProduct } = useProduct();
  const nav = useNavigate();
  return (
    <Box>
      <img style={{ width: "280px", height: "280px" }} src={el.image} alt="" />
      <Box>
        <Typography sx={{ fontWeight: "bold" }}>{el.name}</Typography>
        <Typography sx={{ color: "gray" }}>{el.type}'s Shoes</Typography>
        <Typography>{el.price} $</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <IconButton onClick={() => deleteProduct(el.id)}>
            <DeleteIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              getOneProduct(el.id);
              nav(`/edit/${el.id}`);
            }}
          >
            <EditNoteIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
