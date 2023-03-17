import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

const Experience = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#FAFAFA',
        padding: {
          xs: '3rem 1.5rem',
          sm: '3rem 3rem',
          md: '3rem 4.5rem',
          lg: '3rem 6rem',
        },
      }}
    >
      <Box
        sx={{
          backgroundColor: '#9C4901',
          padding: {
            xs: '3rem 1.5rem',
            sm: '3rem 3rem',
            md: '3rem 4.5rem',
            lg: '3rem 6rem',
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: '#E6EAEF',
            width: {
              xs: '100%',
              md: '50%',
            },
            fontWeight: '600',
            textAlign: {
              xs: 'center',
              sm: 'left',
            },
          }}
        >
          Experience on SELP Programme
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#E6EAEF',
            width: {
              xs: '100%',
              md: '55%',
            },
            mt: '1.5rem',
          }}
        >
          SELP is a software engineering leadership programme that fine-tunes
          the skills set of our participants. For 12 weeks the participants are
          mentored on various principles of software engineering, following
          agile process. They have great opportunity to build amazing solutions
          which they add to their portfolio.
        </Typography>
        <List
          component="ul"
          sx={{
            listStyleType: 'disc',
            pl: '2rem',
            color: '#E6EAEF',
            width: {
              xs: '90%',
              md: '55%',
            },
          }}
          dense
        >
          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText primary="By the end of the training, top performers from the programme are given career placement opportunities to begin their developer journey." />
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText primary="Lifetime access to selp community." />
          </ListItem>
        </List>

        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            mt: '2rem',
            mx: 'auto',
            width: {
              xs: '100%',
              sm: '560px',
            },
            height: {
              xs: '180px',
              sm: '315px',
            },
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dREBuT7sCFk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </Box>
      </Box>
    </Box>
  )
}

export default Experience
