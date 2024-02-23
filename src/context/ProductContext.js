import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { API_PRODUCTS } from "../helpers/const";
import { useLocation, useNavigate } from "react-router-dom";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const ProductContext = ({ children }) => {
  const [data, setData] = useState([]);
  const [oneProduct, setOneProduct] = useState({});

  async function addProduct(newProduct) {
    await axios.post(API_PRODUCTS, newProduct);
  }
  async function readProduct() {
    let { data } = await axios(`${API_PRODUCTS}/${window.location.search}`);
    setData(data);
  }
  async function deleteProduct(id) {
    await axios.delete(`${API_PRODUCTS}/${id}`);
    readProduct();
  }

  async function getOneProduct(id) {
    let { data } = await axios(`${API_PRODUCTS}/${id}`);
    setOneProduct(data);
  }

  async function editProduct(id, editedProduct) {
    await axios.patch(`${API_PRODUCTS}/${id}`, editedProduct);
    readProduct();
  }

  //! Pagination
  const [page, setPage] = useState(1);
  const itemPerPage = 4;
  const count = Math.ceil(data.length / itemPerPage);

  function currenPage() {
    const begin = (page - 1) * itemPerPage;
    const end = begin + itemPerPage;
    return data.slice(begin, end);
  }
  //! Pagination

  //! Filter
  const location = useLocation();
  const navigate = useNavigate();
  function fetchByParams(quary, value) {
    const search = new URLSearchParams(location.search);
    if (value === "all") {
      search.delete(quary);
    } else {
      search.set(quary, value);
    }
    const url = `${location.pathname}?${search.toString()}`;
    navigate(url);
  }

  //! Filter

  const values = {
    addProduct,
    readProduct,
    data,
    setData,
    deleteProduct,
    getOneProduct,
    oneProduct,
    editProduct,
    setPage,
    currenPage,
    count,
    fetchByParams,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
