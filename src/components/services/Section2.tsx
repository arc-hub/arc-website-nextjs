import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { ourAcademy } from 'utils/data'

type Section2Props = {
  setShowModal: (val: boolean) => void
}

export const Section2 = ({ setShowModal }: Section2Props) => {
  const router = useRouter()

  return (
    <Box
      sx={{
        backgroundColor: '#F0F4FD',
      }}
    >
      <Box
        sx={{
          padding: {
            xs: '2.5rem 1.5rem',
            sm: '2.5rem 3rem',
            md: '2.5rem 6rem',
          },
        }}
      >
        <Typography
          variant="h4"
          color="#002E5F"
          fontFamily="Inter"
          sx={{
            typography: {
              xs: 'h4',
            },
            fontWeight: {
              xs: '600',
            },
            paddingTop: {
              sm: '1rem',
            },
            textAlign: {
              xs: 'center',
              sm: 'left',
            },
          }}
        >
          Our Academy
        </Typography>

        <Box
          display="flex"
          sx={{
            flexDirection: {
              xs: 'column',
              lg: 'row',
            },
            padding: {
              xs: '2rem 0rem',
              sm: '3rem 0rem',
              md: '3rem 0rem',
              lg: '5rem 0rem',
              xl: '3rem 0rem',
            },
            alignItems: {
              xs: 'center',
            },
            justifyContent: {
              xs: 'space-between',
              lg: 'space-evenly',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              mt: '2rem',
              justifyContent: { xs: 'center', sm: 'space-between' },
            }}
          >
            {ourAcademy.map((item, index) => (
              <Box
                key={index}
                sx={{
                  width: { xs: '80%', sm: '30%', lg: '22.5%' },
                  mr: { lg: '1.5rem' },
                  mb: { xs: '1.5rem', lg: '0rem' },
                  position: 'relative',
                }}
              >
                <Box
                  sx={{
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    padding: {
                      xs: '14px',
                      sm: '14px',
                      md: '20px',
                      lg: '18px',
                      xl: '18px',
                    },
                  }}
                >
                  <Image
                    src={item.image}
                    alt=""
                    style={{ width: '100%', height: 'auto' }}
                  />
                  <Box sx={{ height: '90px' }}>
                    <Typography
                      variant="body2"
                      fontWeight="600"
                      sx={{ color: '#252D3E' }}
                      gutterBottom
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: '#252D3E' }}
                      gutterBottom
                    >
                      {item.date}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: '#252D3E' }}
                      gutterBottom
                    >
                      {item.duration}
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Typography
                      variant="button"
                      sx={{
                        color: '#FF7801',
                        textTransform: 'none',
                        cursor: 'pointer',
                      }}
                      onClick={() => {
                        if (item.keyword === 'SELP') {
                          router.push('/courses/selp')
                        }

                        if (item.keyword === 'SEF') {
                          router.push('/courses/sef')
                        }

                        if (item.keyword === 'PM') {
                          setShowModal(true)
                        }

                        if (item.keyword === 'UI/UX') {
                          setShowModal(true)
                        }
                      }}
                      gutterBottom
                    >
                      {item.note}
                    </Typography>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        width: {
                          xs: '10%',
                          sm: '5%',
                          md: '15%',
                          lg: '20%',
                        },
                        backgroundColor: '#EAF7E9',
                        color: '#2BB220',
                        '&:hover': {
                          backgroundColor: '#EAF7E9',
                        },
                      }}
                      onClick={() => {
                        if (item.keyword === 'SELP') {
                          router.push('/courses/selp')
                        }

                        if (item.keyword === 'SEF') {
                          router.push('/courses/sef')
                        }

                        if (item.keyword === 'PM') {
                          setShowModal(true)
                        }

                        if (item.keyword === 'UI/UX') {
                          setShowModal(true)
                        }
                      }}
                    >
                      {item.button}
                    </Button>
                  </Box>
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
