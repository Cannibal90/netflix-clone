import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import SectionBorder from '../../UI/SectionBorder/SectionBorder'
import GetStarted from './GetStarted'

type AccorditionType = {
  title: string
  description: string
}

const Faq = () => {
  const accorditions: AccorditionType[] = [
    {
      title: 'What is Netflix?',
      description: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

        You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!`,
    },
    {
      title: 'How mutch Netflix cost?',
      description: `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from 29 zł to 60 zł a month. No extra costs, no contracts`,
    },
    {
      title: 'Where can I watch Netflix?',
      description: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

      You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
    },
    {
      title: 'How do I cancel',
      description: `Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`,
    },
    {
      title: 'What can I watch on Netflix?',
      description: `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`,
    },
    {
      title: 'Is Netflix good for kids?',
      description: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.

      Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`,
    },
  ]
  return (
    <SectionBorder>
      <Box
        component="section"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignContent: 'center',
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        <Typography
          align="center"
          color="text.primary"
          sx={{
            fontSize: {
              xs: '2.6rem',
              md: '4rem',
              lg: '5rem',
            },
            paddingY: 2,
          }}
        >
          Frequently Asked Questions
        </Typography>
        {accorditions.map(accordition => {
          return (
            <Accordion
              disableGutters
              sx={{
                bgcolor: '#303030',
                color: 'text.primary',
                marginY: {
                  xs: 0.5,
                  sm: 1,
                },
              }}
            >
              <AccordionSummary
                expandIcon={
                  <AddIcon
                    sx={{
                      color: 'text.primary',
                    }}
                  />
                }
              >
                <Typography variant="h4">{accordition.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="h5" paragraph>
                  {accordition.description}
                </Typography>
              </AccordionDetails>
            </Accordion>
          )
        })}

        <GetStarted />
      </Box>
    </SectionBorder>
  )
}

export default Faq