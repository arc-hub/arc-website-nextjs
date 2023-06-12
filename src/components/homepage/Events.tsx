import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { events } from 'utils/data'

type EventsProps = {
  setShowOpendayModal: (val: boolean) => void
}

const Events = ({ setShowOpendayModal }: EventsProps) => {
  const router = useRouter()

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
      }}
    >
      <Typography
        variant="h4"
        sx={{ color: '#000000', fontWeight: '700', textAlign: 'center' }}
        gutterBottom
      >
        Arc Upcoming Events
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          mt: '2rem',
          justifyContent: { xs: 'center', sm: 'space-between' },
        }}
      >
        {events.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: '80%', sm: '30%', lg: '22.5%' },
              mr: { lg: '1.5rem' },
              mb: { xs: '1.5rem', lg: '0rem' },
              position: 'relative',
            }}
          >
            <Image
              src={item.image}
              alt=""
              style={{ width: '100%', height: 'auto' }}
              loading="lazy"
            />
            <Box sx={{ height: '90px' }}>
              <Typography
                variant="body2"
                sx={{ color: '#252D3E' }}
                gutterBottom
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: '#252D3E' }}
                gutterBottom
              >
                {item.date}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: '#252D3E' }}
                gutterBottom
              >
                {item.fee}
              </Typography>
            </Box>
            <Typography
              variant="button"
              sx={{
                color: '#FF7801',
                textTransform: 'none',
                cursor: 'pointer',
              }}
              onClick={() => {
                if (item.keyword === 'Open Day') {
                  setShowOpendayModal(true)
                }

                if (item.keyword === 'SELP') {
                  router.push('/courses/selp')
                }

                if (item.keyword === 'SEF') {
                  router.push('/courses/sef')
                }
              }}
              gutterBottom
            >
              {item.note}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Events
