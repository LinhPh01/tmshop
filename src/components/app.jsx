import React from "react";
import { Route } from "react-router-dom";
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from "zmp-ui";
import { RecoilRoot } from "recoil";
// import About from "../pages/about";
// import Form from "../pages/form";
// import User from "../pages/user";
import IndexPage from "../pages/index/index";
import BottomNav from "./bottomnav";
import SearchPage from "../pages/search";
// import UserIndex from "../pages/userindex";
import CartPage from "../pages/cart";
import ProfilePage from "../pages/user/index";

const MyApp = () => {
  return (
    <RecoilRoot>
      <App>
        <SnackbarProvider>
          <ZMPRouter>
            <AnimationRoutes>
              <Route path="/" element={<IndexPage></IndexPage>}></Route>
              <Route path="/search" element={<SearchPage></SearchPage>}></Route>
              {/* <Route path="/about" element={<About></About>}></Route>
              <Route path="/form" element={<Form></Form>}></Route>
              <Route path="/user" element={<User></User>}></Route>
              <Route path="/uindex" element={<UserIndex></UserIndex>}></Route> */}

              <Route
                path="uindex"
                element={<ProfilePage></ProfilePage>}
              ></Route>
              <Route path="/cartindex" element={<CartPage></CartPage>}></Route>
            </AnimationRoutes>
            <BottomNav />
          </ZMPRouter>
        </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
};
export default MyApp;
