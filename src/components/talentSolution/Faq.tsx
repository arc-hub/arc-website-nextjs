import Box from '@mui/material/Box'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

const Faq = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#E3EAEC',
        padding: {
          xs: '3rem 1.5rem',
          sm: '3rem 3rem',
          md: '3rem 4.5rem',
          lg: '3rem 6rem',
        },
      }}
      id="faq"
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: {
            xs: '100%',
            sm: '45%',
          },
          margin: '1rem auto',
        }}
      >
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{ textAlign: 'center', fontWeight: '700' }}
        >
          WHAT DO YOU WANT TO KNOW
        </Typography>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            textAlign: 'center',
            fontWeight: '700',
            margin: '1.5rem 0rem',
          }}
        >
          Some of the most frequently asked questions
        </Typography>
      </Box>

      <Box
        sx={{
          width: {
            xs: '100%',
            sm: '66.67%',
          },
          mx: 'auto',
          mt: '2rem',
        }}
      >
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="subtitle2" fontWeight="700">
              How long will it take to receive a call after filling the form for
              find a talent?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">Within 1 week.</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ mt: '1rem' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="subtitle2" fontWeight="700">
              What are the steps for hiring with ARC?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List component="ul" dense>
              <ListItem>
                <ListItemText primary="Recruitment & Selection" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Matching Skills, Screening and Interview" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Onboarding" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Review and Succession Planning" />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ mt: '1rem' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography variant="subtitle2" fontWeight="700">
              Can I get talent for an Onsite position?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              Yes, of course. We offer remote, hybrid and onsite talents.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ mt: '1rem' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            <Typography variant="subtitle2" fontWeight="700">
              Can I get a contract talent for 3 months?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              Yes, of course. We offer both contract and full recruitment
              service.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  )
}

export default Faq
