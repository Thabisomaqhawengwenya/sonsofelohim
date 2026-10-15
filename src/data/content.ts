import type {
  PillarDetail,
  LivingCreature,
  CoreValue,
  ApproachStep,
  EventItem,
  BrotherStory,
  FaqItem,
  StewardLetter,
} from '../types';

export const SITE_METADATA = {
  name: 'Sons of Elohim',
  tagline: 'Built in Brotherhood. Rooted in God. Growing in Purpose.',
  coreMessage: 'We grow together. We sharpen one another. We walk in purpose.',
  scriptureReference: 'Ezekiel 1:10',
  scriptureText:
    'Each of the four had the face of a human being, and on the right side each had the face of a lion, and on the left the face of an ox; each also had the face of an eagle.',
  proverbsReference: 'Proverbs 27:17',
  proverbsText: 'As iron sharpens iron, so one person sharpens another.',
  missionStatement:
    'To build a brotherhood of purpose-driven individuals who help one another grow spiritually, financially, physically, mentally, and socially through mentorship, accountability, shared knowledge, and faith in God.',
  visionStatement:
    'To raise a generation of grounded, disciplined, capable, and purpose-driven individuals who positively influence their families, communities, and the world.',
  targetAudience: 'Young men (15–25) and purpose-driven community members committed to balanced, intentional, faith-rooted growth.',
};

export const LIVING_CREATURES: LivingCreature[] = [
  {
    id: 'human',
    name: 'The Human',
    symbol: 'Wisdom & Character',
    qualities: ['Discerning Wisdom', 'Moral Character', 'Personal Responsibility', 'Humane Empathy'],
    application:
      'Represents our calling to intellectual maturity, self-governance, and moral accountability before God and fellow brothers. We reject passivity and take radical ownership of our actions.',
    biblicalPrinciple:
      'Reflects the image of God in human responsibility, intellect, and conscience (Genesis 1:26; Colossians 3:10).',
    iconKey: 'UserCheck',
  },
  {
    id: 'lion',
    name: 'The Lion',
    symbol: 'Courage & Boldness',
    qualities: ['Moral Fortitude', 'Spiritual Boldness', 'Courageous Leadership', 'Unwavering Conviction'],
    application:
      'Represents the strength to stand firm when culture drifts, defend the truth without compromise, and lead with boldness rather than timidity.',
    biblicalPrinciple:
      'The righteous are bold as a lion, moving forward in holy conviction rather than fear (Proverbs 28:1; Joshua 1:9).',
    iconKey: 'Flame',
  },
  {
    id: 'ox',
    name: 'The Ox',
    symbol: 'Service & Endurance',
    qualities: ['Humble Labor', 'Tenacious Endurance', 'Servant Leadership', 'Quiet Consistency'],
    application:
      'Represents the grit to perform unglamorous, heavy work day after day. We embrace service without seeking applause, knowing faithfulness in small things builds enduring foundations.',
    biblicalPrinciple:
      'Emphasizes steady labor, disciplined service, and strength channeled for the welfare of others (Proverbs 14:4; Galatians 6:9).',
    iconKey: 'ShieldCheck',
  },
  {
    id: 'eagle',
    name: 'The Eagle',
    symbol: 'Vision & Perspective',
    qualities: ['Kingdom Perspective', 'Long-range Vision', 'Spiritual Renewal', 'Ascending Limitations'],
    application:
      'Represents rising above immediate turbulence to see life through God’s panoramic perspective. We focus on eternal generational impact rather than short-term distractions.',
    biblicalPrinciple:
      'Those who wait on the Lord mount up with wings like eagles, soaring in divine perspective and renewed vigor (Isaiah 40:31; Colossians 3:1-2).',
    iconKey: 'Compass',
  },
];

export const FIVE_PILLARS: PillarDetail[] = [
  {
    id: 'financial',
    name: 'Financial Growth',
    tagline: 'Discipline, Stewardship & Enterprise',
    summary:
      'Cultivating sound financial discipline, biblical stewardship, budgeting mastery, entrepreneurship, and sustainable career skills.',
    iconName: 'Coins',
    whatItMeans:
      'Financial growth is not the pursuit of empty luxury or get-rich-quick shortcuts. It is the practical stewardship of God-given resources through disciplined budgeting, saving, eliminating debt, acquiring high-value skills, and building enterprise that serves families and communities.',
    whyItMatters:
      'Financial stress cripples young men, limiting their capacity to provide, lead, give generously, and take purposeful risks. True financial independence creates liberty to serve God and care for others unencumbered.',
    commonChallenges: [
      'Peer pressure to look wealthy before building real assets',
      'Impulsive consumer spending on debt and depreciating goods',
      'Lack of basic budgeting, investing, and tax literacy',
      'Falling prey to speculative get-rich-quick schemes',
    ],
    practicalHabits: [
      'Maintain an honest zero-based monthly budget tracking every dollar',
      'Save a 3-month emergency fund before lifestyle expansion',
      'Dedicate 5 hours weekly to developing monetization-ready career skills',
      'Practice regular, cheerful tithing and generous giving',
    ],
    peerSupportMechanisms: [
      'Monthly brotherhood budget check-ins and savings milestones',
      'Peer book clubs studying classical stewardship and wealth-building literature',
      'Resume, interview prep, and business idea critique roundtables',
    ],
    discussionTopics: [
      'The difference between kingdom stewardship and worldly consumerism',
      'First steps to launching a micro-business with zero initial capital',
      'Navigating career decisions without compromising biblical convictions',
    ],
    scriptureReference: 'Proverbs 13:11',
    scriptureText:
      'Wealth gained hastily will dwindle, but whoever gathers little by little will increase it.',
  },
  {
    id: 'physical',
    name: 'Physical Growth',
    tagline: 'Strength, Health & Bodily Stewardship',
    summary:
      'Developing physical strength, stamina, disciplined nutrition, restorative sleep, and treating the body as a temple of the Holy Spirit.',
    iconName: 'Dumbbell',
    whatItMeans:
      'Physical growth is the commitment to honor God through bodily health. It involves regular resistance training, cardiovascular endurance, nutritious eating, adequate recovery, and rejecting destructive addictions.',
    whyItMatters:
      'Physical vitality is the engine of service. A sluggish, undisciplined body hinders spiritual focus, mental sharpness, and practical usefulness. Strength is not for vanity; it is for service and protection.',
    commonChallenges: [
      'Sedentary lifestyle dominated by screens and doom-scrolling',
      'Inconsistency and abandoning training after two weeks',
      'Poor sleep habits leading to chronic fatigue and brain fog',
      'Vulnerability to cheap junk food and energy drinks',
    ],
    practicalHabits: [
      'Exercise with intention at least 4 times per week (strength + cardio)',
      'Prioritize 7-8 hours of uninterrupted sleep with a consistent bedtime',
      'Eliminate ultra-processed sugars and hydrate with at least 2.5L water daily',
      'Start the day with physical movement before touching a smartphone',
    ],
    peerSupportMechanisms: [
      'Local brotherhood workout sessions and fitness challenges',
      'Daily 24-hour accountability pings for workout completion',
      'Healthy cooking and nutrition workshops led by experienced members',
    ],
    discussionTopics: [
      'The body as a temple: practical theology of physical discipline',
      'Overcoming laziness and building a permanent habit of movement',
      'Injury prevention, mobility, and lifelong longevity vs ego lifting',
    ],
    scriptureReference: '1 Corinthians 6:19-20',
    scriptureText:
      'Do you not know that your bodies are temples of the Holy Spirit... Therefore honor God with your bodies.',
  },
  {
    id: 'spiritual',
    name: 'Spiritual Growth',
    tagline: 'Scripture, Prayer & Obedience',
    summary:
      'Deepening a genuine walk with God through scripture meditation, earnest prayer, regular fellowship, obedience, and kingdom purpose.',
    iconName: 'BookOpen',
    whatItMeans:
      'Spiritual growth is the core foundation from which all other aspects of life draw vitality. It is not shallow legalism or weekly religious routine, but an ongoing communion with God through His Word, prayer, confession, repentance, and radical obedience.',
    whyItMatters:
      'Without a solid spiritual compass, a man can achieve world acclaim yet lose his soul. In a chaotic world of shifting morals, being anchored in Christ provides unshakeable identity, peace, and eternal direction.',
    commonChallenges: [
      'Dry prayer life and difficulty focusing during Scripture reading',
      'Struggles with secret sins, purity, and spiritual guilt',
      'Cultural pressure to compromise biblical convictions',
      'Treating Christianity as an intellectual theory rather than daily obedience',
    ],
    practicalHabits: [
      'Begin each morning with uninterrupted Scripture reading and prayer (First 20 minutes)',
      'Memorize one transformative passage of Scripture every week',
      'Engage in weekly corporate worship and local church communion',
      'Fast regularly (meals or digital media) to sharpen spiritual attunement',
    ],
    peerSupportMechanisms: [
      'Weekly brotherhood Scripture study and honest confession circles',
      'Prayer request chains with brothers checking in throughout the week',
      'Paired daily Bible reading plans with reflection notes shared in pairs',
    ],
    discussionTopics: [
      'Developing an authentic prayer life that moves beyond a wish list',
      'Biblical manhood in an era of confusion and moral relativism',
      'How to hear God’s voice and discern your individual vocational calling',
    ],
    scriptureReference: '2 Peter 3:18',
    scriptureText:
      'Grow in the grace and knowledge of our Lord and Savior Jesus Christ. To him be glory both now and forever! Amen.',
  },
  {
    id: 'mental',
    name: 'Mental Growth',
    tagline: 'Resilience, Wisdom & Sound Mind',
    summary:
      'Cultivating emotional maturity, critical thinking, mental resilience, continuous learning, and freedom from anxious spirals.',
    iconName: 'Brain',
    whatItMeans:
      'Mental growth is the development of a renewed, disciplined mind. It encompasses emotional control under pressure, critical thinking, expanding intellectual curiosity through reading, overcoming victim mentality, and cultivating unshakeable mental fortitude.',
    whyItMatters:
      'Our thoughts dictate our decisions, habits, and destiny. A young man who cannot govern his impulses and emotions will inevitably sabotage his relationships, career, and spiritual walk.',
    commonChallenges: [
      'Chronic anxiety, overthinking, and fear of failure',
      'Shortened attention spans from short-form video consumption',
      'Victim mindset that blames external circumstances for lack of progress',
      'Imposter syndrome preventing action on worthy goals',
    ],
    practicalHabits: [
      'Read at least 15 pages of deep, non-fiction literature daily',
      'Maintain an evening reflection journal to evaluate decisions and emotions',
      'Institute a weekly digital detox (e.g., screen-free Sabbath blocks)',
      'Practice pausing before reacting in heated or emotionally charged moments',
    ],
    peerSupportMechanisms: [
      'Brotherhood book debates on history, philosophy, and personal leadership',
      'Mental resilience check-ins where brothers review current life stress',
      'Cognitive reframing exercises helping brothers conquer destructive thought patterns',
    ],
    discussionTopics: [
      'Guarding your mind: detoxing from algorithmic distraction and toxic media',
      'Stoic endurance vs Christian hope: finding true peace in suffering',
      'Developing analytical rigor and separating emotional reaction from objective truth',
    ],
    scriptureReference: 'Romans 12:2',
    scriptureText:
      'Do not conform to the pattern of this world, but be transformed by the renewing of your mind.',
  },
  {
    id: 'social',
    name: 'Social Growth',
    tagline: 'Brotherhood, Leadership & Accountability',
    summary:
      'Building authentic, lifelong brotherhood, clear interpersonal communication, servant leadership, and positive community influence.',
    iconName: 'Users',
    whatItMeans:
      'Social growth is the art of building genuine, trustworthy relationships. It involves learning how to communicate with clarity and empathy, resolving conflicts maturely, accepting correction with humility, leading by example, and standing as a faithful brother in times of crisis.',
    whyItMatters:
      'Young men are suffering through an unprecedented epidemic of loneliness. Isolation breeds vulnerability to sin, depression, and aimlessness. When men link arms in mutual accountability, they become an unstoppable force for good.',
    commonChallenges: [
      'Superficial surface-level friendships centered merely on video games or sports',
      'Fear of vulnerability and hiding real struggles behind a false mask',
      'Difficulty expressing emotions and resolving relational misunderstandings',
      'Social anxiety and difficulty navigating professional social environments',
    ],
    practicalHabits: [
      'Reach out intentionally to encourage two brothers every week without an agenda',
      'Practice active listening in every conversation without interrupting',
      'Offer honest, constructive feedback paired with unwavering loyalty',
      'Participate actively in community service and mentoring younger youth',
    ],
    peerSupportMechanisms: [
      'Brotherhood accountability triads with weekly vulnerability check-ins',
      'Organized service projects serving local widows, orphans, and community centers',
      'Public speaking and communication practice sessions within small cohorts',
    ],
    discussionTopics: [
      'How to choose friends who sharpen you instead of pulling you down',
      'Conflict resolution: resolving offenses directly instead of harboring resentment',
      'Leading with humility in an arrogant world: the model of Christ washing feet',
    ],
    scriptureReference: 'Ecclesiastes 4:9-10',
    scriptureText:
      'Two are better than one, because they have a good return for their labor: If either of them falls down, one can help the other up.',
  },
];

export const CORE_VALUES: CoreValue[] = [
  {
    name: 'Faith in God',
    tagline: 'Our Unshakeable Anchor',
    description:
      'Every endeavor is rooted in reverence for God and obedience to Christ. We don’t rely on human willpower alone; divine grace fuels our transformation.',
    scripture: 'Hebrews 11:1',
  },
  {
    name: 'Brotherhood',
    tagline: 'Sharpening, Not Competing',
    description:
      'We refuse lone-wolf isolation. We celebrate each other’s victories, shoulder each other’s burdens, and refuse to let any brother fall behind unnoticed.',
    scripture: 'Proverbs 27:17',
  },
  {
    name: 'Discipline',
    tagline: 'Consistency Over Emotion',
    description:
      'We do what is right even when we do not feel like it. True freedom is found in the voluntary submission to disciplined habits and moral boundaries.',
    scripture: '1 Corinthians 9:27',
  },
  {
    name: 'Integrity',
    tagline: 'Alignment in Secret and Public',
    description:
      'Who we are in the dark must match who we are in the light. We keep our word, honor our commitments, and practice unwavering honesty.',
    scripture: 'Proverbs 10:9',
  },
  {
    name: 'Humility',
    tagline: 'Teachable and Ready to Serve',
    description:
      'No one has everything figured out. We gladly receive correction, celebrate the gifts of others, and measure greatness by the capacity to serve.',
    scripture: 'Philippians 2:3',
  },
  {
    name: 'Accountability',
    tagline: 'Iron Sharpening Iron',
    description:
      'We invite trusted brothers into our struggles. Accountability is not judgment; it is a life-saving shield that protects us from blind spots.',
    scripture: 'James 5:16',
  },
  {
    name: 'Service',
    tagline: 'Strength Channeled for Others',
    description:
      'We reject self-absorbed ambition. Our financial, physical, and spiritual growth is channeled into blessing our families and uplifting our communities.',
    scripture: 'Mark 10:45',
  },
  {
    name: 'Continuous Growth',
    tagline: 'Never Complacent, Always Striving',
    description:
      'We reject stagnation. We are committed lifelong learners who treat every failure as a curriculum and every success as a stepping stone.',
    scripture: 'Philippians 3:13-14',
  },
];

export const APPROACH_STAGES: ApproachStep[] = [
  {
    number: 'Phase I',
    title: 'Learn',
    tagline: 'Absorb Wisdom & Practical Skills',
    description:
      'We begin by acquiring proven knowledge. Through Scripture, structured curricula, guest masterclasses, and curated reading, we build foundational understanding.',
    actionableHabit: 'Weekly curated study modules and live knowledge sessions.',
  },
  {
    number: 'Phase II',
    title: 'Apply',
    tagline: 'Translate Knowledge Into Relentless Action',
    description:
      'Wisdom is knowledge applied. Brothers establish measurable daily habits in budgeting, training, prayer, study, and leadership, moving from theory to discipline.',
    actionableHabit: 'Daily 24-hour habit tracking and actionable weekly milestones.',
  },
  {
    number: 'Phase III',
    title: 'Reflect',
    tagline: 'Assess Progress With Brutal Honesty',
    description:
      'Without reflection, effort is wasted. Through weekly review rituals, we examine our failures, identify blind spots, celebrate small wins, and refine our trajectory.',
    actionableHabit: 'Sunday evening self-evaluation and accountability check-in.',
  },
  {
    number: 'Phase IV',
    title: 'Grow Together',
    tagline: 'Multiply Strength by Lifting Others',
    description:
      'Growth is incomplete until it is poured out. What one brother masters, he teaches. Older members mentor younger members, creating an unbroken cycle of excellence.',
    actionableHabit: 'Peer-to-peer mentorship pairings and community service projects.',
  },
];

export const MENTORSHIP_PROGRAM = {
  headline: 'Walking Side by Side, Not From a Pedestal',
  subtext:
    'Our mentorship framework is founded on peer brotherhood and shared experience. Older and more experienced brothers walk alongside newer members, offering practical wisdom without condescension.',
  disclaimer:
    'Sons of Elohim provides peer-to-peer mentorship, brotherly encouragement, and shared life experience. We do not provide licensed medical, psychological, legal, tax, or formal pastoral counseling services.',
  pillars: [
    {
      title: 'Peer Accountability Pairings',
      description:
        'Matched with a dedicated brother in your time zone or region to check in on daily habits, Bible reading, and fitness goals.',
    },
    {
      title: 'Skill & Career Guidance',
      description:
        'Experienced brothers in trades, technology, finance, and enterprise offer resume reviews, interview coaching, and project advice.',
    },
    {
      title: 'Spiritual Encouragement',
      description:
        'A safe, confidential space to bring real questions about faith, Scripture interpretation, and conquering persistent struggles.',
    },
    {
      title: 'Goal-Setting & Quarterly Reviews',
      description:
        'Structured quarterly roadmap workshops where members draft clear, measurable milestones across all five pillars of life.',
    },
  ],
};

export const UPCOMING_EVENTS: EventItem[] = [
  {
    id: 'gather-1',
    title: 'Iron & Word: Morning Gathering',
    category: 'spiritual',
    frequency: 'Bi-Weekly Saturday Mornings',
    format: 'In-Person & Virtual',
    description:
      'A 90-minute intentional gathering combining physical bodyweight training, Scripture meditation on Proverbs, and brotherhood breakout groups.',
    status: 'gathering_soon',
    targetAudience: 'All active and prospective brothers',
  },
  {
    id: 'gather-2',
    title: 'The Blueprint: Youth Financial Literacy Session',
    category: 'financial',
    frequency: 'Monthly Intensive',
    format: 'Virtual Intensive',
    description:
      'Interactive breakdown of zero-based budgeting, avoiding predatory debt, building credit with wisdom, and establishing first career skill stacks.',
    status: 'gathering_soon',
    targetAudience: 'Young men ages 15–25 preparing for financial autonomy',
  },
  {
    id: 'gather-3',
    title: 'Mind of a King: Mental Resilience Workshop',
    category: 'mental',
    frequency: 'Quarterly Gathering',
    format: 'In-Person & Virtual',
    description:
      'Exploring emotional governance, conquering destructive media addictions, and training emotional composure in high-pressure situations.',
    status: 'gathering_soon',
    targetAudience: 'Brothers seeking emotional mastery and disciplined thought life',
  },
  {
    id: 'gather-4',
    title: 'Hands to Serve: Community Outreach Day',
    category: 'outreach',
    frequency: 'Monthly Service Event',
    format: 'Local Gathering',
    description:
      'Putting our physical strength and love into action through practical service for local community centers, elderly neighbors, and youth facilities.',
    status: 'gathering_soon',
    targetAudience: 'All chapter members and neighborhood volunteers',
  },
];

export const SAFEGUARDING_POLICY = {
  title: 'Youth Safeguarding & Adult Oversight',
  summary:
    'Sons of Elohim is dedicated to maintaining a safe, transparent, and morally sound environment. For participants under 18 years of age, parental or legal guardian consent is strictly required. All youth activities maintain strict two-adult leader oversight policies, verified mentorship protocols, and transparent communication standards to protect young participants and foster trust with families.',
};

export const CONTACT_INFO = {
  email: 'brotherhood@sonsofelohim.org',
  location: 'Gathering chapters active locally & online across Southern Africa and international cohorts',
  gatheringHours: 'Fellowship assemblies: Saturdays 08:30 AM | Midweek Virtual Roundtables: Wednesdays 19:30',
  socials: [
    { name: 'X / Twitter', handle: '@SonsOfElohim', url: 'https://x.com' },
    { name: 'Instagram', handle: '@sonsofelohim.official', url: 'https://instagram.com' },
    { name: 'YouTube', handle: '@SonsOfElohimBrotherhood', url: 'https://youtube.com' },
    { name: 'Community Discord', handle: 'Sons of Elohim Guild', url: 'https://discord.com' },
  ],
};

export const BROTHER_STORIES: BrotherStory[] = [
  {
    id: 'tshepo-m',
    name: 'Tshepo M.',
    age: 22,
    location: 'Johannesburg, South Africa',
    pillarFocus: 'Financial Stewardship & Mental Fortitude',
    timeInBrotherhood: '14 months active',
    rawChallenge:
      'I was working two junior tech support jobs, but I had zero savings because of compulsive retail shopping and keeping up appearances with campus friends. I was constantly stressed, hiding behind bravado.',
    brotherhoodTurningPoint:
      'My accountability partner sat down with me over black coffee and had me write out every cent I spent for 60 days. No shame, just brutal honesty. Today, my high-interest debt is killed and I have a 4-month emergency cushion.',
    quote:
      'Most guys my age have 500 followers on Instagram but not one friend who will tell them: "Put that sneaker purchase down and pay your rent." Sons of Elohim gave me brothers who love me enough to tell me the hard truth.',
  },
  {
    id: 'david-k',
    name: 'David K.',
    age: 24,
    location: 'Pretoria, South Africa',
    pillarFocus: 'Spiritual Discipline & Bodily Health',
    timeInBrotherhood: '2 years active',
    rawChallenge:
      'I grew up in a single-mother home. I had plenty of love, but no man ever taught me how to read Scripture consistently, how to lift weights without tearing a rotator cuff, or how to control my temper.',
    brotherhoodTurningPoint:
      'Showing up at 06:00 on freezing winter Saturday mornings for physical drills followed by Proverbs studies broke my laziness. The older brothers didn’t lecture me; they worked out beside me and prayed over my family.',
    quote:
      'You cannot become a protector and provider by accident. You have to train under men who actually live it. This brotherhood gave me the masculine foundation my youth was missing.',
  },
  {
    id: 'kagiso-n',
    name: 'Kagiso N.',
    age: 19,
    location: 'Cape Town, South Africa',
    pillarFocus: 'Social Courage & Moral Purity',
    timeInBrotherhood: '9 months active',
    rawChallenge:
      'My first year at university was completely hollow. Everyone was drinking themselves numb on weekends, and I felt completely isolated in my dorm room scrolling TikTok until 3 AM.',
    brotherhoodTurningPoint:
      'Joining the weekly Tuesday prayer triad gave me two brothers who message me at 06:30 every morning. When I had a weak moment with digital addiction, I didn’t hide in shame; I called my triad brother and we prayed until the storm passed.',
    quote:
      'I thought brotherhood meant laughing at memes together. In Sons of Elohim, brotherhood means someone will show up at your door if you go silent for two days.',
  },
  {
    id: 'thabiso-s',
    name: 'Thabiso S.',
    age: 25,
    location: 'Harare / Virtual Cohort',
    pillarFocus: 'Leadership, Enterprise & Generational Vision',
    timeInBrotherhood: '18 months active',
    rawChallenge:
      'Graduated with an engineering degree but remained unemployed for 10 months. Bitterness, apathy, and cynicism were setting in fast. I stopped attending church and felt like a failure.',
    brotherhoodTurningPoint:
      'The vocational roundtable tore down my resume, put me through three mock technical interviews, and connected me with contract drafting work. More than that, the brothers reminded me my identity is in Christ, not my employment status.',
    quote:
      'They didn’t give me a motivational speech. They gave me real interview critique, shared their data bundles with me, and prayed until I signed an offer. Now I mentor three 18-year-olds in our weekend math circle.',
  },
];

export const STEWARD_LETTER: StewardLetter = {
  title: 'A Letter from the Stewards',
  signatories: [
    'Sipho Cele (Johannesburg Chapter Lead)',
    'Emmanuel Banda (Youth Chaplaincy & Mentorship)',
    'Thabo Mokoena (Vocational & Financial Steward)',
  ],
  scripture: '1 Kings 2:2: "Be strong, and show yourself a man."',
  paragraphs: [
    'We did not build Sons of Elohim because we wanted to start another corporate youth program or monetize self-help courses. We built it around a wooden kitchen table because we looked around our cities and saw young men suffering in absolute isolation.',
    'Everywhere young men look today, culture feeds them two extremes: either toxic, cynical self-indulgence that destroys character, or a passive, timid weakness that robs them of courage. Neither path honors God, and neither path builds strong families.',
    'We believe biblical manhood is not an aesthetic you buy on social media. It is forged in unglamorous, daily obedience: getting on your knees in prayer before you touch your phone, lifting heavy weights to honor the temple God gave you, working diligently with your hands so you never become a burden, and looking after your younger brother when he falters.',
    'If you are tired of living on an island, if you are weary of the empty bravado of digital life, you have a place at this table. We will not flatter you, but we will never abandon you.',
  ],
};

export const HUMAN_FAQS: FaqItem[] = [
  {
    category: 'joining',
    question: 'Do I have to be a seasoned Christian or church leader to join?',
    answer:
      'No. You do not need theological credentials or a spotless track record. We have brothers who grew up in church, and brothers who opened a Bible for the first time two weeks ago. The only requirements are genuine humility, a hunger to know Jesus Christ, and the willingness to let brothers hold you accountable.',
  },
  {
    category: 'finances',
    question: 'Is there a membership fee, course fee, or financial obligation?',
    answer:
      'Zero. Brotherhood is never paywalled. Sons of Elohim is supported through voluntary giving and elder stewardship. We do not sell subscriptions, courses, or masterminds. You bring your sweat, your honesty, and your commitment.',
  },
  {
    category: 'brotherhood',
    question: 'How much time commitment is expected each week?',
    answer:
      'Active members commit to three core rhythms: (1) Daily 5-minute morning check-in with your assigned accountability brother, (2) One 60-minute weekly cohort call or Saturday in-person gathering, and (3) Completing your personalized 5-pillar habit tracker. Consistency matters far more than long hours.',
  },
  {
    category: 'spirituality',
    question: 'What happens if I struggle with a recurring sin or fall off my habits?',
    answer:
      'You will find confession and restoration, not expulsion. We are not a club for men who pretend to be perfect; we are an emergency room for sinners walking in grace. If you stumble, you tell your accountability brother, repent before God, and stand back up together.',
  },
  {
    category: 'joining',
    question: 'I don’t live near Johannesburg or Pretoria. Can I still join?',
    answer:
      'Yes. Over 40% of our brothers participate through our regional virtual cohorts across South Africa, Zimbabwe, Kenya, the UK, and North America. You will be placed in a time-zone matched triad with regular video assemblies.',
  },
  {
    category: 'brotherhood',
    question: 'Can parents, pastors, or older mentors get involved?',
    answer:
      'Absolutely. For brothers under 18, parental consent and transparency are mandatory. Older men of proven character serve on our Elder Advisory Council and lead trade masterclasses without replacing local church pastoral oversight.',
  },
];

