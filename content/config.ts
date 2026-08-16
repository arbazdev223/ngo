export interface LocalizedText {
  en: string;
  hi?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface TrustItem {
  title: string;
  description: string;
  ctaLabel?: string;
  href?: string;
}

export interface MediaAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface StoryBlock {
  eyebrow: LocalizedText;
  title: string;
  summary: string;
  body: string[];
  accentQuote: string;
  image: MediaAsset;
}

export interface WorkArea {
  slug: string;
  title: LocalizedText;
  summary: string;
  detail: string;
  outcomes: string[];
}

export interface ProgramItem {
  title: string;
  description: string;
  format: string;
  audience: string;
  theme: string;
}

export interface GalleryItem {
  id: string;
  kind: "image" | "video";
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  tag: string;
  posterSrc?: string;
  durationLabel?: string;
}

export interface ContactChannel {
  label: string;
  value?: string;
  href?: string;
  isVisible: boolean;
  note?: string;
}

export interface ActionItem {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
}

export type LeadIntent = "volunteer" | "donation" | "general";

export interface LeadFormPayload {
  intent: LeadIntent;
  name: string;
  phone: string;
  city: string;
  interest: string;
  email?: string;
  message?: string;
  sourcePage?: string;
}

export interface LeadSubmissionResult {
  ok: boolean;
  message: string;
  referenceId?: string;
}

export const ngoDetailsHref = encodeURI(
  "/imsge/WhatsApp Image 2026-07-05 at 11.50.39 AM.jpeg",
);

export const aboutDetailsHref = encodeURI(
  "/imsge/WhatsApp Image 2026-07-05 at 11.50.39 AM.jpeg",
);

const heroImageSrc = (path: string) => `${encodeURI(path)}?v=hero-crop-20260816`;

const heroPoster: MediaAsset = {
  src: heroImageSrc("/imsge/WhatsApp Image 2026-07-05 at 11.50.39 AM.jpeg"),
  alt: "Women seated together during a community support meeting led by Shehri Kamgar Samaj.",
  width: 1280,
  height: 957,
};

const aboutPoster: MediaAsset = {
  src: encodeURI("/imsge/WhatsApp Image 2026-04-06 at 6.23.19 PM (1).jpeg"),
  alt: "Women seated together during a community support meeting led by Shehri Kamgar Samaj.",
  width: 1280,
  height: 957,
};

const heroCarouselImages: MediaAsset[] = [
  {
    src: heroImageSrc("/imsge/WhatsApp Image 2026-04-06 at 6.23.16 PM.jpeg"),
    alt: "Shehri Kamgar Samaj field team during a community outreach visit.",
    width: 1600,
    height: 955,
  },
  {
    src: heroImageSrc("/imsge/IMG_20240928_180031606_AE.jpg.jpeg"),
    alt: "A facilitator seated with young girls and women during a group session indoors.",
    width: 4080,
    height: 3072,
  },
  {
    src: heroImageSrc("/imsge/IMG_20250416_145857488_HDR.jpg.jpeg"),
    alt: "Community members gathered together during a field activity led by the NGO.",
    width: 8160,
    height: 6144,
  },
];

export const siteContent = {
  site: {
    name: "Shehri Kamgar Samaj",
    shortName: "SKS",
    tagline: {
      en: "Urban dignity, worker rights, and community resilience.",
      hi: "शहरी कामगार समाज",
    },
    description:
      "A Delhi-rooted NGO supporting migrant workers, low-income settlements, and urban families through awareness, legal support, education, health, and community-led action.",
    address: "B-954, Gautampuri Phase-II, Molarband Badapur, New Delhi",
    cityLabel: "Delhi field presence",
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Our Work", href: "/our-work" },
    { label: "Programs", href: "/programs" },
    { label: "Gallery", href: "/gallery" },
    { label: "Get Involved", href: "/get-involved" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavItem[],
  hero: {
    eyebrow: {
      en: "Standing with urban workers and families",
      hi: "शहरी कामगारों और परिवारों के साथ",
    },
    title: "Empowering Urban Workers and Communities with care, rights, and local action.",
    summary:
      "Shehri Kamgar Samaj works alongside migrant workers, women, and low-income settlements in Delhi - listening first, organizing locally, and turning urgent needs into sustained support.",
    primaryAction: {
      label: "Donate Now",
      href: "/get-involved#donate",
      variant: "primary",
    } satisfies ActionItem,
    secondaryAction: {
      label: "Join Us",
      href: "/get-involved#volunteer",
      variant: "secondary",
    } satisfies ActionItem,
    quickNotes: [
      "Delhi-rooted support for workers and basti communities",
      "Rights awareness, legal aid, health, education, and livelihood guidance",
      "Volunteer and donor pathways with direct follow-up",
    ],
    trustPills: [
      "Registered under Society Act 1860",
      "Badarpur, New Delhi",
      "Community-first storytelling and action",
    ],
    media: {
      poster: heroPoster,
      carouselImages: heroCarouselImages,
    },
    floatingCard: {
      title: "What the work looks like on the ground",
      items: [
        "Doorstep conversations with women and workers",
        "Awareness sessions, referrals, and group meetings",
        "Steady follow-through instead of one-time visibility",
      ],
    },
  },
  aboutPreview: {
    eyebrow: {
      en: "Why this work matters",
      hi: "यह काम क्यों जरूरी है",
    },
    title: "In dense settlements, small disruptions can become major setbacks overnight.",
    description:
      "One delayed wage, one untreated illness, or one missing document can push a family deeper into instability. Our role is to make help visible, local, and easier to act on.",
    body: [
      "Shehri Kamgar Samaj focuses on urban workers, migrant families, and underserved neighborhoods where rights, healthcare, and education often feel too far away.",
      "The NGO's work grows from listening circles, field visits, awareness sessions, and practical support that helps communities organize around their own priorities.",
    ],
    actions: [
      { label: "Read Our Story", href: "/about", variant: "secondary" },
      { label: "View NGO Details", href: ngoDetailsHref, variant: "ghost" },
    ] satisfies ActionItem[],
  },
  homeCtaTiles: {
    eyebrow: {
      en: "Three ways in",
      hi: "जुड़ने के तीन रास्ते",
    },
    title: "Explore the work, support it, or start a conversation.",
    items: [
      {
        label: "How We Work",
        description: "See the full range of focus areas and how programs are run.",
        href: "/our-work",
        image: {
          src: "/imsge/IMG_20250104_114218666_AE.jpg.jpeg",
          alt: "Field activity taking place in a dense Delhi neighborhood lane.",
          width: 3072,
          height: 4080,
        },
      },
      {
        label: "Support Our Cause",
        description: "Volunteer your time or help sustain field visits and programs.",
        href: "/get-involved#donate",
        image: {
          src: "/imsge/pick1.jpeg",
          alt: "A group of women attending a community meeting and listening to notes being read out.",
          width: 1280,
          height: 957,
        },
      },
      {
        label: "Contact Us",
        description: "Reach out for coordination, partnerships, or general questions.",
        href: "/contact",
        image: {
          src: "/imsge/pick4.jpg - Copy.jpg",
          alt: "Two women in conversation during a neighborhood interaction.",
          width: 3072,
          height: 4080,
        },
      },
    ],
  },
  trustSection: {
    eyebrow: {
      en: "Trust built through local presence",
      hi: "स्थानीय उपस्थिति से बना भरोसा",
    },
    title: "Visible in Delhi. Grounded in community listening. Structured for long-term work.",
    description:
      "Families and supporters should be able to see where the organization stands, what it focuses on, and how it presents itself with transparency.",
    items: [
      {
        title: "Registered under Society Act 1860",
        description:
          "The organization presents its identity through its address, programs, and public-facing documentation.",
      },
      {
        title: "Field presence in Badarpur, New Delhi",
        description:
          "The organization is rooted in Delhi's neighborhoods, with work centered around real visits, local conversations, and reachable community touchpoints.",
      },
      {
        title: "Mission-led, not metric-led",
        description:
          "Until verified numbers are published, the site prioritizes program depth, human stories, and clearly stated work areas over inflated counters.",
        ctaLabel: "Explore Work Areas",
        href: "/our-work",
      },
    ] satisfies TrustItem[],
  },
  humanStory: {
    eyebrow: {
      en: "A human story behind every form filled and every meeting held",
      hi: "हर बैठक और हर सहयोग के पीछे एक मानवीय कहानी",
    },
    title: "Support often begins with one honest conversation.",
    summary:
      "The first step is rarely a big campaign. It is often a family explaining a wage delay, a woman asking about legal help, or a child slipping out of school because the household is stretched too thin.",
    body: [
      "In neighborhoods like Gautampuri and the surrounding settlements, families balance rent, food, healthcare, and work uncertainty at the same time. Problems are layered, and so solutions have to be layered too.",
      "Shehri Kamgar Samaj responds by listening closely, helping groups come together, linking families to practical support, and staying present long enough for the next step to become possible.",
    ],
    accentQuote:
      "We are trying to build a website that feels the same way the fieldwork feels: close, accountable, and rooted in everyday realities.",
    image: {
      src: "/imsge/pick2.jpg.jpeg",
      alt: "Community members gathered together in an urban settlement during a local support activity.",
      width: 4080,
      height: 3072,
    },
  } satisfies StoryBlock,
  impactNarratives: {
    eyebrow: {
      en: "How change begins",
      hi: "बदलाव कैसे शुरू होता है",
    },
    title: "The work moves in sequences, not snapshots.",
    description:
      "Instead of publishing unverified impact counters, the homepage shows the rhythm of how fieldwork actually grows.",
    cards: [
      {
        title: "Listen closely",
        body: "Field visits and group conversations help surface what is urgent, what is recurring, and what families need help navigating first.",
      },
      {
        title: "Organize locally",
        body: "Community meetings, awareness sessions, and women-led groups turn individual struggle into shared action and mutual support.",
      },
      {
        title: "Follow through",
        body: "Legal guidance, education support, health-related outreach, and livelihood pathways matter most when someone stays present after the first interaction.",
      },
    ],
  },
  impactMetrics: [
    { label: "Workers reached", value: "", enabled: false },
    { label: "Communities supported", value: "", enabled: false },
    { label: "Programs delivered", value: "", enabled: false },
  ],
  workAreas: [
    {
      slug: "worker-awareness",
      title: {
        en: "Worker support and awareness",
        hi: "कामगारों के लिए सहायता और जागरूकता",
      },
      summary:
        "Helping workers understand rights, entitlements, and practical options when jobs become insecure or unfair.",
      detail:
        "This work area focuses on awareness, referrals, and confidence-building so workers can ask informed questions and seek help without navigating the system alone.",
      outcomes: [
        "Rights awareness conversations",
        "Referral support for urgent issues",
        "Worker-centered community meetings",
      ],
    },
    {
      slug: "slum-and-homeless-support",
      title: {
        en: "Support for slum communities and unhoused families",
        hi: "झुग्गी एवं बेघर लोगों के लिए कार्य",
      },
      summary:
        "Working where instability is already high and basic access often depends on community networks rather than formal systems.",
      detail:
        "The NGO meets communities where they are, building trust through repeated presence and practical support in settlements where people are often overlooked.",
      outcomes: [
        "Community listening sessions",
        "Settlement-level support outreach",
        "Stronger local connection points",
      ],
    },
    {
      slug: "group-formation",
      title: {
        en: "Group formation and livelihood development",
        hi: "समूह गठन और आजीविका विकास",
      },
      summary:
        "Encouraging collective problem-solving and stronger economic pathways through group-based community action.",
      detail:
        "When people act together, information travels faster, confidence grows, and livelihood conversations become more practical and sustained.",
      outcomes: [
        "Community group formation",
        "Livelihood-oriented guidance",
        "Women-led leadership support",
      ],
    },
    {
      slug: "research-and-surveys",
      title: {
        en: "Research, surveys, and local study",
        hi: "शोध, सर्वे और अध्ययन",
      },
      summary:
        "Understanding local realities before promising solutions helps keep the work grounded and responsive.",
      detail:
        "Surveys and on-ground observation support better planning, sharper storytelling, and more credible issue-mapping across communities.",
      outcomes: [
        "Issue mapping",
        "Field-based documentation",
        "Need-driven program planning",
      ],
    },
    {
      slug: "education-and-health",
      title: {
        en: "Education and health improvement",
        hi: "शिक्षा और स्वास्थ्य सुधार",
      },
      summary:
        "Supporting children, caregivers, and families where school continuity and health access are fragile.",
      detail:
        "This area brings together awareness, camps, follow-up, and community-level coordination so basic services feel more reachable.",
      outcomes: [
        "Education continuity support",
        "Health awareness and camp facilitation",
        "Family-centered follow-up",
      ],
    },
    {
      slug: "legal-aid",
      title: {
        en: "Legal aid and rights navigation",
        hi: "कानूनी सहायता",
      },
      summary:
        "Helping communities understand where to go, what to ask, and how to move forward when rights issues become urgent.",
      detail:
        "Legal support does not begin in a courtroom. It often begins with clarity, documentation, referrals, and the confidence to take the next step.",
      outcomes: [
        "Referral pathways",
        "Documentation support",
        "Rights-based orientation",
      ],
    },
    {
      slug: "environment",
      title: {
        en: "Environmental protection and neighborhood resilience",
        hi: "पर्यावरण संरक्षण",
      },
      summary:
        "Healthier neighborhoods depend on cleaner surroundings, safer infrastructure, and collective responsibility.",
      detail:
        "Environmental work is approached as a community wellbeing issue linked to health, dignity, and safer urban living conditions.",
      outcomes: [
        "Community awareness drives",
        "Neighborhood resilience conversations",
        "Health-linked environmental action",
      ],
    },
    {
      slug: "institutional-development",
      title: {
        en: "Financial and institutional development",
        hi: "वित्तीय और संस्थागत विकास",
      },
      summary:
        "Strengthening the organization's systems so community work can stay steady, accountable, and future-ready.",
      detail:
        "Stronger internal systems help create better follow-up, more reliable coordination, and a more trustworthy foundation for supporters and partners.",
      outcomes: [
        "Operational strengthening",
        "Partnership readiness",
        "Sustainable program planning",
      ],
    },
  ] satisfies WorkArea[],
  programsSection: {
    eyebrow: {
      en: "Programs and initiatives",
      hi: "कार्यक्रम और पहल",
    },
    title: "Programs designed around what communities actually ask for.",
    description:
      "Each initiative combines trust-building, field presence, and practical support rather than one-off visibility.",
    items: [
      {
        title: "Skill development pathways",
        description:
          "Support for confidence-building, livelihood orientation, and community-linked pathways that can improve income stability over time.",
        format: "Workshops and group sessions",
        audience: "Women, youth, and worker households",
        theme: "Livelihood",
      },
      {
        title: "Awareness campaigns",
        description:
          "Doorstep and group-based awareness work on rights, public systems, wellbeing, and access to support services.",
        format: "Community outreach",
        audience: "Urban settlements and migrant families",
        theme: "Awareness",
      },
      {
        title: "Legal support linkages",
        description:
          "Guidance, referral, and issue navigation for families facing disputes, rights barriers, or document-related complications.",
        format: "Referral and follow-up support",
        audience: "Workers and vulnerable households",
        theme: "Legal aid",
      },
      {
        title: "Health and education support",
        description:
          "Programs that connect families to camps, awareness drives, and ongoing support where schooling and wellbeing are under pressure.",
        format: "Community support and facilitation",
        audience: "Children, caregivers, and families",
        theme: "Care",
      },
      {
        title: "Community leadership circles",
        description:
          "Small-group spaces that help residents organize around local issues and move from isolation to collective action.",
        format: "Peer-led meetings",
        audience: "Women and neighborhood leaders",
        theme: "Community leadership",
      },
      {
        title: "Research and documentation",
        description:
          "Structured observation and local study that helps the NGO plan responsibly and tell community stories with care.",
        format: "Field documentation",
        audience: "Programs and partners",
        theme: "Documentation",
      },
    ] satisfies ProgramItem[],
  },
  gallerySection: {
    eyebrow: {
      en: "Field moments",
      hi: "मैदान की झलकियां",
    },
    title: "A living record of conversations, gatherings, outreach, and community presence.",
    description:
      "The gallery stays close to the real texture of the work - meetings on the floor, neighborhood conversations, shared meals, and visible field presence.",
    items: [
      {
        id: "gallery-pick1",
        kind: "image",
        src: "/imsge/pick1.jpeg",
        alt: "A group of women attending a community meeting and listening to notes being read out.",
        width: 1280,
        height: 957,
        caption: "Listening circles often become the first step toward collective action.",
        tag: "Community meeting",
      },
      {
        id: "gallery-pick2",
        kind: "image",
        src: "/imsge/pick2.jpg.jpeg",
        alt: "Community members seated together during a shared meal and support gathering.",
        width: 4080,
        height: 3072,
        caption: "Support work is often built through everyday presence, not distance.",
        tag: "Community care",
      },
      {
        id: "gallery-pick4",
        kind: "image",
        src: "/imsge/pick4.jpg.jpeg",
        alt: "Two women speaking to each other in a neighborhood conversation.",
        width: 3072,
        height: 4080,
        caption: "One-to-one conversations help families ask for support without fear.",
        tag: "Human connection",
      },
      {
        id: "gallery-classroom",
        kind: "image",
        src: "/imsge/IMG_20240928_180031606_AE.jpg.jpeg",
        alt: "A facilitator seated with young girls and women during a group session indoors.",
        width: 4080,
        height: 3072,
        caption: "Education and confidence-building often happen in intimate, trusted spaces.",
        tag: "Learning spaces",
      },
      {
        id: "gallery-neighborhood",
        kind: "image",
        src: "/imsge/IMG_20250104_114422444_AE.jpg.jpeg",
        alt: "Residents standing in a Delhi lane during a neighborhood outreach effort.",
        width: 3072,
        height: 4080,
        caption: "Field presence means showing up where daily life is already unfolding.",
        tag: "Street outreach",
      },
      {
        id: "gallery-community",
        kind: "image",
        src: "/imsge/IMG_20241024_162026150_HDR_AE.jpg.jpeg",
        alt: "Women and residents gathered outdoors during a local interaction.",
        width: 2320,
        height: 1740,
        caption: "Community trust grows through repeated local contact.",
        tag: "Field visit",
      },
      {
        id: "gallery-video-short",
        kind: "video",
        src: encodeURI("/imsge/WhatsApp Video 2026-04-06 at 6.23.14 PM (1).mp4"),
        alt: "Short field video from Shehri Kamgar Samaj activities.",
        width: 16,
        height: 9,
        caption: "A short moving glimpse into the rhythm of on-ground NGO activity.",
        tag: "Field video",
        posterSrc: "/imsge/pick2.jpg.jpeg",
        durationLabel: "22 sec",
      },
      {
        id: "gallery-video-extended",
        kind: "video",
        src: encodeURI("/imsge/WhatsApp Video 2026-04-06 at 6.23.14 PM.mp4"),
        alt: "Extended field footage from Shehri Kamgar Samaj community work.",
        width: 16,
        height: 9,
        caption: "Longer field footage is available on demand inside the lightbox and never loaded on the homepage by default.",
        tag: "Extended story",
        posterSrc: "/imsge/pick1.jpeg",
        durationLabel: "4 min 27 sec",
      },
    ] satisfies GalleryItem[],
  },
  ctaBand: {
    eyebrow: {
      en: "Build this with us",
      hi: "हमारे साथ मिलकर बदलाव बनाइए",
    },
    title: "Together we can build a better society, one neighborhood relationship at a time.",
    description:
      "Support can mean volunteering skills, amplifying the work, or helping sustain field visits and community-led programs.",
    actions: [
      { label: "Volunteer with SKS", href: "/get-involved#volunteer", variant: "primary" },
      { label: "Support the Work", href: "/get-involved#donate", variant: "secondary" },
    ] satisfies ActionItem[],
  },
  aboutPage: {
    hero: {
      eyebrow: {
        en: "About the organization",
        hi: "संस्था के बारे में",
      },
      title: "",
      description:
        "Shehri Kamgar Samaj is oriented toward urban workers, low-income settlements, women, and families who need support that is practical, respectful, and reachable.",
      image: aboutPoster,
      actions: [
        { label: "Read NGO Details", href: ngoDetailsHref, variant: "ghost" },
      ] satisfies ActionItem[],
    },
    mission: {
      title: "Mission",
      description:
        "To strengthen urban communities by supporting workers, women, and vulnerable families with awareness, local organization, education, health-related outreach, legal guidance, and pathways to dignity.",
    },
    goals: [
      "Make rights, services, and support systems easier to understand and access.",
      "Support low-income settlements with community-rooted outreach and practical follow-up.",
      "Encourage group formation, local leadership, and livelihood-oriented growth.",
      "Build an institution that can stay accountable while remaining close to the ground.",
    ],
    objectives: [
      "Worker assistance and awareness",
      "Support for slum and unhoused communities",
      "Group formation and livelihood development",
      "Research, surveys, and study",
      "Education and health improvement",
      "Legal aid support",
      "Environmental protection",
      "Financial and institutional development",
    ],
    trustNotes: [
      "Registration proof is referenced openly on the site.",
      "The organization's field identity is rooted in Badarpur, New Delhi.",
      "Public storytelling is aligned with visible local work rather than inflated claims.",
    ],
  },
  workPage: {
    hero: {
      eyebrow: {
        en: "Where the work is focused",
        hi: "काम के मुख्य क्षेत्र",
      },
      title: "From worker support to education, health, and community resilience.",
      description:
        "The NGO's work areas are seeded from its own program details and adapted into clear, human-centered themes for the web experience.",
      image: {
        src: "/imsge/IMG_20250104_114218666_AE.jpg.jpeg",
        alt: "Field activity taking place in a dense Delhi neighborhood lane.",
        width: 3072,
        height: 4080,
      },
    },
  },
  getInvolvedPage: {
    hero: {
      eyebrow: {
        en: "Get involved",
        hi: "साथ जुड़िए",
      },
      title: "Volunteer your time or help sustain the work through giving.",
      description:
        "The conversion flow is built for clarity: one path for volunteers, one for donors, and direct follow-up through the NGO's internal lead process.",
      image: {
        src: "/imsge/pick2.jpg.jpeg",
        alt: "Community members gathered together during a field activity led by the NGO.",
        width: 4080,
        height: 3072,
      },
    },
    volunteerPanel: {
      title: "Volunteer",
      summary:
        "If you can contribute time, language skills, field support, teaching energy, or documentation help, there is room to stand with the work.",
      bulletPoints: [
        "Community outreach and group meeting support",
        "Education, documentation, or awareness assistance",
        "Flexible follow-up based on your interest and availability",
      ],
      suggestions: [
        "Community outreach",
        "Education support",
        "Health camp support",
        "Legal aid volunteering",
        "Documentation and storytelling",
      ],
    },
    donatePanel: {
      title: "Donate",
      summary:
        "Giving helps support field visits, community sessions, local coordination, and the everyday costs of staying present where support is needed most.",
      bulletPoints: [
        "Support for field-led programs and outreach",
        "Potential to back health, education, and legal support efforts",
        "A direct lead-capture flow for manual follow-up until payment integration is added",
      ],
      suggestions: [
        "One-time contribution",
        "Monthly support",
        "Program sponsorship",
        "Campaign partnership",
      ],
    },
  },
  contactPage: {
    hero: {
      eyebrow: {
        en: "Contact Shehri Kamgar Samaj",
        hi: "हमसे संपर्क करें",
      },
      title: "Reach out for field coordination, volunteering, partnerships, or general questions.",
      description:
        "The contact experience keeps the Delhi address visible and invites thoughtful outreach through a structured inquiry form.",
      image: {
        src: "/imsge/pick4.jpg - Copy.jpg",
        alt: "Two women in conversation during a neighborhood interaction.",
        width: 3072,
        height: 4080,
      },
    },
    channels: [
      {
        label: "Address",
        value: "B-954, Gautampuri Phase-II, Molarband Badapur, New Delhi",
        isVisible: true,
      },
      {
        label: "Phone",
        value: "9810787686, 9953310556",
        isVisible: true,
      },
      {
        label: "Email",
        value: "shehrikamgarsamaj@gmail.com",
        isVisible: true,
      },
    ] satisfies ContactChannel[],
    socialLinks: [] as { label: string; href?: string; isVisible: boolean }[],
    notes: [
      "Use the form for the fastest current follow-up path.",
      "Call or email directly for urgent coordination and volunteer follow-up.",
      "Delhi location is shown prominently to strengthen trust and offline discoverability.",
    ],
  },
  footer: {
    description:
      "A Delhi-rooted NGO website designed to communicate trust, local action, and community-centered support for workers and underserved neighborhoods.",
    quickLinks: [
      { label: "About Us", href: "/about" },
      { label: "Programs", href: "/programs" },
      { label: "Gallery", href: "/gallery" },
      { label: "Get Involved", href: "/get-involved" },
      { label: "Contact", href: "/contact" },
    ] satisfies NavItem[],
    documents: [
      { label: "NGO Details Image", href: ngoDetailsHref },
    ] satisfies ActionItem[],
  },
};
