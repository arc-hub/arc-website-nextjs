import { Box } from '@mui/material'
import {
  Section1,
  Section2,
  Section3,
  Section4,
} from 'components/blog/uxReview1'
import { Footer, Navbar } from 'components/ui'

export const Blog = () => {
  return (
    <Box>
      <Navbar page="blog" textColor="#1A1F2B" />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </Box>
  )
}

export default Blog
