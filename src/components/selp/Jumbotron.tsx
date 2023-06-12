import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Image from 'next/image'

type JumbotronProps = {
  setShowRegistrationModal: (val: boolean) => void
  setShowModal: (val: boolean) => void
  setCourse: (val: string) => void
}

const Jumbotron = ({
  setShowRegistrationModal,
  setShowModal,
  setCourse,
}: JumbotronProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        padding: {
          xs: '3rem 1.5rem',
          sm: '3rem 3rem',
          md: '3rem 4.5rem',
          lg: '3rem 6rem',
        },
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: {
            xs: '100%',
            sm: '50%',
          },
          padding: {
            xs: '0rem 0rem 0rem 0rem',
            sm: '0rem 2.5rem 0rem 0rem',
          },
        }}
      >
        <Typography
          sx={{
            color: '#FF7801',
            fontWeight: '600',
            textAlign: {
              xs: 'center',
              sm: 'left',
            },
            typography: { xs: 'h6', sm: 'h4', md: 'h3' },
          }}
        >
          Welcome to the
        </Typography>
        <Typography
          sx={{
            color: '#002043',
            fontWeight: '700',
            textAlign: {
              xs: 'center',
              sm: 'left',
            },
            typography: { xs: 'h6', sm: 'h4', md: 'h3' },
          }}
          gutterBottom
        >
          Software Engineering Leadership Programme (SELP)
        </Typography>
        <Box
          sx={{
            mt: '1rem',
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          {/* <Button
            variant="contained"
            sx={{
              backgroundColor: "#002E5F",
              textTransform: "none",
              padding: "0.5rem 3.5rem",
            }}
            onClick={() => setShowRegistrationModal(true)}
          >
            Apply Now
          </Button> */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#002E5F',
              textTransform: 'none',
              padding: '0.5rem 3.5rem',
            }}
            onClick={() => {
              setShowModal(true)
              setCourse('Software Engineering Leadership Programme')
            }}
          >
            Book a Slot
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: {
            xs: 'none',
            sm: 'flex',
          },
          position: 'relative',
          width: '50%',
        }}
      >
        <Image
          src={require('../../assets/jumbotron.webp')}
          alt=""
          style={{ width: '100%', height: 'auto' }}
          loading="lazy"
        />
      </Box>
    </Box>
  )
}

export default Jumbotron
