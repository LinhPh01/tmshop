import React from "react";
import { Box, Input } from "zmp-ui";

const Search = () => {
  return (
    <Box pb={4} className="bg-page-color">
      <div className="px-4">
        <Input.Search placeholder="Tìm sách ..." />
      </div>
    </Box>
  );
};

export default Search;
