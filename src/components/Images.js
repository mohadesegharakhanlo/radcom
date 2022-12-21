import { Grid } from '@mui/material'
import React from 'react'

const Images = () => {
  const imagesNumber = [1 , 2 , 3, 4 , 5 ,6];
  return (
    <div className='container'>
      <div className='image-wrap'>
        <Grid container spacing={3} columns={12}>
          {
            imagesNumber.map((item) => (
              <Grid item sx={4}>
                <div className={`image-wrap-div-${item}`}>
                    <div className='image'></div>
                </div>
              </Grid>
            ))
          }
        </Grid>
      </div>
    </div>
  )
}

export default Images