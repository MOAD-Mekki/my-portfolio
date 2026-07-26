// ─────────────────────────────────────────────────────────────────
// src/components/sections/Projects.tsx
//
// Displays your projects in a responsive card grid.
// Each project card contains:
//   - A screenshot image (top of the card)
//   - Project title and description
//   - Tech stack badges
//   - Two buttons: "Code" (GitHub) and "Live" (live demo)
//
// Grid layout:
//   Mobile  → 1 column
//   Tablet  → 2 columns
//   Desktop → 3 columns
//
// shadcn/ui components used:
//   Card            → the entire card container
//   CardHeader      → wraps the screenshot image
//   CardContent     → wraps the title, description, and badges
//   CardTitle       → the project name
//   CardDescription → the project description
//   CardFooter      → wraps the two link buttons
//   Badge           → each tech stack label
//   Button          → GitHub and Live demo links
// ─────────────────────────────────────────────────────────────────

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card"
import { Badge } from "../../../components/ui/badge"
import { Button } from "../../../components/ui/button"
import { ExternalLink } from "lucide-react"
import {FaGithub} from 'react-icons/fa'
import SectionTitle from "../shared/Sectiontitle"
import { projects } from "../../../data/portfolio"

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">

        <SectionTitle
          title="My projects"
          subtitle="Things I've built that I'm proud of"
        />

        {/* ── RESPONSIVE CARD GRID ─────────────────────────────── */}
        {/* grid           → CSS grid layout
            grid-cols-1    → 1 column on mobile (default, no prefix)
            md:grid-cols-2 → 2 columns on tablet (768px+)
            lg:grid-cols-3 → 3 columns on desktop (1024px+)
            gap-6          → space between cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Loop over each project in data/portfolio.ts */}
          {projects.map((project) => (
            <Card
              key={project.id}
              // "group"         → enables group-hover: on child elements.
              //                   When this Card is hovered, any child with
              //                   "group-hover:" will also be affected.
              // flex flex-col   → makes the card a vertical column,
              //                   so the footer always sits at the bottom.
              // hover:border-primary/50 → border becomes more visible on hover
              // transition-colors       → smooth color transition on hover
              className="flex flex-col group hover:border-primary/50 transition-colors"
            >

              {/* ── SCREENSHOT IMAGE ─────────────────────────── */}
              {/* p-0 → removes the default padding so the image
                       touches the edges of the card header */}
              <CardHeader className="p-0">

                {/* aspect-video    → forces 16:9 ratio (same as YouTube thumbnails)
                    overflow-hidden → clips the zoomed image on hover
                    rounded-t-xl    → rounds only the TOP corners */}
                <div className="aspect-video bg-muted overflow-hidden rounded-t-xl">
                  <img
                    src={project.image}
                    alt={project.name}
                    // w-full h-full object-cover → fills the container
                    //   without stretching or distorting the image
                    // group-hover:scale-105 → zooms the image to 105% when
                    //   the parent Card is hovered (because of the "group" class)
                    // transition-transform duration-300 → smooth zoom animation
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

              </CardHeader>

              {/* ── PROJECT INFO ─────────────────────────────── */}
              {/* flex-1 → this area grows to fill available space,
                          which pushes CardFooter to the bottom of the card.
                          This keeps all cards the same height in a row. */}
              <CardContent className="pt-4 flex-1 space-y-3">

                <CardTitle className="text-lg ">
                  {project.name}
                </CardTitle>

                {/* CardDescription is already styled in a muted color */}
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech) => (
                    // variant="outline" → just a border, no fill color
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

              </CardContent>

              {/* ── LINK BUTTONS ─────────────────────────────── */}
              {/* pt-0 → removes top padding so buttons sit
                        right below the tech badges */}
              <CardFooter className="gap-2 pt-0">

                {/* GitHub button */}
                {/* flex-1 → both buttons share the available width equally */}
                <Button variant="outline" size="sm" className="flex-1" >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="mr-2 h-4 w-4" />
                  </a>
                </Button>

                {/* Live demo button */}
                <Button size="sm" className="flex-1" >
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                  </a>
                </Button>

              </CardFooter>
            </Card>
          ))}

        </div>
      </div>
    </section>
  )
}