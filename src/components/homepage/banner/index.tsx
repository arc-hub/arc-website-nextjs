import { Carousel } from 'react-responsive-carousel'
import { BsDot } from 'react-icons/bs'
import Workforce from './Workforce'
import Box from '@mui/material/Box'
import Selp from './Selp'
import Sef from './Sef'

const Banner = () => {
  return (
    <Box>
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        //showIndicators={false}
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
        <Workforce />
        <Sef />
        <Selp />
      </Carousel>
    </Box>
  )
}

export default Banner
