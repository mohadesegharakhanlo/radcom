import { Box } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import ProductsList from '../components/ProductsList';



const Home = () => {

  return (
    <div>
       <Box>
        <ProductsList/>
       </Box>

    </div>
  )
}

export default Home