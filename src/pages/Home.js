import { Box } from '@mui/material'
import React, {useState} from 'react'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import ExerciseDetail from './ExerciseDetail'

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([]);
  
  return (
    <Box>
        <HeroBanner />
        <SearchExercises 
          setExercises={setExercises}
          bodyPart={bodyPart} 
          setBodyPart={setBodyPart} 
        />
        
        <ExerciseDetail
          setExercises={setExercises}
          bodyPart={bodyPart} 
          setBodyPart={setBodyPart} 
         />

    </Box>
  )
}

export default Home