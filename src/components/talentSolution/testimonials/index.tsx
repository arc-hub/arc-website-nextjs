import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { happyClients } from 'utils/data'
import HappyClient from './HappyClient'
import { MutableRefObject } from 'react'

type TestimonialsProp = {
  testimonialsRef: MutableRefObject<HTMLDivElement | null>
}

const Testimonials = ({ testimonialsRef }: TestimonialsProp) => {
  return (
    <Box
      sx={{
        padding: {
          xs: '3rem 1.5rem',
          sm: '3rem 3rem',
          md: '3rem 4.5rem',
          lg: '3rem 6rem',
        },
        backgroundColor: '#F8F5F5',
      }}
      ref={testimonialsRef}
    >
      <Typography
        variant="subtitle2"
        sx={{ textAlign: 'center', color: '#FF7801', fontWeight: '600' }}
        gutterBottom
      >
        200+ Happy Consultants and Clients
      </Typography>
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          color: '#000000',
          fontWeight: '600',
        }}
      >
        Don&apos;t just take our words
      </Typography>

      <Box
        sx={{
          mt: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {happyClients.map((item, index) => (
          <HappyClient item={item} key={index} />
        ))}
      </Box>
    </Box>
  )
}

export default Testimonials
