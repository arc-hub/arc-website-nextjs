import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { BsDot } from 'react-icons/bs'
import { sefTestimonials } from 'utils/data'
import Image from 'next/image'

const Testimonials = () => {
  const altColors = ['#1A6D14', '#002E5F', '#E11C00', '#0D0D0D']

  return (
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
      {sefTestimonials.map((item, index) => (
        <Box
          sx={{
            borderRadius: '2rem',
            padding: '4rem 6rem',
            width: '100%',
            backgroundColor: `${altColors[index % altColors.length]}`,
            my: '3rem',
          }}
          key={item.id}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Image
              alt={item.name}
              src={item.image}
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />
            <Box sx={{ width: '90%', ml: '3rem', position: 'relative' }}>
              <Box sx={{ display: 'flex' }}>
                <FormatQuoteIcon
                  sx={{ transform: 'rotate(180deg)', color: '#FF7801' }}
                />
              </Box>

              <Typography
                variant="body1"
                sx={{
                  color: '#FFFFFF',
                  fontWeight: '500',
                  padding: '0rem 2rem',
                  textAlign: 'left',
                }}
              >
                {item.quote}
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                <FormatQuoteIcon sx={{ color: '#FF7801' }} />
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Carousel>
  )
}

export default Testimonials
