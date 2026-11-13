'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Building2,
  Check,
  ChevronRight,
  Code2,
  Factory,
  Globe2,
  GraduationCap,
  Heart,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sprout,
  Store,
  Shirt,
  UtensilsCrossed,
  Users,
  X,
  Zap,
  BriefcaseBusiness,
  CalendarDays,
  House,
  type LucideIcon,
} from 'lucide-react';

type Industry = {
  name: string;
  category: string;
  description: string;
  icon: LucideIcon;
  overview: string;
  details: string[];
};

const industries: Industry[] = [
  {
    name: 'IT & Digital Services',
    category: 'Digital & IT solutions',
    description: 'IT consulting, software development and system integration',
    icon: Code2,
    overview: 'Practical technology that helps organizations work smarter, connect systems and prepare for what comes next.',
    details: ['Digital transformation and IT advisory', 'Custom software and web applications', 'Cloud, ERP and system integration'],
  },
  {
    name: 'Infrastructure & EPC',
    category: 'EPC project delivery',
    description: 'Engineering, procurement and construction projects',
    icon: Building2,
    overview: 'End-to-end support for industrial, commercial and infrastructure projects, from planning through execution.',
    details: ['Industrial and commercial projects', 'Civil, structural and MEP works', 'Project procurement and management'],
  },
  {
    name: 'Manufacturing & Industrial',
    category: 'Industrial production',
    description: 'Industrial production and manufacturing solutions',
    icon: Factory,
    overview: 'Modern manufacturing support focused on efficient operations, quality and sustainable business growth.',
    details: ['Production planning and quality systems', 'Industrial automation and IoT', 'Supply chain and maintenance solutions'],
  },
  {
    name: 'Real Estate Development',
    category: 'Property development',
    description: 'Residential, commercial and industrial real estate',
    icon: House,
    overview: 'Development and advisory for places where people live, work, make and do business.',
    details: ['Residential and commercial projects', 'Industrial property development', 'Property planning and management'],
  },
  {
    name: 'Agriculture & Agri-Tech',
    category: 'Agriculture & agri-tech',
    description: 'Agricultural equipment and smart farming solutions',
    icon: Sprout,
    overview: 'Connecting agricultural businesses with equipment, expertise and technology for more productive operations.',
    details: ['Agricultural machinery and equipment', 'Smart farming and irrigation systems', 'Agri-tech consulting and support'],
  },
  {
    name: 'Textile & Design',
    category: 'Textiles, apparel & design',
    description: 'Textile machinery, equipment and design solutions',
    icon: Shirt,
    overview: 'Supporting textile businesses with the machinery, systems and services that keep production moving.',
    details: ['Textile machinery supply', 'Design and pattern systems', 'Installation, maintenance and training'],
  },
  {
    name: 'Food & Beverage',
    category: 'Food production & supply',
    description: 'Food production and processing solutions',
    icon: UtensilsCrossed,
    overview: 'Equipment and operational support for food producers, processors, bakeries and hospitality businesses.',
    details: ['Food processing and packaging', 'Commercial kitchen equipment', 'Production and supply chain support'],
  },
  {
    name: 'Retail Systems',
    category: 'Retail technology & systems',
    description: 'POS systems and retail automation',
    icon: Store,
    overview: 'Technology and operational systems that help retailers serve customers and manage stores more effectively.',
    details: ['POS and self-checkout systems', 'Inventory and barcode solutions', 'Retail automation and support'],
  },
  {
    name: 'Import & Export Trading',
    category: 'Global trade & logistics',
    description: 'Global sourcing and import-export services',
    icon: Globe2,
    overview: 'Trade and sourcing support to help businesses connect with suppliers and markets around the world.',
    details: ['Global sourcing and procurement', 'Trade documentation and compliance', 'Logistics coordination'],
  },
  {
    name: 'Ayurvedic & Wellness',
    category: 'Ayurvedic products & wellness',
    description: 'Ayurvedic and herbal wellness products',
    icon: Heart,
    overview: 'A bridge between traditional wellness products and the modern businesses that make them accessible.',
    details: ['Herbal and wellness products', 'Product sourcing and development', 'Brand and distribution support'],
  },
  {
    name: 'Education & Training',
    category: 'Learning & skill development',
    description: 'Educational institutions and digital learning',
    icon: GraduationCap,
    overview: 'Enabling learning organizations with educational services, technology and skills development.',
    details: ['Institution and training centre support', 'Digital learning and LMS solutions', 'Education consulting'],
  },
  {
    name: 'Recruitment & HR',
    category: 'Recruitment & people solutions',
    description: 'Recruitment, staffing and HR consultancy',
    icon: Users,
    overview: 'Helping organizations find the people and practical HR support they need to grow.',
    details: ['Recruitment and staffing', 'Domestic and international placement', 'HR advisory and skill development'],
  },
  {
    name: 'Event Management',
    category: 'Event planning & production',
    description: 'Weddings, corporate events and design services',
    icon: CalendarDays,
    overview: 'Thoughtful planning and coordination for gatherings, celebrations and business events.',
    details: ['Wedding and social event planning', 'Corporate events and exhibitions', 'Design, décor and coordination'],
  },
  {
    name: 'Consultancy & Business',
    category: 'Business advisory',
    description: 'Business consultancy and professional services',
    icon: BriefcaseBusiness,
    overview: 'Clear-eyed advice and hands-on project support to help organizations make progress.',
    details: ['Business and project advisory', 'Process improvement', 'Planning and market research'],
  },
  {
    name: 'Financial Services',
    category: 'Finance & business solutions',
    description: 'Financial products and banking services',
    icon: BarChart3,
    overview: 'Connecting customers with financial products through distribution and facilitation partners.',
    details: ['Loan sourcing and facilitation', 'Insurance product distribution', 'Financial product advisory'],
  },
];

const capabilities = [
  {
    number: '01',
    title: 'Technology',
    detail: 'Digital systems designed around the way your business works.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    icon: Code2,
    industry: 'IT & Digital Services',
  },
  {
    number: '02',
    title: 'Infrastructure',
    detail: 'From early planning to project delivery, built for the long term.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    icon: Building2,
    industry: 'Infrastructure & EPC',
  },
  {
    number: '03',
    title: 'Industry',
    detail: 'The expertise, equipment and systems that keep operations moving.',
    image: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1200&q=80',
    icon: Factory,
    industry: 'Manufacturing & Industrial',
  },
  {
    number: '04',
    title: 'Global trade',
    detail: 'Reliable connections between the right products and new markets.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80',
    icon: Globe2,
    industry: 'Import & Export Trading',
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const closeMenu = () => setMobileMenuOpen(false);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send your message. Please try again.');
      }

      setSubmitStatus('success');
      setSubmitMessage('Thanks for reaching out. Our team will be in touch soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    }
  };

  const navLinks = [
    { href: '#about', label: 'Who we are' },
    { href: '#capabilities', label: 'What we do' },
    { href: '#industries', label: 'Industries' },
  ];

  return (
    <main>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#" aria-label="DG techinfra home" onClick={closeMenu}>
            <Image className="brand-logo" src="/logo.svg?v=23" alt="DG techinfra" width={440} height={88} unoptimized />
          </a>

          <nav className={`main-nav${mobileMenuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
            {navLinks.map((link) => (
              <a href={link.href} key={link.href} onClick={closeMenu}>{link.label}</a>
            ))}
            <a className="nav-mobile-cta" href="#contact" onClick={closeMenu}>Let&apos;s talk <ArrowUpRight size={16} /></a>
          </nav>

          <a className="header-cta" href="#contact">Let&apos;s talk <ArrowUpRight size={16} /></a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-photo" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> A diversified enterprise from Hyderabad</p>
            <h1>Building what moves <em>business forward.</em></h1>
            <p className="hero-lede">
              One partner for technology, infrastructure and industry—bringing the right expertise together to turn ambition into action.
            </p>
            <div className="hero-actions">
              <a className="button button-gold" href="#capabilities">Discover what we do <ArrowRight size={17} /></a>
              <a className="text-link text-link-light" href="#about">Meet DG techinfra <ArrowDown size={16} /></a>
            </div>
          </div>
          <div className="hero-note">
            <span className="hero-note-mark"><Zap size={18} /></span>
            <span><strong>Connected expertise.</strong><br />Practical solutions, delivered.</span>
          </div>
          <div className="hero-index"><span>01</span><i />04</div>
        </div>
      </section>

      <section className="proof-bar" aria-label="DG techinfra at a glance">
        <div className="proof-inner">
          <p className="proof-intro">The strength of many.<br /><strong>The focus of one.</strong></p>
          <div className="proof-stat"><strong>15<span>+</span></strong><span>industry sectors</span></div>
          <div className="proof-stat"><strong>16<span>+</span></strong><span>years of experience</span></div>
          <div className="proof-stat"><strong>360<span>°</span></strong><span>from insight to execution</span></div>
          <a href="#industries" className="proof-link">Explore our reach <ArrowUpRight size={17} /></a>
        </div>
      </section>

      <section className="intro-section section-wrap" id="about">
        <div className="intro-kicker">
          <p className="eyebrow"><span className="eyebrow-line" /> Who we are</p>
          <span className="section-index">01 / OUR STORY</span>
        </div>
        <div className="intro-grid">
          <h2>Complex challenges.<br /><em>Connected thinking.</em></h2>
          <div className="intro-copy">
            <p className="intro-lede">
              DG techinfra is a multi-sector enterprise helping businesses make progress across technology, infrastructure, manufacturing and global trade.
            </p>
            <p>
              We bring different capabilities under one roof—combining industry knowledge, modern technology and dependable execution. From the first conversation to the final delivery, we make complex work feel more connected.
            </p>
            <a className="text-link" href="#contact">Let&apos;s build something together <ArrowRight size={16} /></a>
          </div>
        </div>
        <div className="intro-image">
          <div className="intro-image-overlay" />
          <div className="intro-image-caption"><span>One connected partner</span><span>Many ways to move forward <ArrowUpRight size={16} /></span></div>
          <div className="intro-image-stamp"><span>DG</span><small>Connecting<br />solutions</small></div>
        </div>
      </section>

      <section className="capabilities-section" id="capabilities">
        <div className="section-wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span className="eyebrow-line" /> What we do</p>
              <h2>Expertise that works<br /><em>better together.</em></h2>
            </div>
            <p className="section-heading-copy">We connect specialist capabilities to help you solve today&apos;s challenges and shape what comes next.</p>
          </div>
          <div className="capability-grid">
            {capabilities.map((capability) => {
              const CapabilityIcon = capability.icon;
              return (
                <button className="capability-card" key={capability.number} type="button" onClick={() => {
                  const industry = industries.find((item) => item.name === capability.industry);
                  if (industry) setSelectedIndustry(industry);
                }}>
                  <span className="capability-image" style={{ backgroundImage: `url("${capability.image}")` }} />
                  <span className="capability-shade" />
                  <span className="capability-top"><span>{capability.number}</span><CapabilityIcon size={20} /></span>
                  <span className="capability-bottom">
                    <span className="capability-title">{capability.title}<ArrowUpRight size={18} /></span>
                    <span className="capability-detail">{capability.detail}</span>
                  </span>
                </button>
              );
            })}
          </div>
          <div className="capability-foot">
            <span>From insight to implementation, we stay close to the work.</span>
            <a className="text-link" href="#industries">See all our industries <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="industries-section section-wrap" id="industries">
        <div className="section-heading industries-heading">
          <div>
            <p className="eyebrow"><span className="eyebrow-line" /> Where we work</p>
            <h2>Many industries.<br /><em>One shared purpose.</em></h2>
          </div>
          <p className="section-heading-copy">Explore our connected portfolio. Choose a sector to discover the experience and solutions we bring to it.</p>
        </div>
        <div className="industry-grid">
          {industries.map((industry, index) => {
            const IndustryIcon = industry.icon;
            return (
              <button
                className="industry-card"
                key={industry.name}
                type="button"
                onClick={() => setSelectedIndustry(industry)}
                aria-label={`Learn about ${industry.name}`}
              >
                <span className="industry-card-top"><span>{String(index + 1).padStart(2, '0')}</span><IndustryIcon size={21} strokeWidth={1.7} /></span>
                <span className="industry-name">{industry.name}</span>
                <span className="industry-category">{industry.category}</span>
                <span className="industry-arrow"><ArrowUpRight size={17} /></span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="commitment-section">
        <div className="section-wrap commitment-inner">
          <div className="commitment-mark"><span>DG</span><i /><i /><i /></div>
          <div className="commitment-copy">
            <p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> How we work</p>
            <h2>Good work is built<br />on <em>trust and follow-through.</em></h2>
            <p>We listen closely, bring the right people together and stay accountable from the first plan to the finished work.</p>
          </div>
          <div className="commitment-points">
            <p><Check size={17} /> Clear, collaborative planning</p>
            <p><Check size={17} /> Expertise across connected sectors</p>
            <p><Check size={17} /> Reliable delivery and support</p>
          </div>
        </div>
      </section>

      <section className="contact-section section-wrap" id="contact">
        <div className="contact-heading">
          <p className="eyebrow"><span className="eyebrow-line" /> Start a conversation</p>
          <h2>Let&apos;s make<br /><em>progress together.</em></h2>
          <p>Have a project in mind or a challenge to solve? Tell us a little about it. We&apos;ll be glad to talk.</p>
          <div className="contact-details">
            <a href="tel:+919848005059"><span className="contact-icon"><Phone size={17} /></span><span><small>Call us</small>+91 98480 05059</span></a>
            <a href="mailto:connect@dgtechinfra.com"><span className="contact-icon"><Mail size={17} /></span><span><small>Email us</small>connect@dgtechinfra.com</span></a>
            <div><span className="contact-icon"><MapPin size={17} /></span><span><small>Visit us</small>5, Nehru Outer Ring Road, Sambhupur, Dundigal, Hyderabad, Telangana 500043</span></div>
          </div>
        </div>
        <div className="contact-form-card">
          <div className="form-heading"><span>01 — Tell us about it</span><span>We typically reply within 1–2 business days</span></div>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="contact-name">Your name</label>
            <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="How should we address you?" value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} required />
            <label htmlFor="contact-email">Work email</label>
            <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} required />
            <label htmlFor="contact-message">What would you like to work on?</label>
            <textarea id="contact-message" name="message" rows={4} maxLength={5000} placeholder="A few details about your project or question..." value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} required />
            {submitStatus !== 'idle' && (
              <p className={`form-status ${submitStatus}`} role="status" aria-live="polite">
                {submitStatus === 'loading' ? 'Sending your message…' : submitMessage}
              </p>
            )}
            <button className="button button-navy form-submit" type="submit" disabled={submitStatus === 'loading'}>
              {submitStatus === 'loading' ? 'Sending…' : 'Send your message'} <ArrowRight size={17} />
            </button>
            <p className="form-privacy">Your details are only used to respond to your enquiry.</p>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-main section-wrap">
          <div className="footer-brand-block">
            <a className="brand brand-footer" href="#" aria-label="DG techinfra home">
              <Image className="brand-logo" src="/logo-inverse.svg?v=23" alt="DG techinfra" width={440} height={88} unoptimized />
            </a>
            <p>Integrated technology, infrastructure and industrial solutions—connected by one team.</p>
          </div>
          <div className="footer-column">
            <span className="footer-label">Explore</span>
            <a href="#about">Who we are</a>
            <a href="#capabilities">What we do</a>
            <a href="#industries">Industries</a>
          </div>
          <div className="footer-column">
            <span className="footer-label">Get in touch</span>
            <a href="tel:+919848005059">+91 98480 05059</a>
            <a href="mailto:connect@dgtechinfra.com">connect@dgtechinfra.com</a>
            <span>Hyderabad, Telangana, India</span>
            <span className="footer-gstin">GSTIN: 36AAMCD6520D1ZT</span>
          </div>
          <a className="footer-top" href="#" aria-label="Back to top"><ChevronRight size={20} /></a>
        </div>
        <div className="footer-bottom section-wrap">
          <span>© 2026 DHRITI GLOBAL TECHNOLOGIES AND INFRASTRUCTURE PRIVATE LIMITED. All rights reserved.</span>
          <span>Built on connected thinking.</span>
        </div>
      </footer>

      {selectedIndustry && (
        <div className="modal-backdrop" role="presentation" onClick={() => setSelectedIndustry(null)}>
          <section className="industry-modal" role="dialog" aria-modal="true" aria-labelledby="industry-modal-title" onClick={(event) => event.stopPropagation()}>
            <div className="modal-top">
              <span className="modal-icon"><selectedIndustry.icon size={25} /></span>
              <button className="modal-close" type="button" aria-label="Close industry details" onClick={() => setSelectedIndustry(null)}><X size={21} /></button>
            </div>
            <p className="eyebrow"><span className="eyebrow-line" /> {selectedIndustry.category}</p>
            <h2 id="industry-modal-title">{selectedIndustry.name}</h2>
            <p className="modal-description">{selectedIndustry.description}</p>
            <p className="modal-overview">{selectedIndustry.overview}</p>
            <h3>How we can help</h3>
            <ul>{selectedIndustry.details.map((detail) => <li key={detail}><Check size={16} />{detail}</li>)}</ul>
            <a className="button button-navy modal-cta" href="#contact" onClick={() => setSelectedIndustry(null)}>Talk to our team <ArrowRight size={17} /></a>
          </section>
        </div>
      )}
    </main>
  );
}
