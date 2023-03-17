import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

const Overview = () => {
  return (
    <Box>
      <Typography
        variant="body1"
        gutterBottom
        sx={{ color: '#FF7801', fontWeight: '600' }}
      >
        IVYARC Software Engineering Leadership Programme (SELP)
      </Typography>
      <Typography variant="body2" gutterBottom>
        The Software Engineering Leadership Programme (SELP) is an expedited
        pathway that will transform you into a value-driven software engineering
        leader by developing advanced engineering skillsets, collaborative and
        continuous learning practices, and an entrepreneurial mindset.
      </Typography>
      <Typography variant="body2" gutterBottom sx={{ mt: '1rem' }}>
        Over a 12-week period, you will work with a cross-functional remote
        team, consisting of varied individuals, each possessing unique skillsets
        and understanding of software engineering concepts. As a team member,
        you will encounter real-life challenges that will require efficient
        decision-making, priority-setting, and agile execution of strategic
        actions.
      </Typography>
      <Typography variant="body2" gutterBottom sx={{ mt: '1rem' }}>
        Your experience with this programme will teach you how to be both an
        independent star and a great team leader/member.
      </Typography>

      <Typography
        variant="body1"
        gutterBottom
        sx={{ color: '#FF7801', fontWeight: '600', mt: '2rem' }}
      >
        Programme Objectives
      </Typography>
      <List component="ul" sx={{ listStyleType: 'disc', pl: '2rem' }} dense>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Design, develop, and deploy high-quality software applications." />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Understand key engineering principles/frameworks that support efficient software development." />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Managing teams and projects using the Agile Methodology." />
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <ListItemText primary="Optimize your professional image as a software developer." />
        </ListItem>
      </List>
    </Box>
  )
}

export default Overview
