import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import * as yup from 'yup'
import { useFormik, FormikProps } from 'formik'
import { styled } from '@mui/material/styles'
import { MutableRefObject } from 'react'
import axios from 'api/axios'
import { toast } from 'react-hot-toast'
import Image from 'next/image'
import { talents } from 'utils/data'

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('This field is required')
    .min(3, 'Full name must be at least 3 characters'),
  company_name: yup
    .string()
    .required('This field is required')
    .min(3, 'Full name must be at least 3 characters'),
  business_email: yup
    .string()
    .email('Enter a valid email')
    .required('This field is required'),
  talent: yup.string().required('This field is required'),
  commencement: yup.string().required('This field is required'),
})

const StyledTextField = styled(TextField)({
  '& .MuiInputBase-input': {
    color: '#363636',
    backgroundColor: '#E6EAEF',
  },
  '& .Mui-error': {
    color: '#ed6c02',
  },
  '& .MuiSvgIcon-root': {
    color: '#363636',
  },
  '& label': {
    color: '#363636',
  },
  '&:hover label': {
    fontWeight: 700,
  },
  '& label.Mui-focused': {
    color: '#363636',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#363636',
  },
  '& .MuiFilledInput-root': {
    '& fieldset': {
      borderColor: '#363636',
    },
    '&:hover fieldset': {
      borderColor: '#363636',
      borderWidth: 2,
    },
    '&.Mui-focused fieldset': {
      borderColor: '#363636',
    },
    '&.Mui-error fieldset': {
      borderColor: '#ed6c02',
    },
  },
})

type FindTalentProps = {
  talentRef: MutableRefObject<HTMLDivElement | null>
}

interface FormikValues {
  name: string
  company_name: string
  business_email: string
  talent: string
  commencement: string
}

const FindTalent = ({ talentRef }: FindTalentProps) => {
  const [checked, setChecked] = useState(false)
  const formik: FormikProps<FormikValues> = useFormik<FormikValues>({
    initialValues: {
      name: '',
      company_name: '',
      business_email: '',
      talent: '',
      commencement: '',
    },
    validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values, { resetForm }) => {
      const response = await axios
        .post('talent', {
          name: values.name,
          company_name: values.company_name,
          business_email: values.business_email,
          talent: values.talent,
          commencement: values.commencement,
        })
        .catch((error) => {
          toast.error(error.response.data.message, {
            duration: 5000,
            position: 'top-right',
          })
        })
      if (response) {
        resetForm()
        toast.success(
          'Thank you for reaching out to us, our team will get back to you shortly',
          {
            duration: 5000,
            position: 'top-right',
          }
        )
      }
    },
  })

  return (
    <Box
      sx={{
        padding: {
          xs: '3rem 1.5rem',
          sm: '3rem 3rem',
          md: '3rem 4.5rem',
          lg: '3rem 6rem',
        },
        backgroundColor: '#9C4901',
      }}
      ref={talentRef}
      id="findTalent"
    >
      <Typography
        variant="h4"
        gutterBottom
        fontWeight="600"
        sx={{
          color: '#FFFFFF',
        }}
      >
        Find Top Talent
      </Typography>

      <Box
        sx={{
          padding: '3rem 0rem',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Box sx={{ width: '50%', display: { xs: 'none', sm: 'flex' } }}>
          <Image
            src={require('../../assets/Frame 44053.png')}
            alt=""
            style={{ width: '100%', height: 'auto' }}
            loading="lazy"
          />
        </Box>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            width: { xs: '100%', sm: '50%' },
            padding: { xs: '0rem', sm: '0rem 1.5rem', md: '0rem 3rem' },
            mx: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          onSubmit={formik.handleSubmit}
        >
          {/**fullname */}
          <StyledTextField
            size="small"
            variant="filled"
            label="Full name"
            id="name"
            fullWidth
            value={formik.values.name}
            onChange={formik.handleChange('name')}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />

          {/**company name */}
          <StyledTextField
            size="small"
            variant="filled"
            label="Company Name"
            id="company_name"
            fullWidth
            value={formik.values.company_name}
            onChange={formik.handleChange('company_name')}
            onBlur={formik.handleBlur}
            error={
              formik.touched.company_name && Boolean(formik.errors.company_name)
            }
            helperText={
              formik.touched.company_name && formik.errors.company_name
            }
            sx={{ mt: '1rem' }}
          />

          {/**business email */}
          <StyledTextField
            size="small"
            variant="filled"
            label="Business Email"
            id="business_email"
            fullWidth
            value={formik.values.business_email}
            onChange={formik.handleChange('business_email')}
            onBlur={formik.handleBlur}
            error={
              formik.touched.business_email &&
              Boolean(formik.errors.business_email)
            }
            helperText={
              formik.touched.business_email && formik.errors.business_email
            }
            sx={{ mt: '1rem' }}
          />

          {/**talent */}
          <StyledTextField
            size="small"
            variant="filled"
            label="What talent are you looking for?"
            id="talent"
            fullWidth
            value={formik.values.talent}
            onChange={formik.handleChange('talent')}
            onBlur={formik.handleBlur}
            error={formik.touched.talent && Boolean(formik.errors.talent)}
            helperText={formik.touched.talent && formik.errors.talent}
            select
            SelectProps={{ MenuProps: { disableScrollLock: true } }}
            sx={{
              mt: '1rem',
              '&:focus': {
                backgroundColor: '#E6EAEF',
              },
              backgroundColor: '#E6EAEF',
            }}
          >
            {talents.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </StyledTextField>

          {/**commencement */}
          <StyledTextField
            size="small"
            variant="filled"
            label="When will you like talent to commence?"
            id="commencement"
            fullWidth
            value={formik.values.commencement}
            onChange={formik.handleChange('commencement')}
            onBlur={formik.handleBlur}
            error={
              formik.touched.commencement && Boolean(formik.errors.commencement)
            }
            helperText={
              formik.touched.commencement && formik.errors.commencement
            }
            sx={{ mt: '1rem' }}
          />

          <Box
            sx={{
              mt: '1rem',
              display: 'flex',
              width: '100%',
              alignItems: 'center',
            }}
          >
            <Checkbox
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              inputProps={{ 'aria-label': 'controlled' }}
              sx={{
                color: 'white',
                '&.Mui-checked': {
                  color: 'white',
                },
                mr: '1rem',
              }}
            />

            <Typography
              variant="body2"
              sx={{ color: 'white', fontWeight: '200' }}
            >
              I agree to the terms and conditions.
            </Typography>
          </Box>

          <Button
            variant="contained"
            type="submit"
            sx={{
              backgroundColor: '#002E5F',
              mt: '1rem',
              py: '0.75rem',
              textTransform: 'none',
            }}
            fullWidth
            disabled={!checked}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default FindTalent
