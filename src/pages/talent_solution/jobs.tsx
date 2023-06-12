import { Box, Button, Checkbox, Divider, Typography } from '@mui/material'
import { Navbar } from 'components/ui'
import useSWR from 'swr'
import { fetcher } from 'api/fetcher'
import { useRouter } from 'next/router'
import { IsJob } from 'utils/interfaces'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import { jobLevel, jobType } from 'utils/data'
import { useState, useEffect, ChangeEvent } from 'react'
import Job from 'components/talentSolution/jobs/Job'

const Jobs = () => {
  const router = useRouter()
  const { data, error, isLoading } = useSWR<IsJob[]>('jobs', fetcher)

  const [selectedRole, setSelectedRole] = useState<string[]>([])
  const [selectedLevel, setSelectedLevel] = useState<string[]>([])
  const [filteredData, setFilteredData] = useState<IsJob[] | undefined>([])

  const handleToggle = (val: string, previousState: string[]) => {
    const currentIndex = previousState.indexOf(val)
    let newCheckedArray = [...previousState]
    if (currentIndex === -1) {
      if (val === '') {
        newCheckedArray = []
      } else {
        const filtered = newCheckedArray.filter((item) => item !== '')
        newCheckedArray = [...filtered]
      }
      newCheckedArray.push(val)
    } else {
      newCheckedArray.splice(currentIndex, 1)
    }
    return newCheckedArray.sort((a: any, b: any) => a - b)
  }

  const onRoleChange = (value: string) => {
    const newRoleState = handleToggle(value, selectedRole)
    setSelectedRole(newRoleState)
  }

  const onLevelChange = (value: string) => {
    const newLevelState = handleToggle(value, selectedLevel)
    setSelectedLevel(newLevelState)
  }

  const onChangeHandler = (
    value: string,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.name === 'role') {
      onRoleChange(value)
    }

    if (event.target.name === 'level') {
      onLevelChange(value)
    }
  }

  const filterDataByRole = (data: IsJob[] | undefined) => {
    const order = new Map()
    order.set('Frontend Developer', [])
    order.set('Backend Developer', [])
    order.set('Fullstack Developer', [])
    order.set('Android Developer', [])
    order.set('UI/UX Designer', [])
    order.set('Product Manager', [])
    order.set('Growth Manager', [])
    // Entire Loop is O(n)
    data?.map((job) => {
      if (job?.job_title.includes('Frontend Developer')) {
        return order.get('Frontend Developer').push(job)
      }
      if (job?.job_title.includes('Backend Developer')) {
        return order.get('Backend Developer').push(job)
      }
      if (
        job?.job_title.includes('Fullstack Developer') ||
        job?.job_title.includes('Full Stack Developer')
      ) {
        return order.get('Fullstack Developer').push(job)
      }
      if (job?.job_title.includes('Android Developer')) {
        return order.get('Android Developer').push(job)
      }
      if (job?.job_title.includes('UI/UX Designer')) {
        return order.get('UI/UX Designer').push(job)
      }
      if (job?.job_title.includes('Product Manager')) {
        return order.get('Product Manager').push(job)
      }
      if (job?.job_title.includes('Growth Manager')) {
        return order.get('Growth Manager').push(job)
      }
    })

    if (selectedRole.length < 1) {
      return data
    } else {
      const dataToDisplay: IsJob[] = []

      selectedRole.forEach((item) => {
        const selectedJobs = order.get(item)

        dataToDisplay.push(selectedJobs)
      })

      return dataToDisplay.flat()
    }
  }

  const filterDataByLevel = (data: IsJob[] | undefined) => {
    const order = new Map()
    order.set('Junior', [])
    order.set('Intermediate', [])
    order.set('Senior', [])
    order.set('Lead', [])
    // Entire Loop is O(n)
    data?.map((job) => {
      if (job?.job_level.includes('Junior')) {
        return order.get('Junior').push(job)
      }
      if (job?.job_level.includes('Intermediate')) {
        return order.get('Intermediate').push(job)
      }
      if (job?.job_level.includes('Senior')) {
        return order.get('Senior').push(job)
      }
      if (job?.job_level.includes('Lead')) {
        return order.get('Lead').push(job)
      }
    })

    if (selectedLevel.length < 1) {
      return data
    } else {
      const dataToDisplay: IsJob[] = []

      selectedLevel.forEach((item) => {
        const selectedJobs = order.get(item)

        dataToDisplay.push(selectedJobs)
      })

      return dataToDisplay.flat()
    }
  }

  const filterData = () => {
    const filteredDataByRole = filterDataByRole(data)
    const filteredDataByLevel = filterDataByLevel(filteredDataByRole)
    setFilteredData(filteredDataByLevel)
  }

  useEffect(() => {
    filterData()
  }, [data, selectedRole, selectedLevel])

  console.log({ data, selectedLevel, selectedRole, filteredData })

  return (
    <Box sx={{ margin: '0px', padding: '0px', cursor: 'default' }}>
      <Box sx={{ backgroundColor: '#FFFFFF' }}>
        <Navbar page="talent" textColor="#1A1F2B" />

        <Box
          sx={{
            padding: {
              xs: '1.5rem 1.5rem',
              sm: '1.5rem 3rem',
              md: '1.5rem 4.5rem',
              lg: '1.5rem 6rem',
            },
          }}
        >
          <Button
            variant="text"
            sx={{ color: '#FF7801', textTransform: 'none' }}
            onClick={() => router.back()}
          >
            <FaLongArrowAltLeft style={{ marginRight: '0.5rem' }} /> Go Back
          </Button>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(7, minmax(0, 1fr))',
              md: 'repeat(8, minmax(0, 1fr))',
            },
            gridGap: '1.5rem',
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
              gridColumn: 'span 2',
              height: 'max-content',
              display: { xs: 'none', sm: 'flex' },
              borderRadius: '8px',
              boxShadow: '0px 4px 5px 1px rgba(193, 193, 193, 0.35)',
              padding: '1.5rem',

              flexDirection: 'column',
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ color: '#3636360', fontWeight: '700' }}
            >
              Filter Jobs
            </Typography>
            <Divider
              sx={{ color: '#EDEDED', width: '100%', margin: '1rem 0rem' }}
            />

            <Box sx={{ margin: '1rem 0rem' }}>
              <Typography
                variant="subtitle2"
                sx={{ color: '#3636360', fontWeight: '700' }}
                gutterBottom
              >
                JOB TYPE
              </Typography>
              <Box>
                {jobType.map((item, index) => (
                  <Box
                    component="span"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0.25rem 0rem',
                    }}
                    key={index}
                  >
                    <Checkbox
                      size="small"
                      sx={{
                        color: '#292D32',
                        '&.Mui-checked': {
                          color: '#292D32',
                        },
                        padding: '0rem',
                        mr: '0.5rem',
                      }}
                      name="role"
                      id={item.label}
                      value={item.value}
                      checked={selectedRole?.includes(item.value)}
                      onChange={(e) => onChangeHandler(item.value, e)}
                    />
                    <Typography variant="body2" sx={{ color: '#252D3E' }}>
                      {item.value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            <Box sx={{ margin: '1rem 0rem' }}>
              <Typography
                variant="subtitle2"
                sx={{ color: '#3636360', fontWeight: '700' }}
                gutterBottom
              >
                JOB LEVEL
              </Typography>
              <Box>
                {jobLevel.map((item, index) => (
                  <Box
                    component="span"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0.25rem 0rem',
                    }}
                    key={index}
                  >
                    <Checkbox
                      size="small"
                      sx={{
                        color: '#292D32',
                        '&.Mui-checked': {
                          color: '#292D32',
                        },
                        padding: '0rem',
                        mr: '0.5rem',
                      }}
                      name="level"
                      id={item.label}
                      value={item.value}
                      checked={selectedLevel?.includes(item.value)}
                      onChange={(e) => onChangeHandler(item.value, e)}
                    />
                    <Typography variant="body2" sx={{ color: '#252D3E' }}>
                      {item.value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              mx: 'auto',
              gridColumn: { xs: 'span 1', sm: 'span 5', md: 'span 6' },
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, minmax(0, 1fr))',
                lg: 'repeat(3, minmax(0, 1fr))',
              },
              gridGap: '1.5rem',
              width: '100%',
            }}
          >
            {filteredData?.map((job, index) => (
              <Job job={job} key={index} page="all-jobs" />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Jobs
