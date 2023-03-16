import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import { IsClient } from 'utils/interfaces'
import Image from 'next/image'

type HappyClientProps = {
  item: IsClient
}

const HappyClient = ({ item }: HappyClientProps) => {
  return (
    <Box
      sx={{
        width: { xs: '100%', sm: '47.5%' },
        padding: { xs: '1rem 0rem', lg: '2rem 0rem' },
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        alignItems: { xs: 'flex-start', lg: 'center' },
      }}
    >
      <Box sx={{ width: '40%', position: 'relative' }}>
        <Image
          src={item?.avatar}
          alt=""
          style={{ width: '100%', height: 'auto' }}
        />
      </Box>
      <Box
        sx={{
          width: { xs: '100%', lg: '60%' },
          padding: { xs: '1.5rem 0rem', lg: '0.25rem 1.5rem' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Rating
          name="rating"
          value={item?.rating}
          readOnly
          sx={{ color: '#000000' }}
        />
        <Typography variant="body2" sx={{ mt: '1.5rem' }}>
          {item?.comment}
        </Typography>
        <Box
          component="span"
          sx={{ display: 'flex', alignItems: 'center', mt: '1.5rem' }}
        >
          <Typography variant="body2" sx={{ mr: '0.75rem', fontWeight: '700' }}>
            {item?.name}
          </Typography>
          <Typography variant="body2" sx={{ color: '#FF7801' }}>
            {item?.position}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default HappyClient
