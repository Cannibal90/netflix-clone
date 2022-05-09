import { Box } from '@mui/system'
import React from 'react'

type Props = {
  children: JSX.Element
}

const SectionBorder: React.FC<Props> = props => {
  const { children } = props
  return (
    <Box
      sx={{
        marginBottom: 8,
        width: '100%',
        padding: 0,
        borderBottom: '8px solid #757575',
      }}
    >
      {children}
    </Box>
  )
}

export default SectionBorder
