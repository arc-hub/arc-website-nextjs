import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import { MutableRefObject } from 'react'

type JumbotronProps = {
  talentRef: MutableRefObject<HTMLDivElement | null>
}

const Jumbotron = ({ talentRef }: JumbotronProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        padding: {
          xs: '3rem 1.5rem',
          sm: '3rem 3rem',
          md: '3rem 4.5rem',
          lg: '3rem 6rem',
        },
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: {
            xs: '100%',
            sm: '50%',
          },
          padding: {
            xs: '0rem 0rem 0rem 0rem',
            sm: '0rem 2.5rem 0rem 0rem',
          },
        }}
      >
        <Typography
          sx={{
            color: '#080808',
            textAlign: {
              xs: 'center',
              sm: 'left',
            },
            typography: { xs: 'ts3', sm: 'ts2', lg: 'ts1' },
            width: { xs: '100%', lg: '90%' },
          }}
          gutterBottom
        >
          Unleash Your Potential with ARC Digital
        </Typography>
        <Typography
          sx={{
            color: '#4A515F',
            fontWeight: '700',
            textAlign: {
              xs: 'center',
              sm: 'left',
            },
            typography: { xs: 'subtitle2', lg: 'h6' },
            width: { xs: '100%', lg: '75%' },
          }}
          gutterBottom
        >
          the biggest pool for remote job, onsite jobs, permanent, contract and
          temporary.
        </Typography>
        <Box
          sx={{
            mt: '1rem',
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#002E5F',
              padding: '0.5rem 3.5rem',
              textTransform: 'none',
            }}
            onClick={() =>
              talentRef.current?.scrollIntoView({
                behavior: 'smooth',
              })
            }
          >
            Get Started
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: {
            xs: 'none',
            sm: 'flex',
          },
          position: 'relative',
          width: '50%',
        }}
      >
        <Image
          src={require('../../assets/Frame 44031.png')}
          alt=""
          style={{ width: '100%', height: 'auto' }}
        />
      </Box>
    </Box>
  )
}

export default Jumbotron
