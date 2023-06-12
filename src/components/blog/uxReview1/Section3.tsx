import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import { FiArrowUpRight } from 'react-icons/fi'

export const Section3 = () => {
  return (
    <Box
      sx={{
        padding: {
          xs: '1rem 1.5rem',
          sm: '1rem 3rem',
          md: '1rem 6rem',
        },
      }}
    >
      <Box borderTop="2px solid #EAECF0" padding="4rem 0rem">
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
                src={require('../../../assets/bimage7.png')}
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
                src={require('../../../assets/bimage8.png')}
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
                Linear helps streamline software projects, sprints, tasks, and
                bug tracking. Here&apos;s how to get started.
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

        <Box borderBottom="2px solid #EAECF0">
          <Box
            display="flex"
            justifyContent="space-between"
            sx={{
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              margin: {
                xs: '3rem 0px',
                sm: '4rem 0px',
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
                  src={require('../../../assets/bimage9.png')}
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
                  src={require('../../../assets/bimage10.png')}
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
        <Box display="flex" justifyContent="right">
          <Button
            variant="contained"
            sx={{
              textTransform: 'lowercase',
              backgroundColor: '#FF7801',
              marginTop: '1rem',
            }}
          >
            View all posts
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Section3
