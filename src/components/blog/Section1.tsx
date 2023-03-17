import { Box, Typography } from '@mui/material'
import { FiArrowUpRight } from 'react-icons/fi'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const Section1 = () => {
  return (
    <Box
      sx={{
        padding: {
          xs: '2.5rem 1.5rem 0rem 1.5rem',
          sm: '2.5rem 3rem',
          md: '2.5rem 6rem',
        },
      }}
    >
      <Box>
        <Typography variant="h4" fontFamily="Inter" fontWeight="600">
          From the blog
        </Typography>
        <Typography
          variant="subtitle1"
          fontFamily="Inter"
          sx={{
            color: '#667085',
            marginTop: {
              xl: '1rem',
            },
            fontSize: '18px',
          }}
        >
          The latest industry news, interviews, technologies and resources.
        </Typography>
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
              src={require('../../assets/bimage1.png')}
              alt=""
              style={{ width: '100%', height: 'auto' }}
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
              UX reviews presentations
            </Typography>
            <Typography
              variant="subtitle1"
              fontFamily="Inter"
              fontWeight="500"
              sx={{
                color: '#667085',
                marginTop: {
                  xl: '1rem',
                },
                fontSize: '14px',
              }}
            >
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </Typography>
            <Link href="/blog/ux_review_1">
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
            </Link>
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
              src={require('../../assets/bimage2.png')}
              alt=""
              style={{ width: '100%', height: 'auto' }}
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
              Migrating to Linear 101
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
              Linear helps streamline software projects, sprints, tasks, and bug
              tracking. Here's how to get started.
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
              src={require('../../assets/bimage3.png')}
              alt=""
              style={{ width: '100%', height: 'auto' }}
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
              UX reviews presentations
            </Typography>
            <Typography
              variant="subtitle1"
              fontFamily="Inter"
              fontWeight="500"
              sx={{
                color: '#667085',
                marginTop: {
                  xl: '1rem',
                },
                fontSize: '14px',
              }}
            >
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
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
              src={require('../../assets/bimage4.png')}
              alt=""
              style={{ width: '100%', height: 'auto' }}
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
              Migrating to Linear 101
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
              Linear helps streamline software projects, sprints, tasks, and bug
              tracking. Here's how to get started.
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

export default Section1
