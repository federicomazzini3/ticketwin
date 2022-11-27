import React from 'react'
import { AppBar, Typography, Toolbar, Link, Button} from '@mui/material'

const Navbar = () => {
  const user = null;
  return (
      <AppBar position="static" color="default" elevation={0} sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }} component={Link} href="/">
            TicketWin
          </Typography>
          <nav>
            <Link variant="button" color="text.primary" href="/competitions" sx={{ my: 1, mx: 1.5 }}>Competitions</Link>
            <Link variant="button" color="text.primary" href="/about" sx={{ my: 1, mx: 1.5 }}>About</Link>
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