

import { Card, CardContent } from "../../../components/ui/card"
import { Separator } from "../../../components/ui/separator"
import { MapPin, GraduationCap, Code2, Coffee } from "lucide-react"
import SectionTitle from "../shared/Sectiontitle"
import { personalInfo } from "../../../data/portfolio"

const highlights = [
  { icon: MapPin,         label: "Location",  value: personalInfo.location   },
  { icon: GraduationCap, label: "Education", value: "Higher National School Of Telecommunications and ICT"    },
  { icon: Code2,          label: "Focus",     value: "Full-stack Web Development"  },
  { icon: Coffee,         label: "Status",    value: "Open to work"           },
]

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4">

        <SectionTitle
          title="About me"
          subtitle="Who I am ? And what I do ?"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* ── LEFT COLUMN: PHOTO ───────────────────────────── */}
          <div className="w-full max-w-md mx-auto">

            <div className="aspect-square bg-muted rounded-2xl overflow-hidden">

              <img
                src="/images/me.jpg"
                alt="Mekki"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

          <div className="space-y-6">

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

            <Separator />

            <div className="grid grid-cols-2 gap-3">

              {highlights.map(({ icon: Icon, label, value }) => (

                <Card key={label}>

                  <CardContent className="flex  items-center gap-3 p-4">

                    <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>

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