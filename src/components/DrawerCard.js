import React from 'react'
import { DrawerCardBox , DrawerCardItems , DrawerCardButton , DrawerImage ,DrawerButtonGroup , DrawerTypography } from '../style/drawerCardStyle'
import { Button, Typography , ButtonGroup } from '@mui/material'
import { useDispatch } from 'react-redux'
import { removeItemAction , addToCartAction , updateItemAction} from '../redux/actions/addToCart'
import DeleteIcon from '@mui/icons-material/Delete';

const DrawerCard = ({item}) => {
  const dispatch = useDispatch()
  const removeItem = (id) => {
    dispatch(removeItemAction(id));
  }
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
console.log(item)
  return (
    <DrawerCardBox>
        <DrawerCardItems>
            <DrawerImage src={item.image}/>
            <DrawerCardButton>
              <DrawerTypography>
                <Typography color='white'>{item.title}</Typography>
                <Typography>{item.count} * {item.price} = {item.count * item.price}</Typography>
              </DrawerTypography>
              <DrawerButtonGroup  sx={{height:'25px'}} >
                <Button  id='plusButton' variant='contained' size='small' sx={{borderRadius:'20px'}} color='white' onClick={(e) => handleButton(e , item)}>+</Button>
                <Button color='black' >{item.count}</Button>
                <Button  id='minusButton' size='small' variant='contained' sx={{borderRadius:'20px'}} color='white'  onClick={(e) => handleButton(e , item)} >-</Button>
              </DrawerButtonGroup>
            </DrawerCardButton>
        </DrawerCardItems>
        
    </DrawerCardBox>
  )
}

export default DrawerCard