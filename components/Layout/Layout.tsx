"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import MainHeader from './MainHeader';
import Footer from '../Footer';
export default function Layout({ children }: { children: React.ReactNode }) {
    const path = usePathname();
    if (
        path.includes("/signup") ||
        path.includes("/login") ||
        path.includes("/forget")
      ) {
        return (
            <>{children}</>
          )
      }
      else {
        return (
            <><MainHeader/>{children}<Footer/></>
        )
      }
  
}
