import { Grid , Box, Drawer, Button } from '@mui/material';
import React , {useState} from 'react'
import { useSelector , useDispatch} from 'react-redux'
import ProductCard from './ProductCard';
import { openDrawerAction } from '../redux/actions/openDrawer';
import { DrawerBox , ProductListBox , DrawerCloseButton, DrawerCartButton } from '../style/productListStyle';
import DrawerCard from './DrawerCard';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ReactPaginate from 'react-paginate';


const ProductsList = () => {
    const dispatch = useDispatch()
    const [pageNumber , setPageNumber] = useState(0);
    const dataPerPage = 12;
    const pagesVisited = dataPerPage * pageNumber
    const pageCount = Math.ceil(50 / dataPerPage);
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

    const displayProducts = products?.slice(pagesVisited, pagesVisited + dataPerPage).map((product)=>{
        return(
            <Grid item xs={4} sm={4} md={4} lg={4} key={product.id} sx={{display:'flex' , justifyContent:'center'}}>
                <ProductCard title = {product.title} price={product.price} image={product.images[0]} id={product.id}/>
            </Grid>
        )
    })

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

  return (
    <ProductListBox drawerFlag={drawerFlag}>
        <Grid container spacing={3} columns={{xs:4 , sm:8 , md:12 , lg:16}}>
            {displayProducts}
        </Grid>
        <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            className="flex gap-3 width-full justify-center"
            activeClassName='bg-gray-200 px-4'
      />
        <Drawer 
            open={drawerFlag}
            anchor='right'
            onClose={handleCloseDrawer}
            variant='persistent'
        >
            <DrawerCloseButton>
                <Button 
                    color='error'
                    variant='outline'
                    onClick={handleCloseDrawer}
                    endIcon={<ArrowForwardIosIcon/>}
                    sx={{width:'90px'}}
                >
                close
                </Button>
            </DrawerCloseButton>
            <DrawerBox>
                {
                    cartItems && cartItems.map((item) => (
                        <Box key={item.id}>
                            <DrawerCard item={item}/>
                        </Box>
                    ))
                }
            </DrawerBox>
            <DrawerCartButton><Link to='/cart'><Button primary variant='contained'>show cart</Button></Link></DrawerCartButton>
        </Drawer>
    </ProductListBox>
  )
}

export default ProductsList