import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import useSWR from 'swr'
import { fetcher } from 'api/fetcher'
import { useRouter } from 'next/router'
import { IsJob } from 'utils/interfaces'
import Job from './Job'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Jobs = () => {
  const router = useRouter()
  const { data, error, isLoading } = useSWR<IsJob[]>('jobs', fetcher)

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

      {isLoading && (
        <Box
          sx={{
            mt: '2rem',
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
              lg: '1fr 1fr 1fr 1fr',
            },
            gridGap: '1.5rem',
            width: '100%',
          }}
        >
          <Skeleton style={{ height: '230px', borderRadius: '8px' }} />
          <Skeleton style={{ height: '230px', borderRadius: '8px' }} />
          <Skeleton style={{ height: '230px', borderRadius: '8px' }} />
          <Skeleton style={{ height: '230px', borderRadius: '8px' }} />
        </Box>
      )}

      {data && (
        <>
          <Box
            sx={{
              mt: '2rem',
              mx: 'auto',
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: '1fr 1fr',
                md: '1fr 1fr 1fr',
                lg: '1fr 1fr 1fr 1fr',
              },
              gridGap: '1.5rem',
              width: '100%',
            }}
          >
            {data?.slice(0, 4).map((job, index) => (
              <Job job={job} key={index} />
            ))}
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'right', mt: '1.5rem' }}>
            <Button
              variant="text"
              sx={{ color: '#FF7801', textTransform: 'none' }}
              onClick={() => router.push('talent_solution/jobs')}
            >
              View All
            </Button>
          </Box>
        </>
      )}
    </Box>
  )
}

export default Jobs
