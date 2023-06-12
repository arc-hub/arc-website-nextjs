import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Image from 'next/image'

export const Section1 = () => {
  return (
    <Box
      sx={{
        marginTop: {
          sm: '-3rem',
          md: '-4rem',
          lg: '-6rem',
          xl: '-8rem',
        },
      }}
    >
      <Box
        sx={{
          padding: {
            xs: '2.5rem 1.5rem',
            sm: '2.5rem 3rem',
            md: '2.5rem 6rem',
          },
          textAlign: {
            xs: 'center',
            md: 'left',
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            typography: {
              xs: 'h4',
              sm: 'h4',
              md: 'h4',
              lg: 'h4',
              xl: 'h4',
            },
            fontWeight: {
              xs: '600',
              sm: '600',
              md: '600',
              lg: '600',
              xl: '600',
            },
            fontFamily: 'Inter',
          }}
        >
          Our Services
        </Typography>

        <Box
          sx={{
            display: {
              sm: 'flex',
            },
            justifyContent: {
              sm: 'space-between',
            },
            margin: {
              xs: '2rem 0rem',
              sm: '1rem 0rem',
              md: '2rem 0rem',
              lg: '5rem 0rem',
              xl: '4rem 0rem',
            },
          }}
        >
          <Box
            sx={{
              width: {
                xs: '100%',
                lg: '46%',
                xl: '41%',
              },
            }}
          >
            <Typography
              variant="h5"
              marginBottom="1rem"
              color="#002E5F"
              fontFamily="Inter"
              sx={{
                typography: {
                  xs: 'h5',
                  sm: 'h5',
                  md: 'h5',
                  lg: 'h5',
                  xl: 'h5',
                },
                fontWeight: {
                  xs: '600',
                  sm: '600',
                  md: '600',
                  lg: '600',
                  xl: '700',
                },
              }}
            >
              Developer Training
            </Typography>
            <Typography
              color="#252D3E"
              fontFamily="Manrope"
              sx={{
                typography: {
                  xs: 'body2',
                  sm: 'body1',
                  md: 'body1',
                  lg: 'body1',
                  xl: 'subtitle1',
                },
                fontWeight: {
                  xs: '500',
                },
              }}
            >
              Designed to fast-track your career, our 12-week Software
              Engineering courses aims to train learners from across the world
              with key skills that will turn them into highly capable software
              developers. From beginners to experts in the field, we have
              something ready to guide them on their Software Development
              journey, as well as introduce them to an ever-growing community of
              like-minded software engineers.
            </Typography>

            <Typography
              variant="h5"
              marginBottom="1rem"
              color="#002E5F"
              fontFamily="Inter"
              sx={{
                typography: {
                  xs: 'h5',
                  sm: 'h5',
                  md: 'h5',
                  lg: 'h5',
                  xl: 'h5',
                },
                fontWeight: {
                  xs: '600',
                  sm: '600',
                  md: '600',
                  lg: '600',
                  xl: '700',
                },
                marginTop: {
                  xs: '2rem',
                  sm: '2rem',
                  md: '2rem',
                  lg: '2rem',
                  xl: '2rem',
                },
              }}
            >
              Talent Solutions
            </Typography>
            <Typography
              color="#252D3E"
              fontFamily="Manrope"
              sx={{
                typography: {
                  xs: 'body2',
                  sm: 'body1',
                  md: 'body1',
                  lg: 'body1',
                  xl: 'subtitle1',
                },
                fontWeight: {
                  xs: '500',
                },
              }}
            >
              You need the experts; we are ready to deliver. Ranging from Agile
              experts to Full-stack Software Engineers, our specialized tech
              teams are readily deployable and scalable. We are ready to craft
              and deliver the perfect team that satisfies your business&apos;
              needs, regardless of industry.
            </Typography>

            <Typography
              variant="h5"
              marginBottom="1rem"
              color="#002E5F"
              fontFamily="Inter"
              sx={{
                typography: {
                  xs: 'h5',
                  sm: 'h5',
                  md: 'h5',
                  lg: 'h5',
                  xl: 'h5',
                },
                fontWeight: {
                  xs: '600',
                  sm: '600',
                  md: '600',
                  lg: '600',
                  xl: '700',
                },
                marginTop: {
                  xs: '2rem',
                  sm: '2rem',
                  md: '2rem',
                  lg: '2rem',
                  xl: '2rem',
                },
              }}
            >
              Career Placements
            </Typography>
            <Typography
              color="#252D3E"
              fontFamily="Manrope"
              sx={{
                typography: {
                  xs: 'body2',
                  sm: 'body1',
                  md: 'body1',
                  lg: 'body1',
                  xl: 'subtitle1',
                },
                fontWeight: {
                  xs: '500',
                },
              }}
            >
              For our top-scorers, upon completion of their 12-week software
              engineering course with us, we go the extra mile to spearhead
              their tech career by matching them with a team of specialized
              recruiters, providing broad access to job opportunities across
              industries.
            </Typography>
          </Box>
          <Box
            sx={{
              display: {
                xs: 'none',
                lg: 'flex',
              },
              width: {
                lg: '51%',
                xl: '45%',
              },
            }}
          >
            <Image
              src={require('../../assets/image 37.png')}
              alt=""
              style={{ width: '100%', height: 'auto' }}
              loading="lazy"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Section1
