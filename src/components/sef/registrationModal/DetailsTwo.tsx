import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import { styled } from '@mui/material/styles'
import { FormikProps } from 'formik'
import { IsSefFormikValues } from 'utils/interfaces'
import { MutableRefObject } from 'react'

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

type DetailsTwoProps = {
  formik: FormikProps<IsSefFormikValues>
  step: number
  setStep: (val: number) => void
  setShowRegistrationModal: (val: boolean) => void
  setScrollIntoView: (val: boolean) => void
}

const DetailsTwo = ({
  formik,
  step,
  setStep,
  setShowRegistrationModal,
  setScrollIntoView,
}: DetailsTwoProps) => {
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
      {/**training expectations */}
      <StyledTextField
        variant="filled"
        id="training expectations"
        label="What are your expectations during the training and after the training?"
        fullWidth
        size="small"
        value={formik.values.expectations_during_training}
        onChange={formik.handleChange('expectations_during_training')}
        onBlur={formik.handleBlur}
        error={
          formik.touched.expectations_during_training &&
          Boolean(formik.errors.expectations_during_training)
        }
        helperText={
          formik.touched.expectations_during_training &&
          formik.errors.expectations_during_training
        }
        multiline
        rows={3}
      />

      {/**expectations */}
      <StyledTextField
        variant="filled"
        label="What are your expectations after training?"
        id="expectations_post_training"
        fullWidth
        size="small"
        value={formik.values.expectations_post_training}
        onChange={formik.handleChange('expectations_post_training')}
        onBlur={formik.handleBlur}
        error={
          formik.touched.expectations_post_training &&
          Boolean(formik.errors.expectations_post_training)
        }
        helperText={
          formik.touched.expectations_post_training &&
          formik.errors.expectations_post_training
        }
        multiline
        rows={3}
        sx={{ mt: '1rem' }}
      />

      {/**hear about programme */}
      <StyledTextField
        variant="filled"
        id="hear-about-programme"
        label="How did you hear about the programme?"
        fullWidth
        size="small"
        value={formik.values.hear_about_programme}
        onChange={formik.handleChange('hear_about_programme')}
        onBlur={formik.handleBlur}
        error={
          formik.touched.hear_about_programme &&
          Boolean(formik.errors.hear_about_programme)
        }
        helperText={
          formik.touched.hear_about_programme &&
          formik.errors.hear_about_programme
        }
        multiline
        rows={3}
        sx={{ mt: '1rem' }}
      />

      <Box
        sx={{
          mt: '1rem',
          display: 'flex',
          width: '100%',
          alignItems: 'start',
        }}
      >
        <Checkbox
          id="receive_communication"
          checked={formik.values.receive_communication}
          onChange={(e) =>
            formik.setFieldValue('receive_communication', e.target.checked)
          }
          inputProps={{ 'aria-label': 'controlled' }}
          sx={{
            color: '#000000',
            '&.Mui-checked': {
              color: '#000000',
            },
            mr: '1rem',
          }}
        />

        <Box>
          <Typography
            sx={{ color: '#000000', fontSize: '0.8rem', fontWeight: '300' }}
          >
            I have read the{' '}
            <Link
              sx={{ cursor: 'pointer' }}
              onClick={() => {
                // faqRef.current?.scrollIntoView({
                //   behavior: 'smooth',
                // })
                setShowRegistrationModal(false)
                setScrollIntoView(true)
              }}
            >
              FAQ
            </Link>{' '}
            section and understood the demands of this course.
          </Typography>

          <Typography
            sx={{ color: '#000000', fontSize: '0.8rem', fontWeight: '300' }}
          >
            I will ensure to act according to the demands of the course.
          </Typography>
        </Box>
      </Box>

      <Typography
        sx={{
          color: '#D32F2F',
          fontSize: '0.75rem',
          letterSpacing: '0.033em',
          mt: '1rem',
        }}
      >
        {formik.touched.receive_communication &&
          formik.errors.receive_communication}
      </Typography>

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
          {formik.isSubmitting ? 'LOADING' : 'SUBMIT'}
        </Button>
      </Box>

      <Typography
        sx={{
          color: '#000000',
          fontSize: '0.75rem',
          fontWeight: '300',
          mt: '1rem',
          textAlign: 'center',
        }}
      >
        By clicking submit, you consent to allow ARC to store and process the
        personal information submitted to us to provide you with the service
        requested.
      </Typography>
    </Box>
  )
}

export default DetailsTwo
