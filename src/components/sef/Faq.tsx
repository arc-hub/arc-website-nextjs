import Box from '@mui/material/Box'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { MutableRefObject } from 'react'
import Link from 'next/link'

type FaqProps = {
  faqRef: MutableRefObject<HTMLDivElement | null>
}

const Faq = ({ faqRef }: FaqProps) => {
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
      ref={faqRef}
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
              What is the pacing of the course?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              The course is built to work at a reasonable pace, allowing you to
              juggle extract activities with the course&apos;s demands.
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
              What is the course&apos;s duration?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              The course lasts for a minimum of 12 weeks. Extensions might occur
              depending on national holidays or unforeseen circumstances.
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
              Is this course time-intensive?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" gutterBottom>
              To be frank, yes, it is. This holds true for those busy with
              external activities like work and other schooling activities.
            </Typography>
            <Typography variant="body2">
              But rest assured that you can still get through it regardless. As
              mentioned, we are pacing the course with all of these
              possibilities in mind, so even if all you can whip out is 1 hour a
              day of dedicated learning for the course, you should be fine.
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
              Must I know how to code before I apply?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              Nope. The course is built to aid absolute beginners. In other
              words, even if you have never written a line of code in the past,
              the course will take you from zero to a hundred.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ mt: '1rem' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5a-content"
            id="panel5a-header"
          >
            <Typography variant="subtitle2" fontWeight="700">
              Can someone transition from another career?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              Yes, the course is built with absolute beginners in mind. It is
              built to give you enough time to study and expose you to the ins
              and outs of the Information Technology (Computer Science)
              industry.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ mt: '1rem' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6a-content"
            id="panel6a-header"
          >
            <Typography variant="subtitle2" fontWeight="700">
              What mindset will I need?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              Committed, Serious, Team Player. We are a place of community and
              family-building. Although we understand that people have different
              learning styles, the standard ARC graduate has these three
              features well integrated into their being.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ mt: '1rem' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel7a-content"
            id="panel7a-header"
          >
            <Typography variant="subtitle2" fontWeight="700">
              What technology will I need?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              Good (And consistent) internet connectivity, a good computer that
              can run Microsoft Visual Studio Code (read here -
              <a
                href="https://code.visualstudio.com/docs/supporting/requirements"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://code.visualstudio.com/docs/supporting/requirements
              </a>
              ), a good microphone for easy remote communication, an
              internet-connected mobile phone to help you with your scheduling
              and meeting attendance.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ mt: '1rem' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel8a-content"
            id="panel8a-header"
          >
            <Typography variant="subtitle2" fontWeight="700">
              Can&apos;t I learn Programming by myself?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              Oh yes, you can. But you also can learn under a mentor, with a
              supporting team and network, with a curated set of resources built
              for you. We offer the latter. Choose whichever works for you
              better.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ mt: '1rem' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel9a-content"
            id="panel9a-header"
          >
            <Typography variant="subtitle2" fontWeight="700">
              How determined do I need to be to become a Software Engineer?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" gutterBottom>
              Quite a bit, actually. Software Engineering requires a very
              dedicated mind to properly own and make it theirs. It is not for
              the faint of heart but is very much doable (as many others have
              done it before you and will do so after you).
            </Typography>
            <Typography variant="body2">
              Just jump in, give it your all, and we will do all we can to fill
              in the gaps and lift you up.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ mt: '1rem' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel10a-content"
            id="panel10a-header"
          >
            <Typography variant="subtitle2" fontWeight="700">
              Is attendance at the daily and weekly events optional?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" gutterBottom>
              No, they are not optional. The events have been created with the
              intent of providing value for you and the rest of your colleagues.
              So, it is expected that you show up and contribute.
            </Typography>
            <Typography variant="body2">
              They are actually quite enjoyable and interactive, so very fun to
              attend regardless.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ mt: '1rem' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel11a-content"
            id="panel11a-header"
          >
            <Typography variant="subtitle2" fontWeight="700">
              How do I submit my weekly tasks?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              You will have a Google Drive folder shared with you that will host
              folders that will accept your weekly task submissions.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ mt: '1rem' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel12a-content"
            id="panel12a-header"
          >
            <Typography variant="subtitle2" fontWeight="700">
              Will I be receiving Weekly Feedback Forms?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              Yes, you will. As we provide value, we also value growth. Not just
              growth in our learners but in ourselves as well. So, we are open
              to hearing your daily/weekly feedback on how we are doing and what
              can be done to help you learn better.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ mt: '1rem' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel13a-content"
            id="panel13a-header"
          >
            <Typography variant="subtitle2" fontWeight="700">
              Can I quit and continue later?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              Well, this is tricky. Even though you can join a different cohort
              if you drop out of one (for whatever reason), you will have to
              start fresh with a new cohort as the curriculum and teaching style
              might evolve, making things hard to flow into again.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  )
}

export default Faq
