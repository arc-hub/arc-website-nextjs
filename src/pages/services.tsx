import { useState } from 'react'
import Box from '@mui/material/Box'
import Head from 'next/head'
import { Header, Section1, Section2, Section3 } from 'components/services'
import { Footer, ReservationModal } from 'components/ui'

export const Services = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [course, setCourse] = useState<string>('')

  return (
    <Box>
      <Head>
        <title>ARC Digital | Services</title>
      </Head>

      <ReservationModal
        showModal={showModal}
        setShowModal={setShowModal}
        course={course}
      />
      <Header />
      <Section1 />
      <Section2 setShowModal={setShowModal} setCourse={setCourse} />
      <Section3 />
      <Footer />
    </Box>
  )
}

export default Services
