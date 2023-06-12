import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import { FormikProps } from 'formik'
import { IsSefFormikValues } from 'utils/interfaces'
import { commitmentLevels, courses, techSkills } from 'utils/data'

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
  formik: FormikProps<IsSefFormikValues>
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
            size="small"
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
            size="small"
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
        size="small"
        value={formik.values.email}
        onChange={formik.handleChange('email')}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        sx={{ mt: '1rem' }}
      />

      {/**github */}
      <StyledTextField
        variant="filled"
        id="github"
        label="Github Link (Fill nil if you don't have a github account)"
        fullWidth
        size="small"
        value={formik.values.github}
        onChange={formik.handleChange('github')}
        onBlur={formik.handleBlur}
        error={formik.touched.github && Boolean(formik.errors.github)}
        helperText={formik.touched.github && formik.errors.github}
        sx={{ mt: '1rem' }}
      />

      {/**commitment levels */}
      <StyledTextField
        variant="filled"
        id="commitment_level"
        label="Commitment Level to the Internship"
        fullWidth
        size="small"
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
        sx={{ mt: '1rem' }}
      >
        {commitmentLevels.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </StyledTextField>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          mt: '1rem',
        }}
      >
        <Box sx={{ width: '41%' }}>
          {/**programming experience */}
          <StyledTextField
            variant="filled"
            id="experience"
            label="Programming Experience"
            fullWidth
            size="small"
            value={formik.values.experience}
            onChange={formik.handleChange('experience')}
            onBlur={formik.handleBlur}
            error={
              formik.touched.experience && Boolean(formik.errors.experience)
            }
            helperText={formik.touched.experience && formik.errors.experience}
          />
        </Box>

        <Box sx={{ width: '57%' }}>
          {/**courses */}
          <StyledTextField
            disabled
            variant="filled"
            id="course"
            label="Select Course"
            fullWidth
            size="small"
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
            size="small"
            value={formik.values.phone}
            onChange={formik.handleChange('phone')}
            onBlur={formik.handleBlur}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={
              Boolean(formik.errors.phone)
                ? formik.touched.phone && formik.errors.phone
                : 'Add your country code'
            }
            fullWidth
          />
        </Box>

        {/**tech skills */}
        <Box sx={{ width: '49%' }}>
          <StyledTextField
            variant="filled"
            id="skills"
            label="Select Skills"
            size="small"
            value={formik.values.skills}
            onChange={formik.handleChange('skills')}
            onBlur={formik.handleBlur}
            error={formik.touched.skills && Boolean(formik.errors.skills)}
            helperText={formik.touched.skills && formik.errors.skills}
            select
            SelectProps={{
              multiple: true,
              MenuProps: { disableScrollLock: true },
            }}
            placeholder="Select Skills"
            fullWidth
          >
            {techSkills.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </StyledTextField>
        </Box>
      </Box>

      {/**background */}
      <StyledTextField
        variant="filled"
        id="about_yourself"
        label="Tell us about yourself - background and experience ?"
        fullWidth
        multiline
        size="small"
        rows={3}
        value={formik.values.about_yourself}
        onChange={formik.handleChange('about_yourself')}
        onBlur={formik.handleBlur}
        error={
          formik.touched.about_yourself && Boolean(formik.errors.about_yourself)
        }
        helperText={
          formik.touched.about_yourself && formik.errors.about_yourself
        }
        sx={{ mt: '1rem' }}
      />

      <Button
        variant="contained"
        type="submit"
        sx={{ backgroundColor: '#FF7801', mt: '1rem', py: '0.75rem' }}
        fullWidth
      >
        NEXT
      </Button>
    </Box>
  )
}

export default About
