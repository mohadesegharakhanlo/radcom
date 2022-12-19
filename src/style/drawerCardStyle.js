import styled from "@emotion/styled";
import { ButtonGroup } from "@mui/material";
import { Box } from "@mui/system";

export const DrawerCardBox = styled(Box)(() => ({
    width:'100%',
    height:"100%",
    display:'flex',
    flexDirection:"column",
    
    backgroundColor:'#eeeeee',
    borderRadius:'30px',

}))

export const DrawerCardItems = styled(Box)(() => ({
    display:'flex',
    justifyContent:'space-between',
    width:'90%',
    padding:'20px',

}))

export const DrawerCardButton = styled('div')({
    display:'flex',
    flexDirection:'row',
    gap:'10px',
    justifyContent:'center',
})

export const DrawerImage = styled('img')(() => ({
    width:'130px',
    height:'130px',
    borderRadius:"50%"
}))

export const DrawerButtonGroup = styled('div')(() => ({
    display:'flex',
    flexDirection:'column',
}))

export const DrawerTypography = styled('div')({
    padding:'10px',
    display:'flex',
    flexDirection:'column',
    gap:'20px'
})