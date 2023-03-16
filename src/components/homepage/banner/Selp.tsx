import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Selp = () => {
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
            sm: '65%',
          },
          padding: {
            xs: '0rem 0rem 0rem 0rem',
            sm: '3rem 3rem',
            md: '3rem 4.5rem',
            lg: '3rem 6rem',
          },
          textAlign: 'left',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: '#1A1F2B',
            textAlign: {
              xs: 'center',
              sm: 'left',
            },
            width: { xs: '100%', md: '80%' },
            fontWeight: '700',
          }}
          gutterBottom
        >
          Take your Tech Career to the Next Level
        </Typography>
        <Typography
          sx={{
            color: '#4A515F',
            fontWeight: '400',
            textAlign: {
              xs: 'center',
              sm: 'left',
            },
            typography: { xs: 'subtitle2', lg: 'subtitle1' },
            width: { xs: '100%', md: '90%' },
          }}
          gutterBottom
        >
          Ready to become an advanced web developer that can tackle the needs of
          the ever-evolving IT world?
        </Typography>
        <Typography
          sx={{
            color: '#4A515F',
            fontWeight: '400',
            textAlign: {
              xs: 'center',
              sm: 'left',
            },
            typography: { xs: 'subtitle2', lg: 'subtitle1' },
            width: { xs: '100%', md: '90%' },
          }}
          gutterBottom
        >
          Register for our Software Engineering Leadership Programme (SELP) and
          transform your skills and mindset from those of an average developer
          to a certified IT leader, taking on new challenges using a highly
          adaptive toolset.
        </Typography>
        <List
          component="ul"
          sx={{ listStyleType: 'disc', pl: '2rem' }}
          dense
          disablePadding
        >
          <ListItem sx={{ display: 'list-item', py: '0rem' }}>
            <ListItemText
              sx={{ color: '#4A515F' }}
              primary="Delve into advanced web development."
            />
          </ListItem>
          <ListItem sx={{ display: 'list-item', py: '0rem' }}>
            <ListItemText
              sx={{ color: '#4A515F' }}
              primary="Personalized coaching on your software development journey."
            />
          </ListItem>
          <ListItem sx={{ display: 'list-item', py: '0rem' }}>
            <ListItemText
              sx={{ color: '#4A515F' }}
              primary="Gain key insight into the IT industry."
            />
          </ListItem>
          <ListItem sx={{ display: 'list-item', py: '0rem' }}>
            <ListItemText
              sx={{ color: '#4A515F' }}
              primary="Join our network of software engineers."
            />
          </ListItem>
          <ListItem sx={{ display: 'list-item', py: '0rem' }}>
            <ListItemText
              sx={{ color: '#4A515F' }}
              primary="Learn from anywhere in the world."
            />
          </ListItem>
          <ListItem sx={{ display: 'list-item', py: '0rem' }}>
            <ListItemText
              sx={{ color: '#4A515F' }}
              primary="All it takes is 12 weeks to transform your career."
            />
          </ListItem>
        </List>
        <Box
          sx={{
            mt: '1rem',
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#FF7801',
              '&:hover': {
                backgroundColor: '#FF7801',
              },
              textTransform: 'none',
              padding: '0.5rem 3.5rem',
            }}
            onClick={() => router.push('/courses/selp')}
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

          width: '35%',
          height: { sm: '33.33%', md: '50%', lg: '75%' },
          padding: {
            sm: '0rem 3rem 0rem 0rem',
            md: '0rem 4.5rem 0rem 0rem',
            lg: '0rem 6rem 0rem 0rem',
          },
        }}
      >
        <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
          <Box
            sx={{
              position: 'absolute',
              width: '35%',
              borderRadius: '0.5rem',
              left: '30%',
              bottom: '25%',
              transform: 'translate(-30%, 25%)',
              overflow: 'hidden',
            }}
          >
            <Image
              src={require('../../../assets/Graduation student 4.webp')}
              alt=""
              priority
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '1rem',
                border: '3px solid #FF7801',
              }}
            />
          </Box>
          <Box
            sx={{
              position: 'absolute',
              width: '35%',
              borderRadius: '0.5rem',
              top: '0%',
              left: '50%',
              transform: 'translate(-50%, 0%)',
              zIndex: 10,
              overflow: 'hidden',
            }}
          >
            <Image
              src={require('../../../assets/Graduation students 2.webp')}
              alt=""
              priority
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '1rem',
                border: '3px solid #FF7801',
              }}
            />
          </Box>
          <Box
            sx={{
              position: 'absolute',
              width: '35%',
              borderRadius: '0.5rem',
              top: '50%',
              right: '10%',
              transform: 'translate(10%, -50%)',
              overflow: 'hidden',
            }}
          >
            <Image
              src={require('../../../assets/Graduation student 3.webp')}
              alt=""
              priority
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '1rem',
                border: '3px solid #FF7801',
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Selp
