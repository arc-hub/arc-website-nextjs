import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

export const Section3 = () => {
  return (
    <Box
      position="relative"
      sx={{
        display: {
          sm: 'flex',
        },
        flexDirection: {
          sm: 'column',
        },
        padding: {
          xs: '2.5rem 1.5rem',
          sm: '2.5rem 3rem',
          md: '2.5rem 6rem',
          lg: '2.5rem 8rem',
        },
      }}
    >
      <Typography
        variant="h3"
        color="#002E5F"
        fontFamily="Inter"
        sx={{
          width: {
            xs: '18rem',
            sm: '25rem',
            md: '25rem',
            lg: '33rem',
            xl: '25rem',
          },
          typography: {
            xs: 'h5',
            sm: 'h4',
            lg: 'h4',
          },
          fontWeight: {
            xs: '600',
            sm: '600',
            lg: '600',
            xl: '600',
          },
        }}
      >
        Find talents with our Talent Solutions
      </Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{
          marginTop: {
            xs: '1rem',
            sm: '3rem',
          },
        }}
      >
        <Box
          sx={{
            width: {
              xs: '30%',
              sm: '200px',
              md: '240px',
              lg: '300px',
              xl: '350px',
            },
          }}
        >
          <Image
            src={require('../../assets/Frame 44113.png')}
            alt=""
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>
        <Box
          sx={{
            width: {
              xs: '33%',
              sm: '200px',
              md: '240px',
              lg: '330px',
              xl: '400px',
            },
            paddingTop: {
              xs: '2.5rem',
              sm: '4rem',
              lg: '7rem',
              xl: '9rem',
            },
          }}
        >
          <Image
            src={require('../../assets/Frame 44115.png')}
            alt=""
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>
        <Box
          sx={{
            width: {
              xs: '30%',
              sm: '200px',
              md: '240px',
              lg: '300px',
              xl: '350px',
            },
            paddingTop: {
              xs: '5rem',
              sm: '9rem',
              md: '10rem',
              lg: '14rem',
              xl: '16rem',
            },
          }}
        >
          <Image
            src={require('../../assets/Frame 44114.png')}
            alt=""
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>
      </Box>
      <Box
        position="absolute"
        sx={{
          bottom: {
            xs: '130px',
            sm: '170px',
            md: '170px',
            lg: '210px',
            xl: '220px',
          },
          left: {
            xs: '40px',
            sm: '90px',
            md: '150px',
            lg: '200px',
            xl: '230px',
          },
          width: {
            xs: '50px',
            sm: '100px',
            md: '120px',
            lg: '120px',
            xl: '130px',
          },
        }}
      >
        <Image
          src={require('../../assets/Vector 15.png')}
          alt=""
          style={{ width: '100%', height: 'auto' }}
        />
      </Box>
      <Box
        position="absolute"
        sx={{
          top: {
            xs: '110px',
            sm: '150px',
            md: '110px',
            lg: '160px',
            xl: '160px',
          },
          right: {
            xs: '40px',
            sm: '120px',
            md: '190px',
            lg: '260px',
            xl: '330px',
          },
          width: {
            xs: '90px',
            sm: '150px',
            md: '180px',
            lg: '200px',
            xl: '210px',
          },
        }}
      >
        <Image
          src={require('../../assets/Vector 16.png')}
          alt=""
          style={{ width: '100%', height: 'auto' }}
        />
      </Box>
      <Typography
        marginTop="1rem"
        variant="h6"
        fontFamily="Inter"
        sx={{
          typography: {
            xs: 'body2',
            sm: 'h6',
            md: 'h6',
            lg: 'h5',
            xl: 'h5',
          },
          fontWeight: {
            xs: '600',
            sm: '600',
            md: '600',
            lg: '600',
            xl: '600',
          },
        }}
      >
        We are the go to hire the right client
      </Typography>
      <Link
        href="/talent_solution"
        style={{
          textDecoration: 'none',
        }}
      >
        <Typography
          variant="h6"
          color="#FF7801"
          fontFamily="Inter"
          sx={{
            typography: {
              xs: 'body2',
              sm: 'h6',
              md: 'h6',
              lg: 'h5',
              xl: 'h5',
            },
            fontWeight: {
              xs: '600',
              sm: '600',
              md: '600',
              lg: '600',
              xl: '600',
            },
          }}
        >
          Get Started
        </Typography>
      </Link>
    </Box>
  )
}

export default Section3
