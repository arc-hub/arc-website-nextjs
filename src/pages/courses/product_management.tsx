import { Box } from '@mui/material'
import { Navbar } from 'components/ui'
import ComingSoon from 'components/ui/ComingSoon'
import Head from 'next/head'

const ProductManagement = () => {
  return (
    <Box sx={{ margin: '0px', padding: '0px', cursor: 'default' }}>
      <Head>
        <title>ARC Digital | Product Management</title>
      </Head>

      <Box sx={{ backgroundColor: '#FFFFFF' }}>
        <Navbar page="course" textColor="#1A1F2B" />
      </Box>

      <ComingSoon />
    </Box>
  )
}

export default ProductManagement
