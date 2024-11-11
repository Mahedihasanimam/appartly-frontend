"use client";


import store from "@/redux/store";
import Image from "next/image";
import { Provider } from "react-redux";
import { UserProvider } from "./UserContext";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <Provider store={store}>
        {children}
    </Provider>
    </UserProvider>
  );
};

export default Providers;