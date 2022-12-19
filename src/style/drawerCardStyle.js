import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const DrawerCardBox = styled(Box)(() => ({
    width:'100%',
    height:"100%",
    display:'flex',
    flexDirection:"column",
    alignItems:'center',
    gap:'10px',
    backgroundColor:'#eeeeee',
    borderRadius:'5px',

}))

export const DrawerCardOItems = styled(Box)(() => ({
    display:'flex',
    flexDirection:'row-reverse',
    justifyContent:'space-between',
    width:'80%',
    marginBottom:'1.5rem'

}))