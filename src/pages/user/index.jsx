import React from "react";
import { Page } from "zmp-ui";
import HeaderUser from "./headeruser";
import Subscription from "./profile";
import Personal from "./personal";
import Other from "./other";

const ProfilePage = () => {
  return (
    <Page className="relative flex-1 flex flex-col bg-page-color">
      <HeaderUser />
      <Subscription />
      <Personal />
      <Other />
    </Page>
  );
};

export default ProfilePage;
