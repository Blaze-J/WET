import React from 'react';
import Footer from "@/components/layout/Footer";
import Navbar from '@/components/layout/Navbar';
import NewArticle from '@/components/pages/NewArticle';

const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Layout({ children }) {
  return (
      <>
        <Navbar/> 
          <NewArticle/>
          <Footer/>
      </>
  );
}