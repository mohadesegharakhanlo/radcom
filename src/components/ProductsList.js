import { Grid , Box, Drawer } from '@mui/material';
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard';

const ProductsList = () => {
    //fetch data from redux
    const {products} = useSelector((state) => state.setProducts);
    const [openDrawer , setOpenDrawer] = useState(true)
    
    const handleCloseDrawer = () => {
        setOpenDrawer(false)
    }
  return (
    <Box sx={{marginTop:'100px' ,flexGrow:1 , width:'100%' , marginBottom:'100px'}}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }} >
            {
                products && products.map((product , index) => (
                    <Grid item xs={1} sm={4} md={4} key={index} sx={{display:'flex' , justifyContent:'center'}}>
                        <ProductCard title = {product.title} price={product.price} image={product.images[0]} id={product.id}/>
                    </Grid>
                ))
            }
        </Grid>
        <Drawer 
            open={openDrawer}
            anchor='right'
            onClose={handleCloseDrawer}
        >
            <div>hello</div>
        </Drawer>
    </Box>
  )
}

export default ProductsList