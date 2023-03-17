import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import IconButton from '@mui/material/IconButton'
import * as yup from 'yup'
import { useFormik, FormikProps } from 'formik'
import { FiX } from 'react-icons/fi'
import { useRouter } from 'next/router'
import { ISelpFormikValues } from 'utils/interfaces'
import axios from 'api/axios'
import { toast } from 'react-hot-toast'
import Details from './Details'
import About from './About'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '100%', sm: '50%' },
  maxHeight: '90vh',
  bgcolor: 'background.paper',
  border: '0px',
  boxShadow: 24,
  p: '2rem 0rem',
  outline: 'none',
  overflow: 'auto',
}

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const aboutSchema = yup.object().shape({
  first_name: yup
    .string()
    .required('This field is required')
    .min(3, 'First name must be at least 3 characters'),
  last_name: yup
    .string()
    .required('This field is required')
    .min(3, 'Last name must be at least 3 characters'),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('This field is required'),
  github: yup.string().required('This field is required'),
  experience: yup.string().required('This field is required'),
  commitment_level: yup.string().required('This field is required'),
  course: yup.string().required('This field is required'),
  phone: yup
    .string()
    .matches(phoneRegExp, 'Enter a valid phone number')
    .required('This field is required'),
  stacks: yup
    .array(yup.string())
    .min(1, 'Enter your tech stacks')
    .required('This field is required'),
  expectations_post_training: yup.string().required('This field is required'),
})

const detailsSchema = yup.object().shape({
  about_yourself: yup.string().required('This field is required'),
  motivation: yup.string().required('This field is required'),
  staying_motivated: yup.string().required('This field is required'),
  expectations_during_training: yup.string().required('This field is required'),
  computer_access: yup.string().required('This field is required'),
  hear_about_programme: yup.string().required('This field is required'),
  funding: yup.string().required('This field is required'),
  payment_period: yup.string().required('This field is required'),
  payment_option: yup.string().required('This field is required'),
})

type RegistrationModalProps = {
  showRegistrationModal: boolean
  setShowRegistrationModal: (val: boolean) => void
  api: string
}

const RegistrationModal = ({
  showRegistrationModal,
  setShowRegistrationModal,
  api,
}: RegistrationModalProps) => {
  const [step, setStep] = useState<number>(1)
  const [checked, setChecked] = useState<boolean>(false)

  const router = useRouter()

  const formik: FormikProps<ISelpFormikValues> = useFormik<ISelpFormikValues>({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      github: '',
      experience: '',
      commitment_level: '',
      course: 'Software Engineering Leadership Programme',
      phone: '',
      stacks: [],
      expectations_post_training: '',
      about_yourself: '',
      motivation: '',
      staying_motivated: '',
      expectations_during_training: '',
      computer_access: '',
      hear_about_programme: '',
      funding: '',
      payment_period: '',
      payment_option: '',
      receive_communication: checked,
    },
    validationSchema: step === 2 ? detailsSchema : aboutSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values, { resetForm }) => {
      if (step === 1) {
        setStep(2)
      }

      if (step === 2) {
        const response = await axios
          .post(`${api}`, {
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email.toLowerCase(),
            github: values.github,
            experience: values.experience,
            commitment_level: values.commitment_level,
            course: values.course,
            phone: values.phone,
            stacks: values.stacks,
            expectations_post_training: values.expectations_post_training,
            about_yourself: values.about_yourself,
            motivation: values.motivation,
            staying_motivated: values.staying_motivated,
            expectations_during_training: values.expectations_during_training,
            computer_access: values.computer_access,
            hear_about_programme: values.hear_about_programme,
            funding: values.funding,
            payment_period: values.payment_period,
            payment_option: values.payment_option,
            receive_communication: checked,
          })
          .catch((error) => {
            toast.error(error.response.data.message, {
              duration: 5000,
              position: 'top-right',
            })
          })
        if (response) {
          toast.success(
            'You have been registered for this course successfully.',
            { duration: 5000, position: 'top-right' }
          )
          resetForm()
          router.reload()
        }
      }
    },
  })

  return (
    <Box>
      <Modal
        open={showRegistrationModal}
        onClose={() => {
          setShowRegistrationModal(false)
          // navigate(0)
        }}
        aria-labelledby="modal-modal-title"
      >
        <Box sx={style}>
          <IconButton
            sx={{ position: 'absolute', top: '0px', right: '0px' }}
            onClick={() => {
              setShowRegistrationModal(false)
              // navigate(0)
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
            Registration Form
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{ textAlign: 'center', fontWeight: '700' }}
          >
            NOTE: Please ensure to provide the following information
          </Typography>

          {step === 2 ? (
            <Details
              formik={formik}
              checked={checked}
              setChecked={setChecked}
            />
          ) : (
            <About formik={formik} />
          )}
        </Box>
      </Modal>
    </Box>
  )
}

export default RegistrationModal
