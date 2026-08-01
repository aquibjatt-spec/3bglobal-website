import {
  Languages,
  FileText,
  Globe2,
  Captions,
  Headphones,
  Mic,
  Database,
  Tags,
  ShieldCheck,
  Brain,
  HeartPulse,
  Cpu,
  GraduationCap,
  Clapperboard,
  Scale,
  ShoppingBag,
  FlaskConical,
  Users,
  Globe,
  Clock,
  Lock,
  BadgeCheck,
  UserCog,
  type LucideIcon,
} from 'lucide-react';

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  benefits: string[];
  industries: string[];
  whyUs: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: 'translation',
    name: 'Translation Services',
    short: 'Accurate, culturally nuanced translation across 50+ languages by native-speaking linguists.',
    description:
      'Human translation by certified native linguists with deep domain expertise. Every project passes through translation, editing, and proofreading (TEP) with terminology management and style guides tailored to your brand voice.',
    benefits: [
      'Native-speaking subject-matter experts',
      'Translation memory & glossary management',
      'TEP workflow for guaranteed accuracy',
      'ISO-aligned quality processes',
    ],
    industries: ['Technology', 'Legal', 'Healthcare', 'E-Commerce', 'Government'],
    whyUs:
      'We pair every linguist to your domain and build a dedicated terminology base so your message stays consistent across every market and every release.',
    icon: Languages,
  },
  {
    slug: 'transcription',
    name: 'Transcription Services',
    short: 'Verbatim and clean transcripts from audio and video with 99%+ accuracy.',
    description:
      'Human transcription of interviews, meetings, legal proceedings, media content, and research audio. Available verbatim or intelligent (clean) read, with timestamps and speaker identification.',
    benefits: [
      '99%+ accuracy guaranteed',
      'Verbatim, intelligent & time-coded options',
      'Multi-speaker identification',
      'Secure handling of sensitive content',
    ],
    industries: ['Media', 'Legal', 'Research', 'Healthcare', 'Education'],
    whyUs:
      'Our transcribers are native listeners trained for your industry, delivering clean readable output even with accents, jargon, and overlapping speech.',
    icon: FileText,
  },
  {
    slug: 'localization',
    name: 'Localization Services',
    short: 'Adapt products, software, and content for local markets with cultural precision.',
    description:
      'End-to-end localization of software, apps, websites, games, and marketing content. We adapt layout, imagery, date and currency formats, tone, and cultural references so your product feels native in every locale.',
    benefits: [
      'Software, app & website localization',
      'Cultural adaptation of UX & imagery',
      'Locale-specific formatting & compliance',
      'In-context linguistic testing',
    ],
    industries: ['Technology', 'E-Commerce', 'Media', 'Gaming', 'Education'],
    whyUs:
      'We localize beyond words — adapting design, tone, and user flows so your product resonates locally while staying on-brand globally.',
    icon: Globe2,
  },
  {
    slug: 'subtitling',
    name: 'Subtitling & Captioning',
    short: 'Time-coded subtitles and closed captions in 50+ languages for any platform.',
    description:
      'Professional subtitling and closed captioning for video, film, streaming, e-learning, and social media. We handle transcription, timing, line breaks, reading-speed limits, and burn-in or delivery of SRT, VTT, and SCC files.',
    benefits: [
      'Broadcast & streaming standards compliance',
      'Reading-speed & line-length optimization',
      'SRT, VTT, SCC & burned-in delivery',
      'Closed captions for accessibility',
    ],
    industries: ['Media', 'Entertainment', 'E-Learning', 'Corporate', 'Government'],
    whyUs:
      'Our subtitlers balance accuracy, timing, and readability so captions feel natural — never distracting — on any screen or platform.',
    icon: Captions,
  },
  {
    slug: 'interpretation',
    name: 'Interpretation Services',
    short: 'Simultaneous, consecutive, and whispered interpretation for any setting.',
    description:
      'Professional interpreters for conferences, business meetings, legal depositions, healthcare appointments, and remote events. Available simultaneous, consecutive, whispered, and over-the-phone or VRI.',
    benefits: [
      'Simultaneous & consecutive modes',
      'Conference-grade equipment support',
      'OPI & video remote interpretation (VRI)',
      'Confidential & legally aware linguists',
    ],
    industries: ['Government', 'Legal', 'Healthcare', 'Business', 'Diplomacy'],
    whyUs:
      'Our interpreters are trained for high-stakes settings — keeping meaning, tone, and nuance intact in real time across borders.',
    icon: Headphones,
  },
  {
    slug: 'voice-recording',
    name: 'Voice Recording Services',
    short: 'Native voice talent for commercials, IVR, e-learning, and AI training data.',
    description:
      'Professional native voice-over recording for commercials, narration, IVR systems, e-learning, audiobooks, and AI training datasets. Studio-quality audio with directed sessions available.',
    benefits: [
      'Native voice talent in 50+ languages',
      'Studio-quality broadcast audio',
      'Directed remote sessions available',
      'AI training speech datasets',
    ],
    industries: ['Media', 'E-Learning', 'Technology', 'Telecom', 'Advertising'],
    whyUs:
      'We cast the right native voice for your brand and deliver broadcast-ready audio with fast turnaround and full usage rights.',
    icon: Mic,
  },
  {
    slug: 'ai-data-collection',
    name: 'AI Data Collection',
    short: 'Scalable, ethically sourced speech, text, and image datasets for ML models.',
    description:
      'Custom data collection for AI and machine learning — speech, text, images, and video across 50+ languages and dialects. We recruit, consent, and deliver fully labeled, license-clear datasets at scale.',
    benefits: [
      'Speech, text, image & video datasets',
      'Diverse demographics & dialects',
      'Consent & license-clear delivery',
      'Scalable to millions of items',
    ],
    industries: ['AI & Machine Learning', 'Technology', 'Research', 'Automotive', 'Healthcare'],
    whyUs:
      'We combine a global linguist network with rigorous consent and QA so your models train on clean, diverse, license-clear data.',
    icon: Database,
  },
  {
    slug: 'data-annotation',
    name: 'Data Annotation Services',
    short: 'Precise labeling for NLP, computer vision, and speech models at scale.',
    description:
      'Human annotation and labeling for machine learning — text classification, NER, sentiment, intent, image bounding boxes, segmentation, and audio transcription. Multi-pass QA with measurable accuracy.',
    benefits: [
      'Text, image, audio & video annotation',
      'NER, sentiment, intent & classification',
      'Bounding boxes & segmentation',
      'Multi-pass QA with accuracy SLAs',
    ],
    industries: ['AI & Machine Learning', 'Technology', 'Automotive', 'Healthcare', 'Research'],
    whyUs:
      'Our trained annotators follow your guidelines precisely, with built-in adjudication so your labels are consistent across every batch.',
    icon: Tags,
  },
  {
    slug: 'linguistic-qa',
    name: 'Linguistic Quality Assurance',
    short: 'In-language review and testing to guarantee a flawless localized experience.',
    description:
      'In-context linguistic QA and testing for localized products — functional testing, linguistic review, cosmetic checks, and locale compliance. We catch what automated tools miss before your users do.',
    benefits: [
      'In-context linguistic review',
      'Functional & cosmetic localization testing',
      'Locale compliance & formatting checks',
      'Bug reporting with reproducible steps',
    ],
    industries: ['Technology', 'Gaming', 'E-Commerce', 'Media', 'Government'],
    whyUs:
      'Our QA linguists test in real environments, catching cultural, formatting, and functional issues before they reach your customers.',
    icon: ShieldCheck,
  },
];

export type Industry = {
  name: string;
  description: string;
  icon: LucideIcon;
};

export const industries: Industry[] = [
  { name: 'Artificial Intelligence', description: 'Training data, annotation, and evaluation for LLMs, speech, and vision models.', icon: Brain },
  { name: 'Healthcare', description: 'Compliant translation of clinical, regulatory, and patient-facing content.', icon: HeartPulse },
  { name: 'Technology', description: 'Software, documentation, and product localization at release speed.', icon: Cpu },
  { name: 'Education', description: 'E-learning courses, subtitles, and narration for global learners.', icon: GraduationCap },
  { name: 'Media & Entertainment', description: 'Subtitling, dubbing, and captions for film, streaming, and social.', icon: Clapperboard },
  { name: 'Legal', description: 'Certified legal translation and interpretation for contracts and proceedings.', icon: Scale },
  { name: 'E-Commerce', description: 'Product listings, reviews, and storefronts localized for every market.', icon: ShoppingBag },
  { name: 'Research', description: 'Transcription, translation, and coding for qualitative studies.', icon: FlaskConical },
];

export type WhyItem = { title: string; description: string; icon: LucideIcon };

export const whyChooseUs: WhyItem[] = [
  { title: 'Native Language Experts', description: 'Every project is handled by linguists who work in their native language and your domain.', icon: Users },
  { title: 'Scalable Global Workforce', description: 'A vetted network of 100+ linguists ready to scale from a single file to enterprise volume.', icon: Globe },
  { title: 'Fast Turnaround Times', description: 'Agile workflows and dedicated project managers keep your deadlines on track.', icon: Clock },
  { title: 'Confidential & Secure', description: 'NDAs, encrypted handling, and role-based access protect your sensitive content.', icon: Lock },
  { title: 'Quality Assurance Processes', description: 'Multi-step TEP and QA workflows with measurable accuracy on every deliverable.', icon: BadgeCheck },
  { title: 'Dedicated Project Management', description: 'A single point of contact who knows your brand, glossary, and goals end to end.', icon: UserCog },
];

export type LanguageRegion = {
  region: string;
  blurb: string;
  languages: string[];
};

export const languageRegions: LanguageRegion[] = [
  {
    region: 'South Asian Languages',
    blurb: 'Deep coverage of the subcontinent’s major and regional languages.',
    languages: ['Urdu', 'Hindi', 'Punjabi', 'Sindhi', 'Saraiki', 'Pashto', 'Balochi', 'Kashmiri', 'Gujarati', 'Bengali', 'Marathi', 'Malayalam', 'Tamil', 'Telugu', 'Kannada', 'Assamese', 'Nepali', 'Sinhala'],
  },
  {
    region: 'Middle Eastern Languages',
    blurb: 'Modern Standard Arabic and its major dialects, plus Persian and Turkish.',
    languages: ['Arabic', 'Egyptian Arabic', 'Gulf Arabic', 'Levantine Arabic', 'Persian', 'Dari', 'Kurdish', 'Turkish'],
  },
  {
    region: 'Southeast Asian Languages',
    blurb: 'Coverage across the ASEAN region’s fastest-growing digital markets.',
    languages: ['Tagalog', 'Cebuano', 'Indonesian', 'Malay', 'Thai', 'Vietnamese', 'Burmese', 'Khmer'],
  },
  {
    region: 'European Languages',
    blurb: 'All major European languages for business, legal, and tech content.',
    languages: ['English', 'Spanish', 'Italian', 'Portuguese', 'French', 'German', 'Dutch', 'Russian', 'Ukrainian', 'Polish', 'Romanian', 'Greek'],
  },
  {
    region: 'East Asian Languages',
    blurb: 'Specialist linguists for the world’s largest Asian economies.',
    languages: ['Mandarin Chinese', 'Cantonese', 'Japanese', 'Korean'],
  },
  {
    region: 'African Languages',
    blurb: 'Growing coverage of major African languages for inclusive AI and content.',
    languages: ['Swahili', 'Amharic', 'Hausa', 'Somali', 'Yoruba'],
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'Three Brothers Linguistics scaled our annotation pipeline to over 40 languages without a single drop in quality. They became an extension of our data team.',
    name: 'Director of Data Operations',
    role: 'AI Research Lab',
    company: 'Global AI Company',
  },
  {
    quote:
      'Their native linguists understood our regulatory context and delivered certified translations ahead of schedule. A genuinely dependable partner.',
    name: 'Head of Localization',
    role: 'Enterprise SaaS',
    company: 'Technology Company',
  },
  {
    quote:
      'We shipped localized versions of our app into 12 new markets in one quarter. The in-context QA caught issues our internal team would have missed.',
    name: 'Product Lead',
    role: 'Global Expansion',
    company: 'E-Commerce Platform',
  },
  {
    quote:
      'The voice recording team delivered broadcast-quality audio in six languages with directed remote sessions. Fast, professional, and on-brand.',
    name: 'Creative Director',
    role: 'Media Production',
    company: 'Media & Entertainment',
  },
];

export type CaseStudy = {
  title: string;
  category: string;
  summary: string;
  metrics: { label: string; value: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    title: 'Scaling Multilingual Training Data for an LLM Provider',
    category: 'AI Data Collection',
    summary:
      'We recruited native speakers across 38 languages to produce consent-clear speech and text datasets, enabling a leading LLM lab to expand language coverage in a single release cycle.',
    metrics: [
      { label: 'Languages', value: '38' },
      { label: 'Data items', value: '1.2M+' },
      { label: 'On-time delivery', value: '100%' },
    ],
  },
  {
    title: 'Localizing a SaaS Platform for 12 New Markets',
    category: 'Software Localization',
    summary:
      'A full localization program covering UI, documentation, and marketing — with in-context QA — let an enterprise SaaS company launch in 12 locales within one quarter.',
    metrics: [
      { label: 'Locales', value: '12' },
      { label: 'Words localized', value: '2.4M' },
      { label: 'QA issues caught', value: '600+' },
    ],
  },
  {
    title: 'Multilingual Subtitling for a Global Streaming Launch',
    category: 'Media & Entertainment',
    summary:
      'Time-coded subtitles in 22 languages for a simultaneous global release, with reading-speed and line-length optimization for every platform.',
    metrics: [
      { label: 'Languages', value: '22' },
      { label: 'Hours subtitled', value: '180+' },
      { label: 'Turnaround', value: '3 wks' },
    ],
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: 'How many languages do you support?',
    a: 'We provide services across 50+ languages spanning South Asia, the Middle East, Southeast Asia, Europe, East Asia, and Africa — including major regional dialects.',
  },
  {
    q: 'How do you ensure quality and accuracy?',
    a: 'Every project follows a multi-step workflow — translation, editing, and proofreading (TEP) — with terminology management, style guides, and a final QA pass. We measure accuracy and stand behind it.',
  },
  {
    q: 'Can you handle large-volume enterprise projects?',
    a: 'Yes. Our network of 100+ vetted linguists scales from a single file to enterprise volume, coordinated by a dedicated project manager and supported by secure infrastructure.',
  },
  {
    q: 'How do you keep our content confidential?',
    a: 'All linguists work under NDA, content is handled over encrypted channels, and access is role-based. We can accommodate custom security and compliance requirements.',
  },
  {
    q: 'What is your typical turnaround time?',
    a: 'Turnaround depends on volume and complexity, but our agile workflows and dedicated project managers are built to meet tight deadlines. Share your timeline and we will confirm a delivery date upfront.',
  },
  {
    q: 'Do you provide AI training data services?',
    a: 'Yes — we collect and annotate speech, text, image, and video datasets with full consent and licensing, and deliver at scale for machine learning and LLM projects.',
  },
  {
    q: 'How do I get a quote?',
    a: 'Use the contact form on our Contact page with your project details, language pair, and deadline. We respond with a tailored quote — typically within one business day.',
  },
];

export const stats = [
  { value: 100, suffix: '+', label: 'Professional Linguists' },
  { value: 50, suffix: '+', label: 'Supported Languages' },
  { value: 6, suffix: '', label: 'Continents Covered' },
  { value: 99, suffix: '%', label: 'Quality Accuracy' },
];

export const companyEmail = 'info@3bglobal.online';
export const domain = '3bglobal.online';
