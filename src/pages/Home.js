import { Box } from '@mui/material'
import React from 'react'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import ExerciseDetail from './ExerciseDetail'

const Home = () => {
  return (
    <Box>
        <HeroBanner />
        <SearchExercises />
        <ExerciseDetail />
    </Box>
  )
}

export default Home