'use client'
import ManagerNavBar from "@/components/layout/ManagerNavBar";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import DetailMM from "@/components/pages/DetailMM";
import AuthService from "@/services/AuthService";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
//import { ConfirmProvider } from "material-ui-confirm";


const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Layout({ children }) {
  const [user, setUser] = useState()
  const router = useRouter()
  useEffect(() => {
      AuthService.profile().then(x => setUser(x.data)).catch(e => router.push('/login'))
  })
  if (user) {
      if (user?.roleId !== 2) {
          router.push('/login')
      }
  }
  return (
    <>
       <Navbar />
        <div className="flex ">
            <ManagerNavBar />
            <div className="w-full">
                <div className="p-10">
                    {children}
                </div>
            </div>
        </div>
        <Footer />

    </>
  );
}

