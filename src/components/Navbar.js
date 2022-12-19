import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <Box sx={{backgroundColor:'#e0e0e0' , width:'100%' , height:'110px' , display:'flex' , justifyContent:'space-between' , flexDirection:'row-reverse' , gap:'30px', alignItems:'center'}}>
        <Box sx={{ display:"flex",flexDirection:'row-reverse' , gap:'30px'  , fontSize:'30px' , alignItems:'center' , marginRight:'30px'}}>
          <Link style={{textDecoration: 'none'}} to="/"><Button color='secondary' variant='contained' sx={{fontSize:'18px'}}>Home</Button></Link>
          <Link to="/cart"><Button color='secondary' variant='contained'  sx={{fontSize:'18px'}}>Cart</Button></Link>
        </Box>
        <Box>
          <Typography variant='h2' sx={{padding:'20px', color:'white'}} >
            Radcom
          </Typography>
        </Box>
       

    </Box>
  )
}

export default Navbar