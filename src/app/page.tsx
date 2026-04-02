import Image from "next/image";
import {
  Eye,
  Award,
  Users,
  Lightbulb,
  GraduationCap,
  Heart,
  Target,
  Building2,
  ExternalLink,
  Mail,
  Phone,
  Globe,
  School,
  ArrowRight,
} from "lucide-react";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-base font-semibold text-accent tracking-tight">
              Toriano Dewberry, LDO
            </span>
            <div className="hidden md:flex items-center gap-8 text-sm">
              <a href="#about" className="text-muted hover:text-foreground transition-colors">About</a>
              <a href="#services" className="text-muted hover:text-foreground transition-colors">Services</a>
              <a href="#community" className="text-muted hover:text-foreground transition-colors">Community</a>
              <a href="#credentials" className="text-muted hover:text-foreground transition-colors">Credentials</a>
              <a href="#vision" className="text-muted hover:text-foreground transition-colors">Vision</a>
              <a
                href="https://myeyerx.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-light font-medium transition-colors"
              >
                MyEyeRx.net
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="flex-shrink-0">
              <Image
                src="/toriano-dewberry.jpg"
                alt="Toriano Dewberry, Licensed Dispensing Optician"
                width={240}
                height={240}
                className="rounded-2xl object-cover shadow-sm"
                priority
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight mb-4">
                Toriano Dewberry
              </h1>
              <p className="text-accent font-medium text-sm tracking-wide uppercase mb-5">
                Licensed Optician &middot; Entrepreneur &middot; Inventor
              </p>
              <p className="text-muted text-lg leading-relaxed max-w-lg mb-8">
                Founder and CEO of MyEyeRx.net. Dedicated to expanding access to
                professional eye care through innovation, community outreach, and
                a commitment to serving those who need it most.
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                <a
                  href="https://myeyerx.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
                >
                  Visit MyEyeRx.net
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/toriano-dewberry-33882939/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-border hover:border-accent/40 text-muted hover:text-foreground px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  LinkedIn
                </a>
                <a
                  href="https://www.facebook.com/toriano1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-border hover:border-accent/40 text-muted hover:text-foreground px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
                >
                  <FacebookIcon className="w-4 h-4" />
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-border" />
      </div>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-10">
            About
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-muted leading-relaxed mb-5">
                Toriano Dewberry is a licensed dispensing optician based in the
                Detroit metropolitan area with over a decade of experience in eye
                care. As the founder and CEO of MyEyeRx.net, he built one of the
                first online platforms specializing in medical exemption
                prescriptions for window tinting — a service that directly improves
                driving safety and comfort for individuals with photosensitivity
                and other light-related conditions.
              </p>
              <p className="text-muted leading-relaxed">
                His approach to eye care is grounded in accessibility. Toriano
                believes that professional vision services should be available to
                everyone, regardless of income, insurance status, or geography.
              </p>
            </div>
            <div>
              <p className="text-muted leading-relaxed mb-5">
                In addition to MyEyeRx, Toriano is the principal of Dewberry
                Optical, a designer eyewear brand, and DewberryMed, which provides
                eye care exams and prescription eyeglasses for patients on
                Medicaid and other government insurance programs.
              </p>
              <p className="text-muted leading-relaxed">
                Across all of his ventures, a single mission holds: eliminate the
                barriers that prevent people from receiving quality eye care, and
                bring innovative, practical solutions to underserved communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services / Ventures Section */}
      <section id="services" className="py-20 bg-section-alt">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-10">
            Professional Ventures
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="https://myeyerx.net"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-7 border border-border hover:border-accent/30 transition-colors group"
            >
              <Globe className="w-5 h-5 text-accent mb-4" />
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                MyEyeRx.net
                <ExternalLink className="w-3.5 h-3.5 text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                Online eye care consultancy providing medical exemption
                prescriptions for window tinting through licensed virtual
                consultations.
              </p>
            </a>
            <div className="bg-white rounded-xl p-7 border border-border">
              <Eye className="w-5 h-5 text-accent mb-4" />
              <h3 className="font-semibold mb-2">Dewberry Optical</h3>
              <p className="text-muted text-sm leading-relaxed">
                Designer eyewear brand offering high-quality frames and lenses,
                combining modern style with optical precision and durability.
              </p>
            </div>
            <div className="bg-white rounded-xl p-7 border border-border">
              <Heart className="w-5 h-5 text-accent mb-4" />
              <h3 className="font-semibold mb-2">DewberryMed</h3>
              <p className="text-muted text-sm leading-relaxed">
                Eye care exams and prescription eyeglasses for patients on
                Medicaid and government insurance programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact Section */}
      <section id="community" className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-10">
            Community Impact
          </h2>
          <div className="grid md:grid-cols-5 gap-10">
            <div className="md:col-span-3">
              <div className="flex items-center gap-3 mb-6">
                <School className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-semibold">In-School Eye Exams</h3>
              </div>
              <p className="text-muted leading-relaxed mb-5">
                In classrooms across Detroit and the greater Metro area, many
                children struggle to learn simply because they cannot see
                clearly. Uncorrected vision problems lead to lower grades,
                behavioral challenges, and missed opportunities. For families
                without resources, accessing care can feel impossible.
              </p>
              <p className="text-muted leading-relaxed mb-5">
                Toriano and the MyEyeRx team bring Medicaid-friendly eye exams
                and prescription eyeglasses directly into public schools. Working
                alongside social workers, school counselors, educators, and
                parents, they ensure students receive the care they need to
                thrive — both in and out of the classroom.
              </p>
              <a
                href="https://myeyerx.net/in-school-exams/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-light text-sm font-medium transition-colors"
              >
                Learn about the in-school program
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="md:col-span-2 space-y-5">
              <div className="bg-section-alt rounded-xl p-5 border border-border">
                <div className="flex items-start gap-3">
                  <Eye className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold mb-1">Free Vision Screenings</h4>
                    <p className="text-muted text-sm leading-relaxed">
                      Comprehensive screenings to identify children who need
                      corrective lenses, at no cost to families.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-section-alt rounded-xl p-5 border border-border">
                <div className="flex items-start gap-3">
                  <Users className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold mb-1">Medicaid-Covered Eyeglasses</h4>
                    <p className="text-muted text-sm leading-relaxed">
                      Prescription eyeglasses provided through Medicaid,
                      removing financial barriers for families.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-section-alt rounded-xl p-5 border border-border">
                <div className="flex items-start gap-3">
                  <Heart className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold mb-1">School Partnerships</h4>
                    <p className="text-muted text-sm leading-relaxed">
                      Collaborating with educators and counselors to build a
                      lasting support network for children&apos;s vision health.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section id="credentials" className="py-20 bg-section-alt">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-10">
            Credentials &amp; Expertise
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white rounded-xl p-6 border border-border">
              <Award className="w-5 h-5 text-accent mb-3" />
              <h3 className="text-sm font-semibold mb-1.5">Licensed Dispensing Optician</h3>
              <p className="text-muted text-sm leading-relaxed">
                Professionally licensed to dispense, fit, and adjust corrective
                eyewear in the state of Michigan.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-border">
              <GraduationCap className="w-5 h-5 text-accent mb-3" />
              <h3 className="text-sm font-semibold mb-1.5">Wayne County Community College</h3>
              <p className="text-muted text-sm leading-relaxed">
                Formal education in opticianry and eye care professional
                development.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-border">
              <Lightbulb className="w-5 h-5 text-accent mb-3" />
              <h3 className="text-sm font-semibold mb-1.5">Inventor</h3>
              <p className="text-muted text-sm leading-relaxed">
                Developing original solutions at the intersection of eye care
                technology and patient accessibility.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-border">
              <Building2 className="w-5 h-5 text-accent mb-3" />
              <h3 className="text-sm font-semibold mb-1.5">Founder &amp; CEO</h3>
              <p className="text-muted text-sm leading-relaxed">
                Leading MyEyeRx.net, Dewberry Optical, and DewberryMed as a
                multi-venture operator.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Ambitions Section */}
      <section id="vision" className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-10">
            Vision &amp; Ambitions
          </h2>
          <div className="grid md:grid-cols-2 gap-10 mb-10">
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Target className="w-4 h-4 text-accent" />
                Transforming Eye Care Access
              </h3>
              <p className="text-muted leading-relaxed mb-4">
                Toriano envisions a future where quality eye care is a right, not
                a privilege. His ambition is to fundamentally change how people
                access vision services — breaking down barriers of cost,
                geography, and insurance that leave millions underserved.
              </p>
              <p className="text-muted leading-relaxed">
                Through telehealth innovation and community-based delivery, he is
                building a model for how eye care can reach every community.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Eye className="w-4 h-4 text-accent" />
                Advancing the Industry
              </h3>
              <p className="text-muted leading-relaxed mb-4">
                The eye care industry has long overlooked key areas — such as the
                clinical benefits of medical window tinting for photosensitive
                patients. Toriano identified this gap and built an entire platform
                to address it.
              </p>
              <p className="text-muted leading-relaxed">
                His roadmap includes expanding in-school programs nationally,
                growing the Dewberry Optical brand, and introducing new
                technologies that streamline how patients receive care.
              </p>
            </div>
          </div>
          <div className="bg-section-alt rounded-xl p-8 border border-border">
            <h3 className="font-semibold mb-4">The Entrepreneurial Approach</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <p className="text-muted leading-relaxed">
                Every venture Toriano builds addresses a real, documented need —
                from making medical tint prescriptions accessible online, to
                providing eye exams in schools where children have no other path
                to care. His approach is methodical: identify the gap, build the
                solution, then scale it.
              </p>
              <div>
                <p className="text-muted leading-relaxed mb-4">
                  For Toriano, entrepreneurship is not about building businesses
                  for their own sake — it is about creating systems that generate
                  lasting, measurable impact in people&apos;s lives.
                </p>
                <blockquote className="border-l-2 border-accent pl-4 text-foreground italic text-sm">
                  &ldquo;Strategy without tactics is the slowest route to victory.
                  Tactics without strategy is the noise before defeat.&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Interests Section */}
      <section id="hobbies" className="py-20 bg-section-alt">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-10">
            Personal Interests
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="bg-white rounded-xl p-6 border border-border">
              <h3 className="text-sm font-semibold mb-2">Sports &amp; Fitness</h3>
              <p className="text-muted text-sm leading-relaxed">
                A lifelong sports enthusiast who draws parallels between athletic
                discipline and business execution.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-border">
              <h3 className="text-sm font-semibold mb-2">Continuous Learning</h3>
              <p className="text-muted text-sm leading-relaxed">
                Consistently studying advances in eye care technology, business
                strategy, and health care policy.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-border">
              <h3 className="text-sm font-semibold mb-2">Community Engagement</h3>
              <p className="text-muted text-sm leading-relaxed">
                Actively involved in mentorship, local initiatives, and building
                support networks across the Detroit area.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-border">
              <h3 className="text-sm font-semibold mb-2">Innovation &amp; Invention</h3>
              <p className="text-muted text-sm leading-relaxed">
                Passionate about developing original ideas at the intersection of
                health care and technology.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-border">
              <h3 className="text-sm font-semibold mb-2">Family</h3>
              <p className="text-muted text-sm leading-relaxed">
                Motivated by the desire to build a meaningful legacy and create
                opportunities for the next generation.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-border">
              <h3 className="text-sm font-semibold mb-2">Travel &amp; Culture</h3>
              <p className="text-muted text-sm leading-relaxed">
                Enjoys exploring new places and perspectives that inform both his
                personal outlook and professional approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
            Get in Touch
          </h2>
          <p className="text-muted max-w-md mx-auto mb-8 leading-relaxed">
            For inquiries about eye care services, business collaboration, or
            community partnerships.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <a
              href="https://myeyerx.net"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
            >
              <Globe className="w-4 h-4" />
              MyEyeRx.net
            </a>
            <a
              href="https://www.linkedin.com/in/toriano-dewberry-33882939/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border hover:border-accent/40 text-muted hover:text-foreground px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="https://www.facebook.com/toriano1/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border hover:border-accent/40 text-muted hover:text-foreground px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
            >
              <FacebookIcon className="w-4 h-4" />
              Facebook
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-muted text-sm">
            <a
              href="tel:7346441804"
              className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              734-644-1804
            </a>
            <a
              href="mailto:Tory@myeyerx.net"
              className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              Tory@myeyerx.net
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
            <p>&copy; {new Date().getFullYear()} Toriano Dewberry. All rights reserved.</p>
            <div className="flex items-center gap-5">
              <a
                href="https://myeyerx.net"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                MyEyeRx.net
              </a>
              <a
                href="https://www.linkedin.com/in/toriano-dewberry-33882939/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
