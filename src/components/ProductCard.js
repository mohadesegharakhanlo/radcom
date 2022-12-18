import { Card, Typography , Box, Button} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import {addToCartAction} from '../redux/actions/addToCart'


const ProductCard = ({title , price , image , id}) => {
    const dispatch = useDispatch();
    const addToCart = () => {
        const cartObj = {
            id,
            price,
            image,
            count : 1,
        }
        dispatch(addToCartAction(cartObj));
    }
  return (
    
     <Card sx={{width:'400px' , padding:'10px' , cursor:'pointer'}}>
        <Typography sx={{padding:'10px',fontSize:'20px',textAlign:'center'}}>{title}</Typography>
        <Link style={{textDecoration: 'none'}} to={`/productdetail/${id}`}>
            <Box sx={{width:'380px' , margin:'auto'}}>
                <img
                    src={image}
                    height='300px'
                    width='380px'
                />
            </Box>
        </Link>
        <Typography sx={{textAlign:'center' , fontSize:'25px'}}>{price}$</Typography>
        <Box sx={{width:'400px' ,display:'flex' , justifyContent:'center' , marginTop:'15px' , marginBottom:'10px'}}>
            <Button sx={{
                backgroundColor:'#98d7c2',
                color:'#000000',
                fontSize:'15px',
            }}
            startIcon={<ShoppingCartIcon/>}
            onClick={addToCart}
            >
                add to cart
            </Button>
        </Box>
    </Card>
  )
}

export default ProductCard