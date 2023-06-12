import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import toast from 'react-hot-toast'
import * as yup from 'yup'
import { useFormik, FormikProps } from 'formik'
import { FiX } from 'react-icons/fi'
import { useContext } from 'react'
import axios from 'api/axios'
import { SyllabusContext } from 'contexts/SyllabusContext'
import Image from 'next/image'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '75%', sm: '50%', lg: '33%' },
  bgcolor: 'background.paper',
  border: '0px',
  boxShadow: 24,
  p: 4,
  outline: 'none',
}

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

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationSchema = yup.object().shape({
  first_name: yup.string().required('This field is required'),
  last_name: yup.string().required('This field is required'),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('This field is required'),
  phone: yup
    .string()
    .matches(phoneRegExp, 'Enter a valid phone number')
    .required('This field is required'),
})

type SyllabusModalProps = {
  showSyllabusModal: boolean
  setShowSyllabusModal: (val: boolean) => void
}

interface FormikValues {
  first_name: string
  last_name: string
  email: string
  phone: string
}

const SyllabusModal = ({
  showSyllabusModal,
  setShowSyllabusModal,
}: SyllabusModalProps) => {
  const syllabusContext = useContext(SyllabusContext)

  const formik: FormikProps<FormikValues> = useFormik<FormikValues>({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
    },
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values, { resetForm }) => {
      const response = await axios
        .post('syllabus/download', {
          first_name: values.first_name,
          last_name: values.last_name,
          email: values.email.toLowerCase(),
          phone: values.phone,
          course: syllabusContext?.prog,
        })
        .catch((error) => {
          console.error(error.response)
        })
      if (response) {
        setShowSyllabusModal(false)
        resetForm()
        toast.success(response.data.message, {
          duration: 5000,
          position: 'top-right',
        })
      }
    },
  })

  return (
    <Box>
      <Modal
        open={showSyllabusModal}
        onClose={() => setShowSyllabusModal(false)}
        aria-labelledby="modal-modal-title"
        disableScrollLock
      >
        <Box sx={style}>
          <IconButton
            sx={{ position: 'absolute', top: '0px', right: '0px' }}
            onClick={() => setShowSyllabusModal(false)}
          >
            <FiX />
          </IconButton>
          <Box
            sx={{
              position: 'relative',
              width: '100px',
              mx: 'auto',
            }}
          >
            <Image
              src={require('../../assets/Books.png')}
              alt=""
              style={{ height: 'auto', width: '100%' }}
              priority
            />
          </Box>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ textAlign: 'center' }}
            gutterBottom
          >
            Syllabus Form
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{ color: '#FF7801', textAlign: 'center' }}
          >
            NOTE: Syllabus will be sent to registered email
          </Typography>

          <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={formik.handleSubmit}
            sx={{
              width: { xs: '100%', sm: '80%' },
              mt: '1rem',
              mx: 'auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/**first name */}
            <StyledTextField
              fullWidth
              size="small"
              variant="filled"
              id="first_name"
              label="First Name"
              value={formik.values.first_name}
              onChange={formik.handleChange('first_name')}
              error={
                formik.touched.first_name && Boolean(formik.errors.first_name)
              }
              helperText={formik.touched.first_name && formik.errors.first_name}
            />

            {/**last name */}
            <StyledTextField
              fullWidth
              size="small"
              variant="filled"
              id="last_name"
              label="Last Name"
              value={formik.values.last_name}
              onChange={formik.handleChange('last_name')}
              error={
                formik.touched.last_name && Boolean(formik.errors.last_name)
              }
              helperText={formik.touched.last_name && formik.errors.last_name}
              sx={{ mt: '1rem' }}
            />

            {/**phone number */}
            <StyledTextField
              fullWidth
              size="small"
              variant="filled"
              id="phone"
              label="Phone Number"
              value={formik.values.phone}
              onChange={formik.handleChange('phone')}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={
                Boolean(formik.errors.phone)
                  ? formik.touched.phone && formik.errors.phone
                  : 'Please add your country code'
              }
              sx={{ mt: '1rem' }}
            />

            {/**email */}
            <StyledTextField
              fullWidth
              size="small"
              variant="filled"
              id="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange('email')}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={
                Boolean(formik.errors.email)
                  ? formik.touched.email && formik.errors.email
                  : "We'll never share your email with anyone else."
              }
              sx={{ mt: '1rem' }}
            />

            <Button
              variant="contained"
              type="submit"
              sx={{ backgroundColor: '#FF7801', mt: '1.5rem' }}
              fullWidth
            >
              Download
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  )
}

export default SyllabusModal
