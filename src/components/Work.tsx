import { useState, useCallback, useEffect, useRef } from "react";
import "./styles/Work.css";
import { MdArrowOutward } from "react-icons/md";

const projects = [
  {
    title: "The 3D Nexus",
    category: "Immersive Three.js Portfolio Experience",
    tools: "React, Three.js, R3F, GSAP, TypeScript",
    image:
      "https://raw.githubusercontent.com/Hxni786/3d-portfolio-main/main/public/images/preview.png",
    link: "https://hxnix-gold.vercel.app/",
    accent: "#5eead4",
  },
  {
    title: "Editorial Excellence",
    category: "Full-Stack Boutique E-commerce Platform",
    tools: "React, Node.js, Express, MySQL, Tailwind",
    image:
      "https://raw.githubusercontent.com/Hxni786/Hxni-Ecommerce-Store/main/screenshot_home.png",
    link: "https://github.com/Hxni786/Hxni-Ecommerce-Store",
    accent: "#a78bfa",
  },
  {
    title: "Bespoke E-store 2.0",
    category: "Luxury Minimalist Mobile Commerce",
    tools: "React Native, Expo, Node.js, REST API",
    image:
      "https://raw.githubusercontent.com/Hxni786/E-store2/main/docs/ui-preview.png",
    link: "https://github.com/Hxni786/E-store2",
    accent: "#f472b6",
  },
  {
    title: "TicketVerse",
    category: "Premium Full-Stack Event Booking",
    tools: "React Native, Node.js, Express, MySQL",
    image:
      "https://raw.githubusercontent.com/Hxni786/Ticket-Booking-App/main/mobile/assets/promo1.png",
    link: "https://github.com/Hxni786/Ticket-Booking-App",
    accent: "#fbbf24",
  },
  {
    title: "NIXH Social",
    category: "Enterprise Multi-User Directory & Social Engine",
    tools: "React Native, Firebase, Node.js, REST API",
    image:
      "https://raw.githubusercontent.com/Hxni786/Nixh-A-social-Media-App/main/docs/assets/mobile_mockup.png",
    link: "https://github.com/Hxni786/Nixh-A-social-Media-App",
    accent: "#34d399",
  },
  {
    title: "hxni Express",
    category: "Cinematic Parallax Food Delivery Experience",
    tools: "React Native, Expo, GSAP, Parallax Scroll",
    image:
      "https://raw.githubusercontent.com/Hxni786/Hxni-Ecommerce-Store/main/profile_docs/assets/hxni_express_mockup.png",
    link: "https://github.com/Hxni786/A-food-Delivery-App-hxni-express",
    accent: "#fb923c",
  },
  {
    title: "Spice with Hassan",
    category: "Boutique Restaurant & Ordering Management",
    tools: "React Native, Node.js, Express, MySQL",
    image:
      "https://raw.githubusercontent.com/Hxni786/Hxni-Ecommerce-Store/main/profile_docs/assets/spice_hassan_mockup.png",
    link: "https://github.com/Hxni786/-A-Restaurant-App-Spice-with-Hassan",
    accent: "#ef4444",
  },
  {
    title: "Nixh Food 2.0",
    category: "Scalable Order Tracking & Delivery Ecosystem",
    tools: "React Native, Node.js, Express, REST API",
    image:
      "https://raw.githubusercontent.com/Hxni786/Food-Delivery-app-2/main/hero.png",
    link: "https://github.com/Hxni786/Food-Delivery-app-2",
    accent: "#38bdf8",
  },
  {
    title: "Hxni Finance",
    category: "Advanced Personal Asset & Expense Management",
    tools: "React Native, Node.js, MySQL, Chart.js",
    image:
      "https://raw.githubusercontent.com/Hxni786/Hxni-Ecommerce-Store/main/profile_docs/assets/hxni_finance_mockup.png",
    link: "https://github.com/Hxni786/Expense-Tracker",
    accent: "#a3e635",
  },
  {
    title: "Hxnix Social",
    category: "Modern Interactive Community Engine",
    tools: "React Native, Firebase, Node.js, Express",
    image:
      "https://raw.githubusercontent.com/Hxni786/Hxni-Ecommerce-Store/main/profile_docs/assets/hxnix_social_mockup.png",
    link: "https://github.com/Hxni786/Hxnix-Social-Media-App",
    accent: "#c084fc",
  },
];

const Work = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection observer for staggered reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent, index: number) => {
      const card = cardRefs.current[index];
      if (!card) return;
      const rect = card.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    },
    []
  );

  return (
    <div className="work-section" id="work" ref={sectionRef}>
      <div className="work-container section-container">
        {/* Section Header */}
        <div className="work-header">
          <div className="work-header-line" />
          <h2>
            Featured <span>Gallery</span>
          </h2>
          <p className="work-subtitle">
            A curated collection of full-stack applications, mobile experiences,
            and immersive 3D creations.
          </p>
        </div>

        {/* Project Counter */}
        <div className="work-counter">
          <span className="work-counter-num">{projects.length}</span>
          <span className="work-counter-label">Projects</span>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`gallery-card ${
                visibleCards.has(index) ? "gallery-card--visible" : ""
              } ${activeCard === index ? "gallery-card--active" : ""}`}
              data-index={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              onMouseMove={(e) => handleMouseMove(e, index)}
              style={
                {
                  "--card-accent": project.accent,
                  "--delay": `${index * 0.08}s`,
                  "--mouse-x": `${mousePos.x}px`,
                  "--mouse-y": `${mousePos.y}px`,
                } as React.CSSProperties
              }
            >
              {/* Glow effect on hover */}
              <div className="gallery-card-glow" />

              {/* Project Number */}
              <div className="gallery-card-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Image */}
              <div className="gallery-card-image">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />
                <div className="gallery-card-image-overlay" />
              </div>

              {/* Content */}
              <div className="gallery-card-content">
                <h3 className="gallery-card-title">{project.title}</h3>
                <p className="gallery-card-category">{project.category}</p>

                {/* Tech pills */}
                <div className="gallery-card-tools">
                  {project.tools.split(", ").map((tool, i) => (
                    <span key={i} className="gallery-tool-pill">
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gallery-card-link"
                  data-cursor="disable"
                >
                  <span>View Project</span>
                  <MdArrowOutward />
                </a>
              </div>

              {/* Border accent line */}
              <div className="gallery-card-accent-line" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
