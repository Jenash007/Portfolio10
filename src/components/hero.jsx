"use client"

import { ArrowDown } from "lucide-react"
import { Button } from "./ui/button"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 bg-background">
      <div
        className={`transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-primary">Jeswin</span>
        </h1>
        <h2 className="text-2xl md:text-3xl mb-6 text-muted-foreground">Software Developer</h2>
        <p className="max-w-lg mx-auto text-lg mb-8">
          I build beautiful, responsive websites with modern technologies that help businesses grow.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg"><a href="#projects">View My Work</a></Button>
          <Button size="lg" variant="outline">
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>
      <div
        className="absolute bottom-10 animate-bounce cursor-pointer"
        onClick={() => {
          document.getElementById("about").scrollIntoView({ behavior: "smooth" })
        }}
      >
        <ArrowDown className="h-6 w-6" />
      </div>
    </section>
  )
}

