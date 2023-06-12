import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Navbar } from 'components/ui'
import Image from 'next/image'

export const Header = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: '#002E5F',
          height: {
            sm: '380px',
            md: '450px',
            lg: '550px',
            xl: '550px',
          },
        }}
      >
        {/**header */}
        <Navbar page="services" textColor="#FFFFFF" />
        <Box
          justifyContent="space-between"
          sx={{
            display: {
              sm: 'flex',
            },
            padding: {
              xs: '2.5rem 1.5rem',
              sm: '2.5rem 3rem',
              md: '2.5rem 6rem',
            },
          }}
        >
          <Typography
            sx={{
              color: 'white',
              width: {
                xs: '88%',
                sm: '43%',
                lg: '40%',
                xl: '38%',
              },
              fontFamily: 'Inter',
              typography: {
                xs: 'h5',
                sm: 'h5',
                md: 'h4',
                lg: 'h3',
                xl: 'h3',
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
            An African Powerhouse
            <span
              style={{
                paddingLeft: '0.5rem',
                color: '#FFC897',
                fontWeight: '600',
              }}
            >
              in Tech solutions.
            </span>
          </Typography>

          <Box
            sx={{
              width: {
                sm: '55%',
                xl: '50%',
              },
            }}
          >
            <Typography
              color="White"
              fontFamily="manrope"
              variant="body1"
              sx={{
                typography: {
                  xs: 'body2',
                  sm: 'body2',
                  md: 'body1',
                  lg: 'body1',
                  xl: 'subtitle1',
                },
                width: {
                  sm: '100%',
                  md: '98%',
                  lg: '95%',
                  xl: '95%',
                },
                marginTop: {
                  xs: '1rem',
                  sm: '2rem',
                  md: '3rem',
                  lg: '5rem',
                  xl: '5rem',
                },
              }}
            >
              We focused our business to help business leaders achieve maximum
              impact without breaking the bank. We brought together as a group
              of experts with experience in key turnkey areas where leaders
              struggled most. We joined our customers in the fight-to-survive,
              and created solutions that help them to move quickly.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          padding: {
            xs: '2.5rem 1.5rem',
            sm: '2.5rem 3rem',
            md: '2.5rem 6rem',
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
            width: {
              sm: '100%',
            },
            bottom: {
              sm: '80px',
              md: '100px',
              lg: '150px',
              xl: '180px',
            },
          }}
        >
          <Image
            src={require('../../assets/Frame 43998.png')}
            alt=""
            style={{ width: '100%', height: 'auto' }}
            priority
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Header
