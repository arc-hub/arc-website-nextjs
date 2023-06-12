import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { styled } from '@mui/material/styles'
import { FormikProps } from 'formik'
import { IsSefFormikValues } from 'utils/interfaces'

const StyledTextField = styled(TextField)({
  '& .MuiInputBase-input': {
    color: '#000000',
  },
  '& .MuiSvgIcon-root': {
    color: '#000000',
  },
  '& label': {
    color: '#000000',
  },
  '&:hover label': {
    fontWeight: 700,
  },
  '& label.Mui-focused': {
    color: '#000000',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#000000',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#000000',
    },
    '&:hover fieldset': {
      borderColor: '#000000',
      borderWidth: 2,
    },
    '&.Mui-focused fieldset': {
      borderColor: '#000000',
    },
  },
})

type DetailsProps = {
  formik: FormikProps<IsSefFormikValues>
  step: number
  setStep: (val: number) => void
}

const Details = ({ formik, step, setStep }: DetailsProps) => {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        width: '80%',
        mt: '1rem',
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      onSubmit={formik.handleSubmit}
    >
      {/**motivation */}
      <StyledTextField
        variant="filled"
        id="motivation"
        label="What's your motivation for applying for the SELP Programme?"
        multiline
        rows={3}
        fullWidth
        size="small"
        value={formik.values.motivation}
        onChange={formik.handleChange('motivation')}
        onBlur={formik.handleBlur}
        error={formik.touched.motivation && Boolean(formik.errors.motivation)}
        helperText={formik.touched.motivation && formik.errors.motivation}
      />

      {/**overcoming hinderances */}
      <StyledTextField
        variant="filled"
        id="overcoming-hinderances"
        label="How do you think you will stay motivated over 12-weeks and overcome any hinderances?"
        fullWidth
        size="small"
        value={formik.values.staying_motivated}
        onChange={formik.handleChange('staying_motivated')}
        onBlur={formik.handleBlur}
        error={
          formik.touched.staying_motivated &&
          Boolean(formik.errors.staying_motivated)
        }
        helperText={
          formik.touched.staying_motivated && formik.errors.staying_motivated
        }
        multiline
        rows={3}
        sx={{ mt: '1rem' }}
      />

      {/**computer access */}
      <StyledTextField
        variant="filled"
        id="computer-access"
        label="Do you have access to a computer and good internet connectivity?"
        fullWidth
        size="small"
        value={formik.values.computer_access}
        onChange={formik.handleChange('computer_access')}
        onBlur={formik.handleBlur}
        error={
          formik.touched.computer_access &&
          Boolean(formik.errors.computer_access)
        }
        helperText={
          formik.touched.computer_access && formik.errors.computer_access
        }
        multiline
        rows={3}
        sx={{ mt: '1rem' }}
      />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          mt: '1rem',
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#FF7801',
            py: '0.75rem',
            px: '2rem',
          }}
          onClick={() => {
            setStep(step - 1)
          }}
        >
          BACK
        </Button>

        <Button
          variant="contained"
          type="submit"
          sx={{
            backgroundColor: '#FF7801',
            py: '0.75rem',
            px: '2rem',
          }}
        >
          NEXT
        </Button>
      </Box>
    </Box>
  )
}

export default Details
