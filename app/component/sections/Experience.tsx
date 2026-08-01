import SectionTitle from "../shared/Sectiontitle"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
    return (
        <section id="experience" className="py-20">
            <div className="max-w-6xl mx-auto px-4">
                <SectionTitle 
                    title="Experience" 
                    subtitle="What I earned, and What I did."/>
                {/* ── CARD GRID ─────────────────────────────── */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="flex flex-col group hover:border-primary/50 transition-colors">
                        <CardHeader className="p-0">
                            <div className="aspect-video bg-muted overflow-hidden rounded-t-xl">
                                <img
                                    src='/projects/HCIA.png'
                                    alt='HCIA'
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </CardHeader>

                        {/* ── PROJECT INFO ─────────────────────────────── */}
                        <CardContent className="pt-4 flex-1 space-y-3">
                            <CardTitle className="text-lg ">
                                HCIA Data-Com Certefication
                            </CardTitle>

                            <CardDescription className="text-sm leading-relaxed">
                                Acheived the HCIA Data-Com Certefication, wich is a Networking fondamentels based Certefecation.
                                2026-2029 
                            </CardDescription>

                            <p className="text-sm leading-relaxed text-gray-300 font-semibold">
                                What I have Earned :
                            </p>
                            <div className="flex flex-wrap gap-1">
                                <Badge variant="outline" className="text-xs">
                                    Networking Fundamentals
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                    VRP
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                    Huawei eNSP
                                </Badge>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="flex flex-col group hover:border-primary/50 transition-colors">
                        <CardHeader className="p-0">
                            <div className="aspect-video bg-muted overflow-hidden rounded-t-xl">
                                <img
                                    src='/projects/comp.png'
                                    alt='Competetion'
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </CardHeader>

                        {/* ── PROJECT INFO ─────────────────────────────── */}
                        <CardContent className="pt-4 flex-1 space-y-3">
                            <CardTitle className="text-lg ">
                                Huawei ICT Competetion 
                            </CardTitle>

                            <CardDescription className="text-sm leading-relaxed">
                                Reached the National Stage of the Huawei ICT Competetion in the 2025-2026 season (Network Track),
                                after being qualified from the Pre-elemenery Stage. 
                            </CardDescription>

                            <p className="text-sm leading-relaxed text-gray-300 font-semibold">
                                What I have Earned :
                            </p>
                            <div className="flex flex-wrap gap-1">
                                <Badge variant="outline" className="text-xs">
                                    Team Work
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                    Strenght Knowledge
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                    Huawei eNSP
                                </Badge>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}