'use client';

import { useState } from 'react';
import { Menu, X, ArrowRight, Cloud, Building2, TrendingUp, Users, Briefcase, Cpu, Truck, GraduationCap, Mail, Phone, MapPin, CheckCircle, Store, Sprout, Zap, BookOpen, Factory, Code2, Leaf, Shirt, UtensilsCrossed, Globe, Heart, BarChart3, Home as HomeIcon } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  // 15 Industries with complete information
  const industriesData: { [key: string]: { icon: any; category: string; description: string; details: string[]; solutions: string } } = {
    'IT & Digital Services': {
      icon: Code2,
      category: 'Technology',
      description: 'IT consulting, software development, system integration',
      details: [
        'IT advisory and digital transformation consulting',
        'Software application design and development',
        'Enterprise systems and ERP implementation',
        'Web and mobile application development',
        'Cloud infrastructure and consulting',
        'Computer hardware trading and supply',
        'POS and retail automation systems',
        'Networking and security infrastructure',
        'System integration and managed services',
        'Technical support and IT project management'
      ],
      solutions: 'We provide comprehensive IT and digital services ranging from strategic consulting to implementation. Our expertise includes cloud solutions, ERP systems, custom software development, hardware procurement, and ongoing managed services for businesses of all sizes.'
    },

    'Infrastructure & EPC': {
      icon: Building2,
      category: 'Construction & Engineering',
      description: 'Engineering, procurement & construction projects',
      details: [
        'Engineering, Procurement & Construction (EPC) projects',
        'Industrial and commercial buildings',
        'Warehouse and factory infrastructure',
        'Retail infrastructure development',
        'Civil and structural works',
        'Steel structures and pre-engineered buildings',
        'Mechanical and electrical systems',
        'Construction materials supply',
        'Industrial equipment and systems',
        'Project management and execution'
      ],
      solutions: 'We deliver end-to-end EPC solutions for industrial, commercial, and infrastructure projects. From design and procurement to construction and commissioning, we ensure quality execution, timeline adherence, and cost optimization.'
    },

    'Manufacturing & Industrial': {
      icon: Factory,
      category: 'Manufacturing',
      description: 'Industrial production and manufacturing solutions',
      details: [
        'Manufacturing operations and production planning',
        'ERP systems for manufacturing',
        'IoT and industrial automation',
        'Quality control and assurance systems',
        'Iron and steel trading and supply',
        'Construction materials manufacturing',
        'Warehouse systems and storage solutions',
        'Material handling equipment',
        'Supply chain integration',
        'Preventive maintenance solutions'
      ],
      solutions: 'We support manufacturers with comprehensive solutions including production planning, automation, quality management, supply chain optimization, and Industry 4.0 implementation for improved efficiency and profitability.'
    },

    'Real Estate Development': {
      icon: HomeIcon,
      category: 'Real Estate',
      description: 'Residential, commercial & industrial real estate',
      details: [
        'Residential property development',
        'Commercial real estate projects',
        'Industrial property development',
        'Property acquisition and management',
        'Property leasing and rental management',
        'Real estate consultancy and advisory',
        'Land development and planning',
        'Property maintenance and operations',
        'Real estate portfolio management',
        'Regulatory compliance and documentation'
      ],
      solutions: 'We develop and manage diverse real estate portfolios including residential, commercial, and industrial properties. Our expertise spans project conception through completion, leasing, and long-term property management.'
    },

    'Agriculture & Agri-Tech': {
      icon: Leaf,
      category: 'Agriculture',
      description: 'Agricultural equipment and smart farming solutions',
      details: [
        'Agricultural equipment manufacturing and trading',
        'Smart farming and precision agriculture',
        'Farm automation systems',
        'Irrigation systems and equipment',
        'Agricultural machinery supply',
        'Agri-technology consulting',
        'Installation and maintenance services',
        'Crop management systems',
        'Agricultural infrastructure projects',
        'Cold storage and logistics for agriculture'
      ],
      solutions: 'We provide modern agricultural solutions including equipment, smart farming technology, and agri-tech consulting to help farmers increase productivity, reduce costs, and achieve sustainable farming practices.'
    },

    'Textile & Design': {
      icon: Shirt,
      category: 'Manufacturing',
      description: 'Textile machinery and design solutions',
      details: [
        'Textile machinery trading and supply',
        'Textile design systems',
        'Industrial textile equipment',
        'Textile consultancy services',
        'Equipment installation and support',
        'Textile industry solutions',
        'Design and pattern systems',
        'Quality control equipment',
        'Maintenance and technical support',
        'Training and skill development'
      ],
      solutions: 'We supply and support textile machinery, design systems, and consultancy services to textile manufacturers. Our solutions enhance productivity, quality, and competitiveness in the textile industry.'
    },

    'Food & Beverage': {
      icon: UtensilsCrossed,
      category: 'Manufacturing',
      description: 'Food production and processing solutions',
      details: [
        'Food and bakery product manufacturing',
        'Food processing and packaging',
        'Commercial kitchen equipment',
        'Restaurant equipment supply',
        'Food processing machinery',
        'Quality and hygiene systems',
        'Supply chain management for F&B',
        'Cold storage solutions',
        'Regulatory compliance consulting',
        'Production optimization'
      ],
      solutions: 'We provide complete food and beverage solutions including manufacturing setup, equipment supply, processing optimization, and regulatory compliance for food producers, bakeries, and restaurants.'
    },

    'Retail Systems': {
      icon: Store,
      category: 'Retail & Technology',
      description: 'POS systems and retail automation',
      details: [
        'Point of Sale (POS) systems',
        'Self-checkout systems (SCO)',
        'Barcode and scanning systems',
        'Biometric security systems',
        'Retail automation infrastructure',
        'Inventory management systems',
        'Customer analytics and insights',
        'Store design and layout consultation',
        'Installation and technical support',
        'Training and maintenance services'
      ],
      solutions: 'We deliver comprehensive retail solutions including POS systems, automation infrastructure, and technology integration to enhance customer experience, improve operations, and drive sales.'
    },

    'Import & Export Trading': {
      icon: Globe,
      category: 'Trading & Logistics',
      description: 'Global sourcing and import-export services',
      details: [
        'Import and export of goods and commodities',
        'Global sourcing and procurement',
        'Supply chain management',
        'Logistics and shipping coordination',
        'Customs and regulatory compliance',
        'Trade documentation services',
        'Export-import consultancy',
        'Supplier and vendor management',
        'Quality inspection and certification',
        'International trade finance'
      ],
      solutions: 'We provide end-to-end import-export and trading services, including global sourcing, procurement, logistics, documentation, and regulatory compliance to facilitate smooth international trade.'
    },

    'Ayurvedic & Wellness': {
      icon: Heart,
      category: 'Healthcare & Wellness',
      description: 'Ayurvedic and herbal wellness products',
      details: [
        'Ayurvedic and herbal product manufacturing',
        'Nutraceutical and supplement production',
        'Natural and organic product sourcing',
        'Healthcare and wellness product development',
        'Cosmetic and personal care products',
        'Product branding and marketing',
        'Distribution channel development',
        'Wellness center operations',
        'E-commerce platforms for wellness products',
        'Regulatory compliance and certifications'
      ],
      solutions: 'We manufacture, market, and distribute premium Ayurvedic and wellness products. Our offerings span traditional herbal remedies to modern nutraceuticals, with full regulatory compliance and market distribution.'
    },

    'Education & Training': {
      icon: BookOpen,
      category: 'Education',
      description: 'Educational institutions and digital learning',
      details: [
        'School and college establishment and management',
        'Training institutes and skill centers',
        'Digital education platforms',
        'Learning management systems (LMS)',
        'E-school solutions',
        'Smart classroom technology',
        'Educational ERP systems',
        'Online course development',
        'Educational consultancy services',
        'Overseas education facilitation'
      ],
      solutions: 'We establish and manage educational institutions from schools to training centers, while also providing digital education solutions including LMS, e-learning platforms, and educational consultancy services.'
    },

    'Recruitment & HR': {
      icon: Users,
      category: 'Human Resources',
      description: 'Recruitment, staffing and HR consultancy',
      details: [
        'Recruitment and staffing services',
        'Manpower supply and placement',
        'HR consultancy and advisory',
        'Domestic and international placements',
        'Executive search and headhunting',
        'Temporary and permanent staffing',
        'Training and skill development',
        'HR process outsourcing',
        'Payroll management',
        'Employee engagement programs'
      ],
      solutions: 'We provide comprehensive recruitment and HR services including talent sourcing, placement, HR consulting, and staffing solutions for domestic and international opportunities across all sectors.'
    },

    'Event Management': {
      icon: Zap,
      category: 'Events & Services',
      description: 'Weddings, events and design services',
      details: [
        'Wedding planning and management',
        'Matrimonial and matchmaking services',
        'Corporate event organization',
        'Exhibition and trade show management',
        'Social gathering and celebration planning',
        'Event designing and coordination',
        'Interior and decoration design',
        'Theme decoration services',
        'Venue management',
        'Vendor coordination and management'
      ],
      solutions: 'We provide end-to-end event management services including wedding planning, corporate events, exhibitions, and specialized design services to create memorable experiences.'
    },

    'Consultancy & Business': {
      icon: Briefcase,
      category: 'Professional Services',
      description: 'Business consultancy and professional services',
      details: [
        'Business consultancy and advisory',
        'Project management services',
        'Organizational development',
        'Process optimization consulting',
        'Strategic planning services',
        'Market research and analysis',
        'Financial advisory services',
        'Technical consulting',
        'Quality management systems',
        'Compliance and regulatory advisory'
      ],
      solutions: 'We deliver strategic business consultancy covering project management, organizational development, process optimization, and specialized advisory services to enhance business performance and growth.'
    },

    'Financial Services': {
      icon: BarChart3,
      category: 'Finance',
      description: 'Financial products and banking services',
      details: [
        'Home loan sourcing and processing',
        'Auto loan distribution',
        'Personal loan marketing and sales',
        'Business loan facilitation',
        'Credit facility marketing',
        'Health insurance distribution',
        'Life insurance products',
        'General insurance services',
        'Investment products',
        'Financial advisory services'
      ],
      solutions: 'We act as marketing and distribution partners for banks, NBFCs, and insurance companies, facilitating access to diverse financial products including loans, insurance, and investment solutions.'
    }
  };

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setSubmitMessage(data.error || 'Failed to send message. Please try again.');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('An error occurred. Please try again later.');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ============= HEADER ============= */}
      <header className="fixed w-full bg-white shadow-md z-50 border-b-4 border-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }}>
                <svg width="450" height="100" viewBox="0 0 450 100" xmlns="http://www.w3.org/2000/svg" className="h-16 w-auto">
                  <defs>
                    <linearGradient id="logoNavy" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{stopColor:'#001f4d',stopOpacity:1}} />
                      <stop offset="100%" style={{stopColor:'#0a3f7f',stopOpacity:1}} />
                    </linearGradient>
                    <linearGradient id="logoGold" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{stopColor:'#FFD700',stopOpacity:1}} />
                      <stop offset="100%" style={{stopColor:'#FFA500',stopOpacity:1}} />
                    </linearGradient>
                  </defs>
                  
                  {/* DG TECH INFRA - Modern Professional Logo */}
                  
                  {/* D Shape */}
                  <path d="M 6 12 L 18 12 Q 32 12 32 42 Q 32 72 18 72 L 6 72 L 6 12 Z" fill="url(#logoNavy)"/>
                  <path d="M 12 20 L 18 20 Q 27 20 27 42 Q 27 64 18 64 L 12 64 Z" fill="white" fillOpacity="0.08"/>
                  
                  {/* G Shape */}
                  <path d="M 38 72 Q 24 72 24 42 Q 24 12 38 12 Q 50 12 54 22 L 42 22 Q 34 22 34 42 L 56 42 L 56 60 Q 56 72 38 72 Z" fill="url(#logoNavy)"/>
                  <path d="M 28 20 L 52 20 Q 60 20 60 42 Q 60 64 46 64 L 28 64 Z" fill="white" fillOpacity="0.08"/>
                  
                  {/* Gold Swoosh */}
                  <path d="M 16 16 Q 36 30 32 42 Q 29 56 14 68" stroke="url(#logoGold)" strokeWidth="8" fill="none" strokeLinecap="round"/>
                  
                  {/* DHRITI Text */}
                  <text x="68" y="54" fontFamily="'Arial', 'Helvetica', sans-serif" fontSize="34" fontWeight="900" fill="#001f4d" letterSpacing="-0.5">
                    DHRITI
                  </text>
                  
                  {/* GLOBAL Text */}
                  <text x="195" y="54" fontFamily="'Arial', 'Helvetica', sans-serif" fontSize="34" fontWeight="700" fill="#FFD700" letterSpacing="0.5">
                    GLOBAL
                  </text>
                  
                  {/* Tagline Line 1 */}
                  <text x="68" y="72" fontFamily="'Arial', 'Helvetica', sans-serif" fontSize="12" fontWeight="600" fill="#5a7a8f" letterSpacing="0.8">
                    TECHNOLOGIES &amp; INFRASTRUCTURE
                  </text>
                </svg>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-amber-600 transition font-medium">About</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-amber-600 transition font-medium">Services</button>
              <button onClick={() => scrollToSection('industries')} className="text-gray-700 hover:text-amber-600 transition font-medium">Industries</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-amber-600 transition font-medium">Contact</button>
            </nav>

            {/* CTA Button */}
            <button onClick={() => scrollToSection('contact')} className="hidden md:block bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-lg transition">
              Get in Touch
            </button>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 space-y-2">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 text-gray-700 hover:text-amber-600">About</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2 text-gray-700 hover:text-amber-600">Services</button>
              <button onClick={() => scrollToSection('industries')} className="block w-full text-left px-4 py-2 text-gray-700 hover:text-amber-600">Industries</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-gray-700 hover:text-amber-600">Contact</button>
            </nav>
          )}
        </div>
      </header>

      {/* ============= SECTION 1: HERO ============= */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-slate-800 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Powering Technology, Infrastructure & Industrial Growth</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Integrated solutions across 15+ diverse sectors: Technology, Infrastructure, Manufacturing, Real Estate, Agriculture, Textiles, Food & Beverage, Retail, Trading, Wellness, Education, HR, Events, Consulting, and Finance.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button onClick={() => scrollToSection('contact')} className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition text-lg flex items-center gap-2 mx-auto">
              Get in Touch <ArrowRight className="w-5 h-5" />
            </button>
            <button onClick={() => scrollToSection('industries')} className="border-2 border-white hover:bg-white hover:text-slate-900 text-white font-bold py-3 px-8 rounded-lg transition text-lg">
              Explore Industries
            </button>
          </div>
        </div>
      </section>

      {/* ============= SECTION 2: ABOUT ============= */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-slate-900 mb-12 text-center">About Dhriti Global</h2>

          <div className="bg-white rounded-xl shadow-lg p-12 border-t-4 border-amber-600 mb-12">
            <div className="space-y-6">
              <p className="text-xl text-gray-800 leading-relaxed">
                <span className="font-bold text-slate-900">Dhriti Global Technologies & Infrastructure Pvt Ltd</span> is a multi-sector enterprise delivering integrated solutions across technology, infrastructure, manufacturing, and global trade.
              </p>

              <p className="text-xl text-gray-800 leading-relaxed">
                We partner with businesses to <span className="font-bold text-amber-600">simplify complexity by bringing multiple capabilities under one roof</span>—combining industry expertise, advanced technology, and strong execution to drive real, measurable outcomes.
              </p>

              <p className="text-xl text-gray-800 leading-relaxed">
                From building scalable IT systems to executing infrastructure projects and enabling global trade, we help organizations <span className="font-bold text-amber-600">grow faster, operate efficiently, and stay future-ready</span>.
              </p>

              <p className="text-xl text-gray-800 leading-relaxed">
                With a presence across diverse industries and markets, we act as a <span className="font-bold text-amber-600">reliable, long-term partner</span> for businesses seeking end-to-end, practical, and sustainable solutions.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl font-bold text-amber-600 mb-3">15+</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Industry Sectors</h3>
              <p className="text-gray-700">Integrated expertise across diverse domains</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl font-bold text-blue-600 mb-3">16+</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Years Experience</h3>
              <p className="text-gray-700">Proven track record of success</p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl font-bold text-slate-900 mb-3">100%</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Commitment</h3>
              <p className="text-gray-700">Dedicated to your business growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============= SECTION 3: CORE SERVICES ============= */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Our Core Service Areas</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Comprehensive solutions across diverse business domains
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Code2, title: 'Technology & IT', desc: 'Digital transformation, software, infrastructure' },
              { icon: Building2, title: 'Infrastructure & EPC', desc: 'Engineering, construction, industrial projects' },
              { icon: Factory, title: 'Manufacturing', desc: 'Production planning, automation, quality control' },
              { icon: Globe, title: 'Trading & Import-Export', desc: 'Global sourcing, supply chain, logistics' },
              { icon: Leaf, title: 'Agriculture', desc: 'Agri-tech, farming equipment, consultancy' },
              { icon: Heart, title: 'Healthcare & Wellness', desc: 'Ayurvedic products, nutraceuticals, wellness' },
              { icon: BookOpen, title: 'Education', desc: 'Institutions, digital learning, consultancy' },
              { icon: Users, title: 'Recruitment & HR', desc: 'Staffing, placement, HR consulting' }
            ].map((service, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-lg shadow-md hover:shadow-lg transition border-l-4 border-amber-600">
                <div className="flex items-center gap-3 mb-3">
                  <service.icon className="w-8 h-8 text-amber-600" />
                  <h3 className="text-lg font-bold text-slate-900">{service.title}</h3>
                </div>
                <p className="text-gray-700">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= SECTION 4: WHY CHOOSE US ============= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose DHRITI Global</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: TrendingUp, title: '16+ Years Experience', desc: 'Proven track record across multiple industries and sectors with sustainable growth' },
              { icon: Briefcase, title: 'Multi-Domain Expertise', desc: 'Deep expertise spanning 15+ diverse business domains and industries' },
              { icon: Cloud, title: 'End-to-End Execution', desc: 'Complete solutions from strategy and planning to implementation and support' },
              { icon: CheckCircle, title: 'Reliable Delivery', desc: 'Consistent on-time, on-budget project delivery with proven quality standards' }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-600">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= SECTION 5: INDUSTRIES ============= */}
      <section id="industries" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Industries We Serve</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            {Object.keys(industriesData).length} diverse industry sectors • Click any to learn more
          </p>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {Object.keys(industriesData).map((industry) => {
              const IndustryIcon = industriesData[industry].icon;
              const industryData = industriesData[industry];
              return (
                <button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition text-center border-2 border-gray-100 hover:border-amber-600 cursor-pointer group text-left"
                >
                  <div className="flex justify-center mb-3 group-hover:scale-110 transition">
                    <IndustryIcon className="w-10 h-10 text-amber-600" />
                  </div>
                  <h3 className="text-md font-bold text-slate-900 mb-2">{industry}</h3>
                  <p className="text-xs text-gray-500 font-semibold bg-amber-50 px-2 py-1 rounded inline-block mb-2">{industryData.category}</p>
                  <p className="text-sm text-gray-600">{industryData.description}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============= INDUSTRY DETAIL MODAL ============= */}
      {selectedIndustry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full my-8">
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 flex items-start justify-between">
              <div className="flex items-start gap-4 flex-1">
                {(() => {
                  const IndustryIcon = industriesData[selectedIndustry].icon;
                  return <IndustryIcon className="w-12 h-12 flex-shrink-0 mt-1" />;
                })()}
                <div className="text-left">
                  <h2 className="text-3xl font-bold">{selectedIndustry}</h2>
                  <p className="text-amber-400 mt-2">{industriesData[selectedIndustry].description}</p>
                  <p className="text-gray-300 text-sm mt-2">Category: <span className="font-semibold">{industriesData[selectedIndustry].category}</span></p>
                </div>
              </div>
              <button
                onClick={() => setSelectedIndustry(null)}
                className="text-white hover:bg-slate-700 p-2 rounded-lg transition flex-shrink-0"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Overview */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Solutions</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {industriesData[selectedIndustry].solutions}
                </p>
              </div>

              {/* Key Services */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Key Services & Capabilities</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {industriesData[selectedIndustry].details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg hover:bg-amber-50 transition">
                      <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="border-t pt-6 flex gap-4">
                <button
                  onClick={() => {
                    setSelectedIndustry(null);
                    setTimeout(() => scrollToSection('contact'), 100);
                  }}
                  className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2"
                >
                  Get in Touch <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setSelectedIndustry(null)}
                  className="flex-1 border-2 border-slate-300 hover:border-slate-400 text-slate-900 font-bold py-3 px-6 rounded-lg transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============= SECTION 6: CTA ============= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-slate-800 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to Partner with DHRITI Global?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our comprehensive solutions can drive your business forward
          </p>
          <button onClick={() => scrollToSection('contact')} className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition text-lg inline-flex items-center gap-2">
            Contact Us Today <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* ============= SECTION 7: CONTACT ============= */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">Get in Touch</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-slate-900 mb-1">Address</p>
                    <p className="text-gray-600">5, Nehru Outer Ring Road Sambhupur, Dundigal, Hyderabad, Telangana 500043</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-slate-900 mb-1">Phone</p>
                    <p className="text-gray-600">+91 9948146882</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-slate-900 mb-1">Email</p>
                    <p className="text-gray-600">contact@dgtechinfra.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h3>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-600 transition"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-600 transition"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-600 transition resize-none"
                />
                
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border-2 border-green-500 rounded-lg">
                    <p className="text-green-700 font-semibold">✓ {submitMessage}</p>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border-2 border-red-500 rounded-lg">
                    <p className="text-red-700 font-semibold">✗ {submitMessage}</p>
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={submitStatus === 'loading'}
                  className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-gray-400 text-white font-bold py-3 px-6 rounded-lg transition text-lg"
                >
                  {submitStatus === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ============= FOOTER ============= */}
      <footer className="bg-slate-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Column 1: Brand */}
            <div>
              <h4 className="font-bold text-white mb-4 text-lg">DHRITI GLOBAL</h4>
              <p className="text-sm">Integrated Technology, Infrastructure & Industrial Solutions</p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => window.scrollTo({top: 0})} className="hover:text-amber-600 transition">Home</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-amber-600 transition">About</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-amber-600 transition">Services</button></li>
                <li><button onClick={() => scrollToSection('industries')} className="hover:text-amber-600 transition">Industries</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-amber-600 transition">Contact</button></li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <h4 className="font-bold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-amber-600 transition">IT & Digital</a></li>
                <li><a href="#" className="hover:text-amber-600 transition">Infrastructure & EPC</a></li>
                <li><a href="#" className="hover:text-amber-600 transition">Manufacturing</a></li>
                <li><a href="#" className="hover:text-amber-600 transition">Trading & Export</a></li>
                <li><a href="#" className="hover:text-amber-600 transition">View All</a></li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-amber-600" /> 5, Nehru Outer Ring Road Sambhupur, Dundigal, Hyderabad, Telangana 500043</p>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-amber-600" /> +91 9948146882</p>
                <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-amber-600" /> contact@dgtechinfra.com</p>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-slate-700 pt-8 text-center">
            <p className="text-sm">&copy; 2024 DHRITI GLOBAL TECHNOLOGIES AND INFRASTRUCTURE PRIVATE LIMITED. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
