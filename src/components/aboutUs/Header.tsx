import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import Navbar from 'components/ui/Navbar'
import Image from 'next/image'

export const Header = () => {
  return (
    <Box sx={{ backgroundColor: '#002E5F' }}>
      <Navbar page="about" textColor="#FFFFFF" />
      <Box
        sx={{
          padding: {
            xs: '3rem 1.5rem',
            sm: '3rem 3rem',
            md: '3rem 4.5rem',
            lg: '3rem 6rem',
          },
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            display: {
              xs: 'none',
              sm: 'flex',
            },
            position: 'absolute',
            height: '100%',
            left: { sm: '35%', lg: '40%' },
            transform: {
              sm: 'translate(-35%, 0%)',
              lg: 'translate(-40%, 0%)',
            },
          }}
        >
          <Image
            src={require('../../assets/Ellipse 5.png')}
            alt=""
            style={{ height: '100%', width: 'auto' }}
          />
        </Box>
        <Box
          sx={{
            width: {
              xs: '100%',
              sm: '66.67%',
            },
            position: 'relative',
          }}
        >
          <Typography
            color="white"
            gutterBottom
            sx={{
              width: {
                xs: '100%',
                sm: '75%',
              },
              typography: { xs: 'talent2', md: 'talent1' },
              fontFamily: 'Inter',
            }}
          >
            We Help Empower African Talents One Dev at a time
          </Typography>
          <Typography
            color="white"
            variant="body2"
            sx={{
              width: {
                xs: '100%',
                sm: '90%',
              },
              fontFamily: 'Manrope',
            }}
          >
            IVYARC is a Software Training institute aimed at empowering Africans
            by imparting unto them core ICT skills needed to be modern leaders
            of the world&apos;s constantly evolving digital landscape, and by
            outsourcing our trained graduates to global organizatioms as Skilled
            Professionals and Business Consultants. We believe that our efforts
            to enrich their lives via ICT will play a huge role on defining the
            digital transformation of the continent and beyond.
          </Typography>
        </Box>
        <Box
          sx={{
            display: {
              xs: 'none',
              sm: 'flex',
            },
            padding: {
              sm: '0remm 2rem',
              lg: '0rem 4rem',
            },
            width: '33.33%',
            position: 'relative',
          }}
        >
          <Image
            src={require('../../assets/Spike.png')}
            alt=""
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Header
