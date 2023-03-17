import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { BsDot } from 'react-icons/bs'
import { benefits } from 'utils/data'
import Image from 'next/image'

type BenefitsProps = {
  setShowOpendayModal: (val: boolean) => void
  setShowRegistrationModal: (val: boolean) => void
}

const Benefits = ({
  setShowOpendayModal,
  setShowRegistrationModal,
}: BenefitsProps) => {
  return (
    <Box
      sx={{
        backgroundColor: '#FAFAFA',
        padding: '3rem 0rem',
        position: 'relative',
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        fontWeight="600"
        sx={{
          padding: {
            xs: '0rem 1.5rem',
            sm: '0rem 3rem',
            md: '0rem 4.5rem',
            lg: '0rem 6rem',
          },
        }}
      >
        Programme Benefits
      </Typography>

      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={6000}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          const defStyle = {
            marginLeft: 1,
            marginTop: '1rem',
            color: '#9C9C9C',
            cursor: 'pointer',
          }
          const style = isSelected
            ? { ...defStyle, color: '#002E5F' }
            : { ...defStyle }
          return (
            <span
              style={style}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`${label} ${index + 1}`}
            >
              <BsDot size={40} />
            </span>
          )
        }}
      >
        {benefits.map((item, index) => (
          <Box
            sx={{
              padding: {
                xs: '3rem 1.5rem',
                sm: '3rem 3rem',
                md: '3rem 4.5rem',
                lg: '3rem 6rem',
              },
              backgroundColor: '#FFFFFF',
              mt: '4rem',
            }}
            key={index}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'relative',
              }}
              key={item.id}
            >
              <Box
                sx={{
                  width: { xs: '100%', sm: '40%' },
                  textAlign: 'left',
                  my: 'auto',
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ color: '#002E5F', fontWeight: '600' }}
                  gutterBottom
                >
                  {item.title}
                </Typography>
                <Typography variant="subtitle2" fontWeight="600">
                  {item.subtitle}
                </Typography>
                <Typography variant="body2" sx={{ my: '1.5rem' }}>
                  {item.body}
                </Typography>

                <Button
                  variant="text"
                  sx={{ color: '#FF7801', p: '0rem' }}
                  onClick={() => {
                    item?.id === 4
                      ? setShowOpendayModal(true)
                      : setShowRegistrationModal(true)
                  }}
                >
                  Get Started
                  <ArrowRightAltOutlinedIcon sx={{ ml: '0.25rem' }} />
                </Button>
              </Box>

              <Box
                sx={{
                  width: '40%',
                  position: 'relative',
                  display: {
                    xs: 'none',
                    sm: 'flex',
                  },
                }}
              >
                <Image
                  src={item.image}
                  alt=""
                  style={{ width: '100%', height: 'auto' }}
                />
              </Box>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  )
}

export default Benefits
