
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


const navLinks = [
  { label: "About",    href: "#about"    },
  { label: "Skills",   href: "#skills"   },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact",  href: "#contact"  },
]

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">

      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* ── LOGO ───────────────────────────────── */}
        <Link href="/" className="font-bold text-xl md:text-2xl">
          {personalInfo.name}
        </Link>

        {/* ── DESKTOP LINKS ─────────────────────────── */}
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

          {mounted && (
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "dark"
                ? <Sun className="h-5 w-5" />
                : <Moon className="h-5 w-5" />
              }
            </Button>
          )}

          {/* "Hire me" button, hidden on mobile, visible on md+ */}
          <Button className="hidden md:flex" >
            <a href="#contact">Hire me</a>
          </Button>

          {/* ── MOBILE HAMBURGER + SHEET ──────────────── */}
          <Sheet>

            <SheetTrigger >
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-72">
              <div className="flex flex-col gap-4 mt-10">

                {navLinks.map((link) => (
                  <SheetClose  key={link.href}>
                    <Link
                      href={link.href}
                      className="text-lg font-medium hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}

                <SheetClose >
                  <Button  className="mt-4 w-full">
                    <a href="#contact">Hire me</a>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>

        </div>
      </div>
    </nav>
  )
}