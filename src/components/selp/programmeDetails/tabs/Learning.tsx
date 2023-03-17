import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const Learning = () => {
  return (
    <Box>
      <Box
        sx={{
          paddingLeft: {
            xs: '3rem',
            sm: '7.5rem',
            md: '5rem',
            lg: '7rem',
            xl: '8rem',
          },
        }}
      >
        <Typography gutterBottom variant="h6" fontWeight="600" mb="1rem">
          Main Modules
        </Typography>
      </Box>
      {/**week 1 */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: '1.5rem',
        }}
      >
        <Box sx={{ width: '10%', textAlign: 'center' }}>
          <Typography
            variant="body2"
            sx={{ color: '#FF7801', fontWeight: '600' }}
          >
            WEEK
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: '#FF7801', fontWeight: '600' }}
          >
            1
          </Typography>
        </Box>
        <Box
          sx={{
            width: {
              xs: '80%',
              md: '90%',
            },
          }}
        >
          <Typography variant="body1" fontWeight="600" gutterBottom>
            Introduction to Software Engineering Fundamentals
          </Typography>
          <Typography variant="body2">
            Getting started with software engineering, you will be introduced to
            the fundamentals of the field that will act as your stable
            foundation to build you ever-expanding tech skillset.
          </Typography>
        </Box>
      </Box>

      {/**week 2 */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: '1.5rem',
        }}
      >
        <Box sx={{ width: '10%', textAlign: 'center' }}>
          <Typography
            variant="body2"
            sx={{ color: '#FF7801', fontWeight: '600' }}
          >
            WEEK
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: '#FF7801', fontWeight: '600' }}
          >
            2-6
          </Typography>
        </Box>
        <Box
          sx={{
            width: {
              xs: '80%',
              md: '90%',
            },
          }}
        >
          <Typography variant="body1" fontWeight="600" gutterBottom>
            React.js
          </Typography>
          <Typography variant="body2">
            Build and deploy your websites using React.js - one of the leading
            JavaScript libraries in the global market. You will also be taught
            useful frameworks within React that will speed up your development
            whilst providing stronger security to your website.
          </Typography>
        </Box>
      </Box>

      {/**week 3 */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: '2.5rem',
        }}
      >
        <Box sx={{ width: { xs: '12%', sm: '10%' }, textAlign: 'center' }}>
          <Typography
            variant="body2"
            sx={{ color: '#FF7801', fontWeight: '600' }}
          >
            WEEK
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: '#FF7801', fontWeight: '600' }}
          >
            7-12
          </Typography>
        </Box>
        <Box
          sx={{
            width: {
              xs: '80%',
              md: '90%',
            },
          }}
        >
          <Typography variant="body1" fontWeight="600" gutterBottom>
            Database and Server Management using SQL and Node.js
          </Typography>
          <Typography variant="body2">
            You will learn how to manage your data-communication servers using
            Node.js and learn how to interact with relational databases using
            Structure Query Language (SQL).
          </Typography>
        </Box>
      </Box>

      {/**Supplementary */}
      <Box
        sx={{
          width: {
            xs: '80%',
            md: '90%',
          },
          paddingLeft: {
            xs: '3rem',
            sm: '7.5rem',
            md: '5rem',
            lg: '7rem',
            xl: '8rem',
          },
        }}
      >
        <Typography gutterBottom variant="h6" fontWeight="600" mb="1rem">
          Supplementary
        </Typography>
        <Box mb="1.5rem">
          <Typography variant="body1" fontWeight="600" gutterBottom>
            1. Introduction to HTML, CSS, and JavaScript
          </Typography>
          <Typography variant="body2">
            Study the core technologies of website creation - HTML, CSS, and
            JavaScript. You will learn how to utilize all three to create
            dynamic, interactive websites.
          </Typography>
        </Box>
        <Box mb="1.5rem">
          <Typography variant="body1" fontWeight="600" gutterBottom>
            2. Continuous Integration and Deployment (CI/CD) using GitHub
          </Typography>
          <Typography variant="body2">
            Master the CI/CD pipeline, improving your team&apos;s collaboration,
            and streamlining project delivery
          </Typography>
        </Box>
        <Box mb="1.5rem">
          <Typography variant="body1" fontWeight="600" gutterBottom>
            3. Career Services and Interview Preparation
          </Typography>
          <Typography variant="body2">
            In the final week, you will be given personalized guidance on
            optimizing your LinkedIn page, and a personal CV review to boost
            your employability to key talent seekers, regardless of professional
            industry.
          </Typography>
        </Box>
        <Box mb="1.5rem">
          <Typography variant="body1" fontWeight="600" gutterBottom>
            4. React - MaterialUI
          </Typography>
          <Typography variant="body2">
            Learn how to take your website designing to the next level by
            incorporating easily reusable React components to streamline your
            development activities.
          </Typography>
        </Box>
        <Box mb="1.5rem">
          <Typography variant="body1" fontWeight="600" gutterBottom>
            5. Data Structure and Algorithms
          </Typography>
          <Typography variant="body2">
            Understand how data is stored in the computer system, supporting
            efficient management of system resources, and smoothening the
            problem-solving process
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Learning
