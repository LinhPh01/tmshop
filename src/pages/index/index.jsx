import React, { Suspense } from "react";
import { Page, Box } from "zmp-ui";
import Welcome from "./welcome";
import Swiperbanner from "./banner";
import Itemicon from "./itemicon";
import Listitems from "./listitems";
import Blog from "./blog";
import Recommend from "./recommend";
import Oproducts from "./Oproducts";

const IndexPage = () => {
  return (
    <Page className="relative flex-1 flex flex-col bg-page-color">
      <Welcome />

      <Box className="flex-1 overflow-auto">
        <Suspense>
          <Swiperbanner />
          <Itemicon />
          <Listitems />
        </Suspense>
        <Blog />
        <Recommend />
        <Oproducts />
      </Box>
    </Page>
  );
};

export default IndexPage;
