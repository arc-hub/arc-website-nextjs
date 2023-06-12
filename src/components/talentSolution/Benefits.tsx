import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { MutableRefObject } from 'react'
import Image from 'next/image'

type BenefitsProp = {
  testimonialsRef: MutableRefObject<HTMLDivElement | null>
}

const Benefits = ({ testimonialsRef }: BenefitsProp) => {
  return (
    <Box
      sx={{
        padding: {
          xs: '3rem 1.5rem',
          sm: '3rem 3rem',
          md: '3rem 4.5rem',
          lg: '3rem 6rem',
        },
        backgroundColor: '#FAFAFA',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: '#002E5F',
          fontWeight: '500',
        }}
        gutterBottom
      >
        Benefits of Talent Solutions
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', mt: '2rem' }}>
        <Box
          sx={{
            width: {
              xs: '100%',
              sm: '50%',
            },
            padding: {
              xs: '0rem 0rem 0rem 0rem',
              sm: '0rem 2.5rem 0rem 0rem',
            },
          }}
        >
          <List component="ul" sx={{ pl: { xs: '0rem', sm: '1rem' } }} dense>
            <ListItem sx={{ alignItems: 'start' }}>
              <ListItemIcon sx={{ paddingTop: '0.5rem' }}>
                <Image
                  src={require('../../assets/Combined-Shape.png')}
                  alt=""
                />
              </ListItemIcon>
              <ListItemText
                sx={{ ml: '-1rem' }}
                primary="The flexibility to access our pool of trusted experts and infuse your team with fresh ideas & inspiration without the usual rigor of matching and selection opens up a flood of opportunities to a diverse range of ideas, experience, and growth of your workforce."
              />
            </ListItem>
            <ListItem sx={{ alignItems: 'start' }}>
              <ListItemIcon sx={{ paddingTop: '0.5rem' }}>
                <Image
                  src={require('../../assets/Combined-Shape.png')}
                  alt=""
                />
              </ListItemIcon>
              <ListItemText
                sx={{ ml: '-1rem' }}
                primary="Our talents variate your workforce and introduce new perspectives and skills from around the world to solve your new and pending business problems."
              />
            </ListItem>
            <ListItem sx={{ alignItems: 'start' }}>
              <ListItemIcon sx={{ paddingTop: '0.5rem' }}>
                <Image
                  src={require('../../assets/Combined-Shape.png')}
                  alt=""
                />
              </ListItemIcon>
              <ListItemText
                sx={{ ml: '-1rem' }}
                primary="Our talents are cheaper than your usual hire for the same (or even better) level of skill being brought to wherever you are."
              />
            </ListItem>
            <ListItem sx={{ alignItems: 'start' }}>
              <ListItemIcon sx={{ paddingTop: '0.5rem' }}>
                <Image
                  src={require('../../assets/Combined-Shape.png')}
                  alt=""
                />
              </ListItemIcon>
              <ListItemText
                sx={{ ml: '-1rem' }}
                primary="Our talents are agile experts with experience leading and setting up agile teams from zero to high performing."
              />
            </ListItem>
          </List>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#002E5F',
              padding: '0.5rem 3.5rem',
              textTransform: 'none',
              mt: '1rem',
            }}
            onClick={() =>
              testimonialsRef.current?.scrollIntoView({
                behavior: 'smooth',
              })
            }
          >
            Hear from our Clients
          </Button>
        </Box>
        <Box
          sx={{
            display: {
              xs: 'none',
              sm: 'flex',
            },
            position: 'relative',
            width: '50%',
          }}
        >
          <Image
            src={require('../../assets/image 35.png')}
            alt=""
            style={{ width: '100%', height: 'auto' }}
            loading="lazy"
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Benefits
