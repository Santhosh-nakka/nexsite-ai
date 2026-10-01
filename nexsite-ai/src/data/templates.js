export const presetTemplates = [
  {
    id: "brutalist-studio",
    name: "Brutalist Studio",
    description: "Stark, high-contrast black and white layout with massive typography.",
    config: {
      themeType: "brutalist",
      backgroundType: "none",
      fontFamily: "'Inter', sans-serif",
      customTitle: "WE BUILD",
      customSubtitle: "THE FUTURE OF DIGITAL EXPERIENCES.",
      customBackgroundColor: "#000000",
      customTextColor: "#ffffff",
      sections: [
        { type: "editorial", props: { headline: "VISUAL POETRY", text: "We strip away the unnecessary to reveal the raw, unpolished truth of digital interaction.", imageKeyword: "architecture", reverse: false } },
        { type: "magazine", props: { items: [{ category: "Strategy", title: "RADICAL THINKING", description: "No compromises." }, { category: "Execution", title: "PERFECT ALIGNMENT", description: "Pixel perfect delivery." }] } },
        { type: "cta", props: { title: "READY TO DISRUPT?", subtitle: "Let's build something unforgettable.", buttonText: "START NOW" } }
      ]
    }
  },
  {
    id: "minimalist-fashion",
    name: "Minimalist Fashion",
    description: "Pure white, high-fashion editorial look with stark black typography.",
    config: {
      themeType: "light",
      backgroundType: "none",
      fontFamily: "'Playfair Display', serif",
      customTitle: "HAUTE MINIMAL",
      customSubtitle: "The Spring/Summer Collection",
      customBackgroundColor: "#ffffff",
      customTextColor: "#000000",
      sections: [
        { type: "editorial", props: { headline: "THE NEW SILHOUETTE", text: "Embracing negative space and bold lines in modern apparel.", imageKeyword: "fashion", reverse: false } },
        { type: "magazine", props: { items: [{ category: "Look 1", title: "ESSENTIALS", description: "The core wardrobe." }, { category: "Look 2", title: "AVANT-GARDE", description: "Pushing boundaries." }] } },
        { type: "cta", props: { title: "SHOP THE LOOK", subtitle: "Available worldwide.", buttonText: "VIEW CATALOG" } }
      ]
    }
  },
  {
    id: "neon-cyberpunk",
    name: "Neon Cyberpunk",
    description: "Pitch black background with striking neon green terminal text.",
    config: {
      themeType: "dark",
      backgroundType: "none",
      fontFamily: "'Space Mono', monospace",
      customTitle: "SYSTEM_ROOT",
      customSubtitle: "Awaiting terminal command...",
      customBackgroundColor: "#050505",
      customTextColor: "#39ff14",
      sections: [
        { type: "stats", props: { title: "NETWORK_STATUS", stats: [{ label: "NODES", value: "99.9%" }, { label: "UPTIME", value: "9,999H" }, { label: "BREACHES", value: "0" }] } },
        { type: "editorial", props: { headline: "DECENTRALIZED", text: "Securing the grid through distributed ledger protocols.", imageKeyword: "neon", reverse: true } },
        { type: "pricing", props: { title: "ACCESS_TIERS", plans: [{ name: "GUEST", price: "0 CREDITS", features: ["Read-only access"], highlight: false }, { name: "ADMIN", price: "99 CREDITS", features: ["Root access", "Deploy contracts"], highlight: true }] } }
      ]
    }
  },
  {
    id: "earthy-ceramics",
    name: "Earthy Ceramics",
    description: "Warm terracotta flat background with soft cream text.",
    config: {
      themeType: "warm",
      backgroundType: "none",
      fontFamily: "'Playfair Display', serif",
      customTitle: "KILN & CLAY",
      customSubtitle: "Handcrafted ceramics for the modern home.",
      customBackgroundColor: "#a0522d",
      customTextColor: "#fff8f0",
      sections: [
        { type: "about", props: { title: "Our Process", description: "Every piece is wheel-thrown, hand-glazed, and fired in our small studio." } },
        { type: "editorial", props: { headline: "RAW BEAUTY", text: "Embracing the natural imperfections of earth and fire.", imageKeyword: "ceramics", reverse: false } },
        { type: "cta", props: { title: "Shop the Collection", subtitle: "Limited batches available weekly.", buttonText: "Browse Store" } }
      ]
    }
  },
  {
    id: "midnight-saas",
    name: "Midnight SaaS",
    description: "Deep flat navy blue with high-contrast UI for tech startups.",
    config: {
      themeType: "dark",
      backgroundType: "none",
      fontFamily: "'Inter', sans-serif",
      customTitle: "Scale Faster.",
      customSubtitle: "The ultimate developer tool for shipping products securely.",
      customBackgroundColor: "#0f172a",
      customTextColor: "#f8fafc",
      sections: [
        { type: "services", props: { title: "Features", services: [{ name: "Auto-Deploy", description: "Push to main and let us handle the rest." }, { name: "Edge Caching", description: "Global CDN out of the box." }, { name: "Security", description: "Automated vulnerability scanning." }] } },
        { type: "stats", props: { title: "By the numbers", stats: [{ label: "Deployments", value: "10M+" }, { label: "Latency", value: "<15ms" }] } },
        { type: "cta", props: { title: "Ready to deploy?", subtitle: "Start your free 14-day trial.", buttonText: "Get API Key" } }
      ]
    }
  },
  {
    id: "vibrant-portfolio",
    name: "Vibrant Portfolio",
    description: "Bright yellow graphic design portfolio with bold black text.",
    config: {
      themeType: "vibrant",
      backgroundType: "none",
      fontFamily: "'Space Mono', monospace",
      customTitle: "GRAPHIC DESIGN PORTFOLIO",
      customSubtitle: "SELECTED WORKS 202X - PRESENT",
      customBackgroundColor: "#ffcc00",
      customTextColor: "#000000",
      sections: [
        { type: "editorial", props: { headline: "THE ART OF SELECTION", text: "Curating colors, shapes, and typography into a cohesive visual language.", imageKeyword: "abstract", reverse: false } },
        { type: "magazine", props: { items: [{ category: "Chapter 1", title: "PRODUCT RENDER", description: "3D visualizations." }, { category: "Chapter 2", title: "BRAND IDENTITY", description: "Logos and systems." }] } },
        { type: "cta", props: { title: "HIRE ME", subtitle: "Available for freelance projects globally.", buttonText: "GET IN TOUCH" } }
      ]
    }
  },
  {
    id: "coffee-roaster",
    name: "Coffee Roaster",
    description: "Flat mocha background with soft beige typography.",
    config: {
      themeType: "warm",
      backgroundType: "none",
      fontFamily: "'Poppins', sans-serif",
      customTitle: "Morning Brew Roasters",
      customSubtitle: "Ethically sourced, locally roasted.",
      customBackgroundColor: "#4a3022",
      customTextColor: "#f5e6d3",
      sections: [
        { type: "editorial", props: { headline: "SINGLE ORIGIN", text: "We partner directly with farmers in Colombia and Ethiopia to bring you the best beans.", imageKeyword: "coffee", reverse: true } },
        { type: "pricing", props: { title: "Subscriptions", plans: [{ name: "Half Bag", price: "$12", features: ["12oz bag bi-weekly", "Free shipping"], highlight: false }, { name: "Full Bag", price: "$20", features: ["24oz bag bi-weekly", "Free shipping", "Surprise samples"], highlight: true }] } },
        { type: "cta", props: { title: "Get your caffeine fix.", subtitle: "Order before 2PM for same-day roasting.", buttonText: "Shop Beans" } }
      ]
    }
  },
  {
    id: "organic-skincare",
    name: "Organic Skincare",
    description: "Flat sage green background promoting wellness and nature.",
    config: {
      themeType: "light",
      backgroundType: "none",
      fontFamily: "'Outfit', sans-serif",
      customTitle: "Pure Botanicals",
      customSubtitle: "Skincare rooted in nature, backed by science.",
      customBackgroundColor: "#849b87",
      customTextColor: "#fcfcfc",
      sections: [
        { type: "services", props: { title: "Our Ingredients", services: [{ name: "Aloe Vera", description: "Soothing and hydrating." }, { name: "Rosehip Oil", description: "Rich in antioxidants." }, { name: "Green Tea", description: "Calms inflammation." }] } },
        { type: "editorial", props: { headline: "CLEAN BEAUTY", text: "No parabens, no sulfates, just pure plant extracts.", imageKeyword: "skincare", reverse: false } },
        { type: "cta", props: { title: "Discover your glow.", subtitle: "Take our skin quiz to find your routine.", buttonText: "Start Quiz" } }
      ]
    }
  },
  {
    id: "architecture-firm",
    name: "Architecture Firm",
    description: "Sleek flat slate grey background for modern structural design.",
    config: {
      themeType: "dark",
      backgroundType: "none",
      fontFamily: "'Inter', sans-serif",
      customTitle: "STRUCTURA",
      customSubtitle: "Designing the skylines of tomorrow.",
      customBackgroundColor: "#475569",
      customTextColor: "#f8fafc",
      sections: [
        { type: "editorial", props: { headline: "MODERN SPACES", text: "We specialize in brutalist and minimalist residential architecture.", imageKeyword: "building", reverse: true } },
        { type: "magazine", props: { items: [{ category: "Commercial", title: "THE APEX TOWER", description: "Completed 2024." }, { category: "Residential", title: "GLASS HOUSE", description: "In progress." }] } },
        { type: "cta", props: { title: "Start a project.", subtitle: "Consultations are complimentary.", buttonText: "Contact Us" } }
      ]
    }
  },
  {
    id: "retro-arcade",
    name: "Retro Arcade",
    description: "Flat deep purple with hot pink typography.",
    config: {
      themeType: "dark",
      backgroundType: "none",
      fontFamily: "'Space Mono', monospace",
      customTitle: "ARCADE 198X",
      customSubtitle: "Insert Coin to Continue",
      customBackgroundColor: "#4c1d95",
      customTextColor: "#f472b6",
      sections: [
        { type: "services", props: { title: "GAMES", services: [{ name: "Pinball", description: "Over 50 classic tables." }, { name: "Fighters", description: "Street Fighter, Mortal Kombat, and more." }] } },
        { type: "pricing", props: { title: "TOKENS", plans: [{ name: "Casual", price: "$10", features: ["40 Tokens"], highlight: false }, { name: "High Score", price: "$25", features: ["120 Tokens", "Free Drink"], highlight: true }] } },
        { type: "cta", props: { title: "READY PLAYER ONE?", subtitle: "Open until 2AM every night.", buttonText: "Get Directions" } }
      ]
    }
  },
  {
    id: "luxury-real-estate",
    name: "Luxury Real Estate",
    description: "Flat jet black background with elegant gold text.",
    config: {
      themeType: "dark",
      backgroundType: "none",
      fontFamily: "'Playfair Display', serif",
      customTitle: "AURELIA ESTATES",
      customSubtitle: "Curating the world's most exclusive properties.",
      customBackgroundColor: "#171717",
      customTextColor: "#fbbf24",
      sections: [
        { type: "editorial", props: { headline: "THE HEIGHT OF LUXURY", text: "From penthouse suites to coastal villas, find your dream home.", imageKeyword: "mansion", reverse: false } },
        { type: "testimonials", props: { title: "Client Testimonials", testimonials: [{ quote: "They found us our perfect summer home in absolute record time.", author: "A. Vanderbilt" }] } },
        { type: "cta", props: { title: "View our portfolio.", subtitle: "Strictly by appointment only.", buttonText: "Inquire Now" } }
      ]
    }
  },
  {
    id: "fitness-app",
    name: "Fitness App",
    description: "Flat aggressive red background with stark white text.",
    config: {
      themeType: "vibrant",
      backgroundType: "none",
      fontFamily: "'Outfit', sans-serif",
      customTitle: "PUMP DIGITAL",
      customSubtitle: "Your personal trainer in your pocket.",
      customBackgroundColor: "#dc2626",
      customTextColor: "#ffffff",
      sections: [
        { type: "stats", props: { title: "COMMUNITY", stats: [{ label: "Active Users", value: "2.5M" }, { label: "Workouts Logged", value: "15M" }] } },
        { type: "pricing", props: { title: "PRO PLAN", plans: [{ name: "Monthly", price: "$9.99", features: ["Custom workouts", "Meal tracking"], highlight: false }, { name: "Yearly", price: "$79.99", features: ["All Monthly features", "Save 30%"], highlight: true }] } },
        { type: "cta", props: { title: "Ready to sweat?", subtitle: "Download now and get 1 month free.", buttonText: "Get the App" } }
      ]
    }
  },
  {
    id: "vegan-restaurant",
    name: "Vegan Restaurant",
    description: "Flat forest green background with pale yellow typography.",
    config: {
      themeType: "dark",
      backgroundType: "none",
      fontFamily: "'Poppins', sans-serif",
      customTitle: "ROOT & VINE",
      customSubtitle: "Plant-based dining redefined.",
      customBackgroundColor: "#14532d",
      customTextColor: "#fef08a",
      sections: [
        { type: "about", props: { title: "Our Philosophy", description: "We believe food should nourish the body and protect the planet." } },
        { type: "editorial", props: { headline: "FARM TO TABLE", text: "All our ingredients are sourced within 50 miles of the restaurant.", imageKeyword: "salad", reverse: true } },
        { type: "cta", props: { title: "Join us for dinner.", subtitle: "Reservations highly recommended.", buttonText: "Book a Table" } }
      ]
    }
  },
  {
    id: "web3-protocol",
    name: "Web3 Protocol",
    description: "Flat solid indigo background with bright cyan text.",
    config: {
      themeType: "dark",
      backgroundType: "none",
      fontFamily: "'Inter', sans-serif",
      customTitle: "ETHER_SYNC",
      customSubtitle: "The next generation cross-chain liquidity protocol.",
      customBackgroundColor: "#3730a3",
      customTextColor: "#22d3ee",
      sections: [
        { type: "stats", props: { title: "PROTOCOL TVL", stats: [{ label: "Total Locked", value: "$4.2B" }, { label: "Daily Volume", value: "$850M" }] } },
        { type: "faq", props: { title: "FAQ", questions: [{ question: "Is the contract audited?", answer: "Yes, by three independent security firms." }, { question: "What chains are supported?", answer: "Ethereum, Arbitrum, and Optimism." }] } },
        { type: "cta", props: { title: "Start Providing Liquidity.", subtitle: "Earn yield on your crypto assets.", buttonText: "Launch App" } }
      ]
    }
  },
  {
    id: "photography-studio",
    name: "Photography Studio",
    description: "Pure flat white background with dark grey typography.",
    config: {
      themeType: "light",
      backgroundType: "none",
      fontFamily: "'Outfit', sans-serif",
      customTitle: "LENS & LIGHT",
      customSubtitle: "Capturing moments that last a lifetime.",
      customBackgroundColor: "#ffffff",
      customTextColor: "#333333",
      sections: [
        { type: "services", props: { title: "Specialties", services: [{ name: "Weddings", description: "Full day coverage." }, { name: "Portraits", description: "Studio and outdoor sessions." }, { name: "Commercial", description: "Product and brand photography." }] } },
        { type: "editorial", props: { headline: "THE GALLERY", text: "Browse our latest client work.", imageKeyword: "camera", reverse: false } },
        { type: "cta", props: { title: "Let's shoot.", subtitle: "Currently booking for Fall 2026.", buttonText: "View Availability" } }
      ]
    }
  },
  {
    id: "indie-game-studio",
    name: "Indie Game Studio",
    description: "Flat vibrant pink background with white text.",
    config: {
      themeType: "vibrant",
      backgroundType: "none",
      fontFamily: "'Space Mono', monospace",
      customTitle: "PIXEL PUNCH",
      customSubtitle: "Making games with heart (and lots of explosions).",
      customBackgroundColor: "#be185d",
      customTextColor: "#ffffff",
      sections: [
        { type: "editorial", props: { headline: "NEW RELEASE", text: "Our latest platformer is now available on Steam and Switch.", imageKeyword: "gaming", reverse: true } },
        { type: "magazine", props: { items: [{ category: "Update v1.2", title: "NEW LEVELS ADDED", description: "5 new boss fights." }, { category: "Merch", title: "PLUSHIES IN STOCK", description: "Grab yours now." }] } },
        { type: "cta", props: { title: "Play our demo.", subtitle: "Available for free.", buttonText: "Download Now" } }
      ]
    }
  },
  {
    id: "law-firm",
    name: "Law Firm",
    description: "Flat charcoal grey background with crisp white serif text.",
    config: {
      themeType: "dark",
      backgroundType: "none",
      fontFamily: "'Playfair Display', serif",
      customTitle: "HARRISON & WRIGHT",
      customSubtitle: "Vigorous representation. Unmatched results.",
      customBackgroundColor: "#1f2937",
      customTextColor: "#ffffff",
      sections: [
        { type: "about", props: { title: "Our Practice", description: "With over 40 years of combined experience, we handle complex corporate litigation." } },
        { type: "stats", props: { title: "Track Record", stats: [{ label: "Cases Won", value: "98%" }, { label: "Recovered", value: "$500M+" }] } },
        { type: "cta", props: { title: "Require legal counsel?", subtitle: "Contact our offices for a confidential review.", buttonText: "Request Consultation" } }
      ]
    }
  },
  {
    id: "yoga-retreat",
    name: "Yoga Retreat",
    description: "Flat soft peach background with dark green text.",
    config: {
      themeType: "light",
      backgroundType: "none",
      fontFamily: "'Poppins', sans-serif",
      customTitle: "ZENITH RETREAT",
      customSubtitle: "Find your center in the heart of nature.",
      customBackgroundColor: "#fcd34d",
      customTextColor: "#064e3b",
      sections: [
        { type: "editorial", props: { headline: "BREATHE IN", text: "Escape the city and reconnect with your inner self through daily guided practice.", imageKeyword: "yoga", reverse: false } },
        { type: "pricing", props: { title: "Packages", plans: [{ name: "Weekend", price: "$499", features: ["2 Nights", "All Meals"], highlight: false }, { name: "Full Week", price: "$1299", features: ["7 Nights", "All Meals", "Spa Day"], highlight: true }] } },
        { type: "cta", props: { title: "Book your escape.", subtitle: "Spaces are highly limited.", buttonText: "Reserve Spot" } }
      ]
    }
  },
  {
    id: "music-producer",
    name: "Music Producer",
    description: "Flat black background with solid yellow text.",
    config: {
      themeType: "dark",
      backgroundType: "none",
      fontFamily: "'Inter', sans-serif",
      customTitle: "BEATSMITH",
      customSubtitle: "Multi-platinum producer & sound designer.",
      customBackgroundColor: "#000000",
      customTextColor: "#facc15",
      sections: [
        { type: "services", props: { title: "Services", services: [{ name: "Mixing", description: "Industry standard vocal and track mixing." }, { name: "Mastering", description: "Loud, punchy, streaming-ready masters." }] } },
        { type: "editorial", props: { headline: "THE STUDIO", text: "State of the art analog gear mixed with digital precision.", imageKeyword: "studio", reverse: true } },
        { type: "cta", props: { title: "Need a beat?", subtitle: "Check the beatstore for available leases.", buttonText: "Listen Now" } }
      ]
    }
  },
  {
    id: "ai-research",
    name: "AI Research",
    description: "Deep flat teal background with crisp white typography.",
    config: {
      themeType: "dark",
      backgroundType: "none",
      fontFamily: "'Outfit', sans-serif",
      customTitle: "NEURAL LABS",
      customSubtitle: "Advancing artificial general intelligence safely.",
      customBackgroundColor: "#0f766e",
      customTextColor: "#ffffff",
      sections: [
        { type: "about", props: { title: "Our Mission", description: "We are committed to open-source research and building models that benefit humanity." } },
        { type: "magazine", props: { items: [{ category: "Paper", title: "EFFICIENT ATTENTION", description: "Published Nov 2025" }, { category: "Release", title: "NEURAL-7B", description: "Open weights now live." }] } },
        { type: "cta", props: { title: "Join the team.", subtitle: "We are hiring researchers and engineers.", buttonText: "View Careers" } }
      ]
    }
  }
];
