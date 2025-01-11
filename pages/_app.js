import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "@/UI/Footer/Footer";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js").then(() => {
      console.log("Bootstrap JS loaded!");
    });
  }, []);
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
