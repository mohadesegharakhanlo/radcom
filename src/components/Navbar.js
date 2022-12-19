import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { openDrawerAction } from '../redux/actions/openDrawer';

const Navbar = () => {
  const dispatch = useDispatch();
  const handleOpenDrawer = () => {
    dispatch(openDrawerAction(true))
  }
  return (
    <Box sx={{backgroundColor:'#98d7c2' , width:'100%' , height:'110px' , display:'flex' , justifyContent:'space-between' , flexDirection:'row-reverse' , gap:'30px', alignItems:'center'}}>
        <Box sx={{ display:"flex",flexDirection:'row-reverse' , gap:'30px'  , fontSize:'30px' , alignItems:'center' , marginRight:'30px'}}>
            <Button onClick={handleOpenDrawer} sx={{color:'black' , fontSize:'20px'}} >Cart</Button>
            <Link style={{textDecoration: 'none'}} to="/"><Button sx={{color:'black' , fontSize:'20px'}}>Home</Button></Link>
        </Box>
        <Box>
          <Typography variant='h2' sx={{padding:'20px'}}>
            radcom
          </Typography>
        </Box>
       

    </Box>
  )
}

export default Navbar