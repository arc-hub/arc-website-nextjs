import { Box, Typography } from '@mui/material'
import { FiCopy } from 'react-icons/fi'
import { BsTwitter } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import Image from 'next/image'

export const Section2 = () => {
  return (
    <Box
      sx={{
        padding: {
          xs: '1rem 1.5rem',
          sm: '1rem 3rem',
          md: '1rem 6rem 7rem 6rem',
        },
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{
          flexDirection: {
            xs: 'column',
            sm: 'row',
          },
        }}
      >
        <Box display="flex">
          <Box>
            <Image
              src={require('../../../assets/Olivia.png')}
              alt=""
              loading="lazy"
            />
          </Box>
          <Box padding="0.3rem 0rem 0rem 1rem">
            <Typography variant="body1" fontFamily="Inter" fontWeight="600">
              Olivia Rhye
            </Typography>
            <Typography
              variant="body2"
              fontFamily="Inter"
              fontWeight="400"
              color="#002E5F"
            >
              Product Designer, Untitled
            </Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          paddingTop="0.3rem"
          sx={{
            width: {
              xs: '70%',
              sm: '35%',
              md: '28%',
              lg: '20%',
              xl: '18%',
            },
            marginTop: {
              xs: '1rem',
              sm: '0',
            },
          }}
        >
          <Box
            border="2px solid #D0D5DD"
            borderRadius="10px"
            height="2rem"
            width="45%"
          >
            <Box display="flex" padding="0.4rem 0.5rem 0rem 0.5rem">
              <Box>
                <FiCopy />
              </Box>
              <Typography
                variant="body2"
                fontFamily="Inter"
                fontWeight="600"
                marginLeft="0.5rem"
              >
                Copy link
              </Typography>
            </Box>
          </Box>
          <Box
            border="2px solid #D0D5DD"
            borderRadius="5px"
            width="8%"
            height="1.6rem"
            color="#D0D5DD"
            padding="0.3rem 0.3rem 0rem 0.2rem"
          >
            <BsTwitter size={20} />
          </Box>
          <Box
            border="2px solid #D0D5DD"
            borderRadius="5px"
            width="8%"
            height="1.6rem"
            color="#D0D5DD"
            padding="0.3rem 0.3rem 0rem 0.2rem"
          >
            <BsFacebook size={20} />
          </Box>
          <Box
            border="2px solid #D0D5DD"
            borderRadius="5px"
            width="8%"
            height="1.6rem"
            color="#D0D5DD"
            padding="0.3rem 0.3rem 0rem 0.2rem"
          >
            <BsLinkedin size={20} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Section2
