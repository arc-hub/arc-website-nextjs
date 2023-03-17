import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Checkbox from '@mui/material/Checkbox'
import { styled } from '@mui/material/styles'
import { FormikProps } from 'formik'
import { ISelpFormikValues } from 'utils/interfaces'
import { paymentOptions } from 'utils/data'

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
  formik: FormikProps<ISelpFormikValues>
  checked: boolean
  setChecked: (val: boolean) => void
}

const Details = ({ formik, checked, setChecked }: DetailsProps) => {
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
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Box sx={{ width: '49%' }}>
          {/**background */}
          <StyledTextField
            variant="filled"
            label="Tell us about yourself - background and experience"
            id="about_yourself"
            fullWidth
            value={formik.values.about_yourself}
            onChange={formik.handleChange('about_yourself')}
            onBlur={formik.handleBlur}
            error={
              formik.touched.about_yourself &&
              Boolean(formik.errors.about_yourself)
            }
            helperText={
              formik.touched.about_yourself && formik.errors.about_yourself
            }
            multiline
            maxRows={4}
          />
        </Box>
        <Box sx={{ width: '49%' }}>
          {/**motivation */}
          <StyledTextField
            variant="filled"
            id="motivation"
            label="What's your motivation for applying for the SELP Programme?"
            fullWidth
            value={formik.values.motivation}
            onChange={formik.handleChange('motivation')}
            onBlur={formik.handleBlur}
            error={
              formik.touched.motivation && Boolean(formik.errors.motivation)
            }
            helperText={formik.touched.motivation && formik.errors.motivation}
            multiline
            maxRows={4}
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          mt: '1rem',
        }}
      >
        <Box sx={{ width: '49%' }}>
          {/**overcoming hinderances */}
          <StyledTextField
            variant="filled"
            id="overcoming-hinderances"
            label="How do you think you will stay motivated over 12-weeks and overcome any hinderances?"
            fullWidth
            value={formik.values.staying_motivated}
            onChange={formik.handleChange('staying_motivated')}
            onBlur={formik.handleBlur}
            error={
              formik.touched.staying_motivated &&
              Boolean(formik.errors.staying_motivated)
            }
            helperText={
              formik.touched.staying_motivated &&
              formik.errors.staying_motivated
            }
            multiline
            maxRows={4}
          />
        </Box>
        <Box sx={{ width: '49%' }}>
          {/**training expectations */}
          <StyledTextField
            variant="filled"
            id="training expectations"
            label="What are your expectations during the training and after the training?"
            fullWidth
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
            maxRows={4}
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          mt: '1rem',
        }}
      >
        <Box sx={{ width: '49%' }}>
          {/**computer access */}
          <StyledTextField
            variant="filled"
            id="computer-access"
            label="Do you have access to a computer and good internet connectivity?"
            fullWidth
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
            maxRows={4}
          />
        </Box>
        <Box sx={{ width: '49%' }}>
          {/**hear about programme */}
          <StyledTextField
            variant="filled"
            id="hear-about-programme"
            label="How did you hear about the programme?"
            fullWidth
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
            maxRows={4}
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          mt: '1rem',
        }}
      >
        <Box sx={{ width: '49%' }}>
          {/**funding */}
          <StyledTextField
            variant="filled"
            id="funding"
            label="How will you be funding the programme?"
            value={formik.values.funding}
            onChange={formik.handleChange('funding')}
            onBlur={formik.handleBlur}
            error={formik.touched.funding && Boolean(formik.errors.funding)}
            helperText={formik.touched.funding && formik.errors.funding}
            fullWidth
          />
        </Box>
        <Box sx={{ width: '49%' }}>
          {/**payment period */}
          <StyledTextField
            variant="filled"
            id="payment-period"
            label="When will you commit (pay)?"
            value={formik.values.payment_period}
            onChange={formik.handleChange('payment_period')}
            onBlur={formik.handleBlur}
            error={
              formik.touched.payment_period &&
              Boolean(formik.errors.payment_period)
            }
            helperText={
              formik.touched.payment_period && formik.errors.payment_period
            }
            fullWidth
          />
        </Box>
      </Box>

      {/**payment option */}
      <StyledTextField
        variant="filled"
        id="payment-option"
        label="Preferred payment option"
        fullWidth
        value={formik.values.payment_option}
        onChange={formik.handleChange('payment_option')}
        onBlur={formik.handleBlur}
        error={
          formik.touched.payment_option && Boolean(formik.errors.payment_option)
        }
        helperText={
          formik.touched.payment_option && formik.errors.payment_option
        }
        sx={{ mt: '1rem' }}
        select
        SelectProps={{ MenuProps: { disableScrollLock: true } }}
      >
        {paymentOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </StyledTextField>

      <Box
        sx={{
          mt: '1rem',
          display: 'flex',
          width: '100%',
          alignItems: 'start',
        }}
      >
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
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
            variant="body2"
            sx={{ color: '#000000', fontWeight: '200' }}
          >
            I agree to receive occasional communication from ARC.
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: '#000000', fontWeight: '200' }}
          >
            You can unsubscribe from these communications at ay time.
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: '#000000', fontWeight: '200' }}
            gutterBottom
          >
            For more information on how to unsubscribe, our privacy practice and
            how we are committed to protecting and respecting your privacy,
            please review our Privacy Policy.
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: '#000000', fontWeight: '200', mt: '0.5rem' }}
          >
            By clicking submit, you consent to allow ARC to store and process
            the personal information submitted to us to provide you with the
            service requested.
          </Typography>
        </Box>
      </Box>

      <Button
        variant="contained"
        type="submit"
        sx={{ backgroundColor: '#FF7801', mt: '1rem', py: '0.75rem' }}
        fullWidth
        disabled={!checked}
      >
        SUBMIT
      </Button>
    </Box>
  )
}

export default Details
