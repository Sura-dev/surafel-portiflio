"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { PORTFOLIO } from "@/data/portifolio";
import Reveal from "@/components/UI/reveal";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(form.subject);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );

    window.location.href = `mailto:${PORTFOLIO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="scroll-mt-20 overflow-hidden bg-[#0B0F19] px-6 py-24 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* SECTION HEADING */}
        <div className="mb-14 max-w-2xl">
          <Reveal delay={0.1}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-400">
              Get In Touch
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Let's Build Something{" "}
              <span className="text-violet-400">Great.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-5 leading-8 text-slate-400">
              Have a project in mind, an opportunity to discuss, or just want to
              say hello? I'd love to hear from you.
            </p>
          </Reveal>
        </div>

        {/* CONTACT CONTENT */}
        <div className="grid gap-10 lg:grid-cols-5">
          {/* LEFT: CONTACT INFORMATION */}
          <div className="space-y-7 lg:col-span-2">
            {/* CONTACT INFORMATION CARD */}
            <Reveal delay={0.1}>
              <div
                className="
                  rounded-2xl
                  border border-white/10
                  bg-[#151B2B]
                  p-7
                  transition-all duration-300
                  hover:border-violet-500/40
                  hover:shadow-[0_12px_40px_rgba(139,92,246,0.08)]
                "
              >
                <h3 className="mb-7 text-xl font-semibold text-white">
                  Contact Information
                </h3>

                <div className="space-y-7">
                  {/* EMAIL */}
                  <a
                    href={`mailto:${PORTFOLIO.email}`}
                    className="group flex items-start gap-4"
                  >
                    <div className="rounded-xl bg-violet-500/10 p-3 text-violet-400">
                      <Mail size={21} />
                    </div>

                    <div className="min-w-0">
                      <p className="mb-1 text-sm text-slate-400">Email</p>

                      <p className="break-all text-sm font-medium text-white transition-colors group-hover:text-violet-400">
                        {PORTFOLIO.email}
                      </p>
                    </div>
                  </a>

                  {/* LOCATION */}
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-violet-500/10 p-3 text-violet-400">
                      <MapPin size={21} />
                    </div>

                    <div>
                      <p className="mb-1 text-sm text-slate-400">Location</p>

                      <p className="text-sm font-medium text-white">
                        {PORTFOLIO.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* SOCIAL LINKS CARD */}
            <Reveal delay={0.2}>
              <div
                className="
                  rounded-2xl
                  border border-white/10
                  bg-[#151B2B]
                  p-7
                  transition-all duration-300
                  hover:border-violet-500/40
                  hover:shadow-[0_12px_40px_rgba(139,92,246,0.08)]
                "
              >
                <h3 className="mb-5 text-xl font-semibold text-white">
                  Find Me Online
                </h3>

                <div className="space-y-3">
                  {/* GITHUB */}
                  <a
                    href={PORTFOLIO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      flex items-center justify-between
                      rounded-xl
                      border border-white/10
                      p-4
                      text-slate-300
                      transition-all duration-300
                      hover:border-violet-500/40
                      hover:bg-violet-500/5
                      hover:text-violet-400
                    "
                  >
                    <span className="flex items-center gap-3">
                      <FaGithub size={21} />
                      GitHub
                    </span>

                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transform-none"
                    />
                  </a>

                  {/* LINKEDIN */}
                  <a
                    href={PORTFOLIO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      flex items-center justify-between
                      rounded-xl
                      border border-white/10
                      p-4
                      text-slate-300
                      transition-all duration-300
                      hover:border-violet-500/40
                      hover:bg-violet-500/5
                      hover:text-violet-400
                    "
                  >
                    <span className="flex items-center gap-3">
                      <FaLinkedinIn size={21} />
                      LinkedIn
                    </span>

                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transform-none"
                    />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <Reveal delay={0.25} y={35} className="h-full lg:col-span-3">
            <div
              className="
                h-full
                rounded-2xl
                border border-white/10
                bg-[#151B2B]
                p-7
                transition-colors duration-300
                hover:border-violet-500/30
                md:p-9
              "
            >
              {/* FORM HEADER */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-white">
                  Send Me a Message
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Fill out the form to compose an email.
                </p>
              </div>

              {/* FORM */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* NAME AND EMAIL */}
                <div className="grid gap-6 sm:grid-cols-2">
                  {/* NAME */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Your Name
                    </label>

                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      autoComplete="name"
                      required
                      value={form.name}
                      onChange={(event) =>
                        setForm((previous) => ({
                          ...previous,
                          name: event.target.value,
                        }))
                      }
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-white/10 bg-[#0B0F19] px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-600 focus:border-violet-500"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Email Address
                    </label>

                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                      value={form.email}
                      onChange={(event) =>
                        setForm((previous) => ({
                          ...previous,
                          email: event.target.value,
                        }))
                      }
                      placeholder="john@example.com"
                      className="w-full rounded-xl border border-white/10 bg-[#0B0F19] px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-600 focus:border-violet-500"
                    />
                  </div>
                </div>

                {/* SUBJECT */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Subject
                  </label>

                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={(event) =>
                      setForm((previous) => ({
                        ...previous,
                        subject: event.target.value,
                      }))
                    }
                    placeholder="Project Collaboration"
                    className="w-full rounded-xl border border-white/10 bg-[#0B0F19] px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-600 focus:border-violet-500"
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={(event) =>
                      setForm((previous) => ({
                        ...previous,
                        message: event.target.value,
                      }))
                    }
                    placeholder="Tell me about your project..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-[#0B0F19] px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-600 focus:border-violet-500"
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  className="
                    group
                    inline-flex w-full items-center justify-center gap-3
                    rounded-xl
                    bg-violet-600
                    px-6 py-4
                    font-semibold text-white
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:bg-violet-500
                    hover:shadow-[0_8px_30px_rgba(139,92,246,0.2)]
                    motion-reduce:transform-none
                    sm:w-auto
                  "
                >
                  Compose Email
                  <Send
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none"
                  />
                </button>

                {/* FORM NOTICE */}
                <p className="text-xs leading-6 text-slate-500">
                  This opens your default email application. Your message is not
                  sent automatically.
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
