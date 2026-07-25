// ─────────────────────────────────────────────────────────────────
// src/components/sections/Footer.tsx
//
// A minimal footer with three parts in one row:
//   LEFT   → your logo (name + colored dot)
//   CENTER → quick navigation links
//   RIGHT  → social icon buttons
//
// Below all that: a Separator line, then a copyright paragraph.
//
// On mobile, the three parts stack vertically (flex-col).
// On tablet+, they sit side by side (md:flex-row).
//
// shadcn/ui components used:
//   Button    → the social icon buttons (variant="ghost")
//   Separator → the thin horizontal divider line
// ─────────────────────────────────────────────────────────────────

import { Button } from "../../../components/ui/button"
import { Separator } from "../../../components/ui/separator"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import Link from "next/link"
import { personalInfo } from "../../../data/portfolio"

// Quick links shown in the center of the footer
const footerLinks = [
  { label: "About",    href: "#about"    },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact"  },
]

export default function Footer() {
  return (
    // border-t → a thin line above the footer
    // py-10    → padding top and bottom
    <footer className="border-t py-10">
      <div className="max-w-6xl mx-auto px-4">

        {/* ── TOP ROW: Logo | Links | Social ───────────────────── */}
        {/* flex-col      → stacked on mobile (one per line)
            md:flex-row   → side by side on tablet+
            justify-between → Logo pushed left, Social pushed right
            items-center  → vertically centered
            gap-6         → space between the three groups when stacked */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* ── LOGO ───────────────────────────────────────────── */}
          <div className="font-bold text-xl">
            {personalInfo.name}
            <span className="text-primary">.</span>
          </div>

          {/* ── NAV LINKS ──────────────────────────────────────── */}
          <div className="flex gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* ── SOCIAL ICON BUTTONS ────────────────────────────── */}
          {/* gap-1 → small gap between icon buttons */}
          <div className="flex gap-1">

            {/* variant="ghost" → invisible background, just the icon */}
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
        </div>

        {/* ── SEPARATOR ────────────────────────────────────────── */}
        {/* Renders a clean thin horizontal line.
            my-6 → vertical margin above and below */}
        <Separator className="my-6" />

        {/* ── COPYRIGHT ────────────────────────────────────────── */}
        <p className="text-center text-sm text-muted-foreground">
          © 2026 {personalInfo.name}. Built with Next.js, Tailwind CSS & shadcn/ui
        </p>

      </div>
    </footer>
  )
}