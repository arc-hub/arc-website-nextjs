import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Testimonials from './Testimonials'

const Alumni = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#DEDEDE',
        padding: {
          xs: '3rem 1.5rem',
          sm: '3rem 3rem',
          md: '3rem 4.5rem',
          lg: '3rem 6rem',
        },
        display: {
          xs: 'none',
          sm: 'flex',
        },
        flexDirection: 'column',
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{ fontWeight: '700' }}
      >
        Hear from our Alumni
      </Typography>

      <Testimonials />
    </Box>
  )
}

export default Alumni
