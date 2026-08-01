
import { Button } from "../../../components/ui/button"
import { Separator } from "../../../components/ui/separator"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import Link from "next/link"
import { personalInfo } from "../../../data/portfolio"

const footerLinks = [
  { label: "About",    href: "#about"    },
  { label: "Projects", href: "#projects" },
  { label: "Experinece", href: "#experience" },
  { label: "Contact",  href: "#contact"  },
]

export default function Footer() {
  return (
    <footer className="border-t py-10">
      <div className="max-w-6xl mx-auto px-4">

        {/* ── TOP ROW: Logo | Links | Social ───────────────────── */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* ── LOGO ───────────────────────────────────────────── */}
          <div className="font-bold text-xl">
            {personalInfo.name}
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
          <div className="flex gap-1">

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
        <Separator className="my-6" />

        {/* ── COPYRIGHT ────────────────────────────────────────── */}
        <p className="text-center text-sm text-muted-foreground">
          © 2026 {personalInfo.name}
        </p>

      </div>
    </footer>
  )
}