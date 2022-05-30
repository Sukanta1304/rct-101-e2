import React from "react";
import AddProduct from './AddProduct'
import Product from './Product';
import Pagination from './Pagination'
const Products = () => {
  // TODO: Remove below const and instead import them from chakra

  return (
    <div>
      <AddProduct/>
      <><Product/></>
      <Pagination/>
      </div>
  );
};

export default Products;
