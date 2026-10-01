export default function GraphicDesignTemplate({ config }) {
  if (!config) return null;

  const bgColor = config.backgroundColor || "#ffcc00";
  const textColor = config.textColor || "#000000";

  return (
    <div className="relative w-full min-h-screen font-sans overflow-hidden selection:bg-black selection:text-white" style={{ backgroundColor: bgColor, color: textColor }}>
      {/* Header */}
      <header className="w-full border-b-4 border-black p-6 flex justify-between items-center font-bold tracking-tight uppercase" style={{ borderColor: textColor }}>
        <div className="text-2xl">{config.logoText || "STUDIO"}</div>
        <nav className="hidden md:flex gap-8">
          <a href="#" className="hover:opacity-70 hover:underline underline-offset-4 decoration-4">Work</a>
          <a href="#" className="hover:opacity-70 hover:underline underline-offset-4 decoration-4">About</a>
          <a href="#" className="hover:opacity-70 hover:underline underline-offset-4 decoration-4">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative w-full border-b-4 border-neoBlack bg-neoYellow flex flex-col md:flex-row overflow-hidden">
        <div className="flex-1 p-12 md:p-24 flex flex-col justify-center relative z-10 border-b-4 md:border-b-0 md:border-r-4 border-neoBlack bg-neoYellow">
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter uppercase mb-6">
            {config.heroTitle || "GRAPHIC DESIGN"}
          </h1>
          <p className="text-xl md:text-3xl font-bold uppercase tracking-wide border-l-8 border-neoBlack pl-6 bg-white p-4 shadow-neo w-max max-w-full">
            {config.heroSubtitle || "PORTFOLIO 202X"}
          </p>
        </div>
        <div className="flex-1 min-h-[500px] bg-white relative">
          <img 
            src={`https://picsum.photos/seed/${config.heroImageKeyword || 'art'}/1000/1200`} 
            alt="Hero Cover" 
            className="absolute inset-0 w-full h-full object-cover filter contrast-125 grayscale"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="w-full p-12 md:p-24 bg-white border-b-4 border-neoBlack">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-start">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter w-full md:w-1/3">
            {config.aboutHeading || "THE VISION"}
          </h2>
          <div className="w-full md:w-2/3 text-2xl leading-relaxed font-medium">
            {config.aboutText || "Crafting bold visual identities through radical typography and unapologetic color palettes. Every design is a statement."}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="w-full bg-neoCream">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b-4 border-neoBlack">
          {config.projects?.map((project, idx) => (
            <div key={idx} className={`border-b-4 md:border-b-0 border-neoBlack ${idx !== 2 ? 'md:border-r-4' : ''} p-8 flex flex-col hover:bg-neoYellow transition-colors group`}>
              <div className="text-xl font-bold uppercase mb-8 pb-4 border-b-4 border-neoBlack inline-block">
                0{idx + 1} // {project.category || "PROJECT"}
              </div>
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-6 group-hover:underline underline-offset-8 decoration-8">
                {project.name || "Untitled Work"}
              </h3>
              <div className="mt-auto pt-8">
                <img 
                  src={`https://picsum.photos/seed/${project.imageKeyword || 'design' + idx}/600/400`} 
                  alt={project.name}
                  className="w-full h-64 object-cover border-4 border-neoBlack shadow-neo group-hover:-translate-y-2 group-hover:shadow-neo-lg transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="w-full bg-neoBlack text-white p-12 md:p-24 flex flex-col items-center text-center">
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 text-neoYellow">
          {config.ctaTitle || "LET'S WORK"}
        </h2>
        <a href={`mailto:${config.contactEmail || 'hello@example.com'}`} className="bg-white text-neoBlack border-4 border-white font-bold text-2xl uppercase py-6 px-12 hover:bg-transparent hover:text-white transition-colors">
          {config.ctaButtonText || "GET IN TOUCH"}
        </a>
      </footer>
    </div>
  );
}
