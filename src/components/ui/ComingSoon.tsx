import { Box } from '@mui/material'
import Image from 'next/image'
import comingSoon from '../../assets/27282.webp'

const ComingSoon = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image
        src={require('../../assets/27282.webp')}
        alt=""
        style={{ width: '50%', height: 'auto' }}
        priority
      />
    </Box>
  )
}

export default ComingSoon
