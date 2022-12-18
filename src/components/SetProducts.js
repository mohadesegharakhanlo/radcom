import React , {useEffect} from 'react'
import { useDispatch} from 'react-redux'
import {setProductsAction} from '../redux/actions/setProducts'
import Home from '../pages/Home'


const SetProducts = () => {
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(setProductsAction())
    } , [])


  return (
    <div><Home/></div>
  )
}

export default SetProducts