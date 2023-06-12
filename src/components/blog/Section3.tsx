import { Box, Button, TextField, Typography } from '@mui/material'
import * as yup from 'yup'
import { FormikProps, useFormik } from 'formik'
import axios from 'api/axios'
import { toast } from 'react-hot-toast'

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('This field is required'),
})

interface IFormikValues {
  email: string
}

export const Section3 = () => {
  const formik: FormikProps<IFormikValues> = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values, { resetForm }) => {
      const response = await axios
        .post('newsletter', {
          email: values.email.toLowerCase(),
        })
        .catch((error) => {
          toast.error(error.response.data.message, {
            duration: 5000,
            position: 'top-right',
          })
        })
      if (response) {
        resetForm()
        toast.success('You have successfully subscribed to our newsletter.', {
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
          md: '2.5rem 6rem',
          lg: '2.5rem 12rem 5rem 12rem',
          xl: '3rem 15rem 5rem 15rem',
        },
      }}
    >
      <Box sx={{ backgroundColor: '#F9FAFB', borderRadius: '10px' }}>
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{
            flexDirection: {
              xs: 'column',
              lg: 'row',
            },
            alignItems: {
              sm: 'center',
            },
            padding: {
              xs: '4rem 3rem',
              sm: '4rem 5rem',
              xl: '4rem 8rem',
            },
            textAlign: {
              xs: 'center',
              sm: 'left',
            },
          }}
        >
          <Box>
            <Typography variant="h5" fontWeight="600">
              Join 2,000+ Subscribers
            </Typography>
            <Typography
              marginTop="1rem"
              variant="body1"
              color="#667085"
              fontWeight="500"
            >
              Stay in the loop with everything you need to know.
            </Typography>
          </Box>
          <Box
            sx={{
              marginTop: {
                xs: '2rem',
                md: '3rem',
                lg: '0',
              },
            }}
          >
            <Box
              component="form"
              noValidate
              autoComplete="off"
              sx={{
                display: 'flex',
                flexDirection: {
                  xs: 'column',
                  sm: 'row',
                },
              }}
              onSubmit={formik.handleSubmit}
            >
              <Box borderRadius="20px">
                <TextField
                  size="small"
                  variant="outlined"
                  label="Enter your email"
                  fullWidth
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange('email')}
                  sx={{
                    width: {
                      xs: '100%',
                      sm: '16rem',
                      md: '16rem',
                      xl: '20rem',
                    },
                  }}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Box>
              <Box
                color="#002E5F"
                sx={{
                  marginTop: {
                    xs: '1rem',
                    sm: '0',
                  },
                  marginLeft: {
                    xs: '0',
                    sm: '1rem',
                  },
                }}
              >
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    backgroundColor: '#002E5F',
                    color: 'white',
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </Box>
            <Box>
              <Typography
                marginTop="0.5rem"
                variant="body2"
                color="#667085"
                fontWeight="500"
              >
                We care about your data in our privacy policy
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Section3
