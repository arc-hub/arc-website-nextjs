import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'

export const Section3 = () => {
  const router = useRouter()
  return (
    <Box sx={{ backgroundColor: '#363636' }}>
      <Box
        color="white"
        sx={{
          padding: {
            xs: '2.5rem 1.5rem',
            sm: '2.5rem 3rem',
            md: '2.5rem 6rem',
          },
          display: 'flex',
          position: 'relative',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: {
              xs: '100%',
              sm: '50%',
              md: '60%',
            },
          }}
        >
          <Box
            sx={{
              width: {
                xs: '90%',
                sm: '80%',
                md: '85%',
                lg: '100%',
                xl: '90%',
              },
            }}
            borderBottom="2px solid #FFFFFF"
          >
            <Typography
              variant="h2"
              fontWeight="600"
              marginBottom="1rem"
              fontFamily="Inter"
              sx={{
                fontSize: {
                  xs: '20px',
                  md: '38px',
                  lg: '45px',
                  xl: '50px',
                },
              }}
            >
              Have a question?
            </Typography>
            <Typography
              variant="h2"
              fontWeight="600"
              fontFamily="Inter"
              sx={{
                width: {
                  sm: '70%',
                  md: '85%',
                  lg: '75%',
                  xl: '80%',
                },
                fontSize: {
                  xs: '20px',
                  md: '38px',
                  lg: '45px',
                  xl: '50px',
                },
              }}
              marginBottom="1rem"
              lineHeight="140%"
            >
              Our Team is happy to assist you.
            </Typography>
          </Box>

          <Button
            variant="contained"
            size="small"
            sx={{
              backgroundColor: 'white',
              color: '#002E5F',
              textTransform: 'none',
              width: '30%',
              marginTop: '2rem',
              padding: {
                lg: '1rem',
              },
              borderRadius: {
                lg: '0.6rem',
              },
              fontSize: {
                lg: '18px',
              },
              fontWeight: {
                xl: '700',
              },
            }}
            onClick={() => router.push('/contact_us')}
          >
            Contact Us
          </Button>
        </Box>
        <Box
          sx={{
            width: {
              sm: '45%',
              md: '45%',
              lg: '48%',
              xl: '50%',
            },
          }}
        >
          <Box
            position="relative"
            sx={{
              display: {
                xs: 'none',
                sm: 'flex',
              },
              left: {
                md: '0px',
                lg: '90px',
                xl: '70px',
              },
              width: {
                sm: '100%',
                md: '100%',
                lg: '80%',
              },
              zIndex: '10',
            }}
          >
            <Image
              src={require('../../assets/image 27.png')}
              alt=""
              style={{ width: '100%', height: 'auto' }}
            />
          </Box>

          <Box
            position="absolute"
            sx={{
              display: {
                xs: 'none',
                sm: 'flex',
              },
              width: {
                sm: '35%',
                lg: '26%',
                xl: '30%',
              },
              height: {
                sm: '73%',
                lg: '80%',
                xl: '80%',
              },
              bottom: '0px',
              right: '0px',
              zIndex: '5',
            }}
          >
            <Image
              src={require('../../assets/Frame 44012.png')}
              alt=""
              style={{ width: '100%', height: 'auto' }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Section3
