import React from 'react'
import { AppBar, Typography, Toolbar, Link, Button, Switch} from '@mui/material'

const Navbar = ({mode, setMode}) => {
  const user = null;
  return (
      <AppBar position="static" color="default" elevation={0} sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }} component={Link} href="/">
            TicketWin
          </Typography>
          <nav>

            <Switch onChange={e => setMode(mode === "light" ? "dark" : "light")}  sx={{ my: 1, mx: 1.5 }}/>
            <Link variant="button" color="text.primary" href="/competitions" sx={{ my: 1, mx: 1.5 }}>Competitions</Link>
          </nav>
          {user ? (
            <Button component={Link} href="/user" variant="outlined" sx={{ my: 1, mx: 1.5 }}>{user.result.name}</Button>
          ) : (
            <Button component={Link} href="/auth" variant="outlined" sx={{ my: 1, mx: 1.5 }}>Login</Button>
          )
          }
        </Toolbar>
      </AppBar>
  )
}

export default Navbar;