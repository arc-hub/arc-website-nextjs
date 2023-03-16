import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useRouter } from 'next/router'
import Image from 'next/image'

const Talent = () => {
  const router = useRouter()

  return (
    <Box
      sx={{
        backgroundColor: '#FF7801',
        padding: {
          xs: '3rem 1.5rem',
          sm: '3rem 3rem',
          md: '3rem 4.5rem',
          lg: '3rem 6rem',
        },
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box sx={{ width: { xs: '100%', sm: '67%', lg: '50%' } }}>
        <Typography
          variant="body2"
          sx={{ color: '#002E5F', fontWeight: '600' }}
          gutterBottom
        >
          Talent Solution
        </Typography>
        <Typography
          sx={{
            color: '#FFFFFF',
            width: { xs: '100%', sm: '75%' },
            typography: { xs: 'talent2', md: 'talent1' },
          }}
          gutterBottom
        >
          IVYARC increases your chances of hiring the right talent by using our
          Talent Solution.
        </Typography>

        <Button
          variant="contained"
          sx={{
            width: '40%',
            backgroundColor: '#FFFFFF',
            color: '#002E5F',
            textTransform: 'none',
            mt: '1rem',
            '&:hover': {
              backgroundColor: '#FFFFFF',
              color: '#002E5F',
            },
          }}
          onClick={() => router.push('/talent_solution')}
        >
          Get Started
        </Button>
      </Box>
      <Box
        sx={{
          width: { sm: '33%', lg: '50%' },
          display: { xs: 'none', sm: 'flex' },
          alignItems: 'center',
          justifyContent: 'end',
        }}
      >
        <Box>
          <Box sx={{ width: '215px', position: 'relative' }}>
            <Image
              src={require('../../assets/Frame 44130.png')}
              alt=""
              style={{ width: '100%', height: 'auto' }}
            />
          </Box>
          <Box
            sx={{
              width: '215px',
              position: 'relative',
              backgroundColor: '#FFFFFF',
              borderRadius: '1.25rem',
              mt: '1rem',
            }}
          >
            <Box sx={{ position: 'relative', width: '100%' }}>
              <Image
                src={require('../../assets/peer-networking.png')}
                alt=""
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  borderRadius: '1.25rem 1.25rem 0rem 0rem',
                }}
                priority
              />
            </Box>

            <Typography
              variant="subtitle1"
              sx={{
                color: '#002E5F',
                textAlign: 'center',
                py: '1rem',
                fontWeight: '600',
              }}
              gutterBottom
            >
              800+ Professionals
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            ml: '1rem',
            display: {
              xs: 'none',
              lg: 'flex',
            },
            flexDirection: 'column',
          }}
        >
          <Box sx={{ height: '225px' }}>
            <Image
              src={require('../../assets/Frame 44128.png')}
              alt=""
              style={{ height: '100%', width: 'auto' }}
            />
          </Box>
          <Box sx={{ height: '225px', mt: '1rem' }}>
            <Image
              src={require('../../assets/Frame 44128.png')}
              alt=""
              style={{ height: '100%', width: 'auto' }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Talent
