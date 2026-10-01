export default function SaaSTemplate({ config }) {
  if (!config) return null;

  const bgColor = config.backgroundColor || "#020617";
  const textColor = config.textColor || "#f8fafc";

  return (
    <div className="relative w-full min-h-screen font-sans selection:bg-indigo-500 selection:text-white" style={{ backgroundColor: bgColor, color: textColor }}>
      {/* Navbar */}
      <nav className="absolute w-full z-50 top-0 backdrop-blur-md border-b border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold text-indigo-400">
            {config.logoText || "SaaSify"}
          </div>
          <button className="bg-white text-slate-900 px-6 py-2.5 rounded-full font-medium hover:bg-indigo-50 transition-colors">
            {config.navCta || "Get Started"}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 lg:pt-52 lg:pb-32 overflow-hidden flex flex-col items-center text-center">
        {/* Glow Effects Removed */}
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-indigo-300 mb-8">
          <span className="flex h-2 w-2 rounded-full bg-indigo-500"></span>
          {config.heroBadge || "Introducing our new API"}
        </div>
        
        <h1 className="max-w-5xl text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
          {config.heroTitle || "Build faster with our intelligence."}
        </h1>
        
        <p className="max-w-2xl text-xl text-slate-400 mb-12 leading-relaxed">
          {config.heroSubtitle || "The completely reinvented platform for modern software teams. Ship faster, scale infinitely."}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-md">
          <button className="w-full bg-indigo-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-indigo-600 transition-colors">
            {config.primaryCta || "Start for free"}
          </button>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/10 bg-white/5">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-wrap justify-between gap-12">
          {config.stats?.map((stat, i) => (
            <div key={i} className="flex flex-col text-center flex-1">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-slate-400 font-medium tracking-wide uppercase text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">
            {config.featuresTitle || "Everything you need to scale"}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {config.features?.map((feature, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-6">
                  <div className="w-6 h-6 bg-indigo-400 rounded-lg"></div>
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10 bg-slate-900 border border-white/10 p-16 rounded-[3rem]">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            {config.footerTitle || "Ready to transform your workflow?"}
          </h2>
          <button className="bg-white text-slate-900 px-10 py-4 rounded-xl font-semibold text-lg hover:bg-slate-200 transition-colors">
            {config.footerButtonText || "Get Started Now"}
          </button>
        </div>
      </section>
    </div>
  );
}
