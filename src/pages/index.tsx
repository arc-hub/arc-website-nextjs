import { Box } from '@mui/material'
import Clients from 'components/homepage/Clients'
import Events from 'components/homepage/Events'
import Ivyarc from 'components/homepage/Ivyarc'
import Talent from 'components/homepage/Talent'
import Testimonials from 'components/homepage/Testimonials'
import TopCourses from 'components/homepage/TopCourses'
import WhyUs from 'components/homepage/WhyUs'
import Banner from 'components/homepage/banner'
import RecentBlogs from 'components/homepage/recentBlogs'
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
