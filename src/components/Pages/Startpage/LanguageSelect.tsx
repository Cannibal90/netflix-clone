import { ArrowDropDown } from '@mui/icons-material'
import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material'

import { useState } from 'react'

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

const LanguageSelect = () => {
  const [language, setLanguage] = useState('English')

  const languageChangeHandler = (event: SelectChangeEvent) => {
    setLanguage(event.target.value)
  }

  return (
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
          maxWidth: '100px',
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
  )
}

export default LanguageSelect
