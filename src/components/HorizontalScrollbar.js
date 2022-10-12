
import { Box } from '@mui/material'
import React from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import BodyPart from './BodyPart'

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => (
    <ScrollMenu>
        {data.map((item) => (
            <Box 
                key={item.id || item}
                itemId={item.id || item}
                title={item.id || item}
                m="0 40px"
            >
                <BodyPart 
                    item={item}
                    setBodyPart={setBodyPart}
                    bodyPart={bodyPart}
                 />
            </Box> 
            )
        )}
    </ScrollMenu>
);


export default HorizontalScrollbar