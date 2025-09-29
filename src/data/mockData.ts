import { Feature, PricingPlan, Testimonial, Expert } from '../types';

export const features: Feature[] = [
  {
    id: 'carbon-score',
    title: 'AI-Powered Carbon Footprint Score',
    description: 'Real-time carbon footprint analysis powered by advanced AI algorithms',
    icon: '/images/AI powered score.svg',
    link: '/features/carbon-score'
  },
  {
    id: 'real-time',
    title: 'Real-Time Supply Chain Monitoring',
    description: 'Live tracking of emissions across your entire supply chain',
    icon: '/images/real time monitoring.svg',
    link: '/features/real-time-monitoring'
  },
  {
    id: 'recommendations',
    title: 'Carbon Reduction Recommendations',
    description: 'AI-driven insights to optimize and reduce your carbon footprint',
    icon: '/images/carbon reduction recomendations(Key Features).svg',
    link: '/features/recommendations'
  },
  {
    id: 'analytics',
    title: 'Historical Trends & Analytics',
    description: 'Comprehensive analytics and trend analysis for informed decisions',
    icon: '/images/historical trends.svg',
    link: '/features/analytics'
  },
  {
    id: 'reports',
    title: 'Exportable Reports',
    description: 'Professional sustainability reports ready for stakeholders',
    icon: '/images/exportable reports.svg',
    link: '/features/reports'
  },
  {
    id: 'integrations',
    title: 'System Integrations',
    description: 'Seamless integration with existing ERP and supply chain systems',
    icon: '/images/system integrations.svg',
    link: '/features/integrations'
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Pulse Plan',
    price: 49,
    features: [
      'Live dashboard',
      'AI tips',
      'Basic carbon tracking',
      'Monthly reporting',
      'Up to 5 suppliers',
      'Email support'
    ]
  },
  {
    id: 'pro',
    name: 'Pro Momentum Plan',
    price: 99,
    highlighted: true,
    features: [
      'Advanced AI insights',
      'Real-time monitoring',
      'Unlimited suppliers',
      'Custom recommendations',
      'Priority support',
      'API access'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise Legacy Plan',
    price: 169,
    features: [
      'Full feature access',
      'Custom integrations',
      'Dedicated account manager',
      'Advanced analytics',
      'White-label options',
      'SLA guarantee'
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    company: 'EcoTech Solutions',
    role: 'Chief Sustainability Officer',
    content: 'GlobalGreen transformed how we track and reduce our supply chain emissions. The AI insights are game-changing.',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Chen',
    company: 'GreenLogistics Inc.',
    role: 'VP of Operations',
    content: 'The real-time supply chain monitoring helped us reduce our carbon footprint by 35% in just six months.',
    rating: 5
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    company: 'Sustainable Manufacturing Co.',
    role: 'Environmental Director',
    content: 'Finally, a platform that makes carbon tracking simple and actionable for our entire organization.',
    rating: 5
  },
  {
    id: '4',
    name: 'David Kim',
    company: 'Future Foods',
    role: 'CEO',
    content: 'The comprehensive reporting features helped us secure sustainable financing for our expansion.',
    rating: 5
  }
];

export const experts: Expert[] = [
  {
    id: '1',
    name: 'Dr. Amanda Green',
    role: 'Chief Technology Officer',
    bio: 'Leading AI researcher with 15+ years in sustainability tech and machine learning applications.',
    expertise: ['AI & Machine Learning', 'Carbon Analytics', 'Supply Chain Optimization']
  },
  {
    id: '2',
    name: 'James Rodriguez',
    role: 'Head of Sustainability',
    bio: 'Former UN advisor on climate technology with expertise in global supply chain carbon management.',
    expertise: ['Climate Policy', 'Sustainability Strategy', 'Carbon Markets']
  },
  {
    id: '3',
    name: 'Lisa Wang',
    role: 'VP of Product',
    bio: 'Product leader with a track record of building scalable enterprise sustainability solutions.',
    expertise: ['Product Strategy', 'UX Design', 'Enterprise Solutions']
  }
];