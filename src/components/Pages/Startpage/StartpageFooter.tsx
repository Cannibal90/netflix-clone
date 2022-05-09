import {
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material'
import LanguageSelect from './LanguageSelect'

const footerList = [
  {
    title: 'FAQ',
    link: '#',
  },
  {
    title: 'Help Center',
    link: '#',
  },
  {
    title: 'Account',
    link: '#',
  },
  {
    title: 'Media Center',
    link: '#',
  },
  {
    title: 'Investor Relations',
    link: '#',
  },
  {
    title: 'Jobs',
    link: '#',
  },
  {
    title: 'Reedem Gift Cards',
    link: '#',
  },
  {
    title: 'Buy Gift Cards',
    link: '#',
  },
  {
    title: 'Ways to Watch',
    link: '#',
  },
  {
    title: 'Terms of Use',
    link: '#',
  },
  {
    title: 'Privacy',
    link: '#',
  },
  {
    title: 'Cookie Preferences',
    link: '#',
  },
  {
    title: 'Cooperate Information',
    link: '#',
  },
  {
    title: 'Contact Us',
    link: '#',
  },
  {
    title: 'Speed Test',
    link: '#',
  },
  {
    title: 'Legal Notices',
    link: '#',
  },
  {
    title: 'Only on Netflix',
    link: '#',
  },
]

const StartpageFooter = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography color="text.secondary" variant="h5">
        Questions? Call 00 800 112 4392
      </Typography>
      <List
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          marginY: 2,
        }}
      >
        {footerList.map(item => {
          return (
            <ListItem
              sx={{
                margin: 0,
                padding: 0,
                paddingX: 1,
                paddingBottom: '8px',
                width: {
                  xs: '50%',
                  sm: '33%',
                  md: '25%',
                },
              }}
              key={item.title}
            >
              <ListItemText
                sx={{
                  color: 'text.secondary',
                  fontSize: '13px',
                }}
                primary={item.title}
              />
            </ListItem>
          )
        })}
        ,
      </List>
      <LanguageSelect />
      <Typography
        variant="h6"
        color="text.secondary"
        sx={{
          marginY: 3,
        }}
      >
        Netflix Poland
      </Typography>
    </Container>
  )
}

export default StartpageFooter
