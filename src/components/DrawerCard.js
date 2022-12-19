import React from 'react'
import { Box } from '@mui/system'
import { DrawerCardBox , DrawerCardOItems} from '../style/drawerCardStyle'
import { Button, Typography } from '@mui/material'

const DrawerCard = ({item}) => {
  return (
    <DrawerCardBox>
        <Box><Button variant='outline' error>X</Button></Box>
        <DrawerCardOItems>
            <img src={item.image} width='200px' height='200px'/>
            <Typography>{item.count} * {item.price} = {item.count * item.price}</Typography>
        </DrawerCardOItems>
        
    </DrawerCardBox>
  )
}

export default DrawerCard