import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link, NavLink } from "react-router-dom";
import signature from "../../assets/images/signature.png";
import cycle from "../../assets/svgs/cycle.json";
import Lottie from "lottie-react";
import styles from "./navbar.module.scss";
import { navLinks } from "../../utils/navigationLinks";
import { PATH } from "../../utils/pagePath";

function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} className={styles.mobileBox}>
      <Link to={PATH.DEFAULT}>
        <img className={styles.img} src={signature} alt="" />
      </Link>
      <Divider />
      <List>
        {navLinks.map((elem, id) => {
          return (
            <Link className={styles.linkBtn} key={id} to={elem.to}>
              {elem.name}
            </Link>
          );
        })}
        <div className={styles.cycleDiv}>
          <Lottie animationData={cycle} />
        </div>
      </List>
    </Box>
  );

  return (
    <Box className={styles.mainBox}>
      <CssBaseline />
      <AppBar className={styles.mobileNavbar}>
        <Toolbar className={styles.toolbar}>
          <IconButton
            color="inherit"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon className={styles.menuIcon} />
          </IconButton>
          <Link to={PATH.DEFAULT}>
            <img className={styles.img} src={signature} alt="img" />
          </Link>
          <Box sx={{ display: { xs: "none", sm: "flex", gap: "1rem" } }}>
            {navLinks.map((elem, id) => {
              return (
                <>
                  {/* <Link key={id} to={elem.to}>
                  <Button className={styles.navBtn}>{elem.name}</Button>
                </Link> */}
                  <NavLink key={id} to={elem.to}
                    className={({ isActive }) => isActive ? styles.navBtnActive : styles.navBtnPending}>{elem.name}</NavLink>
                </>

              );
            })}
          </Box>
        </Toolbar>
      </AppBar>
      <Box>
        <Drawer open={mobileOpen} onClose={handleDrawerToggle}>
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Navbar;
