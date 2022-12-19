import { Card, Typography , Box, Button , Modal} from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import {addToCartAction} from '../redux/actions/addToCart';
import { ModalDiv , ModalBottom } from '../style/test';



const ProductCard = ({title , price , image , id}) => {
    const [openModal , setOpenModal] = useState(false)
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
    const handleOpenModal = () => {
        setOpenModal(true);
    }
    const handleCloseModal = () => {
        setOpenModal(false)
    }
  return (
    <>
     <Card sx={{width:'400px' , padding:'10px' , cursor:'pointer'}}   >
        <Box onClick={handleOpenModal}>
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
        </Box>
        
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
      {openModal && 
        <Modal open={openModal} onClose={handleCloseModal}>
            <ModalDiv className=''>
                <img
                    src={image}
                />
                <ModalBottom>
                    <Typography variant='h4'>{title}</Typography>
                    <Button primary variant='contained'>show detail</Button>
                </ModalBottom>
            </ModalDiv>
           
        </Modal>
        }
    </>
    
  )
}

export default ProductCard