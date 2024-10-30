import { persistor, store } from "@/store";
import "@/styles/globals.css";
import { Manrope, Poppins } from "next/font/google";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const inter = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function App({ Component, pageProps }) {
  //Route Events.
  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });
  Router.events.on("routeChangeError", () => NProgress.done());
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <main className={`${inter.variable} ${poppins.variable}`}>
        <Component {...pageProps} />
      </main>
      {/* </PersistGate> */}
    </Provider>
  );
}
