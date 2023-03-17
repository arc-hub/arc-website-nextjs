import { Box } from '@mui/material'
import { Section1, Section2, Section3 } from 'components/blog'
import { Footer, Navbar } from 'components/ui'
import Head from 'next/head'

export const UXreview1 = () => {
  return (
    <Box>
      <Head>
        <title>ARC Digital | Blog</title>
      </Head>

      <Navbar page="blog" textColor="#1A1F2B" />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </Box>
  )
}

export default UXreview1
