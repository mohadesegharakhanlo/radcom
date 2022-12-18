import React, { useEffect, useState } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import {setProductAction} from '../redux/actions/setProducts'
import { Modal } from '@mui/material'
const ModalComponent = ({id , open }) => {
    const dispatch = useDispatch();
    const {product} = useSelector(state => state.setProducts);
    useEffect(() => {
        dispatch(setProductAction(id))
    } , [])
    console.log(open)
  return (
    <div></div>
    
  )
}

export default ModalComponent