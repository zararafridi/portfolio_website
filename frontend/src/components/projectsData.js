// projectsData.js — single source of truth for all project info
// Used by both Projects.jsx (cards) and ProjectDetail.jsx (full page)

export const projects = [
  {
    id: "coinbounce",
    title: "CoinBounce",
    subtitle: "Crypto Blog Platform",
    tagline:
      "A full-stack blog platform showing real-time crypto prices, news, and user-generated blogs with secure JWT authentication.",
    description:
      "CoinBounce combines live crypto market data with a community blogging platform. Users can track prices, read market news, and publish their own crypto analysis — all behind a secure JWT auth system with refresh token support.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST API", "CoinGecko API"],
    codeLink: "https://github.com/zararafridi/coin-bounce",
    liveLink: "", // add your live URL here
    stats: [
      { value: "12+", label: "API Endpoints" },
      { value: "3", label: "Weeks to Build" },
      { value: "2024", label: "Year Built" },
    ],
    features: [
      "Real-time crypto prices fetched from CoinGecko API with 60s caching to avoid rate limits",
      "JWT auth with refresh token rotation — silent re-auth without forcing logout",
      "Rich text blog editor — create, edit, delete posts with Markdown support",
      "Protected routes on frontend + middleware-guarded endpoints on backend",
      "MongoDB Atlas with Mongoose — full data validation and schema enforcement",
    ],
    challenges: [
      {
        title: "JWT Refresh Token Flow",
        desc: "Implementing silent token refresh without logging users out — solved with an Axios interceptor that auto-retries failed requests after getting a new access token.",
      },
      {
        title: "API Rate Limiting",
        desc: "CoinGecko free tier limits caused 429 errors — solved by caching API responses in MongoDB with a 60s TTL, reducing external calls by ~90%.",
      },
      {
        title: "CORS & Multi-Platform Deploy",
        desc: "Cross-origin issues between Vercel frontend and Railway backend — fixed with environment-aware CORS middleware that reads allowed origins from env vars.",
      },
    ],
    learned: [
      "Full-stack JWT auth architecture from scratch",
      "API caching strategies for rate-limited third-party services",
      "Deploying a MERN app across Vercel + Railway",
    ],
    previewUrl: "https://coinbounce.vercel.app", // update with real URL
  },
  {
    id: "currencyswap",
    title: "CurrencySwap",
    subtitle: "Currency Converter",
    tagline:
      "Modern currency converter with a swipe-based interface and real-time exchange rates using ExchangeRates API.",
    description:
      "CurrencySwap is a clean, fast currency conversion tool built with React. It features a swipe-to-swap UX, live exchange rate data, and a minimal interface that works perfectly on both desktop and mobile.",
    tech: ["React", "Tailwind CSS", "ExchangeRates API"],
    codeLink: "https://github.com/zararafridi/react-projects/tree/main/currencyApp",
    liveLink:
      "https://currencyconverter-lgcc3nwla-zararaftidi471gmailcoms-projects.vercel.app/",
    stats: [
      { value: "170+", label: "Currencies" },
      { value: "1", label: "Week to Build" },
      { value: "Live", label: "Deployed" },
    ],
    features: [
      "Real-time exchange rates from ExchangeRates API — always up to date",
      "Swap button instantly flips source and target currencies",
      "Custom React hook (useCurrencyInfo) abstracts all API fetching logic",
      "Fully responsive — works on mobile, tablet, and desktop",
      "Clean Tailwind UI with smooth transitions",
    ],
    challenges: [
      {
        title: "Custom Hook Architecture",
        desc: "Separating API logic from UI — built a useCurrencyInfo hook that handles fetching, loading state, and memoization, keeping components clean.",
      },
      {
        title: "Swap UX without Flicker",
        desc: "Swapping currencies needed to update both input values simultaneously without a visible flash — solved with a single batched state update.",
      },
    ],
    learned: [
      "Building reusable custom hooks for data fetching",
      "State management patterns for form-like UIs",
      "Tailwind CSS responsive design techniques",
    ],
    previewUrl:
      "https://currencyconverter-lgcc3nwla-zararaftidi471gmailcoms-projects.vercel.app/",
  },
  {
    id: "megablog",
    title: "MegaBlog",
    subtitle: "Modern Blogging Platform",
    tagline:
      "A responsive blog platform with Appwrite backend, secure login, rich text editing, and full CRUD functionality.",
    description:
      "MegaBlog is a full-featured blogging platform using Appwrite as a BaaS (Backend-as-a-Service). Users can register, log in, write posts with a rich text editor, manage their content, and browse posts by other users.",
    tech: ["React", "Tailwind CSS", "Appwrite", "React Hook Form", "Zod", "TinyMCE"],
    codeLink:
      "https://github.com/zararafridi/react-projects/tree/main/06MegaProject",
    liveLink: "", // add your live URL here
    stats: [
      { value: "BaaS", label: "Architecture" },
      { value: "4", label: "Weeks to Build" },
      { value: "2024", label: "Year Built" },
    ],
    features: [
      "Appwrite backend — auth, database, and file storage all managed via SDK",
      "Rich text editing powered by TinyMCE — full formatting support",
      "Form validation with React Hook Form + Zod schema — type-safe inputs",
      "Protected routes — unauthenticated users redirected to login automatically",
      "Image upload for post thumbnails stored in Appwrite file storage",
      "Full CRUD — create, read, update, delete posts with real-time sync",
    ],
    challenges: [
      {
        title: "Appwrite SDK Learning Curve",
        desc: "First time using a BaaS — spent time understanding Appwrite's permission model and database collections to structure data correctly.",
      },
      {
        title: "Form State with Rich Text Editor",
        desc: "TinyMCE doesn't natively integrate with React Hook Form — solved by using Controller to bridge the two and sync editor content to form state.",
      },
      {
        title: "Environment Config",
        desc: "Appwrite keys need careful env var management — built a centralized config.js that validates all required variables on startup.",
      },
    ],
    learned: [
      "Backend-as-a-Service architecture and when to use it",
      "Complex form handling with controlled + uncontrolled components",
      "Appwrite auth, database, and storage SDK integration",
    ],
    previewUrl: "",
  },
];
