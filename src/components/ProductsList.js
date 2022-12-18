import { Grid , Box } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard';

const ProductsList = () => {
    //fetch data from redux
    const {products} = useSelector((state) => state.setProducts);
    //<ProductCard title = {product.title} price={product.price} image={product.images[0]} id={product.id}/>
  return (
    <Box sx={{marginTop:'100px' ,flexGrow:1 , width:'100%' , marginBottom:'100px'}}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
            {
                products && products.map((product , index) => (
                    <Grid item xs={2} sm={4} md={4} key={index} sx={{display:'flex' , justifyContent:'center'}}>
                        <ProductCard title = {product.title} price={product.price} image={product.images[0]} id={product.id}/>
                    </Grid>
                ))
            }
        </Grid>
    </Box>
  )
}

export default ProductsList