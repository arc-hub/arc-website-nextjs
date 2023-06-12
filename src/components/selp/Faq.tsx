import Box from '@mui/material/Box'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

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
              How Long Will it Take?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              Just a total of 12 weeks to transform you into a Full Stack
              Developer.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ mt: '1rem' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="subtitle2" fontWeight="700">
              What Will I Get From The Course?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              Full Stack Development Skills, a Strong Leadership Mindset, and an
              IVYARC Certificate proving that you made it through better than
              ever.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ mt: '1rem' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography variant="subtitle2" fontWeight="700">
              What Will I Need For The Course?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              A working computer with a clear microphone and a stable internet
              connection.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ mt: '1rem' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography variant="subtitle2" fontWeight="700">
              Is The Course Completely Online?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              Yes, we will not ever require you to physically be anywhere to
              enjoy what this course has to offer.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ mt: '1rem' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography variant="subtitle2" fontWeight="700">
              How Can I Apply?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              Simply click the &apos;Apply Now&apos; button, tell us a bit about
              yourself, pay your registration fee, and you&apos;re good to go.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ mt: '1rem' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography variant="subtitle2" fontWeight="700">
              Can I Make Instalment Payments?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              We are flexible with our payment plans, you can freely make use of
              our Instalment Payment Plan - Pay a half of the programme fee at
              the start of the course and the rest by week 6 of the programme.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  )
}

export default Faq
