import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import { FormikProps } from 'formik'
import { ISelpFormikValues } from 'utils/interfaces'
import { commitmentLevels, courses, techStacks } from 'utils/data'

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

type AboutProps = {
  formik: FormikProps<ISelpFormikValues>
}

const About = ({ formik }: AboutProps) => {
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
          {/**first name */}
          <StyledTextField
            variant="filled"
            label="First Name"
            id="first_name"
            fullWidth
            value={formik.values.first_name}
            onChange={formik.handleChange('first_name')}
            onBlur={formik.handleBlur}
            error={
              formik.touched.first_name && Boolean(formik.errors.first_name)
            }
            helperText={formik.touched.first_name && formik.errors.first_name}
          />
        </Box>

        <Box sx={{ width: '49%' }}>
          {/**last name */}
          <StyledTextField
            variant="filled"
            label="Last Name"
            id="last_name"
            fullWidth
            value={formik.values.last_name}
            onChange={formik.handleChange('last_name')}
            onBlur={formik.handleBlur}
            error={formik.touched.last_name && Boolean(formik.errors.last_name)}
            helperText={formik.touched.last_name && formik.errors.last_name}
          />
        </Box>
      </Box>

      {/**email address */}
      <StyledTextField
        variant="filled"
        id="email"
        label="Email Address"
        fullWidth
        value={formik.values.email}
        onChange={formik.handleChange('email')}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        sx={{ mt: '1rem' }}
      />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          mt: '1rem',
        }}
      >
        <Box sx={{ width: '49%' }}>
          {/**github */}
          <StyledTextField
            variant="filled"
            id="github"
            label="Github Link (Fill nil if you don't have a github account)"
            fullWidth
            value={formik.values.github}
            onChange={formik.handleChange('github')}
            onBlur={formik.handleBlur}
            error={formik.touched.github && Boolean(formik.errors.github)}
            helperText={formik.touched.github && formik.errors.github}
          />
        </Box>

        <Box sx={{ width: '49%' }}>
          {/**programming experience */}
          <StyledTextField
            variant="filled"
            id="experience"
            label="Programming Experience"
            fullWidth
            value={formik.values.experience}
            onChange={formik.handleChange('experience')}
            onBlur={formik.handleBlur}
            error={
              formik.touched.experience && Boolean(formik.errors.experience)
            }
            helperText={formik.touched.experience && formik.errors.experience}
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
          {/**commitment levels */}
          <StyledTextField
            variant="filled"
            id="commitment_level"
            label="Commitment Level to the Internship"
            fullWidth
            value={formik.values.commitment_level}
            onChange={formik.handleChange('commitment_level')}
            onBlur={formik.handleBlur}
            error={
              formik.touched.commitment_level &&
              Boolean(formik.errors.commitment_level)
            }
            helperText={
              formik.touched.commitment_level && formik.errors.commitment_level
            }
            select
            SelectProps={{ MenuProps: { disableScrollLock: true } }}
          >
            {commitmentLevels.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </StyledTextField>
        </Box>

        <Box sx={{ width: '49%' }}>
          {/**courses */}
          <StyledTextField
            disabled
            variant="filled"
            id="course"
            label="Select Course"
            fullWidth
            value={formik.values.course}
            onChange={formik.handleChange('course')}
            onBlur={formik.handleBlur}
            error={formik.touched.course && Boolean(formik.errors.course)}
            helperText={formik.touched.course && formik.errors.course}
            select
            SelectProps={{ MenuProps: { disableScrollLock: true } }}
          >
            {courses.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </StyledTextField>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: '1rem',
          width: '100%',
        }}
      >
        {/**phone */}
        <Box sx={{ width: '49%' }}>
          <StyledTextField
            variant="filled"
            id="phone"
            label="Phone Number"
            value={formik.values.phone}
            onChange={formik.handleChange('phone')}
            onBlur={formik.handleBlur}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
            fullWidth
          />
        </Box>

        {/**tech stacks */}
        <Box sx={{ width: '49%' }}>
          <StyledTextField
            variant="filled"
            id="stacks"
            label="Select Stacks"
            value={formik.values.stacks}
            onChange={formik.handleChange('stacks')}
            onBlur={formik.handleBlur}
            error={formik.touched.stacks && Boolean(formik.errors.stacks)}
            helperText={formik.touched.stacks && formik.errors.stacks}
            select
            SelectProps={{
              multiple: true,
              MenuProps: { disableScrollLock: true },
            }}
            placeholder="Select Stacks"
            fullWidth
          >
            {techStacks.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </StyledTextField>
        </Box>
      </Box>

      {/**expectations */}
      <StyledTextField
        variant="filled"
        id="expectations_post_training"
        label="What are your expectations after training?"
        fullWidth
        multiline
        rows={3}
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
        sx={{ mt: '1rem' }}
      />

      <Button
        variant="contained"
        type="submit"
        sx={{ backgroundColor: '#FF7801', mt: '2rem', py: '0.75rem' }}
        fullWidth
      >
        NEXT
      </Button>
    </Box>
  )
}

export default About
