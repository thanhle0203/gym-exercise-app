import { height, Stack } from '@mui/system'
import React from 'react'

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? '4px solid #ff2625' : '',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap: '47px'
        } }
    >
        <img src='https://cdn-icons-png.flaticon.com/512/69/69840.png' 
            alt='dumbbell' 
            styles={{ width: '40px', height: '40px'}} 
        />
    </Stack>
  )
}

export default BodyPart