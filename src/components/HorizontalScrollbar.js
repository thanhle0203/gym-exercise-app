
import { Box } from '@mui/material'
import React from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import BodyPart from './BodyPart'
import ExerciseCard from './ExerciseCard';

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => (
    <ScrollMenu>
        {data.map((item) => (
            <Box 
                key={item.id || item}
                itemId={item.id || item}
                title={item.id || item}
                m="0 40px"
            >
                {isBodyParts ? <BodyPart 
                    item={item}
                    bodyPart={bodyPart}
                    setBodyPart={setBodyPart} 
                 /> : <ExerciseCard exercise={item} />
                 }
            </Box> 
            )
        )}
    </ScrollMenu>
);


export default HorizontalScrollbar