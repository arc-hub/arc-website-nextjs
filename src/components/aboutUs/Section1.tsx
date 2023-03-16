import { Box, Typography } from '@mui/material'
import Image from 'next/image'

export const Section1 = () => {
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
        borderBottom="2px solid #000000"
        sx={{
          display: {
            lg: 'flex',
          },
          justifyContent: {
            lg: 'space-between',
          },
          marginTop: {
            md: '2rem',
            lg: '5rem',
            xl: '5rem',
          },
          paddingBottom: {
            xs: '2rem',
            sm: '4rem',
            md: '4rem',
            lg: '7rem',
            xl: '7rem',
          },
        }}
      >
        <Box
          sx={{
            width: {
              md: '100%',
              lg: '50%',
              xl: '50%',
            },
          }}
        >
          <Typography
            variant="h3"
            fontFamily="Inter"
            sx={{
              width: {
                md: '100%',
                lg: '75%',
                xl: '65%',
              },
              textAlign: {
                xs: 'center',
                lg: 'left',
              },
              typography: {
                xs: 'h5',
                sm: 'h4',
                md: 'h4',
                lg: 'h4',
                xl: 'h4',
              },
              fontWeight: {
                xs: '600',
                sm: '600',
                md: '600',
                lg: '600',
                xl: '600',
              },
            }}
          >
            Together we plan to transform Africa.
          </Typography>
          <Box
            marginTop="2.5rem"
            sx={{
              display: {
                xs: 'none',
                lg: 'flex',
              },
              width: {
                md: '100%',
                lg: '100%',
                xl: '100%',
              },
            }}
          >
            <Image
              src={require('../../assets/Frame 44037.png')}
              alt=""
              style={{ width: '100%', height: 'auto' }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            width: {
              md: '100%',
              lg: '47%',
              xl: '45%',
            },
          }}
        >
          <Typography
            color="#002E5F"
            fontFamily="Inter"
            sx={{
              typography: {
                xs: 'h6',
                sm: 'h5',
                md: 'h5',
                lg: 'h5',
                xl: 'h5',
              },
              fontWeight: {
                xs: '600',
                sm: '600',
                md: '700',
                lg: '700',
                xl: '700',
              },
              textAlign: {
                xs: 'center',
                lg: 'left',
              },
              marginTop: {
                xs: '2rem',
                md: '2rem',
                lg: '0rem',
              },
              marginBottom: {
                xs: '1rem',
                sm: '1rem',
                md: '0.4rem',
                lg: '1rem',
              },
            }}
          >
            Our Mission
          </Typography>
          <Typography
            color="#252D3E"
            fontFamily="Manrope"
            sx={{
              // width: {
              //   md: "100%",
              //   lg: "90%",
              //   xl: "100%",
              // },
              typography: {
                xs: 'body2',
                sm: 'body2',
                md: 'body1',
                lg: 'subtitle2',
                xl: 'subtitle1',
              },
              fontWeight: {
                xs: '500',
                sm: '500',
                md: '500',
                lg: '500',
                xl: '500',
              },
              textAlign: {
                xs: 'center',
                lg: 'left',
              },
            }}
          >
            To cement Africa as a leading contributor to the development of
            computer-aided technology solutions by imparting unto its people the
            core ICT knowledge needed to spearhead global digital innovation.
          </Typography>

          <Typography
            color="#002E5F"
            fontFamily="Inter"
            sx={{
              typography: {
                xs: 'h6',
                sm: 'h5',
                md: 'h5',
                lg: 'h5',
                xl: 'h5',
              },
              fontWeight: {
                xs: '600',
                sm: '600',
                md: '700',
                lg: '700',
                xl: '700',
              },
              textAlign: {
                xs: 'center',
                lg: 'left',
              },
              marginTop: {
                xs: '1rem',
                md: '2rem',
                lg: '2rem',
              },
              marginBottom: {
                xs: '1rem',
                sm: '1rem',
                md: '0.4rem',
                lg: '1rem',
              },
            }}
          >
            Our Plan
          </Typography>
          <Typography
            color="#252D3E"
            fontFamily="Manrope"
            sx={{
              // width: {
              //   md: "100%",
              //   lg: "93%",
              //   xl: "100%"
              // },
              typography: {
                xs: 'body2',
                sm: 'body2',
                md: 'body1',
                lg: 'subtitle2',
                xl: 'subtitle1',
              },
              fontWeight: {
                xs: '500',
                sm: '500',
                md: '500',
                lg: '500',
                xl: '500',
              },

              textAlign: {
                xs: 'center',
                lg: 'left',
              },
            }}
          >
            To transform Africa&apos;s technology landscape; one developer and
            one solution at a time; so that our people and their efforts are
            widely recognised as valued contributors.
          </Typography>

          <Typography
            color="#002E5F"
            fontFamily="Inter"
            sx={{
              typography: {
                xs: 'h6',
                sm: 'h5',
                md: 'h5',
                lg: 'h5',
                xl: 'h5',
              },
              fontWeight: {
                xs: '600',
                sm: '600',
                md: '700',
                lg: '700',
                xl: '700',
              },
              textAlign: {
                xs: 'center',
                lg: 'left',
              },
              marginTop: {
                xs: '1rem',
                md: '2rem',
                lg: '2rem',
              },
              marginBottom: {
                xs: '1rem',
                sm: '1rem',
                md: '0.4rem',
                lg: '1rem',
              },
            }}
          >
            Our Vision
          </Typography>
          <Typography
            color="#252D3E"
            fontFamily="Manrope"
            sx={{
              // width: {
              //   md: "100%",
              //   lg: "95%",
              //   xl: "100%"
              // },
              typography: {
                xs: 'body2',
                sm: 'body2',
                md: 'body1',
                lg: 'subtitle2',
                xl: 'subtitle1',
              },
              fontWeight: {
                xs: '500',
                sm: '500',
                md: '500',
                lg: '500',
                xl: '500',
              },
              textAlign: {
                xs: 'center',
                lg: 'left',
              },
            }}
          >
            An inclusive future; where people benefit freely from arising
            opportunities, without limitations of access or capability.
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography
          textAlign="center"
          fontFamily="Inter"
          sx={{
            typography: {
              xs: 'h5',
              sm: 'h4',
              md: 'h4',
              lg: 'h4',
              xl: 'h4',
            },
            fontWeight: {
              xs: '600',
              sm: '600',
              md: '600',
              lg: '600',
              xl: '600',
            },
            marginBottom: {
              xs: '2rem',
              sm: '0.5rem',
              md: '0.5rem',
              lg: '3rem',
              xl: '2rem',
            },
            marginTop: {
              xs: '2rem',
              sm: '2rem',
              md: '4rem',
              lg: '3rem',
              xl: '5rem',
            },
          }}
        >
          Our Numbers
        </Typography>
        <Box
          display="flex"
          sx={{
            flexDirection: {
              xs: 'row',
              sm: 'row',
            },
            justifyContent: {
              xs: 'space-between',
            },
            marginBottom: {
              md: '3rem',
              lg: '3rem',
              xl: '3rem',
            },
            padding: {
              sm: '1rem 4rem',
              md: '1rem 3rem 1rem 3rem',
              lg: '1rem 8rem',
            },
          }}
        >
          <Box>
            <Typography
              fontFamily="Manrope"
              sx={{
                width: {
                  xs: '100%',
                  sm: '90%',
                  md: '98%',
                  lg: '98%',
                },
                typography: {
                  xs: 'body2',
                  sm: 'h6',
                  md: 'h5',
                  lg: 'h4',
                  xl: 'h4',
                },
                fontWeight: {
                  xs: '500',
                  sm: '500',
                  md: '500',
                  lg: '500',
                  xl: '500',
                },
                textAlign: {
                  xs: 'center',
                },
              }}
            >
              200+
            </Typography>
            <Typography
              textAlign="center"
              fontFamily="Inter"
              sx={{
                typography: {
                  xs: 'body1',
                  sm: 'h5',
                  md: 'h5',
                  lg: 'h4',
                  xl: 'h4',
                },
                fontWeight: {
                  xs: '600',
                  sm: '600',
                  md: '600',
                  lg: '600',
                  xl: '600',
                },
                marginTop: {
                  xs: '0.5rem',
                  md: '1rem',
                },
              }}
            >
              Projects
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                width: {
                  xs: '100%',
                  sm: '90%',
                  md: '98%',
                  lg: '98%',
                },
                typography: {
                  xs: 'body2',
                  sm: 'h6',
                  md: 'h5',
                  lg: 'h4',
                  xl: 'h4',
                },
                fontWeight: {
                  xs: '500',
                  sm: '500',
                  md: '500',
                  lg: '500',
                  xl: '500',
                },
                textAlign: {
                  xs: 'center',
                },
              }}
            >
              150+
            </Typography>
            <Typography
              textAlign="center"
              fontFamily="Inter"
              sx={{
                typography: {
                  xs: 'body1',
                  sm: 'h5',
                  md: 'h5',
                  lg: 'h4',
                  xl: 'h4',
                },
                fontWeight: {
                  xs: '600',
                  sm: '600',
                  md: '600',
                  lg: '600',
                  xl: '600',
                },
                marginTop: {
                  xs: '0.5rem',
                  md: '1rem',
                },
              }}
            >
              Professionals
            </Typography>
          </Box>
          <Box>
            <Typography
              fontFamily="Manrope"
              sx={{
                width: {
                  xs: '100%',
                  sm: '90%',
                  md: '98%',
                  lg: '98%',
                },
                typography: {
                  xs: 'body2',
                  sm: 'h6',
                  md: 'h5',
                  lg: 'h4',
                  xl: 'h4',
                },
                fontWeight: {
                  xs: '500',
                  sm: '500',
                  md: '500',
                  lg: '500',
                  xl: '500',
                },
                textAlign: {
                  xs: 'center',
                },
              }}
            >
              24hrs
            </Typography>
            <Typography
              textAlign="center"
              fontFamily="Inter"
              sx={{
                typography: {
                  xs: 'body1',
                  sm: 'h5',
                  md: 'h5',
                  lg: 'h4',
                  xl: 'h4',
                },
                fontWeight: {
                  xs: '600',
                  sm: '600',
                  md: '600',
                  lg: '600',
                  xl: '600',
                },
                marginTop: {
                  xs: '0.5rem',
                  md: '1rem',
                },
              }}
            >
              Support
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Section1
