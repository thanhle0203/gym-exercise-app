import { Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

import { exerciseOptions, fetchData } from '../utils/fetchData'

const Exercises = ({ exercises, setExercises, }) => {
  console.log(exercises);
  
  return (
    <Box id="exercises"
      sx={{mt: {lg: '100px' }}}
      mt="50px"
      p="20px"
    >
        <Typography variant='h3' mb='46px'>
           Showing Exercises
        </Typography>

        <Stack direction='row' sx={{ gap: { lg: '110px', xs: '50px' }}}
          flexWrap="wrap" justifyContent='center'
        >
          {exercises.map((exercises, index) => (
            <p>{exercises.name}</p>
          ))}
        </Stack>
    </Box>
  )
}

export default Exercises