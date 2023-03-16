import { Box, Button, Typography } from '@mui/material'
import { useContext } from 'react'
import { useRouter } from 'next/router'
import { SyllabusContext } from 'contexts/SyllabusContext'
import Image from 'next/image'

type TopCoursesProps = {
  setShowSyllabusModal: (val: boolean) => void
}

const TopCourses = ({ setShowSyllabusModal }: TopCoursesProps) => {
  const router = useRouter()
  const syllabusContext = useContext(SyllabusContext)

  return (
    <Box
      sx={{
        backgroundColor: '#FEFCFC',
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
        gutterBottom
        sx={{ fontWeight: '600', textAlign: 'center' }}
      >
        The Most Popular Courses
      </Typography>

      <Box
        sx={{
          marginTop: '2rem',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'center', sm: 'start' },
        }}
      >
        <Box
          sx={{
            width: { xs: '66.67%', sm: '50%', md: '25%' },
            paddingRight: '1.5rem',
            mb: {
              xs: '1.5rem',
              sm: '0rem',
            },
          }}
        >
          <Box
            onClick={() => router.push('/courses/sef')}
            sx={{
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(0.875)',
              },
            }}
          >
            <Box sx={{ position: 'relative', marginBottom: '0.5rem' }}>
              <Image
                src={require('../../assets/data-analysis.png')}
                alt=""
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
            <Box sx={{ height: '100px', marginBottom: '1rem' }}>
              <Typography
                variant="body1"
                sx={{ fontWeight: '600' }}
                gutterBottom
              >
                Software Engineering Foundation
              </Typography>
              <Typography variant="body2" gutterBottom>
                Full-Time - 12 weeks
              </Typography>
            </Box>
          </Box>

          <Button
            variant="contained"
            sx={{
              backgroundColor: '#002E5F',
              marginTop: '0.5rem',
              fontSize: '0.75rem',
            }}
            onClick={() => {
              syllabusContext?.setProg('Software Engineering Foundation')
              setShowSyllabusModal(true)
            }}
          >
            View Syllabus
          </Button>
        </Box>

        <Box
          sx={{
            width: { xs: '66.67%', sm: '50%', md: '25%' },
            paddingRight: '1.5rem',
            mb: {
              xs: '1.5rem',
              sm: '0rem',
            },
          }}
        >
          <Box
            onClick={() => router.push('/courses/selp')}
            sx={{
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(0.875)',
              },
            }}
          >
            <Box sx={{ position: 'relative', marginBottom: '0.5rem' }}>
              <Image
                src={require('../../assets/sec.png')}
                alt=""
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
            <Box sx={{ height: '100px', marginBottom: '1rem' }}>
              <Typography
                variant="body1"
                sx={{ fontWeight: '600' }}
                gutterBottom
              >
                Software Engineering Leadership Programme
              </Typography>
              <Typography variant="body2" gutterBottom>
                Full-Time - 12 weeks
              </Typography>
            </Box>
          </Box>

          <Button
            variant="contained"
            sx={{
              backgroundColor: '#002E5F',
              marginTop: '0.5rem',
              fontSize: '0.75rem',
            }}
            onClick={() => {
              syllabusContext?.setProg(
                'Software Engineering Leadership Programme'
              )
              setShowSyllabusModal(true)
            }}
          >
            View Syllabus
          </Button>
        </Box>

        <Box
          sx={{
            width: { xs: '66.67%', sm: '50%', md: '25%' },
            paddingRight: '1.5rem',
            mb: {
              xs: '1.5rem',
              sm: '0rem',
            },
          }}
        >
          <Box
            sx={{
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(0.875)',
              },
            }}
          >
            <Box sx={{ position: 'relative', marginBottom: '0.5rem' }}>
              <Image
                src={require('../../assets/ui-ux.png')}
                alt=""
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
            <Box sx={{ height: '100px', marginBottom: '1rem' }}>
              <Typography
                variant="body1"
                sx={{ fontWeight: '600' }}
                gutterBottom
              >
                UI/UX
              </Typography>
              <Typography variant="body2" gutterBottom>
                Part-Time - 10 weeks
              </Typography>
            </Box>
          </Box>

          <Button
            variant="contained"
            sx={{
              backgroundColor: '#002E5F',
              marginTop: '0.5rem',
              fontSize: '0.75rem',
            }}
            disabled
            // onClick={() => setShowSyllabusModal(true)}
          >
            View Syllabus
          </Button>
        </Box>

        <Box
          sx={{
            width: { xs: '66.67%', sm: '50%', md: '25%' },
            paddingRight: '1.5rem',
          }}
        >
          <Box
            sx={{
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(0.875)',
              },
            }}
          >
            <Box sx={{ position: 'relative', marginBottom: '0.5rem' }}>
              <Image
                src={require('../../assets/product-management.png')}
                alt=""
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
            <Box sx={{ height: '100px', marginBottom: '1rem' }}>
              <Typography
                variant="body1"
                sx={{ fontWeight: '600' }}
                gutterBottom
              >
                Product Management
              </Typography>
              <Typography variant="body2" gutterBottom>
                Part-Time - 10 weeks
              </Typography>
            </Box>
          </Box>

          <Button
            variant="contained"
            sx={{
              backgroundColor: '#002E5F',
              marginTop: '0.5rem',
              fontSize: '0.75rem',
            }}
            disabled
            // onClick={() => setShowSyllabusModal(true)}
          >
            View Syllabus
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default TopCourses
