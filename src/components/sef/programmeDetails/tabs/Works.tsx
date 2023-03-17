import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Image from 'next/image'

type WorkProps = {
  setShowRegistrationModal: (val: boolean) => void
}

const Works = ({ setShowRegistrationModal }: WorkProps) => {
  return (
    <Box>
      <Typography
        variant="body1"
        gutterBottom
        sx={{ color: '#FF7801', fontWeight: '600' }}
      >
        Three Simple Steps
      </Typography>
      <Box>
        <Box sx={{ display: 'flex', marginTop: '1rem' }}>
          <Box sx={{ marginRight: '1rem' }}>
            <Image
              src={require('../../../../assets/profile-circle.png')}
              alt=""
            />
          </Box>
          <Box>
            <Typography variant="body2" sx={{ fontWeight: '600' }} gutterBottom>
              Create Profile
            </Typography>
            <Typography variant="body2">
              Complete a form that tells us about your skill level, contact
              details, and motivations for the taking the course.
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', marginTop: '1rem' }}>
          <Box sx={{ marginRight: '1rem' }}>
            <Image src={require('../../../../assets/video.png')} alt="" />
          </Box>
          <Box>
            <Typography variant="body2" sx={{ fontWeight: '600' }} gutterBottom>
              Take a Screening Call
            </Typography>
            <Typography variant="body2">
              We gauge your skill level to fine-tune your experience. We pace
              ourselves according to your needs to ensure that you can absorb
              knowledge at a good rate.
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', marginTop: '1rem' }}>
          <Box sx={{ marginRight: '1rem' }}>
            <Image src={require('../../../../assets/book.png')} alt="" />
          </Box>
          <Box>
            <Typography variant="body2" sx={{ fontWeight: '600' }} gutterBottom>
              Commence Programme
            </Typography>
            <Typography variant="body2">
              Once your payment is done, you are free to start the programme,
              being sorted into relevant teams, meeting your teammates, and
              start your software engineering journey.
            </Typography>
          </Box>
        </Box>

        <Button
          sx={{
            margin: '1rem 0rem 0rem 2.75rem',
            backgroundColor: '#002E5F',
            padding: '0.5rem 3.5rem',
          }}
          variant="contained"
          onClick={() => setShowRegistrationModal(true)}
        >
          Enroll Now
        </Button>
      </Box>
    </Box>
  )
}

export default Works
