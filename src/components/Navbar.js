import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Typography } from '@mui/material';

const Navbar = () => {
  return (
    <Box sx={{backgroundColor:'#98d7c2' , width:'100%' , height:'110px' , display:'flex' , justifyContent:'space-between' , flexDirection:'row-reverse' , gap:'30px', alignItems:'center'}}>
        <Box sx={{ display:"flex",flexDirection:'row-reverse' , gap:'30px'  , fontSize:'30px' , alignItems:'center' , marginRight:'30px'}}>
            <Link style={{textDecoration: 'none'}} to="/cart"><p>cart</p></Link>
            <Link style={{textDecoration: 'none'}} to="/"><p>home</p></Link>
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