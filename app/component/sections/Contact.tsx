
"use client"

import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card"
import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import { Textarea } from "../../../components/ui/textarea"
import { Spinner } from "@/components/ui/spinner"
import { Mail, MapPin } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import SectionTitle from "../shared/Sectiontitle"
import { personalInfo } from "../../../data/portfolio"
import emailjs from 'emailjs-com'

export default function Contact() {

  emailjs.init('OSLo6dSf0YLVnRIjb')
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle")

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(
    e: React.MouseEvent<HTMLButtonElement>
  ) {
    e.preventDefault();
    setStatus("sending")
    try {
      await emailjs.send('service_vr1fabu', 'template_7keuglj', {
        name: form.name,
        message: form.message,
        reply_to: form.email
      })

      setStatus("sent");
    } catch(err) {
      console.log(err);
    }

  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">

        <SectionTitle
          title="Get in touch"
          subtitle="Have a project in mind? Let's talk."
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          {/* ── LEFT: CONTACT INFO ───────────────────────────── */}
          <div className="space-y-6">

            <p className="text-muted-foreground leading-relaxed">
              I'm available for freelance projects and collaborations.
              Drop me a message and I'll get back to you within 24 hours.
            </p>

            {/* Email and location rows */}
            <div className="space-y-4">

              {/* Email row */}
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                </div>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>

              {/* Location row */}
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <span>{personalInfo.location}</span>
              </div>

            </div>

            {/* Social icon buttons */}
            <div className="flex gap-2">
              <Button variant="outline" size="icon" >
                <a href={personalInfo.github} target="_blank">
                  <FaGithub className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" >
                <a href={personalInfo.linkedin} target="_blank">
                  <FaLinkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>

          </div>

          {/* ── RIGHT: CONTACT FORM CARD ─────────────────────── */}
          <Card>
            <CardHeader>
              <CardTitle>Send a message</CardTitle>
              <CardDescription>I'll reply as soon as possible.</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">

              {/* ── CONDITIONAL RENDER ───────────────────────── */}
              {status === "sent" ? (

                // SUCCESS STATE
                <div className="text-center py-8 space-y-2">
                  <p className="font-medium">Message sent !</p>
                  <p className="text-sm text-muted-foreground">
                    I'll get back to you soon.
                  </p>
                </div>

              ) : (

                // FORM STATE 
                <>

                  <Input
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                  />

                  <Input
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={form.email}
                    onChange={handleChange}
                  />

                  <Textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                  />

                  <Button
                    className="w-full"
                    onClick={handleSubmit}
                    disabled={status === "sending"}
                  >
                    {status === "sending"  
                      ? <> <Spinner data-icon="inline-start" /> Sending </> 
                      : "Send message"}
                  </Button>
                </>

              )}

            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  )
}