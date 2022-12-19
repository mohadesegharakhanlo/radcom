import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const DrawerBox = styled(Box)(()=> ({
    width:'400px',
    display :'flex',
    flexDirection:'column',
    gap:'30px',
    margin:'20px',
}))

export const ProductListBox = styled('div')(({drawerFlag}) => ({
    marginTop:'100px',
    flexGrow:1, 
    width: drawerFlag ? '75%' : '100%',
    marginBottom:'100px',
}))

export const DrawerCloseButton = styled('div')(() => ({
    padding:'0px'
   
}))

export const DrawerCartButton = styled('div')(() => ({
    width:'100%',
    display:'flex',
    justifyContent:'center',
    marginTop:'2rem',
    marginBottom:'3rem',
   
}))