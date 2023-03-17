import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import BasicTabs from './tabs'

type ProgrammeDetailsProps = {
  setShowSyllabusModal: (val: boolean) => void
  setShowRegistrationModal: (val: boolean) => void
}

const ProgrammeDetails = ({
  setShowSyllabusModal,
  setShowRegistrationModal,
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
        IVYARC Software Engineering Leadership Programme
      </Typography>
      <BasicTabs
        setShowSyllabusModal={setShowSyllabusModal}
        setShowRegistrationModal={setShowRegistrationModal}
      />
    </Box>
  )
}

export default ProgrammeDetails
