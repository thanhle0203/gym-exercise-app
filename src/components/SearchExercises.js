import React, {useState} from 'react'
import { TextField, Typography, Button } from '@mui/material'
import { Box, Stack, width } from '@mui/system'

const SearchExercises = () => {
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])

  const handleSearch = async () => {
    if (search) {
        const exercisesData = await fetchData(data, getData);
        
        console.log(exercisesData);
    }
  }

  const getData=()=>{
    fetch('./data/data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
    }
    
    useEffect(()=>{
        getData()
    },[])
  
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
                value={search}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
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
                    position: 'absolute',
                    right: '0'
                }}
                onClick={}
            >
                Search
            </Button>
        </Box>
    </Stack>
  )
}

export default SearchExercises