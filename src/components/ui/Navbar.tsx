import { useState, MouseEvent } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Collapse from '@mui/material/Collapse'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import Link from 'next/link'
import { useRouter } from 'next/router'

type NavbarProps = {
  page: string
  textColor: string
}

const Navbar = ({ page, textColor }: NavbarProps) => {
  const router = useRouter()
  const [showSubMenu, setShowSubMenu] = useState<boolean>(false)
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null)
  const [anchorEl2, setAnchorEl2] = useState<HTMLDivElement | null>(null)
  const open = Boolean(anchorEl)
  const open2 = Boolean(anchorEl2)
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const div: HTMLDivElement = event.currentTarget
    setAnchorEl(div)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleCourseClick = (event: MouseEvent<HTMLDivElement>) => {
    const div: HTMLDivElement = event.currentTarget
    setAnchorEl2(div)
  }
  const handleCourseClose = () => {
    setAnchorEl2(null)
  }

  return (
    <AppBar
      sx={{
        backgroundColor: 'inherit',
        boxShadow: '0px 1px 2px 0px rgb(0 0 0 / 0.05)',
        padding: {
          xs: '0rem 1.5rem',
          sm: '0rem 3rem',
          md: '0rem 4.5rem',
          lg: '0rem 6rem',
        },
      }}
      position="static"
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        disableGutters
      >
        <Link href="/">
          <Typography
            variant="h6"
            fontWeight="800"
            sx={{
              color: textColor,
              cursor: 'pointer',
            }}
          >
            IVYARC
          </Typography>
        </Link>

        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Link href="/blog">
            <Typography
              variant="subtitle1"
              fontWeight="500"
              sx={{
                color: page === 'blog' ? '#FF7801' : textColor,
                marginRight: '1.25rem',
                cursor: 'pointer',
                '&:hover': {
                  transform: page === 'blog' ? 'scale(1)' : 'scale(0.875)',
                  color: '#FF7801',
                },
              }}
            >
              Blog
            </Typography>
          </Link>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              color: page === 'course' ? '#FF7801' : textColor,
              '&:hover': {
                transform: page === 'course' ? 'scale(1)' : 'scale(0.875)',
                color: '#FF7801',
              },
            }}
            onClick={handleCourseClick}
          >
            <Typography
              variant="subtitle1"
              fontWeight="500"
              sx={{
                marginRight: '0.5rem',
              }}
            >
              Courses
            </Typography>
            <FiChevronDown
              style={{
                marginRight: '1.25rem',
              }}
            />
          </Box>

          <Menu
            id="course-menu"
            anchorEl={anchorEl2}
            open={open2}
            onClose={handleCourseClose}
            disableScrollLock={true}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            sx={{ display: { xs: 'none', md: 'flex' } }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem
              onClick={() => {
                handleCourseClose()
                router.push('/courses/sef')
              }}
            >
              SEF
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleCourseClose()
                router.push('/courses/selp')
              }}
            >
              SELP
            </MenuItem>
            <MenuItem onClick={handleCourseClose}>Product Management</MenuItem>
            <MenuItem onClick={handleCourseClose}>UI/UX</MenuItem>
          </Menu>

          <Link href="/services">
            <Typography
              variant="subtitle1"
              fontWeight="500"
              sx={{
                color: page === 'services' ? '#FF7801' : textColor,
                marginRight: '1.25rem',
                cursor: 'pointer',
                '&:hover': {
                  transform: page === 'services' ? 'scale(1)' : 'scale(0.875)',
                  color: '#FF7801',
                },
              }}
            >
              Services
            </Typography>
          </Link>

          <Link href="/talent_solution">
            <Typography
              variant="subtitle1"
              fontWeight="500"
              sx={{
                marginRight: '1.25rem',
                color: page === 'talent' ? '#FF7801' : textColor,
                cursor: 'pointer',
                '&:hover': {
                  transform: page === 'talent' ? 'scale(1)' : 'scale(0.875)',
                  color: '#FF7801',
                },
              }}
            >
              Talent Solution
            </Typography>
          </Link>

          <Link href="/about_us">
            <Typography
              variant="subtitle1"
              fontWeight="500"
              sx={{
                marginRight: '1.25rem',
                color: page === 'about' ? '#FF7801' : textColor,
                cursor: 'pointer',
                '&:hover': {
                  transform: page === 'about' ? 'scale(1)' : 'scale(0.875)',
                  color: '#FF7801',
                },
              }}
            >
              About Us
            </Typography>
          </Link>

          <Link href="/contact_us">
            <Typography
              variant="subtitle1"
              fontWeight="500"
              sx={{
                color: page === 'contact' ? '#FF7801' : textColor,
                cursor: 'pointer',
                '&:hover': {
                  transform: page === 'contact' ? 'scale(1)' : 'scale(0.875)',
                  color: '#FF7801',
                },
              }}
            >
              Contact Us
            </Typography>
          </Link>
        </Box>

        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <Box onClick={handleClick}>
            {open ? (
              <FiX size={24} color={textColor} style={{ cursor: 'pointer' }} />
            ) : (
              <FiMenu
                size={24}
                color={textColor}
                style={{ cursor: 'pointer' }}
              />
            )}
          </Box>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            sx={{ display: { md: 'none' }, width: '300px' }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem
              onClick={() => {
                handleClose()
                router.push('/blog')
              }}
            >
              Blog
            </MenuItem>
            <MenuItem
              sx={{ display: 'flex' }}
              onClick={() => {
                setShowSubMenu(!showSubMenu)
              }}
            >
              Courses
              {showSubMenu ? <ExpandLess /> : <ExpandMore />}
            </MenuItem>
            <Collapse in={showSubMenu} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItem
                  sx={{
                    pl: '2rem',
                    py: '0.25rem',
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    },
                  }}
                  onClick={() => {
                    router.push('/courses/sef')
                  }}
                >
                  <ListItemText primary="SEF" />
                </ListItem>
                <ListItem
                  sx={{
                    pl: '2rem',
                    py: '0.25rem',
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    },
                  }}
                  onClick={() => {
                    router.push('/courses/selp')
                  }}
                >
                  <ListItemText primary="SELP" />
                </ListItem>
                <ListItem
                  sx={{
                    pl: '2rem',
                    py: '0.25rem',
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    },
                  }}
                >
                  <ListItemText primary="Product Management" />
                </ListItem>
                <ListItem
                  sx={{
                    pl: '2rem',
                    py: '0.25rem',
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    },
                  }}
                >
                  <ListItemText primary="UI/UX" />
                </ListItem>
              </List>
            </Collapse>
            <MenuItem
              onClick={() => {
                handleClose()
                router.push('/services')
              }}
            >
              Services
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose()
                router.push('/talent_solution')
              }}
            >
              Talent Solution
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose()
                router.push('/about_us')
              }}
            >
              About Us
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose()
                router.push('contact_us')
              }}
            >
              Contact Us
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
