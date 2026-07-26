// ─────────────────────────────────────────────────────────────────
// src/components/sections/About.tsx
//
// A two-column layout section:
//   LEFT COLUMN  → your photo
//   RIGHT COLUMN → bio paragraphs + a 2×2 grid of info cards
//
// On mobile, the two columns stack vertically (photo on top,
// text below). On tablet and wider, they sit side by side.
//
// shadcn/ui components used:
//   Card        → each small info tile (location, education, etc.)
//   CardContent → the inner padding area of each Card
//   Separator   → a horizontal line between the bio and the cards
// ─────────────────────────────────────────────────────────────────

import { Card, CardContent } from "../../../components/ui/card"
import { Separator } from "../../../components/ui/separator"
import { MapPin, GraduationCap, Code2, Coffee } from "lucide-react"
import SectionTitle from "../shared/Sectiontitle"
import { personalInfo } from "../../../data/portfolio"

// ── THE 4 INFO CARDS ─────────────────────────────────────────────
// Each object becomes one small card in the 2×2 grid.
// icon  → a lucide-react icon component (not a string, not JSX)
// label → the small grey label above the value
// value → the main text shown in the card
// Edit these 4 objects to match your own information.
const highlights = [
  { icon: MapPin,         label: "Location",  value: personalInfo.location   },
  { icon: GraduationCap, label: "Education", value: "Higher National School Of Telecommunications and ICT"    },
  { icon: Code2,          label: "Focus",     value: "Full-stack Web Development"  },
  { icon: Coffee,         label: "Status",    value: "Open to work"           },
]

export default function About() {
  return (
    // id="about" → lets the Navbar "About" link scroll here
    // py-20      → padding top and bottom for breathing room
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4">

        {/* Section heading — imported from shared component */}
        <SectionTitle
          title="About me"
          subtitle="Who I am ? And what I do ?"
        />

        {/* ── TWO-COLUMN GRID ──────────────────────────────────── */}
        {/* grid           → CSS grid layout
            grid-cols-1    → 1 column on mobile (default)
            md:grid-cols-2 → 2 columns on tablet+ screens
            gap-12         → space between the two columns
            items-center   → vertically centers the two columns */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* ── LEFT COLUMN: PHOTO ───────────────────────────── */}
          <div className="w-full max-w-md mx-auto">

            {/* aspect-square → forces the container to be a perfect square
                (width and height are always equal, no matter the screen size)
                overflow-hidden → hides any part of the image that sticks out
                rounded-2xl    → rounds the corners */}
            <div className="aspect-square bg-muted rounded-2xl overflow-hidden">
              {/* Put your photo at public/about.jpg
                  object-cover → fills the square without stretching the image */}
              <img
                src="/images/me.jpg"
                alt="Mekki"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

          {/* ── RIGHT COLUMN: BIO + INFO CARDS ──────────────── */}
          {/* space-y-6 → vertical spacing between each child element */}
          <div className="space-y-6">

            {/* Your bio text — write 2 to 3 short paragraphs.
                Keep it personal. Mention where you're from, what you
                build, and what makes you different. */}
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a Web developer and telecom engineering student
                based in Algeria. I'm passionate about building clean,
                fast, and user-friendly web applications.
              </p>
              <p>
                I work primarily with React and Next.js, and I love turning
                ideas into real, working products. I'm currently expanding
                into full-stack development.
              </p>
            </div>

            {/* Separator → renders a thin horizontal line.
                Much cleaner than a plain HTML <hr> element. */}
            <Separator />

            {/* ── 2×2 INFO CARD GRID ───────────────────────── */}
            {/* grid-cols-2 → always 2 columns (even on mobile)
                gap-3       → small gap between the cards */}
            <div className="grid grid-cols-2 gap-3">

              {highlights.map(({ icon: Icon, label, value }) => (
                // Each Card is one info tile
                <Card key={label}>

                  {/* p-4 → custom padding inside the card
                      flex items-center gap-3 → icon and text side by side */}
                  <CardContent className="flex items-center gap-3 p-4">

                    {/* Icon in a soft colored circle background */}
                    {/* p-2 bg-primary/10 → primary color at 10% opacity
                        flex-shrink-0   → prevents icon from shrinking */}
                    <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                      {/* Icon is a React component stored in the variable "Icon"
                          We capitalize it so React knows it's a component */}
                      <Icon className="h-4 w-4 text-primary" />
                    </div>

                    {/* Label and value text */}
                    <div>
                      <p className="text-xs text-muted-foreground">{label}</p>
                      <p className="text-sm font-medium">{value}</p>
                    </div>

                  </CardContent>
                </Card>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}