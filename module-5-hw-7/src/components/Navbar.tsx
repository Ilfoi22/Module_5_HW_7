import React, {FC, ReactElement, useContext} from "react";
import {
  Box,
  Link,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Button
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { routes } from "../routes";
import { NavLink } from "react-router-dom";
import {AppStoreContext} from "../App";
import {observer} from "mobx-react-lite";


const Navbar: FC = (): ReactElement => {
  const appStore = useContext(AppStoreContext);

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const activeLinkStyles = {
    color: "white",
    textDecoration: "none",
    borderBottom: "2px solid white",
  };

  const handleLogout = () => {
    appStore.authStore.logout();
  };

  const renderAuthButton = () => {
    if (!!appStore.authStore.token) {
      return (
        <Link onClick={handleLogout} 
            key="registration-route"
            component={NavLink}
            to="/registration"
            variant="button"
            sx={{
              color: "black",
              textDecoration: "none",
              fontSize: "large",
              marginRight: "2rem",
              "&:hover": {
                color: "white",
              }
            }}
          >
            Sign out
          </Link>
      );
    } else {
      return (
        <>
          <Link
            key="registration-route"
            component={NavLink}
            to="/registration"
            variant="button"
            sx={{
              color: "black",
              textDecoration: "none",
              fontSize: "large",
              marginRight: "2rem",
              "&:hover": {
                color: "white",
              },
              "&.active": activeLinkStyles,
            }}
          >
            Registration
          </Link>
          <Link
            key="login-route"
            component={NavLink}
            to="/login"
            variant="button"
            sx={{
              color: "black",
              textDecoration: "none",
              fontSize: "large",
              marginRight: "2rem",
              "&:hover": {
                color: "white",
              },
              "&.active": activeLinkStyles,
            }}
          >
            Login
          </Link>
        </>
      );
    }	
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "6rem",
        padding: "1rem",
        backgroundColor: "secondary.main",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            {!!appStore.authStore.token ? (
                <span
                    style={{ color: 'green' }}>{`Token is: ${appStore.authStore.token}`}</span>
            ) : 'Homework 7'}
            
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {routes.map((page) => (
              !!page.enabled && <Link
                  key={page.key}
                  component={NavLink}
                  to={page.path}
                  color="black"
                  underline="none"
                  variant="button"
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      {page.title}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            {!!appStore.authStore.token ? (
                <span
                    style={{ color: 'green' }}>{`Token is: ${appStore.authStore.token}`}</span>
            ) : 'Homework 7'}
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {routes.map((page) => (
              !!page.enabled && (
                <Link
                  key={page.key}
                  component={NavLink}
                  to={page.path}
                  variant="button"
                  sx={{
                    color: "black",
                    textDecoration: "none",
                    fontSize: "large",
                    marginLeft: "2rem",
                    "&:hover": {
                      color: "white",
                    },
                    "&.active": activeLinkStyles,
                  }}
                >
                  {page.title}
                </Link>
              )
            ))}
          </Box>
          {renderAuthButton()}
        </Toolbar>
      </Container>
    </Box>
  );
};

export default observer(Navbar);