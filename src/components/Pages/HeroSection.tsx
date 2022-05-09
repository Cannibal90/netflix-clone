import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import heroImg from '../../assets/img/hero-img.jpg'
import SectionBorder from '../UI/SectionBorder/SectionBorder'
import GetStarted from './Startpage/GetStarted'
import StartPageHeader from './Startpage/StartpageHeader'

const HeroSection = () => {
  return (
    <SectionBorder>
      <Box
        sx={{
          backgroundImage: `linear-gradient(
            45deg,
            rgba(16, 16, 17, 0.75),
            rgba(31, 28, 26, 0.75)
        ), url(${heroImg})`,
          backgroundSize: 'cover',
          paddingBottom: '3rem',
          color: 'white',
        }}
      >
        <StartPageHeader />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            maxWidth: '900px',
            paddingX: 1,
            paddingY: 4,
            margin: '0 auto',
          }}
        >
          <Typography
            align="center"
            variant="h3"
            fontWeight="bold"
            sx={{
              fontSize: {
                xs: '2.8rem',
                sm: '5rem',
                lg: '6.4rem',
              },
            }}
          >
            Unlimited movies, TV shows, and more
          </Typography>
          <Typography
            align="center"
            variant="h5"
            sx={{
              fontSize: {
                xs: '1.8rem',
                sm: '2.6rem',
              },
            }}
          >
            Watch anywhere. Cancel anytime.
          </Typography>
          <GetStarted />
        </Box>
      </Box>
    </SectionBorder>
  )
}

export default HeroSection
