export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-brand-500 selection:text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 border-b border-border max-w-7xl mx-auto">
        <div className="font-bold text-xl tracking-tight">WorkflowX</div>
        <div className="space-x-6 hidden md:flex text-sm text-gray-400">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#how-it-works" className="hover:text-white transition">How it Works</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
        </div>
        <button className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition">Get Started</button>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">Automate your work.<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-purple-500">Scale your impact.</span></h1>
        <p className="text-xl text-gray-400 mb-10">The B2B SaaS platform that connects your tools, automates routine tasks, and accelerates your team&apos;s velocity.</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-brand-500 text-white px-8 py-3 rounded-md font-medium hover:bg-brand-600 transition">Start for free</button>
          <button className="bg-surface border border-border text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition">Book a Demo</button>
        </div>
      </section>

      {/* Product Overview / Core Value */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-7xl mx-auto text-center">
          <div className="w-full h-96 bg-border rounded-xl border border-gray-700 shadow-2xl flex items-center justify-center">
            <span className="text-gray-500">[ Dashboard UI Mockup ]</span>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Engineered for speed.</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Visual Builder', desc: 'Drag and drop components to build workflows in seconds.' },
            { title: 'Real-time Sync', desc: 'State updates instantly across all connected platforms.' },
            { title: 'Advanced Logic', desc: 'Implement complex branching and conditional triggers.' }
          ].map((feature, i) => (
            <div key={i} className="p-8 border border-border rounded-xl bg-surface hover:border-brand-500 transition">
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works Flow */}
      <section id="how-it-works" className="py-24 px-6 bg-surface border-y border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">From setup to scale in 3 steps</h2>
          <div className="space-y-12">
            {['Connect your tools via API', 'Map your automation logic', 'Deploy and monitor execution'].map((step, i) => (
              <div key={i} className="flex items-center space-x-6">
                <div className="h-12 w-12 rounded-full bg-brand-500 flex items-center justify-center font-bold text-lg">{i + 1}</div>
                <div className="text-xl font-medium">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section id="pricing" className="py-24 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-16">Simple, transparent pricing.</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-10 border border-border rounded-xl bg-surface text-left">
            <h3 className="text-2xl font-bold mb-2">Pro</h3>
            <p className="text-gray-400 mb-6">For growing teams.</p>
            <div className="text-5xl font-bold mb-8">$49<span className="text-lg text-gray-500">/mo</span></div>
            <ul className="space-y-4 mb-8 text-sm text-gray-300">
              <li>✓ Unlimited Workflows</li>
              <li>✓ 5,000 Executions/mo</li>
              <li>✓ Standard Integrations</li>
            </ul>
            <button className="w-full bg-white text-black py-3 rounded-md font-medium hover:bg-gray-200 transition">Get Started</button>
          </div>
          <div className="p-10 border border-brand-500 rounded-xl bg-surface text-left relative">
            <div className="absolute top-0 right-0 bg-brand-500 text-xs px-3 py-1 rounded-bl-lg rounded-tr-xl font-medium">POPULAR</div>
            <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
            <p className="text-gray-400 mb-6">For scale and security.</p>
            <div className="text-5xl font-bold mb-8">$199<span className="text-lg text-gray-500">/mo</span></div>
            <ul className="space-y-4 mb-8 text-sm text-gray-300">
              <li>✓ Dedicated Support</li>
              <li>✓ Custom Integrations</li>
              <li>✓ SSO & Advanced Security</li>
            </ul>
            <button className="w-full bg-brand-500 text-white py-3 rounded-md font-medium hover:bg-brand-600 transition">Contact Sales</button>
          </div>
        </div>
      </section>

      {/* Final CTA & Footer */}
      <footer className="border-t border-border mt-20">
        <div className="py-24 text-center px-6">
          <h2 className="text-3xl font-bold mb-6">Ready to automate?</h2>
          <button className="bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-gray-200 transition">Start building for free</button>
        </div>
        <div className="py-8 text-center text-sm text-gray-600">© 2026 WorkflowX. All rights reserved.</div>
      </footer>
    </div>
  )
}
