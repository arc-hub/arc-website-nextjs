import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Image from 'next/image'

const WhyUs = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#F1F4FA',
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
      <Box
        sx={{
          width: {
            xs: '100%',
            md: '66.67%',
          },
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{ color: '#FF7801', fontWeight: '600' }}
          gutterBottom
        >
          Why Us
        </Typography>
        <Typography
          variant="h4"
          sx={{ color: '#090914', fontWeight: '600' }}
          gutterBottom
        >
          What we do at IVYARC
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Box sx={{ width: { xs: '100%', sm: '50%' }, padding: '1rem 0rem' }}>
            <Typography
              variant="subtitle2"
              sx={{ color: '#002E5F', fontWeight: '500' }}
              gutterBottom
            >
              Career Placement
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#667085',
                fontWeight: '400',
                width: { xs: '100%', sm: '85%' },
              }}
            >
              Upon completion of your 12-week Software Development Training with
              us, we will take it a step further and match you with a team of
              specialized recruiters. With their broad access to various job
              opportunities across numerous business industries, you will be
              sure to experience with us to be a huge springboard for your
              Software Development career.
            </Typography>
          </Box>
          <Box sx={{ width: { xs: '100%', sm: '50%' }, padding: '1rem 0rem' }}>
            <Typography
              variant="subtitle2"
              sx={{ color: '#002E5F', fontWeight: '500' }}
              gutterBottom
            >
              Talent Solution
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#667085',
                fontWeight: '400',
                width: { xs: '100%', sm: '85%' },
              }}
            >
              You need the business team and we are ready to deliver. Just give
              us a call and let's get talking with a varied range of
              professionals. ARC brings your perfect business team directly to
              your doorstep. All you have to do is give us a call and let's get
              started.
            </Typography>
          </Box>
          <Box sx={{ width: { xs: '100%', sm: '50%' }, padding: '1rem 0rem' }}>
            <Typography
              variant="subtitle2"
              sx={{ color: '#002E5F', fontWeight: '500' }}
              gutterBottom
            >
              Developer Training
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#667085',
                fontWeight: '400',
                width: { xs: '100%', sm: '85%' },
              }}
            >
              Designed to fast-track your career, our 12 weeks intensive
              developer training course teaches you everything you need to
              become a Software Developer.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: '33.33%',
          display: {
            xs: 'none',
            md: 'flex',
          },
          position: 'relative',
        }}
      >
        <Image
          src={require('../../assets/image 13.png')}
          alt=""
          style={{ height: 'auto', width: '100%' }}
          priority
        />
      </Box>
    </Box>
  )
}

export default WhyUs
