'use client'

import BlogCards from "@/components/BlogCards"
import { Header } from "@/components/header"

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