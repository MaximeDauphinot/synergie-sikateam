import { useState } from "react";
import {
  List,
  ListItem,
  Grid,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";

import "../../../styles/Navigation.scss";

const navigationListItem = [
  { name: "Features", url: "#features" },
  { name: "About", url: "#about" },
  { name: "Contact", url: "#contact" },
];

export const Navigation = ({ isMobile }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container className={`navigation ${isMobile && `mobile`}`}>
      <Grid item xs={6} className={`title-container ${isMobile && `mobile`}`}>
        <a href="#top">Synergie Sika Team</a>
      </Grid>
      <Grid
        item
        xs={6}
        className={`list-item-container ${isMobile && `mobile`}`}
      >
        <Grid item md={6}>
          {isMobile ? (
            <>
              <IconButton size="large" onClick={handleClick}>
                <MenuIcon className="svg-icons" />
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                sx={{ zIndex: 4 }}
              >
                {navigationListItem.map((item, i) => (
                  <MenuItem key={i} onClick={handleClose}>
                    <a href={item.url}>{item.name}</a>
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <List>
              {navigationListItem.map((item, i) => (
                <ListItem key={i} className="list-item">
                  <a href={item.url}>{item.name}</a>
                </ListItem>
              ))}
            </List>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};
