import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import s from './Header.module.css'

const Header = () => (
  <header className={s.header}>
    <Stack direction='row' alignItems={'center'}>
      <IconButton>
        <MenuIcon className={s.menuIcon} />
      </IconButton>
      <Typography paragraph margin={0}>Меню</Typography>
    </Stack>
  </header>
)

export default Header
