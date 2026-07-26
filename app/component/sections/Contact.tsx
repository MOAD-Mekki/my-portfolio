// ─────────────────────────────────────────────────────────────────
// src/components/sections/Contact.tsx
//
// Two-column layout:
//   LEFT  → your email, location, and social icon buttons
//   RIGHT → a contact form card (name, email, message, send button)
//
// The form has 3 states managed with useState:
//   "idle"    → the default empty form, waiting for input
//   "sending" → the button says "Sending..." and is disabled
//   "sent"    → the form is replaced by a success message
//
// shadcn/ui components used:
//   Card, CardHeader, CardContent,
//   CardTitle, CardDescription  → the form wrapper
//   Input    → single-line text fields (name, email)
//   Textarea → multi-line message field
//   Button   → the send button and social icon buttons
//
// "use client" is REQUIRED because:
//   This component uses useState to manage the form data and status.
//   useState only works inside the browser, not on the server.
// ─────────────────────────────────────────────────────────────────
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
import { Mail, MapPin } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import SectionTitle from "../shared/Sectiontitle"
import { personalInfo } from "../../../data/portfolio"
import emailjs from 'emailjs-com'

export default function Contact() {

  // ── FORM STATE ───────────────────────────────────────────────
  // "form" holds the current value of each input field.
  // When the user types, we update the matching key here.
  emailjs.init('OSLo6dSf0YLVnRIjb')
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  // ── SEND STATUS ──────────────────────────────────────────────
  // Tracks where we are in the sending process:
  //   "idle"    = user hasn't clicked send yet
  //   "sending" = we're processing (button is disabled)
  //   "sent"    = it worked (show success message)
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle")

  // ── handleChange ────────────────────────────────────────────
  // Called every time the user types in any input or textarea.
  // e.target.name  → the "name" attribute on the Input element
  // e.target.value → what the user just typed
  //
  // The [e.target.name] syntax uses the field name as the key,
  // so typing in the email field updates form.email, etc.
  // The "...form" part copies all existing field values first,
  // then overwrites just the one that changed.
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // ── handleSubmit ────────────────────────────────────────────
  // Called when the user clicks "Send message".
  // Currently simulates a 1-second delay, then shows success.
  //
  // TO MAKE IT ACTUALLY SEND EMAILS:
  //   1. Go to https://emailjs.com and create a free account
  //   2. Create a service (Gmail works), a template, and get your keys
  //   3. Run: npm install @emailjs/browser
  //   4. Replace the setTimeout block below with:
  //
  //      import emailjs from "@emailjs/browser"
  //
  //      await emailjs.send(
  //        "YOUR_SERVICE_ID",    // from EmailJS dashboard
  //        "YOUR_TEMPLATE_ID",   // from EmailJS dashboard
  //        {
  //          name:    form.name,
  //          email:   form.email,
  //          message: form.message,
  //        },
  //        "YOUR_PUBLIC_KEY"     // from EmailJS dashboard
  //      )
  //
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

        {/* ── TWO-COLUMN GRID ────────────────────────────────── */}
        {/* max-w-4xl mx-auto → narrower than the full page, centered */}
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
                {/* mailto: makes this a clickable email link */}
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
              {/* If the form was sent → show success message
                  If not             → show the form inputs */}
              {status === "sent" ? (

                // SUCCESS STATE
                <div className="text-center py-8 space-y-2">
                  <p className="font-medium">Message sent !</p>
                  <p className="text-sm text-muted-foreground">
                    I'll get back to you soon.
                  </p>
                </div>

              ) : (

                // FORM STATE (idle or sending)
                <>
                  {/* The "name" attribute MUST match the key in the form state.
                      Input name="name"    → updates form.name
                      Input name="email"   → updates form.email
                      Textarea name="message" → updates form.message */}

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

                  {/* disabled while sending → prevents double-submit
                      The button text changes based on the current status */}
                  <Button
                    className="w-full"
                    onClick={handleSubmit}
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Sending..." : "Send message"}
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