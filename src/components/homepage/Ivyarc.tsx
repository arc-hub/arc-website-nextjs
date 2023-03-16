import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Image from 'next/image'

const Ivyarc = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#FAFAFA',
        padding: {
          xs: '3rem 1.5rem',
          sm: '3rem 3rem',
          md: '3rem 4.5rem',
          lg: '3rem 6rem',
        },
        position: 'relative',
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: '600',
          fontFamily: 'Manrope',
        }}
      >
        IVYARC
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box sx={{ width: { xs: '100%', md: '66.67%' } }}>
          <Typography
            variant="body2"
            gutterBottom
            sx={{ width: { xs: '100%', md: '90%' } }}
          >
            IVYARC is a subsection of ARC Digital that has the one goal of
            transforming the African landscape by imparting ICT knowledge across
            the continent using our ever-evolving educational courses.
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{ width: { xs: '100%', md: '90%' }, mt: '1rem' }}
          >
            IVYARC has currently created both our Software Engineering
            Foundations (SEF) and Software Engineering Leadership Programme
            (SELP) courses. These strive to generate top-tier software
            developers across the African continent, training them in core web
            development techniques and providing highly beneficial employment
            opportunities that is easily accessible from anywhere in the world.
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{ width: { xs: '100%', md: '90%' }, mt: '1rem' }}
          >
            With our upcoming courses, such as Product Management, UI/UX
            Designing, and Agile Training, IVYARC is consistently striving to
            provide quality remote education to boost the quality of life for
            the African people.
          </Typography>
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
            src={require('../../assets/Frame 1983.png')}
            alt=""
            style={{ height: 'auto', width: '100%' }}
            priority
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Ivyarc
