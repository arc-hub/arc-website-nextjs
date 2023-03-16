import { TextField, Typography, Button, Box } from '@mui/material'

import { styled } from '@mui/material/styles'
import * as yup from 'yup'
import { useFormik, FormikProps } from 'formik'
import axios from 'api/axios'
import { toast } from 'react-hot-toast'
import Image from 'next/image'

const StyledTextField = styled(TextField)({
  '& .MuiInputBase-input': {
    color: '#002E5F',
  },
  '& .MuiInputBase-root': {
    backgroundColor: '#fcf5fb',
  },
  '& .MuiSvgIcon-root': {
    color: '#002E5F',
  },
  '& label': {
    color: '#002E5F',
    fontSize: '13px',
    fontWeight: '600',
  },
  '&:hover label': {
    fontWeight: 700,
  },
  '& label.Mui-focused': {
    color: '#002E5F',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#002E5F',
  },
  '& .MuiFilledInput-root': {
    '& fieldset': {
      borderColor: '#002E5F',
    },
    '&:hover fieldset': {
      borderColor: '#002E5F',
      borderWidth: 2,
    },
    '&.Mui-focused fieldset': {
      borderColor: '#002E5F',
    },
  },
})

const validationSchema = yup.object().shape({
  name: yup.string().required('This field is required'),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('This field is required'),
  message: yup.string().required('This field is required'),
})

interface FormikValues {
  name: string
  email: string
  message: string
}

export const Section1 = () => {
  const formik: FormikProps<FormikValues> = useFormik<FormikValues>({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values, { resetForm }) => {
      const response = await axios
        .post('contact', {
          name: values.name,
          email: values.email.toLowerCase(),
          message: values.message,
        })
        .catch((error) => {
          toast.error(error.response.data.message, {
            duration: 5000,
            position: 'top-right',
          })
        })
      if (response) {
        resetForm()
        toast.success('Your message has been delivered', {
          duration: 5000,
          position: 'top-right',
        })
      }
    },
  })

  return (
    <Box
      sx={{
        padding: {
          xs: '2.5rem 1.5rem',
          sm: '2.5rem 3rem',
          md: '3rem 0rem 3rem 0rem',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifycontent: {
            xs: 'none',
            md: 'space-between',
          },
          marginBottom: {
            xl: '3rem',
          },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: {
              md: '50%',
            },
            display: {
              xs: 'none',
              md: 'flex',
            },
          }}
        >
          <Image
            src={require('../../assets/image 28.png')}
            alt=""
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>
        <Box
          sx={{
            padding: {
              xs: '0rem',
              md: '0rem 2rem 0rem 3rem',
              lg: '0rem 5rem 0rem 6rem',
              xl: '0rem 5rem 0rem 5rem',
            },
            width: {
              xs: '100%',
              md: '50%',
            },
            fontFamily: 'Inter',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: {
                xs: '23px',
                md: '36px',
                lg: '40px',
                xl: '50px',
              },
              fontWeight: '700',
              width: {
                xs: '100%',
                md: '100%',
                xl: '90%',
              },
            }}
          >
            Would love to hear from you, Get in touch.
          </Typography>

          <Typography
            variant="body1"
            color="#81858F"
            sx={{
              marginTop: {
                xs: '1rem',
                md: '0.3rem',
                lg: '1rem',
              },
              fontSize: {
                xs: '14px',
                md: '16px',
                lg: '18px',
                xl: '22px',
              },
            }}
          >
            Have an enquiry or feedback from us?
          </Typography>

          <Typography
            variant="body2"
            color="#81858F"
            sx={{
              marginBottom: {
                xs: '2rem',
                md: '1rem',
                lg: '2rem',
              },
              fontSize: {
                xs: '14px',
                md: '16px',
                lg: '18px',
                xl: '22px',
              },
            }}
          >
            Fill out the form below to contact our team.
          </Typography>

          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
              width: {
                sm: '100%',
                md: '100%',
                xl: '90%',
              },
            }}
            onSubmit={formik.handleSubmit}
          >
            <Box>
              {/**full name */}
              <StyledTextField
                fullWidth
                size="small"
                variant="filled"
                id="name"
                label="Full Name"
                value={formik.values.name}
                onChange={formik.handleChange('name')}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />

              {/**Email */}
              <StyledTextField
                fullWidth
                size="small"
                variant="filled"
                id="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange('email')}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                sx={{ mt: '1rem' }}
              />

              {/**Message */}
              <StyledTextField
                variant="filled"
                id="message"
                label="Message"
                fullWidth
                multiline
                rows={3}
                value={formik.values.message}
                onChange={formik.handleChange('message')}
                onBlur={formik.handleBlur}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
                sx={{ mt: '1rem' }}
              />
            </Box>

            <Button
              variant="contained"
              sx={{
                backgroundColor: '#FF7801',
                mt: '1.5rem',
                padding: '0.5rem 3.5rem',
                '&:hover': {
                  backgroundColor: '#FFBB01',
                },
              }}
              type="submit"
            >
              GET IN TOUCH
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Section1
