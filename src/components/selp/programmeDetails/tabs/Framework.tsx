import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { useContext } from 'react'
import { SyllabusContext } from 'contexts/SyllabusContext'

type FrameworkProps = {
  setShowSyllabusModal: (val: boolean) => void
}

const Framework = ({ setShowSyllabusModal }: FrameworkProps) => {
  const syllabusContext = useContext(SyllabusContext)

  return (
    <Box>
      <Typography
        variant="body1"
        gutterBottom
        sx={{ color: '#FF7801', fontWeight: '600' }}
      >
        Programme Framework
      </Typography>
      <Typography variant="body2" gutterBottom>
        The IVYARC Software Engineering Leadership Programme (SELP) adopts a
        team-based approach to support active learning and innovation.
        Participants are teamed up to create solutions to real-life user
        problems.
      </Typography>
      <Typography variant="body2">You will be required to:</Typography>

      <List component="ul" sx={{ listStyleType: 'disc', pl: '2rem' }} dense>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Apply your acquired interpersonal and professional skills in a real-world project and development environment that will make you an asset to any team that you work with." />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Create results from your informed discretion, and effective coordination and communication with like-minded peers." />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Apply optimal time management skills to enable a good work-life balance, proactively managing complex requirements and critical tasks." />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Adopt the Agile Methodology, with each team incorporating its ceremonies and calendars into their planning process." />
        </ListItem>
      </List>

      <Typography
        variant="body1"
        gutterBottom
        sx={{ color: '#FF7801', fontWeight: '600' }}
      >
        Programme Activities
      </Typography>
      <List component="ul" sx={{ listStyleType: 'disc', pl: '2rem' }} dense>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Daily Stand-up (Mon-Fri)" />
          <Typography variant="body2">
            This is a short 15-30-minute meeting between your teammates and your
            team lead where you discuss what you did the previous day, what you
            plan to do that day, and any issues that you are having across the
            board. Great for building accountability, presentation skills, and
            overall teamwork
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Daily Walk-ins (Mon-Fri)" />
          <Typography variant="body2">
            A brief period of interaction between you and your mentor, where you
            get to show off your growth and express your issues in extra detail.
            It is a great chance to always stay on the right track with your
            activities, consistently interacting with an industry pro, guiding
            your journey into the software development world.
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="One-on-One Mentor Sessions (Mon-Fri)" />
          <Typography variant="body2">
            Do you have a burning sensation to discuss a difficult topic but
            without being put in the spotlight? Then our one-on-one mentorship
            sessions are the perfect fit. Your Team Leads will be ready to setup
            one-on-one meetings to guide you through your issues and tasks,
            giving you very personalized advice to ensure your success.
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Weekly Surgery (Wednesday)" />
          <Typography variant="body2">
            This is an interactive meeting between yourself and your fellow
            cohort with industry leaders across various fields. You will be free
            to ask questions and enquire about their field as they detail to you
            experienced advice on how to navigate new and in-demand technologies
            and business practices.
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Weekly Demo (Thursday)" />
          <Typography variant="body2">
            Every week, you will receive a set of tasks that will assess your
            knowledge on core programming challenges or your overall software
            engineering knowledge. The weekly demo serves as a live virtual
            presentation of your solution/answer to your supervisors, as they
            analyze your work and give helpful advice on how to improve both
            your knowledge and skills. A must-attend weekly event!
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Weekly Retrospective (Friday)" />
          <Typography variant="body2">
            This is a final look-back on the week&apos;s activities that will
            involve yourself, your cohort, and management. You will be free to
            discuss how the weekly activities (and even your personal week) have
            been and how you managed to overcome them. It is a great way of
            looking back at any failings and successes to properly plan how you
            can improve your skills. It also serves as an avenue for you to
            provide your feedback on the course to the management team, ensuring
            that we are consistently evolving the course to ensure you are aptly
            trained in software engineering and beyond.
          </Typography>
        </ListItem>
      </List>

      <Typography
        variant="body1"
        gutterBottom
        sx={{ color: '#FF7801', fontWeight: '600', mt: '1rem' }}
      >
        Programme Timeline
      </Typography>
      <Typography variant="body2" gutterBottom>
        A 12-week programme divided into eight key learning modules.
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        sx={{ color: '#FF7801', fontWeight: '600', mt: '1rem' }}
      >
        Extra Rewards
      </Typography>
      <Typography variant="body2">
        *Career placement for top performers.
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        sx={{ color: '#FF7801', fontWeight: '600', mt: '1rem' }}
      >
        Course Price
      </Typography>
      <Typography variant="body2" fontWeight="600" gutterBottom>
        &#8358; 50,000
      </Typography>

      <Button
        variant="contained"
        sx={{
          backgroundColor: '#002E5F',
          padding: '0.5rem 3.5rem',
          mt: '4rem',
        }}
        onClick={() => {
          syllabusContext?.setProg('Software Engineering Leadership Programme')
          setShowSyllabusModal(true)
        }}
      >
        Download Course Syllabus
      </Button>
    </Box>
  )
}

export default Framework
