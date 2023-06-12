import React from 'react'
import { Box, Typography } from '@mui/material'
import { FiArrowUpRight } from 'react-icons/fi'
import Image from 'next/image'

export const Section2 = () => {
  return (
    <Box
      sx={{
        padding: {
          xs: '2.5rem 1.5rem',
          sm: '2.5rem 3rem',
          md: '2.5rem 6rem',
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
        <Box>
          <Box width="96%">
            <Image
              src={require('../../assets/bimage5.png')}
              alt=""
              style={{ width: '100%', height: 'auto' }}
              loading="lazy"
            />
          </Box>
          <Box
            sx={{
              marginTop: {
                xs: '1rem',
                sm: '2rem',
              },
            }}
          >
            <Typography variant="h5" fontFamily="Inter" fontWeight="600">
              Building your API Stack
            </Typography>
            <Typography
              variant="subtitle1"
              fontFamily="Inter"
              fontWeight="500"
              width="95%"
              sx={{
                color: '#667085',
                marginTop: {
                  xl: '1rem',
                },
                fontSize: '14px',
              }}
            >
              The rise of RESTful APIs has been met by a rise in tools for
              creating, testing, and managing them.
            </Typography>
            <Box display="flex" marginTop="1rem">
              <Typography
                variant="h6"
                fontSize="14px"
                fontWeight="600"
                fontFamily="Inter"
                sx={{
                  color: '#002E5F',
                }}
              >
                Read post
              </Typography>
              <Box padding="0.2rem 0rem 0rem 0.2rem">
                <FiArrowUpRight />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box>
          <Box
            sx={{
              width: {
                xs: '100%',
                sm: '96%',
              },
              marginTop: {
                xs: '3rem',
                sm: '0',
              },
            }}
          >
            <Image
              src={require('../../assets/bimage6.png')}
              alt=""
              style={{ width: '100%', height: 'auto' }}
              loading="lazy"
            />
          </Box>
          <Box
            sx={{
              marginTop: {
                xs: '1rem',
                sm: '2rem',
              },
            }}
          >
            <Typography variant="h5" fontFamily="Inter" fontWeight="600">
              Bill Walsh leadership lessons
            </Typography>
            <Typography
              variant="subtitle1"
              fontFamily="Inter"
              fontWeight="500"
              width="95%"
              sx={{
                color: '#667085',
                marginTop: {
                  xl: '1rem',
                },
                fontSize: '14px',
              }}
            >
              Like to know the secrets of transforming a 2-14 team into a 3x
              Super Bowl winning Dynasty?
            </Typography>
            <Box display="flex" marginTop="1rem">
              <Typography
                variant="h6"
                fontSize="14px"
                fontWeight="600"
                fontFamily="Inter"
                sx={{
                  color: '#002E5F',
                }}
              >
                Read post
              </Typography>
              <Box padding="0.2rem 0rem 0rem 0.2rem">
                <FiArrowUpRight />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        sx={{
          flexDirection: {
            xs: 'column',
            sm: 'row',
          },
          marginTop: {
            xs: '3rem',
            sm: '4rem',
          },
        }}
      >
        <Box>
          <Box
            sx={{
              width: {
                xs: '100%',
                sm: '96%',
              },
            }}
          >
            <Image
              src={require('../../assets/bimage5.png')}
              alt=""
              style={{ width: '100%', height: 'auto' }}
              loading="lazy"
            />
          </Box>
          <Box
            sx={{
              marginTop: {
                xs: '1rem',
                sm: '2rem',
              },
            }}
          >
            <Typography variant="h5" fontFamily="Inter" fontWeight="600">
              Building your API Stack
            </Typography>
            <Typography
              variant="subtitle1"
              fontFamily="Inter"
              fontWeight="500"
              width="95%"
              sx={{
                color: '#667085',
                marginTop: {
                  xl: '1rem',
                },
                fontSize: '14px',
              }}
            >
              The rise of RESTful APIs has been met by a rise in tools for
              creating, testing, and managing them.
            </Typography>
            <Box display="flex" marginTop="1rem">
              <Typography
                variant="h6"
                fontSize="14px"
                fontWeight="600"
                fontFamily="Inter"
                sx={{
                  color: '#002E5F',
                }}
              >
                Read post
              </Typography>
              <Box padding="0.2rem 0rem 0rem 0.2rem">
                <FiArrowUpRight />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box>
          <Box
            sx={{
              width: {
                xs: '100%',
                sm: '96%',
              },
              marginTop: {
                xs: '3rem',
                sm: '0',
              },
            }}
          >
            <Image
              src={require('../../assets/bimage6.png')}
              alt=""
              style={{ width: '100%', height: 'auto' }}
              loading="lazy"
            />
          </Box>
          <Box
            sx={{
              marginTop: {
                xs: '1rem',
                sm: '2rem',
              },
            }}
          >
            <Typography variant="h5" fontFamily="Inter" fontWeight="600">
              Bill Walsh leadership lessons
            </Typography>
            <Typography
              variant="subtitle1"
              fontFamily="Inter"
              fontWeight="500"
              width="95%"
              sx={{
                color: '#667085',
                marginTop: {
                  xl: '1rem',
                },
                fontSize: '14px',
              }}
            >
              Like to know the secrets of transforming a 2-14 team into a 3x
              Super Bowl winning Dynasty?
            </Typography>
            <Box display="flex" marginTop="1rem">
              <Typography
                variant="h6"
                fontSize="14px"
                fontWeight="600"
                fontFamily="Inter"
                sx={{
                  color: '#002E5F',
                }}
              >
                Read post
              </Typography>
              <Box padding="0.2rem 0rem 0rem 0.2rem">
                <FiArrowUpRight />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Section2
