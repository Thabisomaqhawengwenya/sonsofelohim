export interface DivineName {
  id: string;
  name: string;
  transliteration?: string;
  meaning: string;
  scriptureRef: string;
  scriptureText: string;
  styleType: 'hero' | 'script' | 'serif' | 'sans' | 'stacked';
  rotationDeg?: number;
  highlighted?: boolean;
}

export const DIVINE_NAMES: DivineName[] = [
  // THE HERO CENTERPIECE: ELOHIM & JESUS
  {
    id: 'elohim',
    name: 'ELOHIM',
    transliteration: 'אֱלֹהִים',
    meaning: 'The Mighty Creator & Sovereign God',
    scriptureRef: 'Genesis 1:1',
    scriptureText: 'In the beginning, Elohim created the heavens and the earth.',
    styleType: 'hero',
    highlighted: true,
  },
  {
    id: 'jesus',
    name: 'JESUS',
    transliteration: 'יֵשׁוּעַ',
    meaning: 'The Name Above All Names / The Lord Saves (Yeshua)',
    scriptureRef: 'Philippians 2:9-11',
    scriptureText: 'God exalted Him to the highest place and gave Him the name that is above every name, that at the name of Jesus every knee should bow.',
    styleType: 'hero',
    highlighted: true,
  },

  // Row 1
  {
    id: 'abba',
    name: 'ABBA',
    transliteration: 'אַבָּא',
    meaning: 'Our Heavenly Father / Deep Intimate Trust',
    scriptureRef: 'Romans 8:15',
    scriptureText: 'You received the Spirit of adoption, by whom we cry, "Abba, Father!"',
    styleType: 'sans',
    rotationDeg: -1,
  },
  {
    id: 'king-of-kings',
    name: 'KING OF KINGS',
    meaning: 'Sovereign Above All Earthly Rulers',
    scriptureRef: 'Revelation 19:16',
    scriptureText: 'On His robe and on His thigh He has a name written: King of Kings and Lord of Lords.',
    styleType: 'serif',
  },
  {
    id: 'jireh',
    name: 'JIREH',
    transliteration: 'יְהוָה יִרְאֶה',
    meaning: 'The Lord Will Provide',
    scriptureRef: 'Genesis 22:14',
    scriptureText: 'So Abraham called that place "The LORD Will Provide."',
    styleType: 'sans',
    rotationDeg: 1.5,
  },

  // Row 2
  {
    id: 'christ',
    name: 'Christ',
    meaning: 'The Anointed One & Messiah',
    scriptureRef: 'Matthew 16:16',
    scriptureText: 'Simon Peter answered, "You are the Christ, the Son of the living God."',
    styleType: 'script',
    rotationDeg: -2,
  },
  {
    id: 'name-above-all-names',
    name: 'Name Above All names',
    meaning: 'Exalted Above Every Title and Authority',
    scriptureRef: 'Philippians 2:9',
    scriptureText: 'God exalted Him to the highest place and gave Him the name that is above every name.',
    styleType: 'script',
  },
  {
    id: 'messiah',
    name: 'Messiah',
    meaning: 'The Promised Savior & Deliverer',
    scriptureRef: 'John 1:41',
    scriptureText: '"We have found the Messiah" (which means Christ).',
    styleType: 'script',
    rotationDeg: 2,
  },

  // Row 3
  {
    id: 'el-shaddai',
    name: 'EL SHADDAI',
    transliteration: 'אֵל שַׁדַּי',
    meaning: 'God Almighty / The All-Sufficient One',
    scriptureRef: 'Genesis 17:1',
    scriptureText: 'The LORD appeared to him and said, "I am El Shaddai; walk before me faithfully."',
    styleType: 'serif',
  },
  {
    id: 'rapha',
    name: 'RAPHA',
    transliteration: 'יְהוָה רֹפְאֶךָ',
    meaning: 'The Lord Who Heals Body, Mind & Spirit',
    scriptureRef: 'Exodus 15:26',
    scriptureText: 'For I am the LORD, who heals you.',
    styleType: 'sans',
    rotationDeg: -1,
  },
  {
    id: 'savior',
    name: 'Savior',
    meaning: 'Rescuer from Guilt, Shame & Death',
    scriptureRef: 'Luke 2:11',
    scriptureText: 'Today in the town of David a Savior has been born to you; He is the Messiah, the Lord.',
    styleType: 'script',
    rotationDeg: 1,
  },
  {
    id: 'adonai',
    name: 'ADONAI',
    transliteration: 'אֲדֹנָי',
    meaning: 'The Supreme Master & Sovereign Lord',
    scriptureRef: 'Psalm 8:1',
    scriptureText: 'O LORD, our Lord (Adonai), how majestic is Your name in all the earth!',
    styleType: 'sans',
  },

  // Row 4
  {
    id: 'lamb-of-god',
    name: 'Lamb Of God',
    meaning: 'The Unblemished Sacrifice for Humanity',
    scriptureRef: 'John 1:29',
    scriptureText: 'Look, the Lamb of God, who takes away the sin of the world!',
    styleType: 'script',
    rotationDeg: -1.5,
  },
  {
    id: 'yahweh',
    name: 'YAHWEH',
    transliteration: 'יהוה',
    meaning: 'The Self-Existent, Eternal Covenant God (I AM)',
    scriptureRef: 'Exodus 3:14',
    scriptureText: 'God said to Moses, "I AM WHO I AM. Say to the Israelites: I AM has sent me to you."',
    styleType: 'sans',
  },
  {
    id: 'redeemer',
    name: 'Redeemer',
    meaning: 'He Who Buys Us Back from Bondage',
    scriptureRef: 'Job 19:25',
    scriptureText: 'I know that my Redeemer lives, and that in the end He will stand on the earth.',
    styleType: 'script',
    rotationDeg: 2,
  },

  // Row 5
  {
    id: 'rohi',
    name: 'ROHI',
    transliteration: 'יְהוָה רֹעִי',
    meaning: 'The Lord My Shepherd & Faithful Guide',
    scriptureRef: 'Psalm 23:1',
    scriptureText: 'The LORD is my shepherd; I shall not lack anything.',
    styleType: 'sans',
    rotationDeg: -2,
  },
  {
    id: 'alpha-omega',
    name: 'Alpha and Omega',
    meaning: 'The Author of History, Beginning and the End',
    scriptureRef: 'Revelation 22:13',
    scriptureText: 'I am the Alpha and the Omega, the First and the Last, the Beginning and the End.',
    styleType: 'script',
  },
  {
    id: 'shalom',
    name: 'SHALOM',
    transliteration: 'יְהוָה שָׁלוֹם',
    meaning: 'The Lord Our Peace & Wholeness',
    scriptureRef: 'Judges 6:24',
    scriptureText: 'So Gideon built an altar to the LORD there and called it The LORD Is Peace.',
    styleType: 'serif',
    rotationDeg: 1,
  },

  // Row 6
  {
    id: 'emmanuel',
    name: 'Emmanuel',
    meaning: 'God With Us in Everyday Battles',
    scriptureRef: 'Matthew 1:23',
    scriptureText: 'They will call Him Immanuel (which means "God with us").',
    styleType: 'script',
    rotationDeg: -1,
  },
  {
    id: 'light-of-the-world',
    name: 'Light Of The World',
    meaning: 'Dispelling Darkness, Confusion & Ignorance',
    scriptureRef: 'John 8:12',
    scriptureText: 'I am the light of the world. Whoever follows me will never walk in darkness.',
    styleType: 'script',
    rotationDeg: 1.5,
  },

  // Row 7
  {
    id: 'nissi',
    name: 'NISSI',
    transliteration: 'יְהוָה נִסִּי',
    meaning: 'The Lord Is My Banner & Victorious Standard',
    scriptureRef: 'Exodus 17:15',
    scriptureText: 'Moses built an altar and called it The LORD is My Banner.',
    styleType: 'sans',
  },
  {
    id: 'the-way-truth-life',
    name: 'The Way\nThe Truth\nThe Life',
    meaning: 'The Foundation of Biblical Manhood',
    scriptureRef: 'John 14:6',
    scriptureText: 'Jesus answered, "I am the way and the truth and the life. No one comes to the Father except through me."',
    styleType: 'stacked',
    rotationDeg: -1,
  },
  {
    id: 'tsidkenu',
    name: 'TSIDKENU',
    transliteration: 'יְהוָה צִדְקֵנוּ',
    meaning: 'The Lord Our Righteousness & Moral Standard',
    scriptureRef: 'Jeremiah 23:6',
    scriptureText: 'This is the name by which He will be called: The LORD Our Righteous Savior.',
    styleType: 'serif',
  },

  // Row 8
  {
    id: 'prince-of-peace',
    name: 'Prince of Peace',
    meaning: 'Ruler of Tranquility & Reconciliation',
    scriptureRef: 'Isaiah 9:6',
    scriptureText: 'And He will be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace.',
    styleType: 'script',
    rotationDeg: 1,
  },
  {
    id: 'lord-of-lords',
    name: 'Lord Of Lords',
    meaning: 'Uncontested Authority Throughout Eternity',
    scriptureRef: '1 Timothy 6:15',
    scriptureText: 'He who is the blessed and only Sovereign, the King of kings and Lord of lords.',
    styleType: 'script',
    rotationDeg: -2,
  },

  // Grand Baseline: SHAMMAH
  {
    id: 'shammah',
    name: 'SHAMMAH',
    transliteration: 'יְהוָה שָׁמָּה',
    meaning: 'The Lord Is There / Never Abandoned',
    scriptureRef: 'Ezekiel 48:35',
    scriptureText: 'And the name of the city from that time on will be: THE LORD IS THERE.',
    styleType: 'serif',
  },
];
