import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { SearchBar, CurrencySelection, MobileMenu } from "@/components/common";
import BasketToggle from "../basket/BasketToggle";
import { Link, useLocation } from "react-router-dom";
import * as ROUTE from "@/constants/routes";
import Badge from "./Badge";
import { useSelector } from "react-redux";
import { FilterOutlined, ShoppingOutlined } from "@ant-design/icons";
const drawerWidth = 300;
const navItems = ["Home", "Shop", "Featured", "Recommended"];

function MobileHeader(props) {
  const { window } = props;
  const [open, setOpen] = React.useState(false);
  const [openBasket, setBasket] = React.useState(false);
  const [zvalue, setZvalue] = React.useState(1100);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const { pathname } = useLocation();
  const basketDisabledpathnames = [
    ROUTE.CHECKOUT_STEP_1,
    ROUTE.CHECKOUT_STEP_2,
    ROUTE.CHECKOUT_STEP_3,
    ROUTE.SIGNIN,
    ROUTE.SIGNUP,
    ROUTE.FORGOT_PASSWORD,
  ];
  const store = useSelector((state) => ({
    basketLength: state.basket.length,
    user: state.auth,
    isAuthenticating: state.app.isAuthenticating,
    isLoading: state.app.loading,
  }));

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Shoppers
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <CurrencySelection />
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  // if(openBasket){
  //   return (
  //     <BasketToggle>
  //           {({ onClickToggle }) => (
  //             <button
  //               className="button-link navigation-menu-link basket-toggle"
  //               disabled={basketDisabledpathnames.includes(pathname)}
  //               onClick={onClickToggle, setBasket(!openBasket)}
  //               type="button"
  //             >
  //               <Badge count={store.basketLength}>
  //                 <ShoppingOutlined
  //                   style={{ fontSize: "2.4rem", color: "#000" }}
  //                 />
  //               </Badge>
  //             </button>
  //           )}
  //         </BasketToggle>
  //   )
  // }
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" style={{ background: "#b6b6b6" }}>
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: 5,
            justifyContent: "space-between",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerOpen}
            sm={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ my: 2 }}
            style={{ color: "#fff", marginRight: 10 }}
          >
            Shoppers
          </Typography>
          <Box sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: 5,
            justifyContent: "space-between",
          }}>
          <BasketToggle>
            {({ onClickToggle }) => (
              <button
                className="button-link navigation-menu-link basket-toggle"
                disabled={basketDisabledpathnames.includes(pathname)}
                onClick={onClickToggle}
                type="button"
              >
                <Badge count={store.basketLength}>
                  <ShoppingOutlined
                    style={{ fontSize: "2.4rem", color: "#000" }}
                  />
                </Badge>
              </button>
            )}
          </BasketToggle>
          <Button variant="text"><Link
            to={ROUTE.SIGNIN}
          >
            Sign In
          </Link></Button>
          </Box>
          
        </Toolbar>
        <Toolbar
          sx={{
            justifyContent: "center",
          }}
        >
          <SearchBar />
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="persistent"
          open={open}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sm={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <IconButton onClick={handleDrawerClose}>
            <CloseRoundedIcon />
          </IconButton>
          {drawer}
        </Drawer>
      </Box>
    </Box>
    // <MobileMenu/>
  );
}

export default MobileHeader;
