import React from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Contact from "./page"; 

const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Layout({ children }) {
  return (
      <>
        <Header/> 
          <Contact/>
          <Footer/>
      </>
  );
}