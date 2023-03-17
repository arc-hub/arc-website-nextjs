import { useState, useEffect, useRef } from 'react'
import Box from '@mui/material/Box'
import Head from 'next/head'
import {
  Benefits,
  Faq,
  Jumbotron,
  ProgrammeDetails,
  RegistrationModal,
} from 'components/sef'
import {
  Alumni,
  Clients,
  Footer,
  Navbar,
  OpenDayModal,
  ReservationModal,
  SyllabusModal,
  TopCourses,
} from 'components/ui'

const Sef = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [showSyllabusModal, setShowSyllabusModal] = useState<boolean>(false)
  const [showOpendayModal, setShowOpendayModal] = useState<boolean>(false)
  const [showRegistrationModal, setShowRegistrationModal] =
    useState<boolean>(false)
  const [scrollIntoView, setScrollIntoView] = useState<boolean>(false)

  const faqRef = useRef<HTMLDivElement | null>(null)

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowModal(true)
  //   }, 3000)
  //   return () => clearTimeout(timer)
  // }, [])

  useEffect(() => {
    const scrollToFaq = () => {
      if (scrollIntoView) {
        faqRef.current?.scrollIntoView({
          behavior: 'smooth',
        })
        setScrollIntoView(false)
      }
    }

    scrollToFaq()
  }, [scrollIntoView])

  return (
    <Box sx={{ margin: '0px', padding: '0px', cursor: 'default' }}>
      <Head>
        <title>ARC Digital | SEF</title>
      </Head>

      {/**modals */}
      <ReservationModal showModal={showModal} setShowModal={setShowModal} />
      <SyllabusModal
        showSyllabusModal={showSyllabusModal}
        setShowSyllabusModal={setShowSyllabusModal}
      />
      <OpenDayModal
        showOpendayModal={showOpendayModal}
        setShowOpendayModal={setShowOpendayModal}
      />
      <RegistrationModal
        showRegistrationModal={showRegistrationModal}
        setShowRegistrationModal={setShowRegistrationModal}
        api="sef"
        setScrollIntoView={setScrollIntoView}
      />

      {/**header */}
      <Box sx={{ backgroundColor: '#E6EAEF' }}>
        <Navbar page="course" textColor="#1A1F2B" />

        <Jumbotron setShowRegistrationModal={setShowRegistrationModal} />
      </Box>

      {/**clients */}
      <Clients />

      {/**tabs */}
      <ProgrammeDetails
        setShowSyllabusModal={setShowSyllabusModal}
        setShowRegistrationModal={setShowRegistrationModal}
      />

      {/**benefits */}
      <Benefits
        setShowOpendayModal={setShowOpendayModal}
        setShowRegistrationModal={setShowRegistrationModal}
      />

      {/**top courses */}
      <TopCourses setShowSyllabusModal={setShowSyllabusModal} />

      {/**alumni */}
      <Alumni />

      {/**faq */}
      <Faq faqRef={faqRef} />

      {/**footer */}
      <Footer />
    </Box>
  )
}

export default Sef
