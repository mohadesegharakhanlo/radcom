import { Grid , Box, Drawer, Button } from '@mui/material';
import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import ProductCard from './ProductCard';
import { openDrawerAction } from '../redux/actions/openDrawer';
import { DrawerBox  } from '../style/productListStyle';
import DrawerCard from './DrawerCard';
import { Link } from 'react-router-dom';


const ProductsList = () => {
    const dispatch = useDispatch()
    //fetch data from redux
    const {products} = useSelector((state) => state.setProducts);

    //fetch drawer flag from redux
    const {drawerFlag} = useSelector(state => state.openDrawer);

    //fetch cart items from redux
    const {cartItems} = useSelector(state => state.addToCart)

    //onCLose drawer func
    const handleCloseDrawer = () => {
        dispatch(openDrawerAction(false))
    }

  return (
    <Box sx={{marginTop:'100px' ,flexGrow:1 , width:'100%' , marginBottom:'100px'}}>
        <Grid container spacing={3} columns={{xs:4 , sm:8 , md:12 , lg:12}}>
            {
                products && products.map((product , index) => (
                    <Grid item xs={4} sm={8} md={6} lg={4} key={index} sx={{display:'flex' , justifyContent:'center'}}>
                        <ProductCard title = {product.title} price={product.price} image={product.images[0]} id={product.id}/>
                    </Grid>
                ))
            }
        </Grid>
        <Drawer 
            open={drawerFlag}
            anchor='right'
            onClose={handleCloseDrawer}
            variant='temporary'
        >
            <DrawerBox>
                {
                    cartItems && cartItems.map((item) => (
                        <Box key={item.id}>
                            <DrawerCard item={item}/>
                        </Box>
                    ))
                }

            </DrawerBox>
            <Link to='/cart'><Button primary variant='contained'>show cart</Button></Link>
        </Drawer>
    </Box>
  )
}

export default ProductsList