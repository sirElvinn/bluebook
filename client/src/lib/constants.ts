export const SITE_NAME = 'SATitude'
export const SITE_TAGLINE = 'Master the Digital SAT'

export const NAV_LINKS = [
  { label: 'Practice Tests', href: '#tests' },
  { label: 'Question Bank', href: '#features' },
  { label: 'AI Tutor', href: '#tutor' },
  { label: 'Pricing', href: '#pricing' },
]

export const STATS = [
  { value: '50,000+', label: 'students using SATitude' },
  { value: '2,400+', label: 'practice questions' },
  { value: '94%', label: 'improved their score' },
  { value: '8', label: 'full-length practice tests' },
]

export const FEATURES = [
  {
    icon: 'exam',
    title: 'Bluebook-style practice tests',
    description:
      'Full-length digital SAT exams that mirror the real College Board Bluebook interface — same adaptive format, same timing, same feel.',
  },
  {
    icon: 'brain',
    title: 'AI tutor that explains everything',
    description:
      'Get step-by-step explanations for every question. Ask follow-ups, request simpler breakdowns, or go deeper — the tutor adapts to how you think.',
  },
  {
    icon: 'chart',
    title: 'Analytics that show what to study',
    description:
      'Track your score over time by section and skill. See exactly where you lose points and what to practice next — no guessing.',
  },
  {
    icon: 'target',
    title: 'Targeted question bank',
    description:
      'Filter 2,400+ questions by topic, difficulty, and question type. Drill the skills that matter most for your target score.',
  },
]

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Take a diagnostic test',
    description:
      'Start with a full-length practice SAT to see where you stand. Takes about 2 hours — same as the real thing.',
  },
  {
    step: '02',
    title: 'Get your study plan',
    description:
      'Based on your results, SATitude shows you exactly which skills to work on and in what order.',
  },
  {
    step: '03',
    title: 'Practice with AI support',
    description:
      'Work through questions with your AI tutor by your side. Every wrong answer becomes a lesson.',
  },
]

export const TESTIMONIALS = [
  {
    name: 'Priya Sharma',
    score: '1480 → 1560',
    text: 'The AI tutor is what made the difference. I could ask why I was wrong and actually understand it, not just memorize the answer.',
  },
  {
    name: 'Marcus Webb',
    score: '1320 → 1430',
    text: 'I tried three other apps. SATitude is the only one that felt like the real test. The adaptive format is exactly right.',
  },
  {
    name: 'Aiko Tanaka',
    score: '1390 → 1520',
    text: 'The analytics showed me I was losing 40 points on linear equations alone. Fixed that in two weeks. Went up 130 points total.',
  },
]

export const PRICING = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Get started with the basics',
    features: [
      '1 full-length practice test',
      '50 practice questions',
      'Basic score report',
      'AI tutor (5 questions/day)',
    ],
    cta: 'Start for free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$19',
    period: 'per month',
    description: 'Everything you need to hit your target score',
    features: [
      '8 full-length practice tests',
      'Unlimited question bank',
      'Full analytics dashboard',
      'Unlimited AI tutor',
      'Personalized study plan',
      'Score prediction',
    ],
    cta: 'Start 7-day free trial',
    highlighted: true,
  },
]