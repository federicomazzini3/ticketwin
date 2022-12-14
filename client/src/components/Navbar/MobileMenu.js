import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
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
          <ListItemButton component={Link} to="/about">
            <ListItemIcon>
              <ListItemText>About</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          {(user?.result.name === 'admin') && (
            <>
              <Divider></Divider>
              <ListItemButton component={Link} to="/addcompetition">
                <ListItemIcon>
                  <ListItemText>New competition</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </>
          )}
        </List>
      </Drawer>
      <IconButton sx={{ color: "primary", marginLeft: "auto" }} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon color="black" />
      </IconButton>
    </React.Fragment>
  );
};

export default MobileMenu;