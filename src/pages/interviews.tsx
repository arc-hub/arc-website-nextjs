import { Box, Button, MenuItem, TextField, Typography } from '@mui/material'
import * as yup from 'yup'
import { useFormik, FormikProps } from 'formik'
import Head from 'next/head'
import { toast } from 'react-hot-toast'
import axios from 'api/axios'
import { interviewerLinks } from 'utils/data'
import { Navbar } from 'components/ui'

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('This field is required')
    .min(3, 'Full name must be at least 3 characters'),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('This field is required'),
  interviewer: yup.string().required('This field is required'),
})

interface FormikValues {
  name: string
  email: string
  interviewer: string
}

const Interviews = () => {
  const formik: FormikProps<FormikValues> = useFormik<FormikValues>({
    initialValues: {
      name: '',
      email: '',
      interviewer: '',
    },
    validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values, { resetForm }) => {
      const response = await axios
        .post('interview', {
          name: values.name,
          email: values.email,
          interviewer: values.interviewer,
        })
        .catch((error) => {
          toast.error(error.response.data.message, {
            duration: 5000,
            position: 'top-center',
          })
        })
      if (response) {
        resetForm()
        toast.success('Interviewer has been assigned successfully', {
          duration: 5000,
          position: 'top-center',
        })
      }
    },
  })

  return (
    <Box>
      <Head>
        <title>ARC Digital | Interviews</title>
      </Head>

      <Navbar textColor="#1A1F2B" />

      <Box
        sx={{
          padding: {
            xs: '1.5rem 1.5rem',
            sm: '1.5rem 3rem',
            md: '1.5rem 4.5rem',
            lg: '1.5rem 6rem',
          },
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          fontWeight="600"
          sx={{
            color: '#000000',
            textAlign: 'center',
          }}
        >
          ASSIGN INTERVIEWS
        </Typography>

        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            width: { xs: '100%', sm: '80%' },
            mx: 'auto',
            mt: '2rem',
          }}
          onSubmit={formik.handleSubmit}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'start',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ width: { xs: '100%', sm: '34%', lg: '39%' } }}>
              <TextField
                required
                variant="outlined"
                fullWidth
                size="medium"
                id="name"
                label="Candidate Name"
                value={formik.values.name}
                onChange={formik.handleChange('name')}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Box>

            <Box
              sx={{
                width: { xs: '100%', sm: '34%', lg: '39%' },
                mt: { xs: '1rem', sm: '0rem' },
              }}
            >
              <TextField
                required
                variant="outlined"
                fullWidth
                size="medium"
                id="email"
                label="Candidate Email"
                value={formik.values.email}
                onChange={formik.handleChange('email')}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Box>

            <Box
              sx={{
                width: { xs: '100%', sm: '27%', lg: '19%' },
                mt: { xs: '1rem', sm: '0rem' },
              }}
            >
              <TextField
                required
                variant="outlined"
                fullWidth
                size="medium"
                id="interviewer"
                label="Interviewer"
                value={formik.values.interviewer}
                onChange={formik.handleChange('interviewer')}
                select
                SelectProps={{ MenuProps: { disableScrollLock: true } }}
                error={
                  formik.touched.interviewer &&
                  Boolean(formik.errors.interviewer)
                }
                helperText={
                  formik.touched.interviewer && formik.errors.interviewer
                }
              >
                {interviewerLinks.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </Box>

          <Box sx={{ width: '50%', mx: 'auto', mt: '1rem' }}>
            <Button
              variant="contained"
              fullWidth
              type="submit"
              sx={{
                backgroundColor: '#002E5F',
                mt: '1rem',
                py: '0.75rem',
                textTransform: 'none',
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Interviews
