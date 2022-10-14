import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

import { exerciseOptions, fetchData } from '../utils/fetchData'

const Exercises = ({ exercises, setExercises, }) => {
  return (
    <Box id="exercises"
      sx={{mt: {lg: '100px' }}}
      mt="50px"
      p="20px"
    >
        <Typography>
            Exercises
        </Typography>
    </Box>
  )
}

export default Exercises