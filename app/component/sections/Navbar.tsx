// ─────────────────────────────────────────────────────────────────
// src/components/sections/Navbar.tsx
//
// The sticky navigation bar at the very top of the page.
//
// DESKTOP view: Logo (left) | Links (center) | Toggle + Button (right)
// MOBILE view:  Logo (left) | Toggle + Hamburger icon (right)
//               → Hamburger opens a Sheet (slide-in drawer) with links
//
// shadcn/ui components used:
//   Button        → for "Hire me" and the icon buttons
//   Sheet         → the mobile slide-in drawer
//   SheetContent  → the content inside the drawer
//   SheetTrigger  → the button that opens the drawer
//   SheetClose    → wraps each link so clicking it closes the drawer
//
// "use client" is REQUIRED here because:
//   - useState tracks whether the component has mounted
//   - useTheme (from next-themes) reads/changes the current theme
//   These only work inside the browser, not on the server.
// ─────────────────────────────────────────────────────────────────
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "../../../components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "../../../components/ui/sheet"
import { Moon, Sun, Menu } from "lucide-react"
import { personalInfo } from "../../../data/portfolio"

// The list of links shown in the nav bar.
// Each href matches the id="" of a section below (e.g. <section id="about">)
const navLinks = [
  { label: "About",    href: "#about"    },
  { label: "Skills",   href: "#skills"   },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact"  },
]

export default function Navbar() {
  // useTheme gives us the current theme ("dark"/"light") and a setter
  const { theme, setTheme } = useTheme()

  // ── WHY mounted? ─────────────────────────────────────────────
  // When Next.js first renders the page on the server, it doesn't
  // know what theme the user has. If we render the Sun/Moon icon
  // immediately, there's a brief flicker as the theme loads.
  // The fix: wait until the component is mounted in the browser
  // before showing the icon. That's what mounted + useEffect does.
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    // sticky top-0     → the nav "sticks" to the top when you scroll down
    // z-50             → sits on top of all other page content
    // bg-background/80 → the page background color at 80% opacity
    // backdrop-blur-sm → blurs what's behind the nav (frosted glass effect)
    // border-b         → a thin line below the navbar
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">

      {/* max-w-6xl mx-auto → centers and limits the width
          px-4             → horizontal padding on small screens
          h-16             → fixed height for the nav bar
          flex items-center justify-between → logo left, links right */}
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* ── LOGO (left side) ───────────────────────────────── */}
        <Link href="/" className="font-bold text-xl">
          {personalInfo.name}
        </Link>

        {/* ── DESKTOP LINKS (center) ─────────────────────────── */}
        {/* hidden     = invisible on mobile screens
            md:flex    = becomes visible as a flex row on tablet+ screens
            gap-8      = space between each link */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* ── RIGHT SIDE: theme toggle + hire me + hamburger ─── */}
        <div className="flex items-center gap-2">

          {/* Dark / Light mode toggle button
              We only render this after mounting to avoid the flicker */}
          {mounted && (
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {/* Show Sun icon when in dark mode (to switch to light)
                  Show Moon icon when in light mode (to switch to dark) */}
              {theme === "dark"
                ? <Sun className="h-5 w-5" />
                : <Moon className="h-5 w-5" />
              }
            </Button>
          )}

          {/* "Hire me" button — hidden on mobile, visible on md+ */}
          <Button className="hidden md:flex" >
            {/* asChild makes Button render as an <a> tag instead of <button> */}
            <a href="#contact">Hire me</a>
          </Button>

          {/* ── MOBILE HAMBURGER + SHEET DRAWER ──────────────── */}
          {/* md:hidden = this whole block only shows on mobile */}
          <Sheet>

            {/* SheetTrigger: the button that opens the drawer */}
            <SheetTrigger >
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            {/* SheetContent: the panel that slides in from the right */}
            <SheetContent side="right" className="w-72">
              <div className="flex flex-col gap-4 mt-10">

                {navLinks.map((link) => (
                  // SheetClose: automatically closes the drawer
                  // when the wrapped element (Link) is clicked
                  <SheetClose  key={link.href}>
                    <Link
                      href={link.href}
                      className="text-lg font-medium hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}

                {/* Hire me button inside the mobile drawer */}
                <Button  className="mt-4">
                  <a href="#contact">Hire me</a>
                </Button>

              </div>
            </SheetContent>
          </Sheet>

        </div>
      </div>
    </nav>
  )
}