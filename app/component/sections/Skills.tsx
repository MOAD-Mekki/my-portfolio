
"use client"

import { Badge } from "../../../components/ui/badge"
import { Card, CardContent } from "../../../components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs"
import SectionTitle from "../shared/Sectiontitle"
import { skills } from "../../../data/portfolio"

export default function Skills() {
  return (

    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">

        <SectionTitle
          title="My skills"
          subtitle="Technologies and tools I work with"
        />

        {/* ── TABS COMPONENT ───────────────────────────────────── */}
        <Tabs defaultValue="tech" className="max-w-2xl mx-auto">

          {/* ── TAB BUTTONS ROW ────────────────────────────────── */}
          <TabsList className="grid w-full grid-cols-2 mb-8">

            <TabsTrigger value="tech">Tech Stack</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>

          </TabsList>

          {/* ── TAB CONTENT PANELS ────────────────────────────── */}
          {Object.entries(skills).map(([category, items]) => (
            <TabsContent key={category} value={category}>

              <Card>
                <CardContent className="pt-6 pb-4">
                  <div className="flex flex-wrap gap-3">

                    {items.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="px-4 py-2 text-sm font-medium"
                      >
                        {skill}
                      </Badge>
                    ))}

                  </div>
                </CardContent>
              </Card>

            </TabsContent>
          ))}

        </Tabs>
      </div>
    </section>
  )
}