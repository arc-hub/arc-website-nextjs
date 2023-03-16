import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import TextField from '@mui/material/TextField'
import Divider from '@mui/material/Divider'
import Link from '@mui/material/Link'
import { FiPhone, FiMail } from 'react-icons/fi'
import toast from 'react-hot-toast'
import * as yup from 'yup'
import { useFormik, FormikProps } from 'formik'
import { useRouter } from 'next/router'
import axios from 'api/axios'
import Image from 'next/image'

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('This field is required'),
})

interface FormikValues {
  email: string
}

const Footer = () => {
  const router = useRouter()
  const formik: FormikProps<FormikValues> = useFormik<FormikValues>({
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
        backgroundColor: '#002E5F',
        padding: {
          xs: '3rem 1.5rem',
          sm: '3rem 3rem',
          md: '3rem 4.5rem',
          lg: '3rem 6rem',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'start',
        }}
      >
        <Box
          sx={{
            width: {
              xs: '50%',
              sm: '33.33%',
              md: '25%',
            },
            mb: {
              xs: '1.5rem',
              md: '0rem',
            },
          }}
        >
          <Typography
            variant="h5"
            sx={{ color: '#FFFFFF', fontWeight: '700', cursor: 'pointer' }}
            gutterBottom
            onClick={() => router.push('/')}
          >
            IVYARC
          </Typography>
          <Typography variant="body2" sx={{ color: '#FFFFFF' }}>
            Our purpose is to help clients deploy technology to deliver outcomes
            precisely aligned to their business goals.
          </Typography>
        </Box>

        <Box
          sx={{
            width: {
              xs: '45%',
              sm: '30%',
              md: 'auto',
            },
            mb: {
              xs: '1.5rem',
              sm: '0rem',
            },
          }}
        >
          <Typography variant="subtitle2" sx={{ color: '#FFFFFF' }}>
            COMPANY
          </Typography>
          <List component="ul" sx={{ color: '#FFFFFF' }} dense>
            <ListItem
              sx={{ display: 'list-item', cursor: 'pointer' }}
              disableGutters
              onClick={() => router.push('/about_us')}
            >
              <ListItemText primary="About" />
            </ListItem>
            <ListItem
              sx={{ display: 'list-item', cursor: 'pointer' }}
              disableGutters
              onClick={() => router.push('/courses/selp')}
            >
              <ListItemText primary="SELP" />
            </ListItem>
            <ListItem
              sx={{ display: 'list-item', cursor: 'pointer' }}
              disableGutters
              onClick={() => router.push('/courses/sef')}
            >
              <ListItemText primary="SEF" />
            </ListItem>
            <ListItem
              sx={{ display: 'list-item', cursor: 'pointer' }}
              disableGutters
              onClick={() => router.push('/services')}
            >
              <ListItemText primary="Career" />
            </ListItem>
          </List>
        </Box>

        <Box
          sx={{
            width: {
              xs: '50%',
              sm: '30%',
              md: 'auto',
            },
          }}
        >
          <Typography variant="subtitle2" sx={{ color: '#FFFFFF' }}>
            HELP
          </Typography>
          <List component="ul" sx={{ color: '#FFFFFF' }} dense>
            <ListItem
              sx={{ display: 'list-item', cursor: 'pointer' }}
              disableGutters
              onClick={() => router.push('/contact_us')}
            >
              <ListItemText primary="Customer Support" />
            </ListItem>
            <ListItem
              sx={{ display: 'list-item', cursor: 'pointer' }}
              disableGutters
            >
              <ListItemText primary="Terms & Conditions" />
            </ListItem>
            <ListItem
              sx={{ display: 'list-item', cursor: 'pointer' }}
              disableGutters
            >
              <ListItemText primary="Privacy Policy" />
            </ListItem>
          </List>
        </Box>

        <Box
          component="form"
          sx={{
            width: {
              xs: '45%',
              sm: '33.33%',
              md: '25%',
            },
          }}
          onSubmit={formik.handleSubmit}
        >
          <Typography variant="body2" sx={{ color: '#FFFFFF' }}>
            NEWSLETTER
          </Typography>
          <TextField
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange('email')}
            fullWidth
            size="small"
            placeholder="Enter your email address"
            sx={{
              backgroundColor: '#FFFFFF',
              borderRadius: '0.5rem',
              mt: '1rem',
            }}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{
              backgroundColor: '#FF7801',
              '&:hover': {
                backgroundColor: '#FF7801',
              },
              width: '100%',
              mt: '1rem',
              fontSize: {
                xs: '10px',
                sm: '14px',
              },
            }}
          >
            Subscribe Now
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          position: 'relative',
          py: '1rem',
          px: { xs: '1rem', md: '0rem' },
          mt: '1rem',
        }}
      >
        <Box
          sx={{
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            mr: '1rem',
            mt: {
              xs: '0.5rem',
              sm: '0rem',
            },
          }}
        >
          <FiPhone />
          <Link
            href="tel:+2348089895660"
            variant="body2"
            sx={{ ml: '0.5rem' }}
            color="inherit"
            underline="hover"
          >
            Nigeria: +234 808 989 5660
          </Link>
        </Box>
        <Box
          sx={{
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            mr: '1rem',
            mt: {
              xs: '0.5rem',
              sm: '0rem',
            },
          }}
        >
          <FiPhone />
          <Link
            href="tel:+4477444151270"
            variant="body2"
            sx={{ ml: '0.5rem' }}
            color="inherit"
            underline="hover"
          >
            United Kingdom: +44 7744 4151 270
          </Link>
        </Box>
        <Box
          sx={{
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            mt: {
              xs: '0.5rem',
              sm: '0rem',
            },
          }}
        >
          <FiMail />
          <Link
            href="mailto:info@ivyarc.com"
            variant="body2"
            sx={{ ml: '0.5rem' }}
            color="inherit"
            underline="hover"
          >
            info@ivyarc.com
          </Link>
        </Box>

        <Box
          sx={{
            position: 'absolute',
            right: { xs: 0, md: '1rem' },
            bottom: { xs: '1rem', md: '0.5rem' },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            width: { md: '125px' },
            height: { xs: '125px', md: 'auto' },
          }}
        >
          <Link
            href="https://twitter.com/ivyarcafrica"
            underline="none"
            target="_blank"
          >
            <Image
              src={require('../../assets/Twitter.png')}
              alt="twitter"
              width={28}
              height={28}
            />
          </Link>
          <Link
            href="https://www.facebook.com/ivyarcafrica/"
            underline="none"
            target="_blank"
          >
            <Image
              src={require('../../assets/Facebook.png')}
              alt="facebook"
              width={28}
              height={28}
            />
          </Link>

          <Link
            href="https://www.instagram.com/ivyarcafrica/"
            underline="none"
            target="_blank"
          >
            <Image
              src={require('../../assets/Instagram.png')}
              alt="instagram"
              width={28}
              height={28}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/company/ivyarc/"
            underline="none"
            target="_blank"
          >
            <Image
              src={require('../../assets/LinkedIn.png')}
              alt="linkedin"
              width={28}
              height={28}
            />
          </Link>
        </Box>
      </Box>
      <Divider sx={{ backgroundColor: '#FFFFFF' }} />

      <Typography
        variant="body2"
        sx={{ color: '#FFFFFF', mt: '1rem', textAlign: 'center' }}
      >
        &#169; Copyright 2022, All Rights Reserved by IVYARC
      </Typography>
    </Box>
  )
}

export default Footer
