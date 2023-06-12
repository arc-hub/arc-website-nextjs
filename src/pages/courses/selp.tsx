import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Head from 'next/head'
import {
  Alumni,
  Benefits,
  Clients,
  Footer,
  Navbar,
  OpenDayModal,
  ReservationModal,
  SyllabusModal,
  TopCourses,
} from 'components/ui'
import {
  Experience,
  Faq,
  Jumbotron,
  ProgrammeDetails,
  RegistrationModal,
} from 'components/selp'

const Selp = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [showSyllabusModal, setShowSyllabusModal] = useState<boolean>(false)
  const [showOpendayModal, setShowOpendayModal] = useState<boolean>(false)
  const [showRegistrationModal, setShowRegistrationModal] =
    useState<boolean>(false)
  const [course, setCourse] = useState<string>('')

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowModal(true)
  //   }, 3000)
  //   return () => clearTimeout(timer)
  // }, [])

  return (
    <Box sx={{ margin: '0px', padding: '0px', cursor: 'default' }}>
      <Head>
        <title>ARC Digital | SELP</title>
      </Head>

      {/**modals */}
      <ReservationModal
        showModal={showModal}
        setShowModal={setShowModal}
        course={course}
      />
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
        api="users"
      />

      {/**header */}
      <Box sx={{ backgroundColor: '#E6EAEF' }}>
        <Navbar page="course" textColor="#1A1F2B" />

        <Jumbotron
          setShowRegistrationModal={setShowRegistrationModal}
          setShowModal={setShowModal}
          setCourse={setCourse}
        />
      </Box>

      {/**clients */}
      <Clients />

      {/**tabs */}
      <ProgrammeDetails
        setShowSyllabusModal={setShowSyllabusModal}
        setShowRegistrationModal={setShowRegistrationModal}
        setCourse={setCourse}
        setShowModal={setShowModal}
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

      {/**experience */}
      <Experience />

      {/**faq */}
      <Faq />

      {/**footer */}
      <Footer />
    </Box>
  )
}

export default Selp
