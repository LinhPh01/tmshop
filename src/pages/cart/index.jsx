import React from "react";
import { Page } from "zmp-ui";

import HeaderCart from "./headercart";
import Cartitems from "./cartitems";
import Address from "./address";

const CartPage = () => {
  return (
    <Page className="relative flex-1 flex flex-col bg-page-color">
      <HeaderCart />
      <Cartitems />
      <Address />
    </Page>
  );
};
export default CartPage;
