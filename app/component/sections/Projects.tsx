
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

        {/* ── CARD GRID ─────────────────────────────── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col group hover:border-primary/50 transition-colors"
            >

              {/* ── SCREENSHOT IMAGE ─────────────────────────── */}
              <CardHeader className="p-0">
                <div className="aspect-video bg-muted overflow-hidden rounded-t-xl">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>

              {/* ── PROJECT INFO ─────────────────────────────── */}
              <CardContent className="pt-4 flex-1 space-y-3">

                <CardTitle className="text-lg ">
                  {project.name}
                </CardTitle>

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
              <CardFooter className="gap-2 pt-0">

                {/* GitHub button */}
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