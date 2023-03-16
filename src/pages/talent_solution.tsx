import { useRef } from 'react'
import Box from '@mui/material/Box'
import Head from 'next/head'
import Navbar from 'components/ui/Navbar'
import {
  Benefits,
  Clients,
  Faq,
  FindTalent,
  Jobs,
  Jumbotron,
  Testimonials,
} from 'components/talentSolution'
import Footer from 'components/ui/Footer'

const TalentSolution = () => {
  const talentRef = useRef<HTMLDivElement | null>(null)
  const testimonialsRef = useRef<HTMLDivElement | null>(null)

  return (
    <Box sx={{ margin: '0px', padding: '0px', cursor: 'default' }}>
      <Head>
        <title>ARC Digital | Talent Solution</title>
      </Head>

      <Box sx={{ backgroundColor: '#FFFFFF' }}>
        <Navbar page="talent" textColor="#1A1F2B" />

        <Jumbotron talentRef={talentRef} />
      </Box>
      <Clients />
      <Benefits testimonialsRef={testimonialsRef} />
      <FindTalent talentRef={talentRef} />
      <Jobs />
      <Testimonials testimonialsRef={testimonialsRef} />
      <Faq />
      <Footer />
    </Box>
  )
}

export default TalentSolution
