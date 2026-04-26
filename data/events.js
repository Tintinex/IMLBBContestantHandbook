/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  SECTION: EVENTS                                             ║
 * ║  Owner:   IMLBB Events / Logistics team                        ║
 * ║  Update:  Every year — dates, times, venues change           ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 *  Each entry produces:
 *    • One card in the Section 6 experience overview grid
 *    • One full-page detail block in the Section 7 events section
 *
 *  To add an event: copy any entry, give it a new id, fill all
 *  fields, add to the array.  No HTML changes needed.
 *
 *  To remove an event: delete its entry from the array.
 *
 *  To reorder events: move entries within the array.
 *
 *  After any change: python validate.py && python build.py
 *
 *  ─────────────────────────────────────────────────────────────
 *  TOP-LEVEL FIELDS
 *  ─────────────────────────────────────────────────────────────
 *  id          Unique anchor id ("event-1" … "event-N").
 *              Used as href in nav, TOC, and overview cards.
 *  number      Zero-padded display number: "01" … "13"
 *  title       Short event name shown in the card and page header
 *  cardMeta    One-line summary shown in the overview card
 *              (e.g. "Friday · Main Stage")
 *  day         Day / period shown in the detail page header
 *  time        Time range shown in the detail page header
 *              (e.g. "7:00 PM – 10:00 PM")
 *  callTime    Override the auto-computed call time shown in the detail header.
 *              Leave as '' to auto-compute (always 30 min before `time` start).
 *              Set to any string to display it verbatim, e.g. 'See your handler'
 *              or '10:00 AM'. Set to 'NONE' to suppress the call-time row entirely.
 *  venue       Venue / room shown in the detail page header
 *  badge       "OPTIONAL" or "MANDATORY"
 *  contest     Which contest this event applies to:
 *                "IML"  — International Mr. Leather contestants only
 *                "IMBB" — International Mr. Bootblack contestants only
 *                "BOTH" — all contestants (shown as IML + IMBB tags)
 *              Change this field each year if the programme changes.
 *
 *  COLUMN CONTENT
 *  ─────────────────────────────────────────────────────────────
 *  leftCol     Array   Sections rendered in the left column
 *  rightCol    Array   Sections rendered in the right column
 *
 *  Each section is an object with a "type" field plus type-specific fields:
 *
 *  { type: 'qa', q: 'Question?', a: 'Answer text.' }
 *    → A bold question label followed by a paragraph answer.
 *
 *  { type: 'checklist', q: 'Question?', items: ['item 1', 'item 2'], note: 'Optional note.' }
 *    → A bold question label, a bullet list, and an optional italic note.
 *    → Omit `note` (or set to '') if not needed.
 *
 *  { type: 'callout', label: 'Remember', text: 'Tip text.' }
 *    → A dark callout box. Use label "Remember" or "Good to know".
 *
 *  { type: 'tip', text: 'Tip text.' }
 *    → A blue "Top Tip" callout box.
 *
 *  { type: 'textarea', q: 'Your prep notes', placeholder: 'Hint text…', rows: 3 }
 *    → A labelled textarea for contestant notes.
 *    → `rows` is optional; defaults to 3.
 *
 *  ADDING A NEW EVENT
 *  ─────────────────────────────────────────────────────────────
 *  1. Copy an existing event object below as a template.
 *  2. Assign the next id ("event-14"), number ("14"), and fill all fields.
 *  3. Add a matching card to the experience overview in index.html:
 *       <a class="exp-card" href="#event-14">
 *         <div class="exp-num">14</div>
 *         <div class="exp-label">Your Event Title</div>
 *         <div class="exp-meta">Day · Venue</div>
 *         <span class="exp-badge optional">Optional</span>
 *       </a>
 *  4. Update the REQUIRED count below if the total is no longer 13.
 *  5. Run: python validate.py   — to confirm everything passes.
 *
 *  NOTE: The build system only checks that at least one event exists.
 *  You may add or remove events freely — no count needs updating in build.py.
 */

const EVENTS = [

  /* ─── 01 ─── */
  {
    id: 'event-1',
    number: '01',
    title: 'Contestant Registration',
    cardMeta: 'Wednesday · Florentine Room',
    day: 'Wednesday',
    time: '7:00 PM \u2013 10:00 PM',
    callTime: 'NONE',
    venue: 'Congress Plaza Hotel \u2014 Florentine Room',
    badge: 'OPTIONAL',
    contest: 'BOTH',
    leftCol: [
      {
        type: 'qa',
        q: 'What is it?',
        a: 'By attending this event, you can confirm registration and technical details, complete all of the necessary paperwork and schedule your official IMLBB photo shoot prior to Thursday\u2019s Orientation. Upon arrival, a Contestant Handler will assist you in confirming your application information used in making your contestant badge, the contest program insert, and contestant address list.',
      },
      {
        type: 'qa',
        q: 'What\u2019s it like?',
        a: 'This gives you your first taste of IMLBB in a casual and relaxed atmosphere. You can meet the IMLBB team, other contestants and your handlers for the competition. It also ensures you are all set for the coming days.',
      },
      {
        type: 'qa',
        q: 'Is it judged?',
        a: 'This event isn\u2019t judged. However, please note you must be fully registered by 12:00 noon the following day if you do not attend this event.',
      },
    ],
    rightCol: [
      {
        type: 'checklist',
        q: 'What should I wear or bring?',
        items: [
          'At least one piece of legal photo ID (driver\u2019s licence, passport)',
          'Any information needed for changes to your application',
          'Your Chicago contact details \u2014 hotel name and room number',
        ],
        note: 'Feel free to dress casually for this event.',
      },
      {
        type: 'qa',
        q: 'How long will it be?',
        a: 'Confirming your details should take no more than a few minutes \u2014 come in anytime from 7\u201310pm.',
      },
      {
        type: 'qa',
        q: 'Can my partner attend?',
        a: 'Yes!',
      },
      {
        type: 'callout',
        label: 'Good to know',
        text: 'If you can\u2019t attend this event, you will have the option to confirm your details at the start of Orientation the following day.',
      },
    ],
  },

  /* ─── 02 ─── */
  {
    id: 'event-2',
    number: '02',
    title: 'Contestant Orientation',
    cardMeta: 'Thursday · Florentine Room',
    day: 'Thursday',
    time: '12:00 PM \u2013 3:00 PM',
    callTime: '',
    venue: 'Congress Plaza Hotel \u2014 Florentine Room',
    badge: 'MANDATORY',
    contest: 'BOTH',
    leftCol: [
      {
        type: 'qa',
        q: 'What happens here?',
        a: 'This is the first time all contestants will officially gather along with the handlers, judges and the rest of the IML team. It is an incredibly important and powerful experience that will set you up for success for the rest of the week. You will be introduced to each judge and various IMLBB staff members and your Contestant Handlers. You will meet the IMLBB photographer and make a photo shoot appointment with him.',
      },
      {
        type: 'qa',
        q: 'Is it judged?',
        a: 'This event isn\u2019t judged. However, the judges will be present during portions of this event.',
      },
      {
        type: 'checklist',
        q: 'What to bring',
        items: [
          'Government-issued photo ID',
          'Completed contestant forms (if not already submitted)',
          'Comfortable leather (clean, polished, ready)',
          'Any medical information your team should know',
        ],
        note: '',
      },

    ],
    rightCol: [
      {
        type: 'textarea',
        q: 'Your prep notes',
        placeholder: 'Add personal notes here\u2026',
        rows: 4,
      },
      {
        type: 'callout',
        label: 'Remember',
        text: 'This is your first impression on the IMLBB team and on your fellow contestants. Arrive on time, be present, and introduce yourself warmly.',
      },
      {
        type: 'tip',
        text: 'Learn your handler\u2019s name and their number immediately. They are your lifeline for the entire weekend.',
      },
    ],
  },

  /* ─── 03 ─── */
  {
    id: 'event-3',
    number: '03',
    title: 'Opening Ceremonies',
    cardMeta: 'Thursday · Florentine Room',
    day: 'Thursday',
    time: '7:00 PM \u2013 09:00 PM',
    callTime: '5:00 PM',
    venue: 'Congress Plaza Hotel \u2014 Florentine Room',
    badge: 'MANDATORY',
    contest: 'BOTH',
    leftCol: [
      {
        type: 'qa',
        q: 'What happens here?',
        a: 'The Opening Ceremony is the first public event of IMLBB. The purpose of this event is to introduce the judges and the contestants to the public. During the Opening Ceremonies you will be lined up alphabetically by country or US state, you will be introduced and then you will select your contestant number for IMBB and IML.',
      },
      {
        type: 'checklist',
        q: 'What to wear',
        items: [
          'Leather or uniform gear \u2014 this is a leather event',
          'Contestant badge / sash if provided',
          'Comfortable footwear (you\u2019ll be on your feet)',
        ],
        note: '',
      },
      {
        type: 'callout',
        label: 'Remember',
        text: 'Judges are observing from the moment they see you. Be genuine, gracious, and present.',
      },
    ],
    rightCol: [
      {
        type: 'checklist',
        q: 'Talking points to prepare',
        items: [
          'Your title and home community',
          'Why IMLBB matters to you personally',
          'One thing you hope to learn this weekend',
        ],
        note: '',
      },
      {
        type: 'textarea',
        q: 'Your prep notes',
        placeholder: 'Add personal notes here\u2026',
        rows: 3,
      },
      {
        type: 'tip',
        text: 'Learn two or three other contestants\u2019 names before the night is over. The camaraderie you build here lasts a lifetime.',
      },
    ],
  },

  /* ─── 04 ─── */
  {
    id: 'event-4',
    number: '04',
    title: 'Contestant Interviews',
    cardMeta: 'Friday and Saturday',
    day: 'Friday and Saturday',
    time: 'Main Stage',
    callTime: '',
    venue: 'Congress Plaza Hotel - Judges Room',
    badge: 'MANDATORY',
    contest: 'BOTH',
    leftCol: [
      {
        type: 'qa',
        q: 'What happens here?',
        a: 'The first stage of judging. Each contestant has a 8-minute private interview with a panel of judges. You will be asked about your leather background, your community involvement, and your vision for the IMLBB title. This is your chance to show the judges who you are beyond the stage.',
      },
      {
        type: 'checklist',
        q: 'Scoring criteria',
        items: [
          'Quality and condition of leather gear',
          'Stage presence and confidence',
          'Overall presentation and grooming',
          'How authentically you embody the leather aesthetic',
        ],
        note: '',
      },
      {
        type: 'callout',
        label: 'Remember',
        text: 'The judges want to see you \u2014 your authentic leather self. Don\u2019t perform; inhabit.',
      },
    ],
    rightCol: [
      {
        type: 'checklist',
        q: 'Gear checklist',
        items: [
          'Leather polished and conditioned',
          'All hardware shined',
          'Boots \u2014 spit-polished or mirror-finish',
          'Sash / title badge secured',
          'Backup boot laces / snap repair kit',
        ],
        note: '',
      },
      {
        type: 'textarea',
        q: 'Your prep notes',
        placeholder: 'Add personal notes here\u2026',
        rows: 3,
      },
      {
        type: 'tip',
        text: 'Practice your walk. Find your pace. Slow is confident. Rushed is nervous.',
      },
    ],
  },

  /* ─── 05 ─── */
  {
    id: 'event-5',
    number: '05',
    title: 'Physique and Stage Presence',
    cardMeta: 'Friday · The Riviera Theater',
    day: 'Friday',
    time: '8:00 PM \u2013 11:00 PM',
    callTime: '5:00 PM',
    venue: 'The Riviera Theater',
    badge: 'MANDATORY',
    contest: 'BOTH',
    leftCol: [
      {
        type: 'qa',
        q: 'What happens here?',
        a: 'One of the world\u2019s largest leather and fetish vendor fairs. Hundreds of vendors from across the globe selling leather gear, toys, art, books, and more. A great place to meet community members and support the broader leather ecosystem.',
      },
      {
        type: 'callout',
        label: 'Remember',
        text: 'You are a contestant all weekend. How you carry yourself at the Vendor Fair \u2014 especially with fans and community members \u2014 is part of your IMLBB presence.',
      },
    ],
    rightCol: [
      {
        type: 'textarea',
        q: 'Your prep notes',
        placeholder: 'Add personal notes here\u2026',
        rows: 3,
      },
      {
        type: 'tip',
        text: 'Visit vendors who support your local leather community. Personal connections here often outlast the weekend.',
      },
    ],
  },

  /* ─── 06 ─── */
  {
    id: 'event-6',
    number: '06',
    title: 'Contest Finals',
    cardMeta: 'Sunday',
    day: 'Sunday',
    time: '6:00 PM \u2013 09:00 PM',
    callTime: '12:00 PM',
    venue: 'The Riviera Theater',
    badge: 'MANDATORY',
    contest: 'BOTH',
    leftCol: [
      {
        type: 'qa',
        q: 'What happens here?',
        a: 'A private 20-minute interview with the full judging panel. You\u2019ll be asked about your background in leather, your community work, your vision for the IMLBB title, and your knowledge of leather history and culture. This is the highest-weighted component of your score.',
      },
      {
        type: 'checklist',
        q: 'Common interview themes',
        items: [
          'Your leather journey \u2014 how you got here',
          'Community service and advocacy',
          'What IMLBB means to the global leather community',
          'How you would use the title to make an impact',
          'Leather history, culture, and its future',
        ],
        note: '',
      },
      {
        type: 'callout',
        label: 'Remember',
        text: 'The judges are not looking for perfect answers. They want to know who you are. Be honest, be specific, be yourself.',
      },
    ],
    rightCol: [
      {
        type: 'textarea',
        q: 'Practice questions \u2014 your answers',
        placeholder: 'What does holding the IMLBB title mean to you?',
        rows: 3,
      },
      {
        type: 'textarea',
        q: '',
        placeholder: 'Describe a time your community work made a tangible difference.',
        rows: 3,
      },
      {
        type: 'textarea',
        q: '',
        placeholder: 'Where do you see leather culture in 20 years?',
        rows: 3,
      },
      {
        type: 'tip',
        text: 'Know your bio cold \u2014 and be ready to say something true about yourself that isn\u2019t in your bio. Judges appreciate depth beyond the paper.',
      },
    ],
  },

  /* ─── 07 ─── */
  {
    id: 'event-7',
    number: '07',
    title: 'The Victory Party',
    cardMeta: 'Sunday Evening · House of Blues',
    day: 'Sunday Evening',
    time: '10:00 PM \u2013 Late',
    callTime: 'NONE',
    venue: 'House of BLues Chicago',
    badge: 'OPTIONAL',
    contest: 'BOTH',
    leftCol: [
      {
        type: 'qa',
        q: 'What happens here?',
        a: 'Contestants who choose to participate join a coordinated community service activity \u2014 typically benefiting a Chicago-area LGBTQ+ or leather organisation. Details are announced at orientation. Participation is not scored but is strongly encouraged as an expression of leather values.',
      },
      {
        type: 'callout',
        label: 'Remember',
        text: 'The leather community is built on service. Showing up here speaks louder than any interview answer.',
      },
    ],
    rightCol: [
      {
        type: 'textarea',
        q: 'Your prep notes',
        placeholder: 'Add personal notes here\u2026',
        rows: 3,
      },
    ],
  },

  /* ─── 08 ─── */
  {
    id: 'event-8',
    number: '08',
    title: 'Contestant Scores & Poster Pickup',
    cardMeta: 'Monday Morning',
    day: 'Monday',
    time: '10:00 AM \u2013 01:00 PM',
    callTime: 'NONE',
    venue: 'Congress Plaza Hotel',
    badge: 'OPTIONAL',
    contest: 'BOTH',
    leftCol: [
      {
        type: 'qa',
        q: 'What happens here?',
        a: 'The second stage judging event. You may appear in uniform (military, police, fire, or other), fetish gear, or fantasy leather. This category celebrates the full breadth of leather and kink expression. You have more creative freedom here \u2014 use it.',
      },
      {
        type: 'checklist',
        q: 'Outfit checklist',
        items: [
          'Outfit chosen and fitted in advance',
          'All pieces clean and pressed / polished',
          'Footwear appropriate and secured',
          'Any props or accessories tested',
        ],
        note: '',
      },
      {
        type: 'callout',
        label: 'Remember',
        text: 'Fantasy does not mean costume. Whatever you wear, commit to it with full conviction. Authenticity reads from the back row.',
      },
    ],
    rightCol: [
      {
        type: 'textarea',
        q: 'Your prep notes',
        placeholder: 'Describe your outfit concept\u2026',
        rows: 3,
      },
      {
        type: 'tip',
        text: 'Rehearse how you\u2019ll walk in this outfit specifically. Uniform boots walk differently than leather boots. Know your gear.',
      },
    ],
  },

  /* ─── 09 ─── */
  {
    id: 'event-9',
    number: '09',
    title: 'Contestant Speeches',
    cardMeta: 'Monday · Congress Plaza Hotel',
    day: 'Monday',
    time: '10:00 AM \u2013 01:00 PM',
    callTime: '',
    venue: 'Congress Plaza Hotel',
    badge: 'OPTIONAL',
    contest: 'BOTH',
    leftCol: [
      {
        type: 'qa',
        q: 'What happens here?',
        a: 'A beloved IMLBB tradition \u2014 a brunch gathering for the partners, spouses, and significant others of contestants. A space for support, laughter, and community away from the competition floor. See the dedicated section of this handbook for full details.',
      },
      {
        type: 'callout',
        label: 'Remember',
        text: 'Your support network matters. The people who travel with you are part of your IMLBB story. Make sure they feel included in the weekend.',
      },
    ],
    rightCol: [
      {
        type: 'textarea',
        q: 'Your prep notes',
        placeholder: 'Notes for your partner / support person\u2026',
        rows: 3,
      },
    ],
  },

  /* ─── 10 ─── */
  {
    id: 'event-10',
    number: '10',
    title: 'Poster Signing',
    cardMeta: 'Thursday and Friday',
    day: 'Thursday and Friday',
    time: 'Various',
    callTime: 'NONE',
    venue: 'Congress Plaza Hotel - Lincoln Room',
    badge: 'OPTIONAL',
    contest: 'BOTH',
    leftCol: [
      {
        type: 'qa',
        q: 'What happens here?',
        a: 'All contestants are asked to sign IMLBB 2026 commemorative posters, and will receive one on Monday',
      },
      {
        type: 'callout',
        label: 'Remember',
        text: 'There are over 150 posters to sign. Don\u2019t rush. This is a moment to connect with the history of the contest and the community. Sign with care and intention.',
      },
    ],
    rightCol: [
      {
        type: 'tip',
        text: 'Pick a spot on the poster and stick with it.',
      },
    ],
  },

  /* ─── 11 ─── */
  {
    id: 'event-11',
    number: '11',
    title: 'IMLBB Photoshoot',
    cardMeta: 'Needs to be scheduled',
    day: 'all weekend',
    time: 'Congress Plaza Hotel',
    callTime: 'NONE',
    venue: 'Congress Plaza Hotel',
    badge: 'MANDATORY',
    contest: 'BOTH',
    leftCol: [
      {
        type: 'qa',
        q: 'What happens here?',
        a: 'Each contestant has a 15-minute private photoshoot with the official IMLBB photographer. This is your chance to create the iconic images that will represent your IMLBB journey for years to come. You can choose to shoot in leather, uniform, or fantasy gear \u2014 whatever best represents your personal leather identity.',
      },
      {
        type: 'callout',
        label: 'Remember',
        text: 'These photos are part of your IMLBB legacy. Approach this shoot with the same care and intentionality as you would a major professional photoshoot. Communicate clearly with the photographer about your vision.',
      },
    ],
    rightCol: [
      {
        type: 'textarea',
        q: 'Your prep notes',
        placeholder: 'Add personal notes here\u2026',
        rows: 3,
      },
      {
        type: 'tip',
        text: 'Bring any specific gear or accessories you want to be included in your photoshoot. This is your moment to shine \u2014 make sure you have everything you need to look and feel your best.',
      },
    ],
  },

  /* ─── 12 ─── */
  {
    id: 'event-12',
    number: '12',
    title: 'Finals & Crowning Ceremony',
    cardMeta: 'Sunday · Main Stage',
    day: 'Sunday',
    time: 'Main Stage',
    callTime: '',
    venue: 'Main Stage, Congress Plaza Hotel',
    badge: 'MANDATORY',
    contest: 'BOTH',
    leftCol: [
      {
        type: 'qa',
        q: 'What happens here?',
        a: 'The culminating event of IMLBB weekend. Top finalists are announced; the new International Mr. Leather is crowned before a packed audience. All contestants participate in the opening parade regardless of whether they advance to finals. This is the moment the community gathers for.',
      },
      {
        type: 'checklist',
        q: 'Finals day checklist',
        items: [
          'All leather gear polished and ready',
          'Sash / title badge secure',
          'Hydrated and rested',
          'Handler briefed on your needs',
          'Emergency repair kit backstage',
        ],
        note: '',
      },
      {
        type: 'callout',
        label: 'Remember',
        text: 'Whether you\u2019re called as a finalist or not \u2014 walk that stage like you mean every step. The community is watching, and they are proud of you.',
      },
    ],
    rightCol: [
      {
        type: 'checklist',
        q: 'If you are called as a finalist',
        items: [
          'Stage question may be asked \u2014 prepare a 45-second answer',
          'Stay composed regardless of the question',
          'Speak to the back of the room',
          'Breathe. Pause. Then answer.',
        ],
        note: '',
      },
      {
        type: 'textarea',
        q: 'Your prep notes',
        placeholder: 'Stage question themes to prepare\u2026',
        rows: 3,
      },
      {
        type: 'tip',
        text: 'There is no wrong answer to a stage question \u2014 only an uninhabited one. Whatever you say, say it like you mean it.',
      },
    ],
  },

  /* ─── 13 ─── */
  {
    id: 'event-13',
    number: '13',
    title: 'The Black and Blue Ball',
    cardMeta: 'Monday Night',
    day: 'Monday Night',
    time: '9:00 PM \u2013 4:00 AM',
    callTime: 'NONE',
    venue: 'Jackhammer Bar, Chicago',
    badge: 'OPTIONAL',
    contest: 'BOTH',
    leftCol: [
      {
        type: 'qa',
        q: 'What happens here?',
        a: 'After the crowning, Chicago\u2019s leather venues host celebratory events across the weekend\u2019s closing night. Time to decompress, celebrate with your fellow contestants, and enjoy the community you\u2019ve spent the weekend building. Details are shared at the Finals.',
      },
      {
        type: 'callout',
        label: 'Remember',
        text: 'You came. You competed. You represented your community on one of leather\u2019s greatest stages. That is worth celebrating \u2014 full stop.',
      },
    ],
    rightCol: [
      {
        type: 'tip',
        text: 'Exchange contacts with the contestants you\u2019ve connected with. Your IMLBB class is your family now \u2014 stay in touch.',
      },
    ],
  },

  /* ─── 14 ─── */
  {
    id: 'event-14',
    number: '14',
    title: 'First Shine',
    cardMeta: 'Thursday Evening',
    day: 'Thursday Evening',
    time: '10:00 PM \u2013 11:00 PM',
    callTime: '9:30 PM',
    venue: 'Congress Plaza Hotel',
    badge: 'MANDATORY',
    contest: 'IMBB',
    leftCol: [
      {
        type: 'qa',
        q: 'What happens here?',
        a: 'The First Shine is a traditional official bootblacking event held Thursday evening at the Spit Shine social, immediately following the Last Shine of the outgoing titleholder. This is your first opportunity to demonstrate your craft in competition and sets the tone for your stand work throughout the weekend.',
      },
      {
        type: 'qa',
        q: 'How is it scored?',
        a: 'The First Shine is judged as part of your overall Bootblack Stand Time score. Judges evaluate three key areas: your skill in the craft, the quality of your client interaction, and your demonstrated passion for bootblacking.',
      },
      {
        type: 'callout',
        label: 'Remember',
        text: 'Your score here contributes directly to your Stand Time total. Arrive focused and treat this shine with the same care and intentionality you would bring to any judged stand.',
      },
    ],
    rightCol: [
      {
        type: 'checklist',
        q: 'What to wear',
        items: [
          'Wear what you would normally wear to work a stand',
          'No specific attire requirement \u2014 dress for function and confidence',
        ],
        note: '',
      },
      {
        type: 'qa',
        q: 'Will I have support?',
        a: 'Yes. Staff will guide you from the assembly area to and from the stands, and a staff member will be present for the duration of your shine.',
      },
      {
        type: 'qa',
        q: 'When will I know my assembly time and location?',
        a: 'Specific assembly times and locations are provided during Thursday Orientation.',
      },
      {
        type: 'textarea',
        q: 'Your prep notes',
        placeholder: 'Add personal notes here\u2026',
        rows: 3,
      },
    ],
  },

  /* ─── 15 ─── */
  {
    id: 'event-15',
    number: '15',
    title: 'Bootblack Stand Time',
    cardMeta: 'Friday & Saturday',
    day: 'Friday & Saturday',
    time: '12:00 PM \u2013 4:00 PM',
    callTime: '',
    venue: '',
    badge: 'MANDATORY',
    contest: 'IMBB',
    leftCol: [
      {
        type: 'qa',
        q: 'What happens here?',
        a: 'Contestants work the bootblacking stands for several hours on both Friday and Saturday, with the majority of stand time on Saturday. This is the core judged craft event of the IMBB competition \u2014 your longest sustained opportunity to demonstrate skill, client care, and authentic passion for bootblacking.',
      },
      {
        type: 'checklist',
        q: 'Judging criteria',
        items: [
          'Bootblacking skill and technique',
          'Quality of client interaction',
          'Passion and engagement demonstrated throughout',
        ],
        note: '',
      },
      {
        type: 'callout',
        label: 'Remember',
        text: 'Stand Time is where contests are won. Every shine counts \u2014 whether judges are watching or not. Be consistent, be present, and let your love for the craft show in every interaction.',
      },
    ],
    rightCol: [
      {
        type: 'qa',
        q: 'What should I wear?',
        a: 'There is no mandatory dress code. Wear what you would normally use when working a stand professionally \u2014 choose whatever lets you work freely and represent yourself well.',
      },
      {
        type: 'qa',
        q: 'When will I know my schedule?',
        a: 'Exact stand hours are communicated at least two weeks in advance. Specific assembly times and locations are also confirmed during Thursday Orientation.',
      },
      {
        type: 'qa',
        q: 'Will I have support?',
        a: 'Staff will guide you from assembly areas to and from the stands. A staff member remains present for the full duration of your stand time.',
      },
      {
        type: 'textarea',
        q: 'Your prep notes',
        placeholder: 'Add personal notes here\u2026',
        rows: 3,
      },
      {
        type: 'tip',
        text: 'Pace yourself across Friday and Saturday. Rest between sessions, stay hydrated, and keep your kit organised. A tired bootblack is a distracted one.',
      },
    ],
  },

  /* ─── 16 ─── */
  {
    id: 'event-16',
    number: '16',
    title: 'Educational Presentation',
    cardMeta: 'Saturday',
    day: 'Saturday',
    time: '',
    callTime: '',
    venue: '',
    badge: 'MANDATORY',
    contest: 'IMBB',
    leftCol: [
      {
        type: 'qa',
        q: 'What happens here?',
        a: 'You deliver a fifteen-minute educational presentation on any bootblacking skill of your choosing, open to the public. This is followed by up to five minutes of questions from judges and audience members. Setup takes five minutes before your slot; teardown takes five minutes after.',
      },
      {
        type: 'qa',
        q: 'How is it judged?',
        a: 'Judges evaluate your confidence and ability to convey information clearly to an audience, as well as your ability to engage the audience and handle questions thoughtfully.',
      },
      {
        type: 'callout',
        label: 'Remember',
        text: 'Choose a topic you know deeply \u2014 your confidence will show. The judges are not just assessing what you know, they are assessing how well you teach it.',
      },
    ],
    rightCol: [
      {
        type: 'checklist',
        q: 'What to prepare',
        items: [
          'A focused 15-minute presentation on a bootblacking skill of your choice',
          'Any materials, tools, or props you need \u2014 no AV equipment is provided',
          'Prepare for up to 5 minutes of questions from judges and the audience',
          'Allow 5 minutes before and after for setup and teardown',
        ],
        note: '',
      },
      {
        type: 'qa',
        q: 'What should I wear?',
        a: 'There is no attire requirement. Choose something you feel comfortable and confident in for a public presentation.',
      },
      {
        type: 'qa',
        q: 'When will I know my slot time and location?',
        a: 'Specific assembly times and locations are provided during Thursday Orientation.',
      },
      {
        type: 'textarea',
        q: 'Presentation topic \u2014 your notes',
        placeholder: 'What skill will you present? Key points, structure, materials needed\u2026',
        rows: 4,
      },
      {
        type: 'tip',
        text: 'Practise your presentation out loud at full length before the weekend. Fifteen minutes feels long in rehearsal and short on stage \u2014 know your pacing.',
      },
    ],
  },

];

if (typeof module !== 'undefined') module.exports = { EVENTS };
