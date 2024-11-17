import React from 'react'
import { Box, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';


const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
      <Typography color="#FF2625" fontWeight='600' fontSize='26px'>
        FitFlex Hub
      </Typography>
      <Typography fontWeight='700' sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="22px" mt="30px">
        Stronger every day, <br /> inside and out.
      </Typography>
      <Typography fontSize='22px' lineHeight='35px' mb={4}>
        Discover the Power of Effective Workouts with Our Exercise Library
      </Typography>
      <Button variant="contained" color="error" href="#exercises" sx={{ backgroundColor: '#ff2625', padding: "15px" }}>Find Your Perfect Fit</Button>
      <Typography fontWeight={600} color="#ff2625" fontSize="200px" sx={{ opacity: .1, display: { lg: 'block', xs: 'none' } }}>Exercise</Typography>
      <img src={HeroBannerImage} alt="banner" className='hero-banner-img'/>
    </Box>

  )
}

export default HeroBanner