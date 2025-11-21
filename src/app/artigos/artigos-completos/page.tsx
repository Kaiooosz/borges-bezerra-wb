'use client'

import { Header } from "@/components/header"
import BlogCards from "@/components/BlogCards";

export default function Guia () {
    return (
      <div className="min-h-screen bg-backgroud">
      <Header />
      <main>
      <BlogCards />
      </main>
    </div>
      )
}