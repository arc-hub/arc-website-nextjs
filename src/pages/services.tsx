import { useState } from 'react'
import Box from '@mui/material/Box'
import RegistrationModal from 'components/ui/ReservationModal'
import Head from 'next/head'
import Footer from 'components/ui/Footer'
import Header from 'components/services/Header'
import Section1 from 'components/services/Section1'
import Section2 from 'components/services/Section2'
import Section3 from 'components/services/Section3'

export const Services = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <Box>
      <Head>
        <title>ARC Digital | Services</title>
      </Head>

      <RegistrationModal showModal={showModal} setShowModal={setShowModal} />
      <Header />
      <Section1 />
      <Section2 setShowModal={setShowModal} />
      <Section3 />
      <Footer />
    </Box>
  )
}

export default Services
