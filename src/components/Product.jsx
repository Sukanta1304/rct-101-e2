import React ,{useEffect,useState} from "react";
import axios from "axios"


const Product = () => {
  const [Product, setProduct] = useState([])
  // TODO: Remove below const and instead import them from chakra
  const Text = () => <div />;
  const Image = () => <div />;
  const Box = () => <div />;
  const Stack = () => <div />;
  const Heading = () => <div />;
  const Tag = () => <div />;
  const TagLabel = () => <div />;

  useEffect(()=>{
    const getdata= async()=>{
      let res= await axios.get("http://localhost:8080/products")
      console.log(res)
    }
  getdata() ;  
  },[])
  return (
    <Stack data-cy="product">
      <Image data-cy="product-image" />
      <Text data-cy="product-category"></Text>
      <Tag>
        <TagLabel data-cy="product-gender"></TagLabel>
      </Tag>
      <Heading data-cy="product-title"></Heading>
      <Box data-cy="product-price"></Box>
    </Stack>
  );
};

export default Product;
