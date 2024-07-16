import React from "react";
import { Page, Header } from "zmp-ui";
import Search from "./search";
import HeaderSearch from "./headersearch";

const SearchPage = () => {
  return (
    <Page className="relative flex-1 flex flex-col bg-page-color">
      <HeaderSearch />
      <Search />
    </Page>
  );
};
export default SearchPage;
