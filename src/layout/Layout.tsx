import { createTheme, ThemeProvider } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import { ReactNode, useEffect, useState, CSSProperties } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { Toaster } from 'react-hot-toast'
import { FiChevronUp } from 'react-icons/fi'
import SyllabusContextProvider from 'contexts/SyllabusContext'

type LayoutProps = {
  children: ReactNode
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    ts1: CSSProperties
    ts2: CSSProperties
    ts3: CSSProperties
    talent1: CSSProperties
    talent2: CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    ts1?: CSSProperties
    ts2?: CSSProperties
    ts3?: CSSProperties
    talent1?: CSSProperties
    talent2?: CSSProperties
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    ts1: true
    ts2: true
    ts3: true
    talent1: true
    talent2: true
  }
}

const Layout = ({ children }: LayoutProps) => {
  const theme = createTheme({
    typography: {
      fontFamily: ['Manrope', 'Work Sans', 'sans-serif'].join(','),
      ts1: {
        fontWeight: '700',
        fontSize: '64px',
        lineHeight: '83.2px',
      },
      ts2: {
        fontWeight: '700',
        fontSize: '40px',
        lineHeight: '52px',
      },
      ts3: {
        fontWeight: '700',
        fontSize: '36px',
        lineHeight: '46.8px',
      },
      talent1: {
        fontWeight: '600',
        fontSize: '2.125rem',
        lineHeight: '1.235',
      },
      talent2: {
        fontWeight: '600',
        fontSize: '1.5rem',
        lineHeight: '1.334',
      },
    },
    components: {
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            ts1: 'h1',
            ts2: 'h2',
            ts3: 'h3',
            talent1: 'h3',
            talent2: 'h4',
          },
        },
      },
    },
  })

  const [isActive, setIsActive] = useState<boolean>(false)

  useEffect(() => {
    const showButton = (): void => {
      if (window.scrollY > 300) {
        setIsActive(true)
      } else {
        setIsActive(false)
      }
    }

    window.addEventListener('scroll', showButton)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <SyllabusContextProvider>
        <main style={{ position: 'relative', minHeight: '100vh' }}>
          <Toaster />
          <CssBaseline />
          {children}
          {isActive ? (
            <IconButton
              sx={{
                position: 'fixed',
                bottom: '1rem',
                right: '1rem',
                zIndex: 500,
                bgcolor: '#F0F4FD',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
              }}
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: 'smooth',
                })
              }
            >
              <FiChevronUp color="black" />
            </IconButton>
          ) : null}
        </main>
      </SyllabusContextProvider>
    </ThemeProvider>
  )
}

export default Layout
