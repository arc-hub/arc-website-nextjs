import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Image from 'next/image'

const Clients = () => {
  return (
    <Box
      sx={{
        padding: {
          xs: '3rem 1.5rem',
          sm: '3rem 3rem',
          md: '3rem 4.5rem',
          lg: '3rem 6rem',
        },
        backgroundColor: '#FAFAFA',
      }}
    >
      <Typography variant="h6" gutterBottom>
        Our Clients and Partnerships
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ position: 'relative', px: '1rem' }}>
          <Image
            src={require('../../assets/worka.png')}
            alt="worka logo"
            style={{ height: 'auto', width: '100%' }}
            priority
          />
        </Box>
        <Box sx={{ position: 'relative', px: '1rem' }}>
          <Image
            src={require('../../assets/xische.png')}
            alt="xische logo"
            style={{ height: 'auto', width: '100%' }}
            priority
          />
        </Box>
        <Box sx={{ position: 'relative', px: '1rem' }}>
          <Image
            src={require('../../assets/afrimash.png')}
            alt="afrimash logo"
            style={{ height: 'auto', width: '100%' }}
            priority
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Clients
