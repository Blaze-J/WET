import React from 'react';
import Footer from "@/components/layout/Footer";
import NewArtical from '@/components/pages/NewArtical';
import Navbar from '@/components/layout/Navbar';

const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Layout({ children }) {
  return (
      <>
        <Navbar/> 
          <NewArtical/>
          <Footer/>
      </>
  );
}