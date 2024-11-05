"use client";


import store from "@/redux/store";
import Image from "next/image";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import preloading from '/public/icons/Animation - 1730777862448.gif'
import { UserProvider } from "./UserContext";

const Providers = ({ children }) => {
    let persistor = persistStore(store)
  return (
    <UserProvider>
      <Provider store={store}>
      <PersistGate loading={
           <div className="flex flex-col items-center justify-center  min-h-screen">
           <Image src={preloading} alt="Loading" width={200} height={200} />
           <p className="text-white text-4xl">Loading...</p>
         </div>
      } persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
    </UserProvider>
  );
};

export default Providers;