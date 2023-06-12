import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import BasicTabs from './tabs'

type ProgrammeDetailsProps = {
  setShowSyllabusModal: (val: boolean) => void
  setShowRegistrationModal: (val: boolean) => void
  setShowModal: (val: boolean) => void
  setCourse: (val: string) => void
}

const ProgrammeDetails = ({
  setShowSyllabusModal,
  setShowRegistrationModal,
  setShowModal,
  setCourse,
}: ProgrammeDetailsProps) => {
  return (
    <Box
      sx={{
        padding: {
          xs: '3rem 1.5rem',
          sm: '3rem 3rem',
          md: '3rem 4.5rem',
          lg: '3rem 6rem',
        },
        backgroundColor: '#F0F4FD',
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          width: {
            xs: '100%',
            sm: '50%',
          },
          fontWeight: '600',
        }}
      >
        IVYARC Software Engineering Foundation
      </Typography>
      <BasicTabs
        setShowSyllabusModal={setShowSyllabusModal}
        setShowRegistrationModal={setShowRegistrationModal}
        setShowModal={setShowModal}
        setCourse={setCourse}
      />
    </Box>
  )
}

export default ProgrammeDetails
