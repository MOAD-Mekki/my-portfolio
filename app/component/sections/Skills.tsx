// ─────────────────────────────────────────────────────────────────
// src/components/sections/Skills.tsx
//
// Displays your skills in 3 clickable tabs:
//   Tab 1 "Frontend"  → your frontend technologies
//   Tab 2 "Tools"     → tools and platforms you use
//   Tab 3 "Learning"  → what you're currently studying
//
// Clicking a tab switches which skills are shown.
// shadcn/ui handles all the tab switching logic for you.
//
// shadcn/ui components used:
//   Tabs         → the root wrapper that manages which tab is active
//   TabsList     → the container for the tab buttons
//   TabsTrigger  → each individual clickable tab button
//   TabsContent  → the panel of content shown when a tab is active
//   Card         → the white/dark box that wraps the badges
//   CardContent  → inner padding of the Card
//   Badge        → each individual skill pill
//
// "use client" is REQUIRED because:
//   Tabs uses click events to switch panels.
//   Click events only work inside the browser, not on the server.
// ─────────────────────────────────────────────────────────────────
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
    // bg-muted/30 → a very subtle background color.
    // This creates a visual "stripe" that separates this section
    // from the About section above it.
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">

        <SectionTitle
          title="My skills"
          subtitle="Technologies and tools I work with"
        />

        {/* ── TABS COMPONENT ───────────────────────────────────── */}
        {/* defaultValue → the tab that is open when the page first loads.
            It must match one of the TabsTrigger "value" props below.
            max-w-2xl mx-auto → limits width and centers the whole tabs block */}
        <Tabs defaultValue="frontend" className="max-w-2xl mx-auto">

          {/* ── TAB BUTTONS ROW ────────────────────────────────── */}
          {/* TabsList wraps all the tab buttons together
              grid w-full grid-cols-3 → 3 equal-width tab buttons
              mb-8 → space below the tab buttons */}
          <TabsList className="grid w-full grid-cols-3 mb-8">

            {/* Each TabsTrigger is one tab button.
                The "value" prop connects it to its TabsContent panel below.
                When clicked, it shows the TabsContent with the same value. */}
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
            <TabsTrigger value="learning">Learning</TabsTrigger>

          </TabsList>

          {/* ── TAB CONTENT PANELS ────────────────────────────── */}
          {/*
              Object.entries(skills) converts the skills object from:
                { frontend: ["React", ...], tools: ["Git", ...] }
              into an array we can loop over:
                [["frontend", ["React", ...]], ["tools", ["Git", ...]]]

              This means we don't need to write a separate TabsContent
              for each category — we just loop over the skills data.
          */}
          {Object.entries(skills).map(([category, items]) => (
            // "value" here MUST match the value on the TabsTrigger above.
            // Example: value="frontend" connects to <TabsTrigger value="frontend">
            // If they don't match, clicking the tab won't show this panel.
            <TabsContent key={category} value={category}>

              <Card>
                {/* pt-6 pb-4 → custom top and bottom padding */}
                <CardContent className="pt-6 pb-4">

                  {/* Flex wrap → badges wrap to new lines when there are many */}
                  <div className="flex flex-wrap gap-3">

                    {items.map((skill) => (
                      // variant="secondary" → a subtle filled badge style
                      // px-4 py-2 → more horizontal and vertical padding than default
                      <Badge
                        key={skill}
                        variant="secondary"
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