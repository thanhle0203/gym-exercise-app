import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4'>
      <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlO4usncyzTjHVOYxWAsqFLepfsKKOgpoPRtYTgokxFJlY7KmLHCWevV84npPnfCxPLyE&usqp=CAU' alt='logo' width='200px' height='40px' />
        <Typography variant='h5' pb='40px' mt='20px'>
          Made by with love by Thanh Le
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer