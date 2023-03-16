import { Box, Typography } from '@mui/material'
import Image from 'next/image'

export const Section2 = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          sm: 'row',
        },
        mx: {
          xs: '0px',
          sm: 'auto',
        },
        marginBottom: '5rem',
        justifyContent: {
          xs: 'center',
          md: 'space-between',
        },
        width: {
          xs: '100%',
          md: '70%',
          lg: '53%',
          xl: '58%',
        },
      }}
    >
      <Box
        sx={{
          borderRight: {
            xs: 'none',
            sm: '1px solid Black',
            md: '1px solid Black',
          },
        }}
      >
        <Box
          sx={{
            padding: {
              xs: '0rem 0rem 2rem 0rem',
              sm: '0rem 2rem 0rem 0rem',
              md: '0rem 3rem 0rem 0rem',
              xl: '0rem 5rem 2rem 0rem',
            },
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: {
                xs: '40px',
                xl: '30%',
              },
              mx: {
                xs: 'auto',
                sm: '0px',
              },
            }}
          >
            <Image
              src={require('../../assets/Email.png')}
              alt=""
              style={{ width: '100%', height: 'auto' }}
            />
          </Box>
          <Typography
            variant="h5"
            sx={{
              textAlign: {
                xs: 'center',
                sm: 'left',
              },
              fontSize: {
                xl: '30px',
              },
              fontFamily: 'Manrope',
              fontWeight: '600',
            }}
          >
            Email
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              textAlign: {
                xs: 'center',
                sm: 'left',
              },
              opacity: '0.7',
              fontFamily: 'Manrope',
            }}
          >
            info@ivyarc.com
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          borderRight: {
            xs: 'none',
            sm: '1px solid Black',
            md: '1px solid Black',
          },
        }}
      >
        <Box
          sx={{
            padding: {
              xs: '0rem 0rem 2rem 0rem',
              sm: '0rem 2rem 0rem 2rem',
              md: '0rem 3rem 0rem 0rem',
              xl: '0rem 6.5rem 0rem 0rem',
            },
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: {
                xs: '40px',
                xl: '17%',
              },
              mx: {
                xs: 'auto',
                sm: '0px',
              },
            }}
          >
            <Image
              src={require('../../assets/Phone.png')}
              alt=""
              style={{ width: '100%', height: 'auto' }}
            />
          </Box>
          <Typography
            variant="h5"
            sx={{
              textAlign: {
                xs: 'center',
                sm: 'left',
              },
              fontSize: {
                xl: '30px',
              },
              fontFamily: 'Manrope',
              fontWeight: '600',
            }}
          >
            Phone number
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              textAlign: {
                xs: 'center',
                sm: 'left',
              },
              opacity: '0.7',
              fontFamily: 'Manrope',
            }}
          >
            Nigeria: +234 808 989 5660
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              textAlign: {
                xs: 'center',
                sm: 'left',
              },
              opacity: '0.7',
              fontFamily: 'Manrope',
            }}
          >
            United Kingdom: +44 7744 4151 270
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          paddingLeft: {
            sm: '20px',
            md: '0rem',
          },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: {
              xs: '40px',
              xl: '21%',
            },
            mx: {
              xs: 'auto',
              sm: '0px',
            },
          }}
        >
          <Image
            src={require('../../assets/Location.png')}
            alt=""
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>
        <Typography
          variant="h6"
          sx={{
            textAlign: {
              xs: 'center',
              sm: 'left',
            },
            fontFamily: 'Manrope',
            fontWeight: '600',
          }}
        >
          Nigeria
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: {
              xs: 'center',
              sm: 'left',
            },
            fontFamily: 'Manrope',
            fontWeight: '600',
          }}
        >
          United Kingdom
        </Typography>
      </Box>
    </Box>
  )
}

export default Section2
