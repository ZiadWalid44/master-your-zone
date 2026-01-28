import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Activity, 
  BarChart3, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  FileText,
  Menu,
  X
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-500 p-1.5 rounded-lg">
              <ShieldCheck className="text-white h-6 w-6" />
            </div>
            <span className="text-white font-bold text-xl tracking-tight">Master Your Zone</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['Problem', 'Solution', 'How it Works', 'Benefits'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(/\s/g, '-')}`} className="text-slate-300 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  {item}
                </a>
              ))}
              <a href="#demo" className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-emerald-900/20">
                Request Demo
              </a>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-white p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Problem', 'Solution', 'How it Works'].map((item) => (
              <a key={item} href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative bg-slate-900 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-1.5 mb-8">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-emerald-400 text-sm font-medium">AI-Powered Risk Detection Live</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-8">
          Stay in control before <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            problems appear.
          </span>
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 mb-10">
          Master Your Zone uses predictive AI to detect procurement risks early, ensuring smarter decisions for CFOs and Operation Teams.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#demo" className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg text-lg transition-all shadow-lg shadow-emerald-900/40 flex items-center justify-center gap-2">
            Start Free Pilot <ArrowRight className="h-5 w-5" />
          </a>
          <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-lg border border-slate-700 transition-all">
            View Live Dashboard
          </button>
        </div>
      </div>

      {/* Abstract Dashboard Visual */}
      <div className="mt-20 relative rounded-xl bg-slate-800 p-2 shadow-2xl ring-1 ring-white/10 max-w-5xl mx-auto transform hover:scale-[1.01] transition-duration-500 transition-transform">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700">
          {/* Mock Header */}
          <div className="h-12 border-b border-slate-700 flex items-center px-4 justify-between bg-slate-800/50">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            </div>
            <div className="text-xs text-slate-500 font-mono">system_status: secure</div>
          </div>
          {/* Mock Content */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-2 space-y-4">
              <div className="h-40 bg-gradient-to-r from-slate-800 to-slate-800/50 rounded border border-slate-700 p-4 relative">
                <p className="text-slate-400 text-xs mb-2">SUPPLY CHAIN VOLATILITY</p>
                <div className="flex items-end gap-2 h-24 mt-4">
                  {[40, 60, 45, 70, 30, 80, 55].map((h, i) => (
                    <div key={i} style={{height: `${h}%`}} className="flex-1 bg-emerald-500/80 rounded-t-sm opacity-60 hover:opacity-100 transition-opacity"></div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-24 bg-slate-800 rounded border border-slate-700 p-4">
                  <p className="text-slate-500 text-xs">PENDING APPROVALS</p>
                  <p className="text-2xl text-white font-mono mt-2">12</p>
                </div>
                <div className="h-24 bg-slate-800 rounded border border-slate-700 p-4">
                  <p className="text-slate-500 text-xs">RISK SCORE</p>
                  <p className="text-2xl text-emerald-400 font-mono mt-2">LOW (92%)</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-xs text-slate-500 uppercase tracking-widest">Live Alerts</p>
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-slate-800/50 p-3 rounded border border-slate-700 flex gap-3 items-start">
                  <div className="w-2 h-2 mt-1.5 rounded-full bg-amber-400 shrink-0"></div>
                  <div>
                    <p className="text-sm text-slate-300">Supplier #402 delivery delay detected.</p>
                    <p className="text-xs text-slate-500 mt-1">2 mins ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ProblemSection = () => (
  <section id="problem" className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900">Why Traditional Procurement Fails</h2>
        <p className="mt-4 text-slate-600">Companies are reacting too late. The old way is costing you millions.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: AlertTriangle, title: "Reactive Response", desc: "Problems are only addressed after they disrupt the supply chain, leading to panic buying." },
          { icon: Clock, title: "Slow Manual Monitoring", desc: "Excel sheets and manual emails can't keep up with real-time global market shifts." },
          { icon: FileText, title: "Compliance Complexities", desc: "Keeping track of vendor compliance across borders is a full-time nightmare." }
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
              <item.icon className="text-red-600 h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
            <p className="text-slate-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section id="how-it-works" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm">Process</span>
        <h2 className="text-3xl font-bold text-slate-900 mt-2">From Data to Decision in 4 Steps</h2>
      </div>

      <div className="relative">
        {/* Connector Line (Desktop) */}
        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Connect Data", desc: "Integrate with your ERP & External APIs." },
            { step: "02", title: "AI Analysis", desc: "Our engine scans for anomalies & patterns." },
            { step: "03", title: "Risk Detection", desc: "Identify delays or compliance breaches." },
            { step: "04", title: "Actionable Alerts", desc: "Receive dashboard insights instantly." }
          ].map((item, idx) => (
            <div key={idx} className="relative bg-white pt-4 md:pt-0">
              <div className="w-24 h-24 bg-slate-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 relative z-10 border-4 border-white shadow-xl">
                {item.step}
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Benefits = () => (
  <section id="benefits" className="py-24 bg-slate-900 text-white">
    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for the Modern Enterprise</h2>
        <p className="text-slate-400 text-lg mb-8">Designed specifically for Procurement Managers and CFOs who need clarity in chaos.</p>
        
        <div className="space-y-6">
          {[
            "Early Risk Detection: Spot issues 3 weeks before impact.",
            "Cost Optimization: Avoid expedited shipping fees.",
            "Compliance Assurance: Automated vendor checking.",
            "Executive Reporting: One-click PDF reports for the board."
          ].map((benefit, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <CheckCircle2 className="text-emerald-500 h-6 w-6 shrink-0" />
              <span className="text-slate-200 text-lg">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Abstract Graphic */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700">
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-bold text-lg">ROI Projection</h3>
          <BarChart3 className="text-emerald-500" />
        </div>
        <div className="space-y-4">
          <div className="bg-slate-700/50 rounded-lg p-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-slate-400">Risk Mitigation Savings</span>
              <span className="text-white font-bold">$1.2M</span>
            </div>
            <div className="w-full bg-slate-600 rounded-full h-2">
              <div className="bg-emerald-500 h-2 rounded-full" style={{width: '85%'}}></div>
            </div>
          </div>
          <div className="bg-slate-700/50 rounded-lg p-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-slate-400">Operational Efficiency</span>
              <span className="text-white font-bold">+45%</span>
            </div>
            <div className="w-full bg-slate-600 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{width: '65%'}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const DemoForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would connect to a real backend or email service
  };

  return (
    <section id="demo" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-50/50 skew-x-12 transform origin-top"></div>
      
      <div className="max-w-3xl mx-auto px-4 relative z-10 text-center">
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-8 md:p-12">
          {!submitted ? (
            <>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Master Your Zone?</h2>
              <p className="text-slate-600 mb-8">Join the pilot program for mid-to-large enterprises. Get a custom walkthrough.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Work Email</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="john@company.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="Acme Corp" />
                </div>
                <button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-lg transition-all transform hover:-translate-y-1 shadow-lg">
                  Request Access
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="text-emerald-600 h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Request Received!</h3>
              <p className="text-slate-600 mt-2">Our team will contact you shortly to schedule your demo.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-2">
        <ShieldCheck className="text-emerald-500 h-6 w-6" />
        <span className="text-white font-bold text-lg">Master Your Zone</span>
      </div>
      <div className="text-sm">
        © 2024 Master Your Zone AI. All rights reserved.
      </div>
      <div className="flex gap-6">
        <a href="#" className="hover:text-white transition-colors">Privacy</a>
        <a href="#" className="hover:text-white transition-colors">Terms</a>
        <a href="#" className="hover:text-white transition-colors">Contact</a>
      </div>
    </div>
  </footer>
);

// --- Main App ---

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <Benefits />
      <DemoForm />
      <Footer />
    </div>
  );
}

export default App;