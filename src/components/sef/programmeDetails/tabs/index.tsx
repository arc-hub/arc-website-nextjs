import { useState, ReactNode, SyntheticEvent } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import { Typography } from '@mui/material'
import Overview from './Overview'
import Framework from './Framework'
import Works from './Works'
import Learning from './Learning'
import Image from 'next/image'

type TabPanelProps = {
  children: ReactNode
  index: number
  value: number
}

const TabPanel = ({ children, value, index, ...other }: TabPanelProps) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            padding: '4rem 2.5rem',
            backgroundColor: '#FFFFFF',
            borderRadius: '0.5rem',
          }}
        >
          {children}
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

type BasicTabsProps = {
  setShowSyllabusModal: (val: boolean) => void
  setShowRegistrationModal: (val: boolean) => void
}

export default function BasicTabs({
  setShowSyllabusModal,
  setShowRegistrationModal,
}: BasicTabsProps) {
  const [value, setValue] = useState<number>(0)

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%', marginTop: '5rem' }}>
      <Box
        sx={{
          padding: {
            xs: '0rem 0.75rem',
            sm: '0rem 2rem',
          },
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          TabIndicatorProps={{
            sx: { display: 'none' },
          }}
          sx={{
            '& .MuiTabs-flexContainer': {
              justifyContent: 'space-between',
            },
            '& button': {
              borderRadius: '0.5rem 0.5rem 0rem 0rem',
              backgroundColor: '#E6EAEF',
              width: '22.5%',
            },
            '& button:active': {
              backgroundColor: '#FFFFFF',
            },
            '& button.Mui-selected': {
              backgroundColor: '#FFFFFF',
              color: '#000000',
            },
          }}
        >
          <Tab
            label={
              <Box
                sx={{
                  display: {
                    xs: 'none',
                    sm: 'block',
                  },
                }}
              >
                <Typography variant="body2">Overview</Typography>
              </Box>
            }
            {...a11yProps(0)}
            icon={
              <Box
                sx={{
                  width: '16px',
                  position: 'relative',
                  display: {
                    xs: 'flex',
                    sm: 'none',
                  },
                }}
              >
                <Tooltip title="Overview">
                  <Image
                    src={require('../../../../assets/search.png')}
                    alt=""
                    style={{ width: '100%', height: 'auto' }}
                  />
                </Tooltip>
              </Box>
            }
          />
          <Tab
            label={
              <Box
                sx={{
                  display: {
                    xs: 'none',
                    sm: 'block',
                  },
                }}
              >
                <Typography variant="body2">Programme Framework</Typography>
              </Box>
            }
            {...a11yProps(1)}
            icon={
              <Box
                sx={{
                  width: '16px',
                  position: 'relative',
                  display: {
                    xs: 'flex',
                    sm: 'none',
                  },
                }}
              >
                <Tooltip title="Programme Framework">
                  <Image
                    src={require('../../../../assets/decentralized.png')}
                    alt=""
                    style={{ width: '100%', height: 'auto' }}
                  />
                </Tooltip>
              </Box>
            }
          />
          <Tab
            label={
              <Box
                sx={{
                  display: {
                    xs: 'none',
                    sm: 'block',
                  },
                }}
              >
                <Typography variant="body2">How it works</Typography>
              </Box>
            }
            {...a11yProps(2)}
            icon={
              <Box
                sx={{
                  width: '16px',
                  position: 'relative',
                  display: {
                    xs: 'flex',
                    sm: 'none',
                  },
                }}
              >
                <Tooltip title="How it works">
                  <Image
                    src={require('../../../../assets/questions.png')}
                    alt=""
                    style={{ width: '100%', height: 'auto' }}
                  />
                </Tooltip>
              </Box>
            }
          />
          <Tab
            label={
              <Box
                sx={{
                  display: {
                    xs: 'none',
                    sm: 'block',
                  },
                }}
              >
                <Typography variant="body2">Learning Journey</Typography>
              </Box>
            }
            {...a11yProps(3)}
            icon={
              <Box
                sx={{
                  width: '16px',
                  position: 'relative',
                  display: {
                    xs: 'flex',
                    sm: 'none',
                  },
                }}
              >
                <Tooltip title="Learning Journey">
                  <Image
                    src={require('../../../../assets/destination.png')}
                    alt=""
                    style={{ width: '100%', height: 'auto' }}
                  />
                </Tooltip>
              </Box>
            }
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Overview />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Framework setShowSyllabusModal={setShowSyllabusModal} />
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Works setShowRegistrationModal={setShowRegistrationModal} />
      </TabPanel>

      <TabPanel value={value} index={3}>
        <Learning />
      </TabPanel>
    </Box>
  )
}
