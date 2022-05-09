import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import SectionBorder from '../../UI/SectionBorder/SectionBorder'

type SectionImgType = {
  title: string
  description: string
  image: string
}

const ImageSection: React.FC<{
  section: SectionImgType
  imgFirst: boolean
}> = props => {
  const { section, imgFirst } = props

  return (
    <SectionBorder>
      <Box
        component="section"
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
          padding: '2rem 4rem',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: {
              xs: '100%',
              md: '52%',
            },
            order: {
              xs: 1,
              md: imgFirst ? 2 : 1,
            },
          }}
        >
          <Typography
            align="center"
            sx={{
              fontWeight: 'bold',
              fontSize: {
                xs: '2.6rem',
                sm: '4rem',
                md: '5rem',
              },
            }}
          >
            {section.title}
          </Typography>
          <Typography
            align="center"
            sx={{
              fontSize: {
                xs: '1.8rem',
                sm: '2rem',
                md: '2.6rem',
              },
            }}
          >
            {section.description}
          </Typography>
        </Box>
        <Box
          component="img"
          src={section.image}
          sx={{
            width: {
              xs: '100%',
              md: '48%',
            },
            order: {
              xs: 2,
              md: imgFirst ? 1 : 2,
            },
          }}
        />
      </Box>
    </SectionBorder>
  )
}

export default ImageSection
