import React, { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import DefaultComponent from "./components/DefaultComponent/DefaultComponent";
import { isJsonString } from "./utils/isJsonString";
import { jwtDecode } from "jwt-decode";
import * as UserService from "./service/UserService";
import { updateUser } from "./redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector((state) => state.user);
  useEffect(() => {
    setIsLoading(true);
    let { user, storageData } = handleDecoded();
    if (user?.id) {
      handleGetUserDetail(user?.id, storageData);
    }
    setIsLoading(false);
  }, []);

  const handleDecoded = () => {
    let storageData = localStorage.getItem("access_oken");
    let user = {};
    if (storageData && isJsonString(storageData)) {
      storageData = JSON.parse(storageData);
      user = jwtDecode(storageData);
    }
    return { user, storageData };
  };

  UserService.axiosJWT.interceptors.request.use(
    async (config) => {
      const currentTime = new Date();
      let { user } = handleDecoded();
      if (user?.exp < currentTime.getTime() / 1000) {
        const data = await UserService.refreshToken();
        config.headers["token"] = `Bearer ${data.access_token}`;
      }
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  const handleGetUserDetail = async (id, token) => {
    const res = await UserService.getUserDetail(id, token);
    dispatch(updateUser({ ...res.data, access_token: token }));
  };

  return (
    <div className="overflow-hidden">
      {!isLoading && (
        <Router>
          <Routes>
            {routes.map((route) => {
              const Page = route.page;
              const isAuth = !route.isPrivate || user.isAdmin;
              const Layout = route.isShowHeader
                ? DefaultComponent
                : React.Fragment;
              return (
                <Route
                  key={route.path}
                  path={isAuth ? route.path : undefined}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
