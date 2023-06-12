import Box from '@mui/material/Box'
import { Section1, Section2 } from 'components/contactUs'
import { Footer, Navbar } from 'components/ui'
import Head from 'next/head'

export const ContactUs = () => {
  return (
    <Box>
      <Head>
        <title>ARC Digital | Contact Us</title>
      </Head>

      <Navbar page="contact" textColor="#1A1F2B" />

      <Section1 />
      <Section2 />
      <Footer />
    </Box>
  )
}

export default ContactUs
