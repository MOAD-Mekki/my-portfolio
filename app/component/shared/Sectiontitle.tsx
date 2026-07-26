
interface SectionTitleProps {
  title: string     
  subtitle: string 
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (

    <div className="text-center mb-12">

      <h2 className="text-3xl md:text-4xl font-bold">
        {title}
      </h2>

      <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
        {subtitle}
      </p>

      <div className="mt-4 h-1 w-16 bg-primary rounded mx-auto" />

    </div>
  )
}
