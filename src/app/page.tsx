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
  ChevronDown,
  School,
  Sparkles,
  Rocket,
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
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-card-border/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-lg font-bold gradient-text">
              Toriano Dewberry
            </span>
            <div className="hidden md:flex items-center gap-6 text-sm text-muted">
              <a href="#about" className="hover:text-foreground transition-colors">About</a>
              <a href="#ventures" className="hover:text-foreground transition-colors">Ventures</a>
              <a href="#community" className="hover:text-foreground transition-colors">Community</a>
              <a href="#credentials" className="hover:text-foreground transition-colors">Credentials</a>
              <a href="#vision" className="hover:text-foreground transition-colors">Vision</a>
              <a href="#hobbies" className="hover:text-foreground transition-colors">Hobbies</a>
              <a
                href="https://myeyerx.net"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent hover:bg-accent-light text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
              >
                Visit MyEyeRx
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-shrink-0 animate-fade-in-up">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-accent to-gold rounded-full blur-sm opacity-60" />
                <Image
                  src="/toriano-dewberry.jpg"
                  alt="Toriano Dewberry"
                  width={280}
                  height={280}
                  className="relative rounded-full object-cover border-4 border-card-bg"
                  priority
                />
              </div>
            </div>
            <div className="text-center lg:text-left animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <p className="text-accent-light font-medium tracking-wider uppercase text-sm mb-3">
                Optician &bull; Entrepreneur &bull; Innovator
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Toriano{" "}
                <span className="gradient-text">Dewberry</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted max-w-xl leading-relaxed mb-8">
                CEO of MyEyeRx.net &amp; Dewberry Optical. Revolutionizing eye care
                access, one community at a time. Bringing vision services into
                schools and pioneering online eye care solutions.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <a
                  href="https://myeyerx.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white px-6 py-3 rounded-full font-medium transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  MyEyeRx.net
                </a>
                <a
                  href="https://dewberryoptical.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-card-border hover:border-accent text-foreground px-6 py-3 rounded-full font-medium transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  Dewberry Optical
                </a>
                <a
                  href="https://www.linkedin.com/in/toriano-dewberry-33882939/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-card-border hover:border-accent text-foreground p-3 rounded-full transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/toriano1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-card-border hover:border-accent text-foreground p-3 rounded-full transition-colors"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-foreground transition-colors animate-bounce"
        >
          <ChevronDown className="w-6 h-6" />
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent-light font-medium tracking-wider uppercase text-sm mb-3">
              Who I Am
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              About <span className="gradient-text">Toriano</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <Eye className="w-6 h-6 text-accent-light" />
                The Eye Care Professional
              </h3>
              <p className="text-muted leading-relaxed">
                Toriano Dewberry is a licensed optician based in the Detroit Metro area
                with a deep passion for making quality eye care accessible to everyone.
                As the founder and CEO of MyEyeRx.net, he pioneered one of the first
                online eye care consultancies specializing in medical exemption
                prescriptions for window tinting — a service that enhances driving
                safety and comfort for individuals with light sensitivity conditions.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <Building2 className="w-6 h-6 text-gold" />
                The Entrepreneur
              </h3>
              <p className="text-muted leading-relaxed">
                Beyond MyEyeRx, Toriano is also the owner of Dewberry Optical, a
                designer eyewear brand, and DewberryMed, which provides quality eyecare
                exams and glasses for individuals on government insurance programs. His
                entrepreneurial drive is fueled by a singular mission: to eliminate
                barriers to eye care and bring innovative solutions to underserved
                communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ventures Section */}
      <section id="ventures" className="py-24 relative bg-card-bg/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent-light font-medium tracking-wider uppercase text-sm mb-3">
              Business Portfolio
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Entrepreneurial <span className="gradient-text">Ventures</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="https://myeyerx.net"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-8 hover:border-accent/50 transition-all group"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <Globe className="w-6 h-6 text-accent-light" />
              </div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                MyEyeRx.net
                <ExternalLink className="w-4 h-4 text-muted group-hover:text-accent-light transition-colors" />
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                The pioneering online eye care consultancy specializing in medical
                exemption prescriptions for window tinting. Connecting patients with
                licensed doctors through virtual consultations for enhanced driving
                safety and comfort.
              </p>
            </a>
            <a
              href="https://dewberryoptical.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-8 hover:border-accent/50 transition-all group"
            >
              <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                <Eye className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                Dewberry Optical
                <ExternalLink className="w-4 h-4 text-muted group-hover:text-gold transition-colors" />
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                A designer eyewear brand offering stylish, high-quality frames and
                lenses. The &ldquo;Big&rdquo; collection features bold designs that combine
                fashion-forward style with optical precision and comfort.
              </p>
            </a>
            <div className="glass-card rounded-2xl p-8">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-5">
                <Heart className="w-6 h-6 text-accent-light" />
              </div>
              <h3 className="text-xl font-semibold mb-3">DewberryMed</h3>
              <p className="text-muted text-sm leading-relaxed">
                Providing quality eye care exams and prescription eyeglasses for
                individuals on government insurance programs, including Medicaid.
                Making professional eye care accessible to those who need it most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact Section */}
      <section id="community" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent-light font-medium tracking-wider uppercase text-sm mb-3">
              Making a Difference
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Community <span className="gradient-text">Impact</span>
            </h2>
          </div>
          <div className="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <School className="w-6 h-6 text-accent-light" />
                  </div>
                  <h3 className="text-2xl font-bold">In-School Eye Exams</h3>
                </div>
                <p className="text-muted leading-relaxed mb-6">
                  Every child deserves the gift of clear vision. Toriano and the MyEyeRx
                  team bring Medicaid-friendly eye exams and prescription eyeglasses
                  directly into public schools across Detroit and the greater Metro area,
                  ensuring access to quality eye care where it&apos;s needed most.
                </p>
                <p className="text-muted leading-relaxed mb-6">
                  Working alongside social workers, school counselors, educators, and
                  parents, Toriano ensures students get the care they need to thrive —
                  both in and out of the classroom. Uncorrected vision problems can lead
                  to lower grades, behavioral challenges, and missed opportunities. His
                  mobile children&apos;s optical services are changing that, one school at a
                  time.
                </p>
                <a
                  href="https://myeyerx.net/in-school-exams/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent-light hover:text-accent font-medium transition-colors"
                >
                  Learn more about in-school programs
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div className="space-y-6">
                <div className="glass-card rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Eye className="w-5 h-5 text-accent-light" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Free Vision Screenings</h4>
                      <p className="text-muted text-sm">
                        Comprehensive screenings to identify children who need corrective
                        lenses, delivered at no cost to families.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="glass-card rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Medicaid-Covered Eyeglasses</h4>
                      <p className="text-muted text-sm">
                        Prescription eyeglasses provided through Medicaid coverage,
                        removing financial barriers for families.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="glass-card rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Heart className="w-5 h-5 text-accent-light" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Community Partnerships</h4>
                      <p className="text-muted text-sm">
                        Collaborating with educators, counselors, and parents to create a
                        network of support for children&apos;s vision health.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section id="credentials" className="py-24 relative bg-card-bg/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent-light font-medium tracking-wider uppercase text-sm mb-3">
              Qualifications
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Credentials &amp; <span className="gradient-text">Expertise</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7 text-accent-light" />
              </div>
              <h3 className="font-semibold mb-2">Licensed Optician</h3>
              <p className="text-muted text-sm">
                Professionally licensed eye care specialist serving the Michigan community
              </p>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-semibold mb-2">Wayne County Community College</h3>
              <p className="text-muted text-sm">
                Education focused on opticianry and eye care professional development
              </p>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-7 h-7 text-accent-light" />
              </div>
              <h3 className="font-semibold mb-2">Inventor</h3>
              <p className="text-muted text-sm">
                Developing innovative solutions at the intersection of eye care and technology
              </p>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-semibold mb-2">Multi-Business CEO</h3>
              <p className="text-muted text-sm">
                Leading MyEyeRx.net, Dewberry Optical, and DewberryMed simultaneously
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Ambitions Section */}
      <section id="vision" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent-light font-medium tracking-wider uppercase text-sm mb-3">
              Looking Forward
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Dreams &amp; <span className="gradient-text">Ambitions</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-accent-light" />
                </div>
                <h3 className="text-xl font-semibold">Transforming Eye Care</h3>
              </div>
              <p className="text-muted leading-relaxed mb-4">
                Toriano envisions a future where quality eye care is not a privilege but a
                right. His ambition is to fundamentally change how people access eye care
                services — breaking down the barriers of cost, geography, and
                accessibility that leave millions underserved.
              </p>
              <p className="text-muted leading-relaxed">
                Through telehealth innovation and community-based delivery models, he&apos;s
                building a blueprint for how eye care can reach every corner of every
                community.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-xl font-semibold">Big Changes in the Eye Care Space</h3>
              </div>
              <p className="text-muted leading-relaxed mb-4">
                The eye care industry has long overlooked key areas — like the benefits
                of medical window tinting for light-sensitive individuals. Toriano
                identified this gap and built an entire platform to address it, proving
                that innovation comes from those closest to the problem.
              </p>
              <p className="text-muted leading-relaxed">
                His goal is to continue pushing boundaries: expanding in-school eye care
                programs nationwide, growing the Dewberry Optical brand, and introducing
                new technologies that make eye care more efficient and accessible.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-8 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-accent-light" />
                </div>
                <h3 className="text-xl font-semibold">The Entrepreneurial Mindset</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <p className="text-muted leading-relaxed">
                  Toriano approaches business with a philosophy rooted in service. Every
                  venture he builds solves a real problem — whether it&apos;s making medical
                  tint prescriptions available online, bringing designer eyewear to
                  market, or providing eye exams in schools where children have no other
                  access to care.
                </p>
                <p className="text-muted leading-relaxed">
                  His entrepreneurial bend isn&apos;t just about building businesses — it&apos;s
                  about building systems that create lasting impact. As he often reflects:
                  <span className="block mt-3 text-foreground italic border-l-2 border-accent pl-4">
                    &ldquo;Strategy without tactics is the slowest route to victory. Tactics
                    without strategy is the noise before defeat.&rdquo;
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="py-24 relative bg-card-bg/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent-light font-medium tracking-wider uppercase text-sm mb-3">
              Beyond Business
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Interests &amp; <span className="gradient-text">Hobbies</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-card rounded-2xl p-6">
              <div className="text-3xl mb-4">&#x1F3C8;</div>
              <h3 className="font-semibold mb-2">Sports &amp; Fitness</h3>
              <p className="text-muted text-sm leading-relaxed">
                A lifelong sports enthusiast who stays active and draws parallels between
                athletic discipline and business strategy.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <div className="text-3xl mb-4">&#x1F4DA;</div>
              <h3 className="font-semibold mb-2">Continuous Learning</h3>
              <p className="text-muted text-sm leading-relaxed">
                Always studying the latest in eye care technology, business strategy, and
                innovations that can improve the lives of his patients and community.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <div className="text-3xl mb-4">&#x1F91D;</div>
              <h3 className="font-semibold mb-2">Community Building</h3>
              <p className="text-muted text-sm leading-relaxed">
                Deeply invested in giving back, whether through school programs,
                mentoring aspiring entrepreneurs, or supporting local initiatives in the
                Detroit area.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <div className="text-3xl mb-4">&#x1F4A1;</div>
              <h3 className="font-semibold mb-2">Invention &amp; Innovation</h3>
              <p className="text-muted text-sm leading-relaxed">
                Passionate about inventing new solutions. Toriano loves brainstorming
                ideas that sit at the intersection of health care and technology.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <div className="text-3xl mb-4">&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;&#x200D;&#x1F466;</div>
              <h3 className="font-semibold mb-2">Family &amp; Faith</h3>
              <p className="text-muted text-sm leading-relaxed">
                At the core of everything is family. Toriano is motivated by the desire
                to build a legacy that his family can be proud of.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <div className="text-3xl mb-4">&#x1F30D;</div>
              <h3 className="font-semibold mb-2">Travel &amp; Culture</h3>
              <p className="text-muted text-sm leading-relaxed">
                Enjoys exploring new places and cultures, gaining perspectives that
                enrich both his personal life and his approach to business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-gold/5" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Let&apos;s <span className="gradient-text">Connect</span>
              </h2>
              <p className="text-muted max-w-lg mx-auto mb-8 leading-relaxed">
                Whether you&apos;re interested in eye care services, business
                collaboration, or community partnerships — I&apos;d love to hear from you.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                <a
                  href="https://myeyerx.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white px-6 py-3 rounded-full font-medium transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  MyEyeRx.net
                </a>
                <a
                  href="https://www.linkedin.com/in/toriano-dewberry-33882939/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-card-border hover:border-accent text-foreground px-6 py-3 rounded-full font-medium transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  LinkedIn
                </a>
                <a
                  href="https://www.facebook.com/toriano1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-card-border hover:border-accent text-foreground px-6 py-3 rounded-full font-medium transition-colors"
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
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-card-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
            <p>&copy; {new Date().getFullYear()} Toriano Dewberry. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a
                href="https://myeyerx.net"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                MyEyeRx.net
              </a>
              <a
                href="https://dewberryoptical.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                Dewberry Optical
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
