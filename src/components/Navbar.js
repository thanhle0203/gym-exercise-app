import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/system';

const Navbar = () => {
  return (
    <Stack>
        <Link to="/">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlO4usncyzTjHVOYxWAsqFLepfsKKOgpoPRtYTgokxFJlY7KmLHCWevV84npPnfCxPLyE&usqp=CAU" alt='logo' 
            style={{ width: '48px', height: '48px', margin: '0 20px' }} 
            />
        </Link>

        <Stack>
            <Link to="/">Home</Link>
            <a href='#exercises' style={{ textDecoration: 'none', color: '#3A1212' }}>
                Exercises
            </a>
        </Stack>
    </Stack>
  )
}

export default Navbar