// ─────────────────────────────────────────────────────────────────
// src/components/sections/Hero.tsx
//
// The very first section visitors see. It takes up the full
// browser window height and contains:
//   1. A status badge ("Open to freelance work")
//   2. Your profile photo (Avatar)
//   3. Your name + job title
//   4. A short bio sentence
//   5. Two CTA buttons (View my work + Download CV)
//   6. Social icon links (GitHub, LinkedIn)
//   7. A bouncing arrow telling users to scroll down
//
// shadcn/ui components used:
//   Badge           → the "Open to freelance work" pill
//   Button          → CTA buttons and icon links
//   Avatar          → your profile photo with initials fallback
//   AvatarImage     → the actual photo inside Avatar
//   AvatarFallback  → shown if the photo file is missing
// ─────────────────────────────────────────────────────────────────

import { Badge } from "../../../components/ui/badge"
import { Button } from "../../../components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar"
import { Download, ArrowDown } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { personalInfo } from "../../../data/portfolio"

export default function Hero() {
  return (
    // ── SECTION WRAPPER ────────────────────────────────────────
    // min-h-screen       → the section is at least the full browser height
    // flex items-center  → centers children vertically
    // justify-center     → centers children horizontally
    // py-20              → padding top and bottom so content has breathing room
    <section className="min-h-screen flex items-center justify-center py-20">

      {/* Content container: centered, max width, spacing between items */}
      <div className="text-center space-y-6 max-w-2xl mx-auto px-4">

        {/* ── 2. PROFILE PHOTO ─────────────────────────────────── */}
        {/* w-28 h-28         → size of the avatar circle (112px)
            mx-auto           → centered horizontally
            border-4          → thick border around the circle
            border-primary/20 → the border uses your primary color at 20% opacity */}
        <Avatar className="w-28 h-28 mx-auto border-4 border-primary/20">

          {/* AvatarImage: tries to load your photo from /public/me.jpg
              Put your photo at public/me.jpg to make it show */}
          <AvatarImage src="/me.jpg" alt={personalInfo.name} />

          {/* AvatarFallback: shown if the photo fails to load.
              Change "MK" to your own initials */}
          <AvatarFallback className="text-2xl font-bold bg-primary/10">
            MK
          </AvatarFallback>

        </Avatar>

        {/* ── 3. NAME + TITLE ──────────────────────────────────── */}
        <div className="space-y-2">

          {/* text-5xl on mobile, text-6xl on tablet+ screens
              tracking-tight → brings letters slightly closer together */}
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Hi, I'm {personalInfo.name}
          </h1>

          {/* Your job title in the primary (accent) color */}
          <p className="text-xl text-primary font-medium">
            {personalInfo.title}
          </p>

        </div>

        {/* ── 4. SHORT BIO ─────────────────────────────────────── */}
        {/* text-muted-foreground = a softer, lighter text color
            max-w-md mx-auto     = limits the line length and centers it */}
        <p className="text-lg text-muted-foreground leading-relaxed max-w-md mx-auto">
          {personalInfo.description}
        </p>

        {/* ── 5. CTA BUTTONS ───────────────────────────────────── */}
        {/* flex-wrap  = wraps to next line on very small screens
            gap-3      = space between the buttons */}
        <div className="flex flex-wrap gap-3 justify-center">

          {/* Primary button: scrolls to the Projects section */}
          {/* asChild = makes Button render as whatever its child is (here, an <a>) */}
          <Button size="lg" >
            <a href="#projects">View my work</a>
          </Button>

          {/* Secondary button: downloads the CV file */}
          {/* variant="outline" = bordered button, no fill
              "download" attribute on <a> triggers a file download */}
          <Button size="lg" variant="outline" >
            <a href={personalInfo.cv} download>
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </Button>

        </div>

        {/* ── 6. SOCIAL ICON LINKS ─────────────────────────────── */}
        {/* variant="ghost" = no border and no background, just the icon
            size="icon"     = square button, sized perfectly for one icon */}
        <div className="flex gap-3 justify-center">

          <Button variant="ghost" size="icon" >
            {/* target="_blank"        = opens in a new tab
                rel="noopener noreferrer" = a security best practice for external links */}
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

        {/* ── 7. SCROLL ARROW ──────────────────────────────────── */}
        {/* animate-bounce = Tailwind's built-in bounce animation.
            No extra libraries needed — it's built into Tailwind CSS. */}
        <div className="pt-8 animate-bounce">
          <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
        </div>

      </div>
    </section>
  )
}