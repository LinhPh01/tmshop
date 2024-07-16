import React, { useState } from "react";
import { BottomNavigation } from "zmp-ui";
import { useNavigate } from "react-router-dom";
import { HiHome } from "react-icons/hi2";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaUser } from "react-icons/fa6";

// thanh bottom
const BottomNav = (props) => {
  const [activeTab, setActiveTab] = useState("Trang Chủ");
  const navigate = useNavigate();
  return (
    <BottomNavigation
      fixed
      activeKey={activeTab}
      onChange={(key) => setActiveTab(key)}
      className="z-50"
    >
      <BottomNavigation.Item
        key="home"
        label="Trang Chủ"
        className={
          activeTab === "home" ? "bottom-nav-item-active" : "bottom-nav-item"
        }
        icon={
          <HiHome
            className={
              activeTab === "home"
                ? "bottom-nav-icon-active"
                : "bottom-nav-icon"
            }
          />
        }
        onClick={() => navigate("/")}
      />

      <BottomNavigation.Item
        label="Tìm Kiếm"
        className={
          activeTab === "search" ? "bottom-nav-item-active" : "bottom-nav-item"
        }
        key="search"
        icon={
          <AiOutlineSearch
            className={
              activeTab === "search"
                ? "bottom-nav-icon-active"
                : "bottom-nav-icon"
            }
          />
        }
        onClick={() => navigate("/search")}
      />
      <BottomNavigation.Item
        label="Mua Sắm"
        className={
          activeTab === "cart" ? "bottom-nav-item-active" : "bottom-nav-item"
        }
        key="cart"
        icon={
          <HiOutlineShoppingCart
            className={
              activeTab === "cart"
                ? "bottom-nav-icon-active"
                : "bottom-nav-icon"
            }
          />
        }
        onClick={() => navigate("/cartindex")}
      />
      <BottomNavigation.Item
        key="me"
        label="Cá nhân"
        className={
          activeTab === "me" ? "bottom-nav-item-active" : "bottom-nav-item"
        }
        icon={
          <FaUser
            className={
              activeTab === "me" ? "bottom-nav-icon-active" : "bottom-nav-icon"
            }
          />
        }
        onClick={() => navigate("/uindex")}
      />
    </BottomNavigation>
  );
};

export default BottomNav;
