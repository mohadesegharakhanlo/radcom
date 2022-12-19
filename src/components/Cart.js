import { Paper, 
  TableContainer, 
  Typography , 
  TableHead , 
  Table , 
  TableRow ,
  TableCell,
  TableBody,
  Button ,
  ButtonGroup } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import {removeItemAction , addToCartAction , updateItemAction } from '../redux/actions/addToCart'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
    //fetch cart items from redux
    const {cartItems} = useSelector(state => state.addToCart);
    const [totalPrice , setTotalPrice] = useState(0);
    
    const dispatch = useDispatch();
    //remove item from cart items
    const removeItem = (id) => {
        dispatch(removeItemAction(id));
        
    }
    //update cart items with + - button
    const handleButton = (e , item) => {
        if(e.target.id == 'plusButton') {

          const cartObj = {...item , count : 1}
          dispatch(addToCartAction(cartObj));
          
        } else if(e.target.id == 'minusButton') {

          if(item.count == 1) {

            dispatch(removeItemAction(item.id));
           
          } else {

            dispatch(updateItemAction(item.id));
           
          }
        }
    }

    const calculateTotalPrice = () => {
      let sum = 0;
      if(cartItems.length > 0) {
        for(let i = 0 ; i < cartItems.length ; i++){
          sum = sum + cartItems[i].count * cartItems[i].price
        }
      }
      setTotalPrice(sum)
    }
    // use effect for calculate total price
    useEffect(() => {
      calculateTotalPrice()
    } , [cartItems])
  return (
    <Box>
      <Typography sx={{padding:'20px'}} variant='h3'>shopping cart!!</Typography>

      <Box sx={{display:'flex' , justifyContent:'center' , marginTop:'50px'}}>
        <TableContainer component={Paper} sx={{maxWidth:'1200px'}}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>image</TableCell>
                <TableCell align='right' >quantity</TableCell>
                <TableCell  align='right'>price</TableCell>
                <TableCell  align='right'>totalPrice</TableCell>
                <TableCell  align='right'>delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                cartItems && cartItems.map((item) => (
                  <TableRow key={item.id}>
                      <Link to={`/productdetail/${item.id}`}><TableCell><img src={item.image} height='150px' /></TableCell></Link>
                      <TableCell align='right'>
                        <Box sx={{display:'flex' , justifyContent:'end'}}>
                          <ButtonGroup variant="contained" >
                              <Button primary id='plusButton' onClick={(e) => handleButton(e , item)}>+</Button>
                              <Button primary variant='outline'>{item.count}</Button>
                              <Button primary id='minusButton' onClick={(e) => handleButton(e , item)} >-</Button>
                          </ButtonGroup>
                        </Box>
                      </TableCell>
                      <TableCell align='right'>{item.price}</TableCell>
                      <TableCell align='right'>{item.count * item.price}</TableCell>
                      <TableCell align='right'>
                         <Button color='error' variant='outline' onClick={() => removeItem(item.id)}><DeleteIcon color='error'/></Button>
                      </TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box sx={{display:'flex' , justifyContent:'center' , marginTop:'30px' , gap:'10rem' , flexDirection:'row-reverse' , marginBottom:'100px'}}>
            <Typography variant='h4'>total : {totalPrice}$</Typography>
            <Button startIcon={<ArrowBackIosIcon/>} sx={{backgroundColor:'#98d7c2' , color :'#000000'}}>continue shopping</Button>
      </Box>
    </Box>
  )
}

export default Cart