import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import { FiArrowUpRight } from 'react-icons/fi'

interface BlogContent {
  id: number
  title: string
  text: string
  author: string
  image: any
  date: string
}

type BlogProps = {
  data: BlogContent
  order?: string
}

const Blog = ({ data, order }: BlogProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection:
          order === 'main'
            ? { xs: 'column', sm: 'row', lg: 'column' }
            : { xs: 'column', sm: 'row' },
        p: '1rem 0.75rem',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          width:
            order === 'main'
              ? { xs: '100%', sm: '40%', lg: '100%' }
              : { xs: '100%', sm: '40%' },
        }}
      >
        <Image
          src={data?.image}
          alt={data?.title}
          style={{ width: '100%', height: 'auto' }}
          priority
        />
      </Box>
      <Box
        sx={{
          width:
            order === 'main'
              ? { xs: '100%', sm: '55%', lg: '100%' }
              : { xs: '100%', sm: '55%' },
          mt:
            order === 'main'
              ? { xs: '1rem', sm: '0rem', lg: '1rem' }
              : { xs: '1rem', sm: '0rem' },
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            color: order === 'main' ? '#002E5F' : '#6941C6',
            fontWeight: '600',
            fontFamily: 'Inter',
          }}
          gutterBottom
        >
          {data?.author} • {data?.date}
        </Typography>
        <Box sx={{ position: 'relative' }}>
          <Box sx={{ position: 'absolute', right: 0, top: '0.5rem' }}>
            <FiArrowUpRight size={16} />
          </Box>
          <Typography
            variant="h6"
            sx={{ fontFamily: 'Inter', fontWeight: '400' }}
            gutterBottom
          >
            {data?.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: '#667085', fontFamily: 'Inter', fontWeight: '400' }}
            gutterBottom
          >
            {data?.text}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Blog
