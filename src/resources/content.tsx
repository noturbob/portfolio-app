import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Bobby",
  lastName: "Anthene",
  name: `Bobby Anthene`,
  role: "BBA (Information Technology) Graduate",
  avatar: "/images/avatar2.jpeg",
  email: "bobbyanthene@gmail.com",
  location: "Asia/Kolkata", // time zone for the clock (Hyderabad uses Asia/Kolkata)
  city: "Hyderabad, India",
  languages: ["English", "Hindi"], // confirm/add any others (e.g. Telugu) if applicable
  locale: "en",
};

const newsletter: Newsletter = {
  display: false, // no newsletter for now — flip to true later if you want one
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Notes on what I build, competitions I compete in, and things I'm learning.</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/noturbob",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/bobby-anthene",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
  // Add Instagram/Threads/Twitter here if you actually use them for this —
  // left out since I don't have real handles for you, don't want to link placeholders.
];

const home: Home = {
  path: "/",
  image: `/api/og/generate?title=${encodeURIComponent(person.name)}`,
  label: "Home",
  title: person.name,
  description: `${person.name} — full-stack developer and data analyst from Hyderabad, India. Projects, writing and press.`,
  headline: <>Bobby Anthene</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Slat</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured project
        </Text>
      </Row>
    ),
    href: "/work/slat",
  },
  subline: (
    <>
      A {person.role} from Hyderabad, India. I build
      full-stack systems, analyze data end-to-end, and compete at the national level in <br />
      hackathons and case competitions. After hours, I write about what I build.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Hyderabad, India`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false, // set true + add your link if you want a "book a call" option
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        {person.firstName} is a Hyderabad-based BBA (Information Technology) graduate whose work
        sits at the intersection of software engineering, data analytics, and business operations.
        He builds and deploys full stack systems independently, analyzes data end-to-end from raw
        records to executive facing dashboards, and is a repeat national-level competitor across
        hackathons and case competitions.
      </>
    ),
  },
  // Repurposed from "Work Experience" to "Achievements" — no employment history shown here.
  work: {
    display: true,
    title: "Achievements & Recognitions",
    experiences: [
      {
        company: "Abacus National IT & CS Competition — Badruka College, Hyderabad",
        timeframe: "2025 & 2026",
        role: "Winner (2 consecutive years)",
        achievements: [
          <>
            Won back-to-back against 500+ participants from 50+ institutions.
          </>,
          <>
            Featured in print twice — Deccan Chronicle, Hindi Milap, and a leading
            Telugu-language daily.
          </>,
        ],
        images: [],
      },
      {
        company: "CodeSprint 2026 — St. Aloysius University, Mangalore",
        timeframe: "2026",
        role: "Winner, External Participants Category (32-Hour National-Level Hackathon)",
        achievements: [
          <>
            Co-designed and delivered a gamified virtual trading league for students in a fixed
            32-hour window, using Node.js, Next.js, AWS, FastAPI, and Cloudinary.
          </>,
          <>
            Built a custom simulation-based algorithm from scratch to drive the trading engine.
          </>,
        ],
        images: [],
      },
      {
        company: "Ideathon — GITAM University & Maharaja Agrasen University",
        timeframe: "2024 & 2026",
        role: "National Finalist (2 times)",
        achievements: [
          <>
            Selected to the national innovation cohort at GITAM University, Visakhapatnam (2024)
            and Maharaja Agrasen University, Solan (2026).
          </>,
        ],
        images: [],
      },
      {
        company: "Internal Smart India Hackathon & IT Fest — St. Joseph's Degree & PG College",
        timeframe: "2023 – 2025",
        role: "Winner (3 consecutive years)",
        achievements: [
          <>
            Led winning teams three years running across both the Smart India Hackathon track
            and the IT Fest.
          </>,
        ],
        images: [],
      },
    ],
  },
  // Repurposed from "Studies" to "Education & Certifications"
  studies: {
    display: true,
    title: "Education & Certifications",
    institutions: [
      {
        name: "St. Joseph's Degree & PG College, Hyderabad",
        description: <>BBA (Information Technology), CGPA 8.31/10 — May 2023 to May 2026.</>,
      },
      {
        name: "Python for Data Science — NPTEL",
        description: <>Certification.</>,
      },
      {
        name: "Advanced SQL for Data Analysis — Scrimba",
        description: <>Certification.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Full-Stack Web Development",
        description: (
          <>Production web apps on the Next.js App Router and React — from glassmorphic dashboards to 3D scenes with Three.js.</>
        ),
        tags: [
          { name: "TypeScript", icon: "typescript" },
          { name: "JavaScript", icon: "javascript" },
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "Tailwind CSS", icon: "tailwind" },
          { name: "shadcn/ui", icon: "shadcn" },
          { name: "Framer Motion", icon: "framer" },
          { name: "GSAP", icon: "gsap" },
          { name: "Three.js", icon: "threejs" },
          { name: "TanStack Query", icon: "reactquery" },
          { name: "Zustand" },
          { name: "HTML5", icon: "html5" },
          { name: "CSS3", icon: "css3" },
        ],
        images: [],
      },
      {
        title: "Backend & APIs",
        description: (
          <>REST and real-time APIs in Node.js, Python, Go and Ruby — JWT and OAuth auth, WebSockets, and background job queues.</>
        ),
        tags: [
          { name: "Node.js", icon: "nodejs" },
          { name: "Express", icon: "express" },
          { name: "Fastify", icon: "fastify" },
          { name: "FastAPI", icon: "fastapi" },
          { name: "Ruby on Rails", icon: "rails" },
          { name: "Gin (Go)", icon: "gin" },
          { name: "Socket.IO", icon: "socketio" },
          { name: "JWT", icon: "jwt" },
          { name: "OAuth (Passport)" },
          { name: "Clerk", icon: "clerk" },
          { name: "BullMQ" },
        ],
        images: [],
      },
      {
        title: "Mobile Development",
        description: (
          <>Cross-platform apps: JoshNet in React Native with Expo, and a Flutter client for Christimony.</>
        ),
        tags: [
          { name: "React Native", icon: "react" },
          { name: "Expo", icon: "expo" },
          { name: "Flutter", icon: "flutter" },
          { name: "Dart", icon: "dart" },
          { name: "Firebase", icon: "firebase" },
        ],
        images: [],
      },
      {
        title: "Databases & Storage",
        description: (
          <>Relational, document, key-value and vector stores, with type-safe ORMs and cloud file storage.</>
        ),
        tags: [
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "MongoDB", icon: "mongodb" },
          { name: "Redis", icon: "redis" },
          { name: "SQLite", icon: "sqlite" },
          { name: "Supabase", icon: "supabase" },
          { name: "Drizzle ORM", icon: "drizzle" },
          { name: "Prisma", icon: "prisma" },
          { name: "Mongoose" },
          { name: "Upstash Vector", icon: "upstash" },
          { name: "Cloudinary", icon: "cloudinary" },
          { name: "Amazon S3", icon: "amazons3" },
        ],
        images: [],
      },
      {
        title: "AI, Machine Learning & Data Analytics",
        description: (
          <>Turning raw data into decisions — SQL pipelines, forecasting and classification models, RAG with LangChain and Gemini, and Power BI and Tableau dashboards.</>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "pandas", icon: "pandas" },
          { name: "NumPy", icon: "numpy" },
          { name: "scikit-learn", icon: "scikitlearn" },
          { name: "LightGBM" },
          { name: "statsmodels" },
          { name: "LangChain", icon: "langchain" },
          { name: "Google Gemini", icon: "gemini" },
          { name: "Jupyter", icon: "jupyter" },
          { name: "Plotly", icon: "plotly" },
          { name: "Matplotlib & Seaborn" },
          { name: "SQL" },
          { name: "R", icon: "r" },
          { name: "Power BI" },
          { name: "Tableau", icon: "tableau" },
        ],
        images: [],
      },
      {
        title: "Cloud & DevOps",
        description: (
          <>Deploying and monitoring cloud-native systems with containers and automated CI/CD.</>
        ),
        tags: [
          { name: "AWS", icon: "aws" },
          { name: "Azure", icon: "azure" },
          { name: "Google Cloud", icon: "googlecloud" },
          { name: "Docker", icon: "docker" },
          { name: "GitHub Actions", icon: "githubactions" },
          { name: "Vercel", icon: "vercel" },
          { name: "Render", icon: "render" },
        ],
        images: [],
      },
      {
        title: "Systems Programming",
        description: (
          <>Lower-level work: a Go terminal multiplexer on PTYs and Unix sockets, a C++23 UDP daemon for smart bulbs, and a Rust Bluetooth-to-uinput tablet driver.</>
        ),
        tags: [
          { name: "Go", icon: "go" },
          { name: "Rust", icon: "rust" },
          { name: "C++", icon: "cplusplus" },
          { name: "Java", icon: "java" },
          { name: "Linux", icon: "linux" },
          { name: "Bash", icon: "bash" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Notes on building, breaking, and competing",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Software and data projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/press",
  label: "Press",
  title: `Press & Recognition – ${person.name}`,
  description: `Newspaper coverage of ${person.name}'s competition wins`,
  images: [
    {
      src: "/images/press/codesprint-2026-daijiworld.jpg",
      alt: "Receiving the CodeSprint 2026 winners' trophy at St Aloysius University, Mangaluru",
      orientation: "vertical",
      aspectRatio: "3024 / 4032",
      caption: "CodeSprint 2026 — Winners · Daijiworld, Feb 2026",
      link: { href: "/images/press/codesprint-2026-daijiworld.pdf", label: "Read the Daijiworld article (PDF)" },
    },
    {
      src: "/images/press/abacus-2026-hindi-milap.jpg",
      alt: "Hindi Milap clipping on the BBCIT Abacus IT Quiz 2026, won by St. Joseph's Degree & PG College",
      orientation: "vertical",
      aspectRatio: "1364 / 1600",
      caption: "Abacus IT Quiz 2026 — Winner · Hindi Milap, Feb 2026",
    },
    {
      src: "/images/press/abacus-2025-hindi-milap.jpg",
      alt: "Hindi Milap clipping on the Abacus IT Quiz 2025 at Badruka College, Hyderabad",
      orientation: "horizontal",
      aspectRatio: "3012 / 1798",
      caption: "Abacus IT Quiz 2025 — Winner · Hindi Milap, Feb 2025",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };