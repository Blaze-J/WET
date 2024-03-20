
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Home from "./page";


const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Layout({ children }) {
  return (
    <>
    <Navbar/>
      <Home />
      <Footer />
    </>
  );
}

