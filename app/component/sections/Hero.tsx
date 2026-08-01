
import { Button } from "../../../components/ui/button"
import { cn } from "@/lib/utils"
import { Download, ArrowDown } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { personalInfo } from "../../../data/portfolio"

export default function Hero() {
  return (

    <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
    <div
            className={cn(
              "absolute inset-0",
              "[background-size:20px_20px]",
              "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
              "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
            )}
    />
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
    <section className="relative z-20 min-h-screen flex items-center justify-center py-20 bg-white dark:bg-black">
      <div className="text-center space-y-6 max-w-2xl mx-auto px-4">


        {/* ── NAME + TITLE ──────────────────────────────────── */}
        <div className="space-y-2">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Hi, I'm {personalInfo.name}
          </h1>

          <p className="text-xl text-primary font-medium">
            {personalInfo.title}
          </p>

        </div>

        {/* ── BIO ─────────────────────────────────────── */}
        <p className="text-lg text-muted-foreground leading-relaxed max-w-md mx-auto">
          {personalInfo.description}
        </p>

        {/* ── CTA BUTTONS ───────────────────────────────────── */}
        <div className="flex flex-wrap gap-3 justify-center">
          <Button size="lg" >
            <a href="#projects">View my work</a>
          </Button>

          <Button size="lg" variant="outline">
            <a href={personalInfo.cv} download className="flex justify-around">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </Button>

        </div>

        {/* ── SOCIAL ICON LINKS ─────────────────────────────── */}
        <div className="flex gap-3 justify-center">

          <Button variant="ghost" size="icon" >
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
              <FaGithub className="h-5 w-5" />
            </a>
          </Button>

          <Button variant="ghost" size="icon" >
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="h-5 w-5" />
            </a>
          </Button>

        </div>

        {/* ── SCROLL ARROW ──────────────────────────────────── */}
        <div className="pt-8 animate-bounce">
          <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
        </div>

      </div>
    </section>
    </div>
  )
}