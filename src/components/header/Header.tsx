import { Box } from '@mui/material'
import ContactBtn from './ContactBtn'
import Logo from './Logo'

const Header = () => {
  return (
    <Box sx={{display:'flex', justifyContent:"space-between", py:1.5, px:1, boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}}>
      <Logo/>
      <ContactBtn/>
    </Box>
  )
}

export default Header