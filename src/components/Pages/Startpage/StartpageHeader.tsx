import { ArrowDropDown } from '@mui/icons-material'
import {
  Button,
  Container,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import netflixLogo from '../../../assets/img/logo.svg'

const menuItemStyle = {
  bgcolor: '#757575',
  fontSize: {
    xs: '1.4rem',
    sm: '1.6rem',
  },
  padding: {
    xs: '0.125rem 0.25rem',
    sm: '0.6rem 1rem',
  },
  '&.Mui-selected': {
    bgcolor: '#757575',
  },
  '&.Mui-selected:hover': {
    bgcolor: '#00000073',
  },
  '&:hover': {
    bgcolor: '#00000073',
  },
}

const StartPageHeader = () => {
  const [language, setLanguage] = useState('English')

  const languageChangeHandler = (event: SelectChangeEvent) => {
    setLanguage(event.target.value)
  }

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
        <FormControl>
          <Select
            value={language}
            onChange={languageChangeHandler}
            autoWidth={false}
            IconComponent={ArrowDropDown}
            sx={{
              color: 'white',
              border: '1px solid white',
              marginRight: 2,
              fontSize: {
                xs: '1.4rem',
                sm: '1.6rem',
              },
              '& .MuiSelect-select': {
                padding: '0.6rem 1rem',
              },
              '& .MuiSelect-icon': {
                color: 'white',
              },
            }}
          >
            <MenuItem value="English" sx={menuItemStyle}>
              English
            </MenuItem>
            <MenuItem value="Polish" sx={menuItemStyle}>
              Polish
            </MenuItem>
          </Select>
        </FormControl>
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
