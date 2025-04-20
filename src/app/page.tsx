'use client'
import { useState } from "react"
import Header from "@/components/Header"
import Main from "@/pages/Main"

export default function Home() {
  const [isDesktop] = useState<boolean>(true);

  return (
    <>
      <Header isDesktop={isDesktop} />
      <Main />
    </>
  )
}