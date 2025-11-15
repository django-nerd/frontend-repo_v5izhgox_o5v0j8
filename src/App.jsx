import React from 'react'
import Spline from '@splinetool/react-spline'
import { Mail, Phone, MapPin, Github, Linkedin, Globe, Briefcase, Calendar, ExternalLink } from 'lucide-react'

const experiences = [
  {
    role: 'Senior Software Engineer',
    company: 'Acme Corp',
    period: '2022 — Present',
    details: [
      'Led development of scalable microservices (Node/Go) serving 2M+ users',
      'Drove performance initiatives, cutting API latency by 35%'
    ],
  },
  {
    role: 'Full‑Stack Engineer',
    company: 'Nimbus Labs',
    period: '2019 — 2022',
    details: [
      'Built React + FastAPI apps with robust CI/CD pipelines',
      'Mentored team on testing and accessibility best practices'
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Freelance',
    period: '2016 — 2019',
    details: [
      'Delivered bespoke web apps and design systems for startups',
      'Consulted on architecture and developer experience'
    ],
  },
]

const threads = [
  {
    title: 'Shipping fast without breaking quality',
    snippet: 'A framework for balancing velocity with reliability in modern teams…',
    date: 'Aug 2025',
    href: '#',
  },
  {
    title: 'React performance playbook for 2025',
    snippet: 'From Suspense to memoization patterns — practical tips that matter…',
    date: 'Jul 2025',
    href: '#',
  },
  {
    title: 'Designing resilient APIs with FastAPI',
    snippet: 'Rate limits, idempotency keys, and schema evolution strategies…',
    date: 'Jun 2025',
    href: '#',
  },
  {
    title: 'Microfrontends, but make it simple',
    snippet: 'When to split, how to compose, and where the pitfalls hide…',
    date: 'May 2025',
    href: '#',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top header / name */}
      <header className="px-6 md:px-10 lg:px-14 py-6 sticky top-0 bg-white/80 backdrop-blur z-10 border-b border-green-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-green-600 text-white grid place-items-center font-semibold">SE</div>
            <div>
              <h1 className="text-lg md:text-xl font-semibold tracking-tight">Software Engineer</h1>
              <p className="text-xs text-gray-500">Building reliable, human‑centered software</p>
            </div>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium text-green-700 hover:text-green-800">
            <span>Get in touch</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </header>

      {/* Hero with Spline */}
      <section className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-14 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <div className="relative rounded-2xl border border-green-100 overflow-hidden bg-gradient-to-b from-green-50 to-white">
            <div className="h-[280px] sm:h-[320px] md:h-[360px]">
              <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="absolute inset-x-0 bottom-0 pointer-events-none h-24 bg-gradient-to-t from-white to-transparent" />
          </div>
          <div className="flex flex-col justify-center p-6 md:p-8 rounded-2xl border border-green-100 bg-white">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">Hi, I’m Alex. I turn ideas into dependable products.</h2>
            <p className="text-gray-600 leading-relaxed">
              I specialize in building performant web apps and thoughtful developer platforms. My work blends clean architecture with an eye for detail — from accessibility to delightful micro‑interactions.
            </p>
          </div>
        </div>
      </section>

      {/* Two-column layout */}
      <main className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
          {/* Left column: profile */}
          <aside className="lg:col-span-5 space-y-8">
            {/* Profile card */}
            <div className="rounded-2xl border border-green-100 bg-white p-6 md:p-7">
              <h3 className="text-lg font-semibold mb-4">Profile</h3>
              <p className="text-gray-600 leading-relaxed">
                Software engineer with a focus on product engineering, system design, and developer experience. I value clarity, performance, and well‑crafted interfaces.
              </p>
            </div>

            {/* Contact */}
            <div id="contact" className="rounded-2xl border border-green-100 bg-white p-6 md:p-7">
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-green-700" />
                  <a href="mailto:alex.engineer@example.com" className="hover:text-green-700">alex.engineer@example.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-green-700" />
                  <a href="tel:+1234567890" className="hover:text-green-700">+1 (234) 567‑890</a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={18} className="text-green-700" />
                  <span>San Francisco, CA</span>
                </li>
                <li className="flex items-center gap-3">
                  <Github size={18} className="text-green-700" />
                  <a href="https://github.com/yourhandle" target="_blank" rel="noreferrer" className="hover:text-green-700">github.com/yourhandle</a>
                </li>
                <li className="flex items-center gap-3">
                  <Linkedin size={18} className="text-green-700" />
                  <a href="https://www.linkedin.com/in/yourhandle" target="_blank" rel="noreferrer" className="hover:text-green-700">linkedin.com/in/yourhandle</a>
                </li>
                <li className="flex items-center gap-3">
                  <Globe size={18} className="text-green-700" />
                  <a href="https://yourdomain.dev" target="_blank" rel="noreferrer" className="hover:text-green-700">yourdomain.dev</a>
                </li>
              </ul>
            </div>

            {/* Experience */}
            <div className="rounded-2xl border border-green-100 bg-white p-6 md:p-7">
              <h3 className="text-lg font-semibold mb-4">Work Experience</h3>
              <div className="space-y-6">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="group">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium">{exp.role}</p>
                        <p className="text-sm text-gray-600">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar size={16} /> {exp.period}
                      </div>
                    </div>
                    <ul className="mt-3 list-disc list-inside text-sm text-gray-600 space-y-1">
                      {exp.details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="rounded-2xl border border-green-100 bg-white p-6 md:p-7">
              <h3 className="text-lg font-semibold mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'React', 'TypeScript', 'Node.js', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Docker', 'CI/CD', 'Design Systems', 'Testing'
                ].map((skill) => (
                  <span key={skill} className="text-xs px-3 py-1 rounded-full border border-green-200 text-green-800 bg-green-50">{skill}</span>
                ))}
              </div>
            </div>
          </aside>

          {/* Right column: threads/articles */}
          <section className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="text-green-700" size={18} />
              <h3 className="text-lg font-semibold">Threads & Articles</h3>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {threads.map((t, idx) => (
                <a key={idx} href={t.href} className="group rounded-2xl border border-green-100 bg-white p-6 hover:shadow-sm transition-shadow">
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="text-base md:text-lg font-medium group-hover:text-green-700">{t.title}</h4>
                    <span className="text-xs text-gray-500">{t.date}</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{t.snippet}</p>
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="rounded-2xl border border-green-200 bg-gradient-to-br from-green-50 to-white p-6 md:p-7 flex items-center justify-between">
              <div>
                <p className="font-medium">Open to impactful work and collaborations</p>
                <p className="text-sm text-gray-600">I love hard problems, friendly teams, and products that help people.</p>
              </div>
              <a href="#contact" className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors text-sm">
                Contact me
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 pb-12">
        <div className="rounded-2xl border border-green-100 bg-white p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Alex Engineer. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a className="hover:text-green-700" href="#">Privacy</a>
            <a className="hover:text-green-700" href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
