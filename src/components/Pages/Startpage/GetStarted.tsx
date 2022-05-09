import { Box, Button, TextField, Typography } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

const GetStarted = () => {
  return (
    <>
      <Typography
        color="text.primary"
        paragraph
        align="center"
        sx={{
          fontSize: {
            xs: '1.8rem',
            md: '2.3rem',
            lg: '1.8rem',
          },
          marginTop: 4,
        }}
      >
        Ready to watch? Enter Your email to create or restart your membership.
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
          justifyContent: 'center',
          alignItems: 'center',
          marginX: 2,
          marginBottom: 8,
        }}
      >
        <TextField
          sx={{
            width: '70%',
            fontSize: '1.6rem',
            bgcolor: 'text.primary',
            '& .Mui-focused': {
              color: 'text.secondary',
            },
          }}
          label="Email address"
          variant="filled"
          type="email"
        />
        <Button
          variant="contained"
          color="primary"
          sx={{
            marginTop: {
              xs: 4,
              md: 0,
            },
            padding: {
              xs: '0.2rem 1rem',
            },
            fontSize: {
              xs: '1.6rem',
              md: '2.6rem',
            },
            '& .MuiButton-endIcon > *:nth-of-type(1)': {
              fontSize: {
                xs: '3rem',
                md: '4rem',
              },
            },
            borderRadius: 0,
          }}
          endIcon={<ChevronRightIcon fontSize="large" />}
        >
          Get Started
        </Button>
      </Box>
    </>
  )
}

export default GetStarted
