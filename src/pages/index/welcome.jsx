import React from "react";
import { Header, Box, Text } from "zmp-ui";
import logo from "../../../assets-src/logobook.png";

const Welcome = () => {
  return (
    <Header
      className="app-header no-border pl-4 flex-none pb-[6px]"
      showBackIcon={false}
      title={
        <Box flex alignItems="center" className="space-x-2">
          <img className="w-8 h-8 rounded-lg border-inset" src={logo} alt="" />
          <Text.Title size="small">TM Library</Text.Title>
        </Box>
      }
    ></Header>
  );
};

export default Welcome;
