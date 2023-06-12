import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import * as yup from 'yup'
import { useFormik, FormikProps } from 'formik'
import toast from 'react-hot-toast'
import { FiX } from 'react-icons/fi'
import { useRouter } from 'next/router'
import axios from 'api/axios'
import { commitmentLevels, techStacks } from 'utils/data'

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

const validationSchema = yup.object().shape({
  first_name: yup.string().required('This field is required'),
  last_name: yup.string().required('This field is required'),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('This field is required'),
  commitment_level: yup.string().required('This field is required'),
  stacks: yup
    .array(yup.string())
    .min(1, 'Enter your tech stacks')
    .required('This field is required'),
})

type OpenDayModalProps = {
  showOpendayModal: boolean
  setShowOpendayModal: (val: boolean) => void
}

interface FormikValues {
  first_name: string
  last_name: string
  email: string
  commitment_level: string
  stacks: string[]
}

const OpenDayModal = ({
  showOpendayModal,
  setShowOpendayModal,
}: OpenDayModalProps) => {
  const router = useRouter()
  const formik: FormikProps<FormikValues> = useFormik<FormikValues>({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      commitment_level: '',
      stacks: [],
    },
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values, { resetForm }) => {
      const response = await axios
        .post('openday', {
          first_name: values.first_name,
          last_name: values.last_name,
          email: values.email.toLowerCase(),
          commitment_level: values.commitment_level,
          stacks: values.stacks,
        })
        .catch((error) => {
          toast.error(error.response.data.message, {
            duration: 5000,
            position: 'top-right',
          })
        })
      if (response) {
        router.reload()
        resetForm()
        toast.success(
          'You are successfully registered for our Open Day Event.',
          {
            duration: 5000,
            position: 'top-right',
          }
        )
      }
    },
  })

  return (
    <Box>
      <Modal
        open={showOpendayModal}
        onClose={() => {
          setShowOpendayModal(false)
        }}
        aria-labelledby="modal-modal-title"
        disableScrollLock
      >
        <Box sx={style}>
          <IconButton
            sx={{ position: 'absolute', top: '0px', right: '0px' }}
            onClick={() => {
              router.reload()
            }}
          >
            <FiX />
          </IconButton>

          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ textAlign: 'center', fontWeight: '700' }}
          >
            Join Our Open Day Event
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{ textAlign: 'center', fontWeight: '700' }}
          >
            Register and start learning Sofware Engineering for FREE.
          </Typography>

          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
              width: { xs: '100%', sm: '80%' },
              mt: '1rem',
              mx: 'auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            onSubmit={formik.handleSubmit}
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
              helperText={formik.touched.email && formik.errors.email}
              sx={{ mt: '1rem' }}
            />

            {/**commitment levels */}
            <StyledTextField
              size="small"
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
                formik.touched.commitment_level &&
                formik.errors.commitment_level
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

            {/**tech stacks */}
            <StyledTextField
              size="small"
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
              sx={{ mt: '1rem' }}
            >
              {techStacks.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </StyledTextField>

            <Button
              variant="contained"
              sx={{
                backgroundColor: '#FF7801',
                mt: '1.5rem',
                textTransform: 'none',
              }}
              fullWidth
              type="submit"
            >
              Register
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  )
}

export default OpenDayModal
