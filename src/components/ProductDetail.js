import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux';
import {setProductAction} from '../redux/actions/setProducts'
import { Box } from '@mui/system';
import { ImageList, ImageListItem, Typography , Button , ButtonGroup} from '@mui/material';
import {addToCartAction} from '../redux/actions/addToCart'

const ProductDetail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {product} = useSelector(state => state.setProducts);
    const [count , setCount] = useState(0);

    const handleCounter = (e) => {
        if(e.target.id == 'plusButton') {
            setCount(pre => pre + 1);
        } else if(e.target.id == 'minusButton') {
            if(count != 0) {
                setCount(pre => pre - 1);
            }
        }
    }


    const addToCart = () => {
        const cartObj = {
            id,
            count,
            price : product.price ,
            image : product.images[0],
        }
        dispatch(addToCartAction(cartObj));
    }

    useEffect(() => {

        dispatch(setProductAction(id));

    } , [])

  return (
    <Box sx={{margin:'20px' , display:'flex' , gap:'30px', flexDirection : {xs:'column', sm:'column' , md:'column' , lg : 'row'}}}>
        <Box>
            <img
                src={product?.images[0]}
                width='600px'
                height='600px'
            />
        </Box>
        <Box >
            <h1>{product?.title}</h1>
            <Typography>{product?.description}</Typography>
            <Box sx={{marginTop:'40px' , marginBottom:'30px'}}>
                <ImageList sx={{ width:'800px'}} cols={3}>
                    {
                        product?.images.map((image , index) => (
                            <ImageListItem key={index}>
                                <img
                                    src={image}
                                    width='200px'
                                    height='200px'
                                />
                            </ImageListItem>
                        ))
                    }
                </ImageList>
            </Box>
            <Typography sx={{fontSize:'30px'}}>price : {product?.price}$</Typography>
            <Box sx={{display:'flex' , height:'30px' , marginTop:'15px'}}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button sx={{backgroundColor:'#98d7c2' , color:'#000000'}} id='plusButton' onClick={(e) => handleCounter(e)}>+</Button>
                    <Button sx={{backgroundColor:'#ffffff', color:'#000000'}}>{count}</Button>
                    <Button sx={{backgroundColor:'#98d7c2' , color:'#000000'}} id='minusButton' onClick={(e) => handleCounter(e)}>-</Button>
                </ButtonGroup>
            </Box>
            <Button sx={{marginTop:'25px' , backgroundColor:'#98d7c2' , color:'#000000'}} onClick={addToCart}>add to cart</Button>
        </Box>
    </Box>
  )
}

export default ProductDetail