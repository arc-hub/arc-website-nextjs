import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import { team } from 'utils/data'

export const Section2 = () => {
  return (
    <Box>
      <Box sx={{ backgroundColor: '#EDEDED' }}>
        <Box
          sx={{
            padding: {
              xs: '2rem',
              md: '3rem 6rem 4rem 6rem',
              lg: '5rem 6rem 5rem 6rem',
            },
          }}
        >
          <Box
            borderBottom="2px solid #000000"
            sx={{
              marginBottom: {
                xs: '2rem',
                md: '1rem',
                lg: '5rem',
              },
            }}
          >
            <Typography
              fontFamily="Inter"
              sx={{
                typography: {
                  xs: 'h5',
                  sm: 'h4',
                },
                fontWeight: {
                  xs: '600',
                  sm: '600',
                  md: '600',
                  lg: '600',
                  xl: '600',
                },
                width: {
                  sm: '17rem',
                  md: '18rem',
                  lg: '18rem',
                  xl: '18rem',
                },
                marginBottom: {
                  xs: '2rem',
                  md: '2rem',
                  lg: '5rem',
                },
              }}
            >
              Meet Our Amazing Team
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              mt: '2rem',
              justifyContent: { xs: 'center', sm: 'space-between' },
            }}
          >
            {team.map((item, index) => (
              <Box
                key={index}
                sx={{
                  width: { xs: '60%', sm: '23%', lg: '22.5%' },
                  mr: { lg: '1.5rem' },
                  mb: { xs: '1.5rem', lg: '0rem' },
                  position: 'relative',
                }}
              >
                <Image
                  src={item.image}
                  alt=""
                  style={{ width: '100%', height: 'auto' }}
                  loading="lazy"
                />
                <Box sx={{ height: '90px' }}>
                  <Typography
                    sx={{
                      color: '#252D3E',
                      typography: {
                        xs: 'body1',
                        sm: 'body2',
                        md: 'body1',
                        lg: 'h6',
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
                    gutterBottom
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: '#252D3E' }}
                    gutterBottom
                  >
                    {item.position}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Section2
