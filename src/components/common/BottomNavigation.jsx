import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import BasketItem from "../basket/BasketToggle";
import { Link, useLocation } from "react-router-dom";
import * as ROUTE from "@/constants/routes";
import Badge from "./Badge";
import { useSelector } from "react-redux";
import { FilterOutlined, ShoppingOutlined } from "@ant-design/icons";
export default function MobileFooter() {
  const [value, setValue] = React.useState("home");
  const store = useSelector((state) => ({
    basketLength: state.basket.length,
    user: state.auth,
    isAuthenticating: state.app.isAuthenticating,
    isLoading: state.app.loading,
  }));
  const handleChange = (event, newValue) => {
    setValue(newValue);
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

  const styles = {
    stickToBottom: {
      width: "100%",
      position: "fixed",
      bottom: 0,
      backgroundColor: "#f3f3f3",
    },
  };

  return (
    <>
      
      <BottomNavigation
        sx={{ width: "100%" }}
        value={value}
        onChange={handleChange}
        style={styles.stickToBottom}
      >
        <BottomNavigationAction
          label="Home"
          value="home"
          icon={<HomeRoundedIcon />}
        />
        <BottomNavigationAction
          label="Category"
          value="category"
          icon={<CategoryRoundedIcon />}
        />
        {/* <BottomNavigationAction label="Cart" value="Cart">
          
        </BottomNavigationAction> */}
        <BottomNavigationAction
          label="Account"
          value="account"
          icon={<AccountCircleRoundedIcon />}/>
      </BottomNavigation>
      
    </>
  );
}
