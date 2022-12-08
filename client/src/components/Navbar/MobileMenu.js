import React, { useState } from "react";
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Link } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LoggedInMenu from "./LoggedInMenu";
import LoggedOutMenu from "./LoggedOutMenu";
import AvatarComponent from "./AvatarComponent";

const MobileMenu = ({ user, logout }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <AvatarComponent user={user} logout={logout}></AvatarComponent>

      <Drawer anchor="right" open={openDrawer} onClose={() => setOpenDrawer(false)} >
        <List>
          <ListItemButton component={Link} to="/competitions">
            <ListItemIcon>
              <ListItemText>Competitions</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>About</ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton sx={{ color: "primary", marginLeft: "auto" }} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon color="black" />
      </IconButton>
    </React.Fragment>
  );
};

export default MobileMenu;