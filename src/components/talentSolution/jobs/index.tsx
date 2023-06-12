import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import useSWR from 'swr'
import { fetcher } from 'api/fetcher'
import { useRouter } from 'next/router'
import { IsJob } from 'utils/interfaces'
import Job from './Job'

const Jobs = () => {
  const router = useRouter()
  const { data, error } = useSWR<IsJob[]>('jobs', fetcher)

  if (error) {
    console.error(error)
  }

  return (
    <Box
      sx={{
        padding: {
          xs: '3rem 1.5rem',
          sm: '3rem 3rem',
          md: '3rem 4.5rem',
          lg: '3rem 6rem',
        },
        backgroundColor: '#FFFFFF',
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: '600' }}>
        Jobs Available
      </Typography>

      <Box
        sx={{
          mt: '2rem',
          mx: 'auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: { xs: 'center', sm: 'start' },
          width: '100%',
        }}
      >
        {data?.slice(0, 4).map((job, index) => (
          <Job job={job} key={index} />
        ))}
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'right' }}>
        <Button
          variant="text"
          sx={{ color: '#FF7801', textTransform: 'none' }}
          onClick={() => router.push('talent_solution/jobs')}
        >
          View All
        </Button>
      </Box>
    </Box>
  )
}

export default Jobs
