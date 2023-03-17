import { MutableRefObject, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import IconButton from '@mui/material/IconButton'
import * as yup from 'yup'
import { useFormik, FormikProps } from 'formik'
import { FiX } from 'react-icons/fi'
import { useRouter } from 'next/router'
import axios from 'api/axios'
import { toast } from 'react-hot-toast'
import { IsSefFormikValues } from 'utils/interfaces'
import About from './About'
import Details from './Details'
import DetailsTwo from './DetailsTwo'

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
  skills: yup
    .array(yup.string())
    .min(1, 'Enter your tech skills')
    .required('This field is required'),
  about_yourself: yup.string().required('This field is required'),
})

const detailsSchema = yup.object().shape({
  motivation: yup.string().required('This field is required'),
  staying_motivated: yup.string().required('This field is required'),
  computer_access: yup.string().required('This field is required'),
})

const detailsTwoSchema = yup.object().shape({
  expectations_during_training: yup.string().required('This field is required'),
  expectations_post_training: yup.string().required('This field is required'),
  hear_about_programme: yup.string().required('This field is required'),
  receive_communication: yup
    .boolean()
    .oneOf([true], 'You must accept the terms and conditions'),
})

type RegitstationModalProps = {
  showRegistrationModal: boolean
  setShowRegistrationModal: (val: boolean) => void
  api: string
  setScrollIntoView: (val: boolean) => void
}

const RegistrationModal = ({
  showRegistrationModal,
  setShowRegistrationModal,
  api,
  setScrollIntoView,
}: RegitstationModalProps) => {
  const [step, setStep] = useState<number>(1)
  const router = useRouter()

  const formik: FormikProps<IsSefFormikValues> = useFormik<IsSefFormikValues>({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      github: '',
      experience: '',
      commitment_level: '',
      course: 'Software Engineering Foundation',
      phone: '',
      skills: [],
      about_yourself: '',
      expectations_post_training: '',
      motivation: '',
      staying_motivated: '',
      expectations_during_training: '',
      computer_access: '',
      hear_about_programme: '',
      receive_communication: false,
    },
    validationSchema:
      step === 1 ? aboutSchema : step === 2 ? detailsSchema : detailsTwoSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values, { resetForm }) => {
      if (step !== 3) {
        setStep(step + 1)
      }

      if (step === 3) {
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
            skills: values.skills,
            expectations_post_training: values.expectations_post_training,
            about_yourself: values.about_yourself,
            motivation: values.motivation,
            staying_motivated: values.staying_motivated,
            expectations_during_training: values.expectations_during_training,
            computer_access: values.computer_access,
            hear_about_programme: values.hear_about_programme,
            receive_communication: values.receive_communication,
          })
          .catch((error) => {
            toast.error(error.response.data.message, {
              duration: 5000,
              position: 'top-center',
            })
          })
        if (response) {
          toast.success(
            'You have been registered for this course successfully.',
            {
              duration: 5000,
              position: 'top-center',
            }
          )
          resetForm()
          router.reload()
        }
      }
    },
  })

  const displayStep = (step: number) => {
    switch (step) {
      case 1:
        return <About formik={formik} />
      case 2:
        return <Details formik={formik} step={step} setStep={setStep} />
      case 3:
        return (
          <DetailsTwo
            formik={formik}
            step={step}
            setStep={setStep}
            setShowRegistrationModal={setShowRegistrationModal}
            setScrollIntoView={setScrollIntoView}
          />
        )
      default:
    }
  }

  return (
    <Box>
      <Modal
        open={showRegistrationModal}
        onClose={() => {
          setShowRegistrationModal(false)
        }}
        aria-labelledby="modal-modal-title"
        disableScrollLock
      >
        <Box sx={style}>
          <IconButton
            sx={{ position: 'absolute', top: '0px', right: '0px' }}
            onClick={() => {
              setShowRegistrationModal(false)
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

          {displayStep(step)}
        </Box>
      </Modal>
    </Box>
  )
}

export default RegistrationModal
