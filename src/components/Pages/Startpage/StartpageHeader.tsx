import { Button, Container } from '@mui/material'
import { Box } from '@mui/system'
import netflixLogo from '../../../assets/img/logo.svg'
import LanguageSelect from './LanguageSelect'

const StartPageHeader = () => {
  return (
    <Container
      className="App"
      maxWidth="xl"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        paddingY: {
          xs: 3,
          md: 5,
        },
        paddinX: 2,
      }}
    >
      <Box
        component="img"
        src={netflixLogo}
        alt="Netflix Logo"
        sx={{
          height: {
            xs: '24px',
            sm: '32px',
            md: '36px',
            lg: '45px',
          },
          width: 'auto',
        }}
      />
      <Box>
        <LanguageSelect />
        <Button
          variant="contained"
          color="primary"
          sx={{
            fontSize: {
              xs: '1.4rem',
              sm: '1.6rem',
            },
          }}
        >
          Sign in
        </Button>
      </Box>
    </Container>
  )
}

export default StartPageHeader
