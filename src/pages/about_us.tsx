import { Box } from '@mui/material'
import { Header, Section1, Section2, Section3 } from 'components/aboutUs'
import { Footer } from 'components/ui'
import Head from 'next/head'

export const AboutUs = () => {
  return (
    <Box sx={{ margin: '0px', padding: '0px', cursor: 'default' }}>
      <Head>
        <title>ARC Digital | About Us</title>
      </Head>

      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </Box>
  )
}

export default AboutUs
