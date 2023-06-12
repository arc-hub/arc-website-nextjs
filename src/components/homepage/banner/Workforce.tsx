import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Workforce = () => {
  const router = useRouter()

  return (
    <Box
      sx={{
        display: 'flex',
        padding: {
          xs: '3rem 1.5rem',
          sm: '0rem 0rem',
          md: '0rem 0rem',
        },
        alignItems: 'center',
        height: '100%',
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
            sm: '0rem 3rem',
            md: '0rem 4.5rem',
            lg: '0rem 6rem',
          },
        }}
      >
        <Typography
          sx={{
            typography: { xs: 'ts3', sm: 'ts2', lg: 'ts1' },
            color: '#1A1F2B',
            textAlign: {
              xs: 'center',
              sm: 'left',
            },
            width: { xs: '100%', md: '100%' },
            fontWeight: '700',
          }}
        >
          Transforming
        </Typography>
        <Typography
          sx={{
            typography: { xs: 'ts3', sm: 'ts2', lg: 'ts1' },
            color: '#FF7801',
            textAlign: {
              xs: 'center',
              sm: 'left',
            },
            width: { xs: '100%', md: '100%' },
            fontWeight: '700',
          }}
        >
          the Digital
        </Typography>
        <Typography
          sx={{
            typography: { xs: 'ts3', sm: 'ts2', lg: 'ts1' },
            color: '#1A1F2B',
            textAlign: {
              xs: 'center',
              sm: 'left',
            },
            width: { xs: '100%', md: '90%' },
            fontWeight: '700',
          }}
          gutterBottom
        >
          Workforce.
        </Typography>
        <Typography
          sx={{
            color: '#4A515F',
            fontWeight: '700',
            textAlign: {
              xs: 'center',
              sm: 'left',
            },
            typography: { xs: 'subtitle2', lg: 'subtitle1' },
            width: { xs: '100%', md: '90%' },
          }}
          gutterBottom
        >
          ARC Digital is a boutique digital agency that offers 360 digital
          services required by organisations and entrepreneurs seeking to launch
          new solutions into the market or maintain existing ones.
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
              backgroundColor: '#0D0D0D',
              '&:hover': {
                backgroundColor: '#0D0D0D',
              },
              textTransform: 'none',
              padding: '0.5rem 3.5rem',
            }}
            onClick={() => router.push('/services')}
          >
            LEARN MORE
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: {
            xs: 'none',
            sm: 'flex',
          },
          flexDirection: 'column',
          justifyContent: 'center',
          width: '50%',
          height: '100%',
          padding: {
            sm: '1.5rem 3rem',
            md: '1.5rem 4.5rem',
            lg: '1.5rem 6rem',
          },
          backgroundColor: '#002E5F',
          textAlign: 'left',
        }}
      >
        <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
          <Image
            src={require('../../../assets/Rectangle 1 (2).webp')}
            alt=""
            style={{ height: 'auto', width: '100%' }}
            priority
          />
        </Box>
        <Typography
          variant="h5"
          sx={{ color: '#FFFFFF', fontWeight: '700', mt: '1rem' }}
          gutterBottom
        >
          Hire a team
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          sx={{ color: '#FFFFFF', fontWeight: '400' }}
        >
          Hiring a dedicated team is the basics of successful product delivery.
          Choose a dedicated team from ARC
        </Typography>

        <Button
          variant="contained"
          sx={{
            mt: '0.5rem',
            textTransform: 'none',
            padding: '0.5rem 3.5rem',
            backgroundColor: '#FF7801',
            '&:hover': {
              backgroundColor: '#FF7801',
            },
          }}
          onClick={() => router.push('/talent_solution/#findTalent')}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  )
}

export default Workforce
