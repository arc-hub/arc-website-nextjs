import { Box } from '@mui/material'
import {
  Banner,
  Clients,
  Events,
  Ivyarc,
  RecentBlogs,
  Talent,
  Testimonials,
  TopCourses,
  WhyUs,
} from 'components/homepage'
import Footer from 'components/ui/Footer'
import Navbar from 'components/ui/Navbar'
import OpenDayModal from 'components/ui/OpenDayModal'
import SyllabusModal from 'components/ui/SyllabusModal'
import Head from 'next/head'
import { useState } from 'react'

const Home = () => {
  const [showSyllabusModal, setShowSyllabusModal] = useState<boolean>(false)
  const [showOpendayModal, setShowOpendayModal] = useState<boolean>(false)

  return (
    <Box sx={{ margin: '0px', padding: '0px', cursor: 'default' }}>
      <Head>
        <title>ARC Digital</title>
      </Head>

      {/**modals */}
      <SyllabusModal
        showSyllabusModal={showSyllabusModal}
        setShowSyllabusModal={setShowSyllabusModal}
      />

      <OpenDayModal
        showOpendayModal={showOpendayModal}
        setShowOpendayModal={setShowOpendayModal}
      />

      <Box sx={{ backgroundColor: '#FFFFFF' }}>
        <Navbar page="home" textColor="#1A1F2B" />

        <Banner />
      </Box>
      <Clients />
      <WhyUs />
      <Ivyarc />
      <TopCourses setShowSyllabusModal={setShowSyllabusModal} />
      <Talent />
      <Testimonials />
      <Events setShowOpendayModal={setShowOpendayModal} />
      <RecentBlogs />
      <Footer />
    </Box>
  )
}

export default Home
