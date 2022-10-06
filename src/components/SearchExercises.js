import { TextField, Typography, Button } from '@mui/material'
import { Box, Stack, width } from '@mui/system'
import React from 'react'

const SearchExercises = () => {
  return (
    <Stack alignItems='center' mt='37px' 
    justifyContent='center' p='20px'
    >
        <Typography fontWeight={700} 
        sx={{ fontSize: { lg: '44px', xs: '30px' }}}
        mb='50px' textAlign='center'
        >
            Awesome Exercises You Should <br/> Know
        </Typography>

        <Box position='relative' mb='72px'>
            <TextField 
                sx={{ 
                    input: {
                        fontWeight: '700',
                        border: 'none', 
                        borderRadius: '4px'
                    },
                    width: { lg: '800px', xs: '350px'},
                    backgroundColor:'#fff',
                    borderRadius: '40px'
                }}
                height='76px'
                value=''
                onChange={(e) => {}}
                placeholder="Search Exercises"
                type='text'
            />
    
            <Button className="search-btn" variant='contained' color='error'
                sx={{
                    color:'#fff',
                    textTransform: 'none',
                    width: { lg: '175px', sx: '80px'},
                    fontSize: { lg: '20px', xs: '14px'},
                    height: '56px',
                    position: 'absolute'
                }}
            >
                Search
            </Button>
        </Box>
    </Stack>
  )
}

export default SearchExercises