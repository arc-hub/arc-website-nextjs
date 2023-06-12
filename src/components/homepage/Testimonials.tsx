import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { BsDot } from 'react-icons/bs'
import Image from 'next/image'
import { testimonials } from 'utils/data'

const Testimonials = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#FFFFFF',
        padding: {
          xs: '3rem 1.5rem',
          sm: '3rem 3rem',
          md: '3rem 4.5rem',
          lg: '3rem 6rem',
        },
        display: {
          xs: 'none',
          sm: 'flex',
        },
        flexDirection: 'column',
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{ fontWeight: '700' }}
      >
        Testimonials
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
        {testimonials.map((item, index) => (
          <Box
            sx={{
              width: '100%',
              my: '3rem',
            }}
            key={index}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ width: '50%', ml: '3rem', position: 'relative' }}>
                <Box sx={{ display: 'flex' }}>
                  <FormatQuoteIcon
                    sx={{ transform: 'rotate(180deg)', color: '#CBD5E1' }}
                  />
                </Box>

                <Typography
                  variant="body1"
                  sx={{
                    color: '#252D3E',
                    fontWeight: '500',
                    padding: '0rem 2rem',
                    textAlign: 'left',
                  }}
                >
                  {item.quote}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                  <FormatQuoteIcon sx={{ color: '#CBD5E1' }} />
                </Box>
              </Box>
              <Box
                sx={{ width: '50%', display: 'flex', justifyContent: 'center' }}
              >
                <Box
                  sx={{ width: '250px', height: '200px', position: 'relative' }}
                >
                  <Image
                    alt={item.name}
                    src={item.image}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                    loading="lazy"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  )
}

export default Testimonials
