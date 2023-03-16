import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useRouter } from 'next/router'
import Blog from './Blog'
import { blogs } from 'utils/data'

const RecentBlogs = () => {
  const router = useRouter()

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
      }}
    >
      <Typography
        variant="h4"
        sx={{ color: '#000000', fontWeight: '700', textAlign: 'center' }}
        gutterBottom
      >
        Recent Blog Posts
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          mt: '2rem',
          justifyContent: { xs: 'center', lg: 'space-between' },
        }}
      >
        <Box sx={{ width: { xs: '100%', lg: '50%', p: '0.5rem' } }}>
          <Blog data={blogs[0]} order="main" />
        </Box>
        <Box sx={{ width: { xs: '100%', lg: '50%', p: '0.5rem' } }}>
          {blogs.slice(1, 3).map((item, index) => (
            <Blog data={item} key={index} />
          ))}
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'right', mt: '1rem' }}>
        <Button
          variant="text"
          sx={{ color: '#FF7801', textTransform: 'none' }}
          onClick={() => router.push('/blog')}
        >
          View More
        </Button>
      </Box>
    </Box>
  )
}

export default RecentBlogs
