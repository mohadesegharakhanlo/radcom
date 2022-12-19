import { Card, Typography , Box, Button , Modal, CardMedia} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { json, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import {addToCartAction} from '../redux/actions/addToCart';
import { ModalDiv , ModalBottom } from '../style/modalStyle';
import { openDrawerAction } from '../redux/actions/openDrawer';



const ProductCard = ({title , price , image , id}) => {
    const [openModal , setOpenModal] = useState(false)
    const {cartItems} = useSelector(state => state.addToCart);
    const dispatch = useDispatch();
    const addToCart = () => {
        const cartObj = {
            id,
            price,
            image,
            title,
            count : 1,
        }
        dispatch(addToCartAction(cartObj));
        dispatch(openDrawerAction(true))

    }
    const handleOpenModal = () => {
        setOpenModal(true);
    }
    const handleCloseModal = () => {
        setOpenModal(false)
    }

    useEffect(() => {
        localStorage.setItem('cartItems' , JSON.stringify(cartItems))
    } , [cartItems])
  return (
    <>
      <Card sx={{width:'300px' , cursor:'pointer'}} >
        <CardMedia
            component="img"
            image={image}
            height='300px'
            onClick={handleOpenModal}

        />
        <Typography sx={{padding:"10px"}}>
            {title}
        </Typography>
        <Box sx={{width:'90%' ,display:'flex' , justifyContent:'space-between' , marginTop:'15px' , marginBottom:'10px' , padding:'10px'}}>
            <Box>
                <Typography color='gray' >price : </Typography>
                <Typography variant='h5'>{price}$</Typography>
            </Box>
            <Button 
             variant='contained'
             color='gray'
             onClick={addToCart}
            >
                <ShoppingCartIcon/>
            </Button>
        </Box>
      </Card>
      {openModal && 
        <Modal open={openModal} onClose={handleCloseModal}>
            <ModalDiv className=''>
                <img
                    src={image}
                />
                <ModalBottom>
                    <Typography variant='h4'>{title}</Typography>
                    <Link to={`/productdetail/${id}`}><Button primary variant='contained'>show detail</Button></Link>
                </ModalBottom>
            </ModalDiv>
           
        </Modal>
        }
    </>
    
  )
}

export default ProductCard