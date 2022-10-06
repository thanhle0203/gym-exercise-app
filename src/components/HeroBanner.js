import { Box, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import React from 'react'

const HeroBanner = () => {
  return (
    <Box sx={{ 
      mt: { lg: '212px', sx:'70px' },
      ml: { sm: '50px'}
      }} position='relative' p='20px'
      flexDirection='row'
    >
      <div style={{ alignItems: 'flex-start'}}>
        <Typography color='#FF2625' fontWeight='600' fontSize='26px'>
          Fitness Club
        </Typography>

        <Typography fontWeight={700} 
          sx={{ fontSize: { lg: '44px', xs: '40px'} }}
          mb="23px" mt="30px"
        >
          Sweat, Smile <br /> and Repeat
        </Typography>

        <Typography fontSize='22px' fontWeight='35px' mb={4}>
          Check out the most effective exercises
        </Typography>

        <Button variant='contained' color='error' href='#exercises'
        sx={{ backgroundColor: '#ff2625',  padding: '10px' }}
        >
          Explore Exercises
        </Button>
      </div>

      <Typography
        fontWeight={600}
        color='#FF2625'
        sx={{
          opacity: 0.1,
          display: { lg: 'block', xs: 'none' }
        }}
        fontSize="200px"
        mt="50px"
      >
        Exercises
      </Typography>
      

      <div style={{ alignItems:'flex-end'}}>
        <img  src='https://redefiningstrength.com/wp-content/uploads/2016/12/workouts.jpg'
          alt='banner'
          className='hero-banner-img'
        />
      </div>
      

    </Box>
  )
}

export default HeroBanner