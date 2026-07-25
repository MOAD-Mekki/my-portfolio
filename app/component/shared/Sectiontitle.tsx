// ─────────────────────────────────────────────────────────────────
// src/components/shared/SectionTitle.tsx
//
// A small reusable component that shows the heading for a section.
// It displays: a big title, an optional subtitle below it,
// and a short colored bar under both.
//
// It is used by About, Skills, Projects, and Contact sections
// so every section heading looks consistent.
// ─────────────────────────────────────────────────────────────────

// "interface" defines what props (inputs) this component accepts
interface SectionTitleProps {
  title: string     // Required — the main section heading text
  subtitle?: string // Optional — smaller text below (? = not required)
}

// We receive title and subtitle as props, then display them
export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    // text-center  = everything centered
    // mb-12        = margin at the bottom to space it from the content
    <div className="text-center mb-12">

      {/* The main section heading
          text-3xl on mobile → text-4xl on md+ screens */}
      <h2 className="text-3xl md:text-4xl font-bold">
        {title}
      </h2>

      {/* Only renders this paragraph if a subtitle was passed.
          The && means: "only show this if subtitle exists" */}
      {subtitle && (
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
          {subtitle}
        </p>
      )}

      {/* The short colored underline bar below the heading */}
      <div className="mt-4 h-1 w-16 bg-primary rounded mx-auto" />

    </div>
  )
}

// ── HOW TO USE THIS IN ANY SECTION ───────────────────────────────
//
// Step 1: Import it at the top of your section file:
//   import SectionTitle from "@/components/shared/SectionTitle"
//
// Step 2: Use it like this:
//   <SectionTitle
//     title="My Projects"
//     subtitle="Things I've built that I'm proud of"
//   />
//
// Or without a subtitle:
//   <SectionTitle title="My Skills" />
// ─────────────────────────────────────────────────────────────────