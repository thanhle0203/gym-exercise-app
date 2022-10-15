import React from 'react'

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';
import { Stack, Typography } from '@mui/material';


const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;


  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row'}, p: '20px', alignItems: 'center'}}>
      <img src={gifUrl} alt={name} loading="lazy" className='detail-image'/>
      <Stack sx={{ gap: { lg: '35px', xs: '20px' }}}>
        <Typography>
            {name}
        </Typography>
        <Typography>
            Exercises keep you strong. 3/4 Sit-up bup is one of the best exercises to target your abs.
            It will help you improve your mood and gain energy.
        </Typography>
      </Stack>
    </Stack>
  )
}

export default Detail