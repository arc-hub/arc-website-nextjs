import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import parse from 'html-react-parser'
import Link from '@mui/material/Link'
import { titleCase } from 'utils/helpers'
import { IsJob } from 'utils/interfaces'
import Image from 'next/image'

type JobProps = {
  job: IsJob
  page?: string
}

const Job = ({ job, page }: JobProps) => {
  return (
    <Box
      sx={{
        width:
          page === 'all-jobs'
            ? { xs: '300px', sm: '50%', lg: '33.33%', xl: '25%' }
            : { xs: '300px', sm: '50%', md: '33.33%', lg: '25%', xl: '16.67%' },
        padding: '1.5rem 0rem',
      }}
    >
      <Box
        sx={{
          border: '1px solid #96A9BD',
          borderRadius: '8px',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          margin: '0rem 0.75rem',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              position: 'relative',
            }}
          >
            <Image
              src={`https://edgeapi.ivyarc.com/v1/storage/images/${job.company_logo}`}
              alt=""
              width={30}
              height={30}
              crossOrigin="anonymous"
              style={{ borderRadius: '50%', objectFit: 'fill' }}
            />
          </Box>

          <Box sx={{ display: 'flex' }}>
            <Box
              sx={{
                borderRadius: '4px',
                bgcolor: '#E6EAEF',
                padding: '0.125rem 0.5rem',
              }}
            >
              <Typography sx={{ fontSize: '0.75rem' }}>
                {titleCase(job?.contract_type)}
              </Typography>
            </Box>
            {job?.keyword && (
              <Box
                sx={{
                  borderRadius: '4px',
                  bgcolor: '#E6EAEF',
                  padding: '0.125rem 0.5rem',
                  ml: '0.5rem',
                  display: { xs: 'block', sm: 'none', lg: 'block' },
                }}
              >
                <Typography sx={{ fontSize: '0.75rem' }}>
                  {job?.keyword}
                </Typography>
              </Box>
            )}
          </Box>
        </Box>

        <Box
          sx={{
            mt: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            height: '100px',
          }}
        >
          <Box sx={{ width: '60%' }}>
            <Typography
              variant="body2"
              sx={{ color: '#252D3E', fontWeight: '600' }}
            >
              {titleCase(job?.job_title)}
            </Typography>
            <Typography sx={{ color: '#737373', fontSize: '0.75rem' }}>
              {titleCase(job?.company_name)}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <LocationOnOutlinedIcon
              sx={{ color: '#292D32', fontSize: '1rem', mr: '0.25rem' }}
            />
            <Typography sx={{ color: '#737373', fontSize: '0.75rem' }}>
              {titleCase(job?.employment_type)}
            </Typography>
          </Box>
        </Box>

        {/* <Box sx={{ height: "300px" }}>
          <Typography sx={{ color: "#4A515F", fontSize: "0.875rem" }}>
            {parse(job?.job_description.substring(0, 300))}
          </Typography>
        </Box> */}

        <Link
          href={`https://edge.ivyarc.com/home-job-description/${job?.job_title.replace(
            '/',
            '___'
          )} at ${job?.company_name}`}
          underline="none"
          target="_blank"
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#002E5F',
              textTransform: 'none',
              mt: '0.5rem',
            }}
            fullWidth
          >
            View Job
          </Button>
        </Link>
      </Box>
    </Box>
  )
}

export default Job
