/* ============================================================
   config.js — Baraska
   Populated from restro.html. Only the restaurant name changed.
   Edit any value below to customise the site.
   ============================================================ */

window.RESTAURANT_CONFIG = {

  /* ---------- HEAD / SEO ---------- */
  seo: {
    title: "Baraska — Where Every Bite Becomes a Memory",
    description: "Baraska is a premium dining destination serving seasonal, chef-driven cuisine in an elegant, intimate setting. Explore our menu, view our gallery and reserve your table.",
    ogImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
    siteName: "Baraska",
    themeColor: "#1b1613"
  },

  locale: "en-US",

  /* ---------- BRAND ---------- */
  brand: {
    name: "Baraska",
    tagline: "[RESTAURANT TAGLINE]",
    logoMark: "B"
  },

  /* ---------- NAVIGATION ---------- */
  nav: {
    links: [
      { label: "Home",         href: "#home" },
      { label: "Our Story",    href: "#story" },
      { label: "Menu",         href: "#menu" },
      { label: "Gallery",      href: "#gallery" },
      { label: "Reservations", href: "#reservations" },
      { label: "Contact",      href: "#contact" }
    ],
    cta: {
      label: "Book a Table",
      href: "#reservations"
    }
  },

  /* ---------- HERO ---------- */
  hero: {
    eyebrow: "An Extraordinary Dining Experience",
    title: {
      lead: "Where Every Bite",
      accent: "Becomes a Memory."
    },
    lede: "A seasonal kitchen rooted in craft and conviviality. We source with intention, cook with patience and serve with warmth — because a great meal should linger long after the last plate is cleared.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=80",
    imageAlt: "Warmly lit dining room at Baraska with set tables and ambient lighting",
    actions: [
      { label: "Explore Menu",    href: "#menu",         style: "gold",        icon: "fa-arrow-right" },
      { label: "Reserve a Table", href: "#reservations", style: "ghost-light", icon: "" }
    ],
    meta: [
      { k: "Open",         v: "[BUSINESS HOURS]" },
      { k: "Find Us",      v: "[RESTAURANT ADDRESS]" },
      { k: "Reservations", v: "[PHONE NUMBER]" }
    ],
    scrollCue: "Scroll"
  },

  /* ---------- MARQUEE STRIP ---------- */
  marquee: [
    "Seasonal Produce",
    "Chef-Driven Kitchen",
    "Natural Wine",
    "Hand-Rolled Pasta",
    "Wood-Fired Oven",
    "Intimate Ambience"
  ],

  /* ---------- OUR STORY ---------- */
  story: {
    eyebrow: "Our Story",
    title: "A Table Set With Intention",
    images: {
      main: {
        src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
        alt: "Elegant dining room interior with warm pendant lighting and dark wood tables"
      },
      secondary: {
        src: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=600&q=80",
        alt: "Chef carefully plating a seasonal dish in the kitchen"
      }
    },
    badge: {
      number: "12",
      labelLines: ["Years of", "Craft"]
    },
    paragraphs: [
      "Baraska began with a simple conviction: that a restaurant should feel like the home of someone who genuinely loves to feed people. What started as a twelve-seat kitchen has grown into one of the city's most quietly celebrated dining rooms — but the soul of the place has not changed.",
      "Our kitchen is guided by the market. Menus are rewritten as the seasons turn, produce arrives from growers we know by name, and nothing leaves the pass unless it is something we would proudly serve at our own table."
    ],
    quote: "We do not chase trends. We chase flavour — and the feeling of being looked after.",
    signature: {
      name: "A. Laurent",
      role: "Executive Chef & Founder"
    },
    stats: [
      { value: 12, suffix: "+", label: "Years Established" },
      { value: 48, suffix: "k", label: "Guests Served" },
      { value: 26, suffix: "",  label: "Seasonal Dishes" },
      { value: 9,  suffix: "",  label: "Culinary Awards" }
    ]
  },

  /* ---------- SPECIALTIES ---------- */
  specialties: {
    eyebrow: "Chef's Selection",
    title: "Signature Specialties",
    subtitle: "Three dishes that have earned their place on the menu year after year — each one a small study in balance, texture and restraint.",
    items: [
      {
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
        alt: "45-day dry-aged ribeye steak sliced and served with herb butter",
        label: "Bestseller",
        name: "45-Day Dry-Aged Ribeye",
        description: "Charcoal-grilled, bone marrow butter, confit shallot and a peppercorn jus reduced over twelve hours.",
        price: "$48"
      },
      {
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80",
        alt: "Freshly rolled tagliatelle pasta tossed with slow-cooked beef ragù",
        label: "House Favourite",
        name: "Tagliatelle al Ragù",
        description: "Silk-thin egg pasta, six-hour beef and pork ragù, aged Parmigiano Reggiano and torn basil.",
        price: "$27"
      },
      {
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=80",
        alt: "Warm chocolate fondant dessert served with vanilla ice cream",
        label: "Sweet Finish",
        name: "Valrhona Chocolate Fondant",
        description: "Molten dark chocolate, sea-salt caramel, crème fraîche sorbet and a dusting of cocoa nib.",
        price: "$14"
      }
    ],
    cta: {
      label: "Explore the Full Menu",
      href: "#menu"
    }
  },

  /* ---------- MENU ---------- */
  menu: {
    eyebrow: "The Menu",
    title: "Crafted With Intention",
    subtitle: "A concise, seasonal selection. Prices are indicative placeholders and dishes change with the market.",

    categories: [
      { id: "all",       label: "All Items" },
      { id: "starters",  label: "Starters" },
      { id: "mains",     label: "Main Course" },
      { id: "pizza",     label: "Pizza & Pasta" },
      { id: "desserts",  label: "Desserts" },
      { id: "beverages", label: "Beverages" }
    ],

    tagStyles: {
      "Vegetarian": "tag-veg",
      "Bestseller": "tag-best",
      "Spicy":      "tag-spicy"
    },

    items: [
      /* ---------- STARTERS ---------- */
      {
        id: "s1",
        category: "starters",
        name: "Burrata & Heirloom Tomato",
        price: 18,
        description: "Creamy Puglian burrata, sun-ripened heirloom tomatoes, basil oil, aged balsamic and sourdough crisps.",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=700&q=80",
        tags: ["Vegetarian"]
      },
      {
        id: "s2",
        category: "starters",
        name: "Truffle & Parmesan Arancini",
        price: 16,
        description: "Crisp saffron risotto spheres, black truffle, aged Parmigiano espuma and chive oil.",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=700&q=80",
        tags: ["Vegetarian", "Bestseller"]
      },
      {
        id: "s3",
        category: "starters",
        name: "Seared Scallops & Cauliflower",
        price: 24,
        description: "Hand-dived scallops, cauliflower velouté, brown butter, crispy capers and lemon zest.",
        image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=700&q=80",
        tags: []
      },
      {
        id: "s4",
        category: "starters",
        name: "Charred Octopus & Paprika",
        price: 22,
        description: "Slow-braised then charred octopus, smoked paprika oil, confit potato and salsa verde.",
        image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=700&q=80",
        tags: ["Spicy"]
      },

      /* ---------- MAINS ---------- */
      {
        id: "m1",
        category: "mains",
        name: "45-Day Dry-Aged Ribeye",
        price: 48,
        description: "Charcoal-grilled ribeye, bone marrow butter, confit shallot and a twelve-hour peppercorn jus.",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80",
        tags: ["Bestseller"]
      },
      {
        id: "m2",
        category: "mains",
        name: "Herb-Crusted Rack of Lamb",
        price: 42,
        description: "Rack of lamb with a parsley and pistachio crust, dauphinoise potato and rosemary reduction.",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=700&q=80",
        tags: []
      },
      {
        id: "m3",
        category: "mains",
        name: "Saffron Risotto & Wild Mushroom",
        price: 28,
        description: "Carnaroli rice slowly cooked with saffron, wild mushroom, mascarpone and toasted hazelnut.",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=80",
        tags: ["Vegetarian"]
      },
      {
        id: "m4",
        category: "mains",
        name: "Miso-Glazed Black Cod",
        price: 38,
        description: "Marinated black cod, white miso glaze, charred pak choi and a ginger-scented dashi.",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=700&q=80",
        tags: []
      },

      /* ---------- PIZZA & PASTA ---------- */
      {
        id: "p1",
        category: "pizza",
        name: "Tartufo Bianco Pizza",
        price: 26,
        description: "Wood-fired sourdough base, fior di latte, white truffle cream, wild mushroom and thyme.",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80",
        tags: ["Vegetarian"]
      },
      {
        id: "p2",
        category: "pizza",
        name: "Diavola Piccante",
        price: 24,
        description: "San Marzano tomato, spiced salami, Calabrian chilli, smoked mozzarella and hot honey.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=700&q=80",
        tags: ["Spicy"]
      },
      {
        id: "p3",
        category: "pizza",
        name: "Tagliatelle al Ragù",
        price: 27,
        description: "Silk-thin egg pasta, six-hour beef and pork ragù, aged Parmigiano and torn basil.",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=700&q=80",
        tags: ["Bestseller"]
      },
      {
        id: "p4",
        category: "pizza",
        name: "Cacio e Pepe",
        price: 23,
        description: "Hand-rolled tonnarelli, Pecorino Romano, cracked Sarawak pepper and pasta water emulsion.",
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=700&q=80",
        tags: ["Vegetarian"]
      },

      /* ---------- DESSERTS ---------- */
      {
        id: "d1",
        category: "desserts",
        name: "Valrhona Chocolate Fondant",
        price: 14,
        description: "Molten dark chocolate, sea-salt caramel, crème fraîche sorbet and cocoa nib dust.",
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=700&q=80",
        tags: ["Vegetarian", "Bestseller"]
      },
      {
        id: "d2",
        category: "desserts",
        name: "Pistachio & Raspberry Tart",
        price: 13,
        description: "Sicilian pistachio frangipane, fresh raspberries, vanilla crème and a crisp pastry shell.",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=700&q=80",
        tags: ["Vegetarian"]
      },
      {
        id: "d3",
        category: "desserts",
        name: "Tiramisù della Casa",
        price: 12,
        description: "Savoiardi soaked in espresso, mascarpone cream and a generous veil of bitter cocoa.",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=700&q=80",
        tags: ["Vegetarian"]
      },

      /* ---------- BEVERAGES ---------- */
      {
        id: "b1",
        category: "beverages",
        name: "Barrel-Aged Negroni",
        price: 16,
        description: "London dry gin, Campari and sweet vermouth, aged eight weeks in oak for a rounder finish.",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=700&q=80",
        tags: []
      },
      {
        id: "b2",
        category: "beverages",
        name: "Sicilian Spritz",
        price: 14,
        description: "Blood orange, prosecco, soda and a sprig of rosemary over hand-cut ice.",
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=700&q=80",
        tags: []
      },
      {
        id: "b3",
        category: "beverages",
        name: "Single-Origin Espresso",
        price: 5,
        description: "Rotating single-origin beans, pulled to order. Served with a square of dark chocolate.",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=700&q=80",
        tags: ["Vegetarian"]
      }
    ]
  },

  /* ---------- WHY CHOOSE US ---------- */
  why: {
    eyebrow: "The Difference",
    title: "Why Guests Return",
    subtitle: "Four principles guide everything we do — from the first phone call to the last spoonful of dessert.",
    cards: [
      {
        icon: "fa-solid fa-seedling",
        title: "Fresh Ingredients",
        description: "Sourced daily from small growers and coastal suppliers. If it isn't at its best, it doesn't reach the pass."
      },
      {
        icon: "fa-solid fa-utensils",
        title: "Expert Chefs",
        description: "A brigade trained across Europe's finest kitchens, led by a chef with two decades at the stove."
      },
      {
        icon: "fa-solid fa-champagne-glasses",
        title: "Premium Ambience",
        description: "Low light, natural materials and a room designed for conversation — never for volume."
      },
      {
        icon: "fa-solid fa-bell-concierge",
        title: "Exceptional Hospitality",
        description: "Attentive without hovering. Our team remembers your name, your table and your usual order."
      }
    ]
  },

  /* ---------- GALLERY ---------- */
  gallery: {
    eyebrow: "Gallery",
    title: "Moments at the Table",
    subtitle: "A glimpse into the room, the kitchen and the plates that leave it.",
    items: [
      {
        thumb:   "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=700&q=80",
        full:    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=85",
        alt:     "Warmly lit main dining room with set tables",
        caption: "The Dining Room",
        layout:  "g-tall"
      },
      {
        thumb:   "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        full:    "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=85",
        alt:     "Sliced dry-aged ribeye steak on a wooden board",
        caption: "Signature Ribeye",
        layout:  ""
      },
      {
        thumb:   "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80",
        full:    "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1600&q=85",
        alt:     "Chef preparing a dish during service",
        caption: "In the Kitchen",
        layout:  ""
      },
      {
        thumb:   "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
        full:    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=85",
        alt:     "Restaurant interior with pendant lighting and dark wood tables",
        caption: "Evening Service",
        layout:  "g-wide"
      },
      {
        thumb:   "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80",
        full:    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1600&q=85",
        alt:     "Wood-fired pizza fresh from the oven",
        caption: "From the Oven",
        layout:  ""
      },
      {
        thumb:   "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80",
        full:    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1600&q=85",
        alt:     "Cocktails being prepared at the bar",
        caption: "The Bar",
        layout:  ""
      },
      {
        thumb:   "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=600&q=80",
        full:    "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1600&q=85",
        alt:     "Pistachio and raspberry tart plated with fresh berries",
        caption: "The Pastry",
        layout:  ""
      },
      {
        thumb:   "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80",
        full:    "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=85",
        alt:     "Beautifully set table for two with wine glasses",
        caption: "A Table for Two",
        layout:  "g-wide"
      }
    ]
  },

  /* ---------- TESTIMONIALS ---------- */
  testimonials: {
    eyebrow: "Guest Book",
    title: "What Our Guests Say",
    autoplayMs: 6500,
    items: [
      {
        stars: 5,
        quote: "The kind of evening you quietly hope for. Every course arrived with a story, the service was warm without ever hovering, and the ribeye is genuinely the best I've had in years.",
        name: "Eleanor Whitmore",
        role: "Food Writer",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
      },
      {
        stars: 5,
        quote: "We booked for an anniversary and were treated like regulars. The room is beautiful, the pacing is perfect, and the chocolate fondant alone is worth the trip across town.",
        name: "Marcus Adeyemi",
        role: "Regular Guest",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
      },
      {
        stars: 5,
        quote: "A rare thing: a restaurant that feels special occasion-worthy but never stiff. The burrata, the pasta, the wine list — all quietly excellent. We're already planning our return.",
        name: "Sofia Marchetti",
        role: "Sommelier",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
      },
      {
        stars: 4,
        quote: "Took a client here on a recommendation and it did the job beautifully. Calm, confident cooking and a team that reads a table well. The scallops were outstanding.",
        name: "Daniel Park",
        role: "Architect",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
      },
      {
        stars: 5,
        quote: "The lighting, the linen, the low hum of conversation — it all works. But it's the small things that stay with you: the bread, the butter, the way the team remembers your name.",
        name: "Amara Lindqvist",
        role: "Interior Designer",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80"
      }
    ]
  },

  /* ---------- RESERVATIONS ---------- */
  reservation: {
    eyebrow: "Reservations",
    title: "Reserve Your Table",
    intro: "We hold a limited number of tables for walk-in guests each evening, but a reservation is the surest way to secure the seat you want. Bookings open sixty days in advance.",
    backgroundImage: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1800&q=80",
    backgroundAlt: "Dimly lit restaurant interior with warm ambient light",
    details: [
      { icon: "fa-solid fa-clock",         label: "Service Hours", value: "[BUSINESS HOURS]" },
      { icon: "fa-solid fa-location-dot",  label: "Find Us",       value: "[RESTAURANT ADDRESS]" },
      { icon: "fa-solid fa-phone",         label: "Speak to Us",   value: "[PHONE NUMBER]" },
      { icon: "fa-solid fa-envelope",      label: "Email",         value: "[EMAIL ADDRESS]", href: "mailto:[EMAIL ADDRESS]" }
    ],
    fields: {
      name: {
        label: "Full Name",
        placeholder: "Jane Doe",
        required: true,
        autocomplete: "name"
      },
      email: {
        label: "Email",
        placeholder: "jane@example.com",
        required: true,
        autocomplete: "email"
      },
      phone: {
        label: "Phone",
        placeholder: "+44 20 7946 0128",
        required: true,
        autocomplete: "tel"
      },
      guests: {
        label: "Guests",
        placeholder: "Select party size",
        required: true,
        options: [
          { value: "1",  label: "1 guest" },
          { value: "2",  label: "2 guests" },
          { value: "3",  label: "3 guests" },
          { value: "4",  label: "4 guests" },
          { value: "5",  label: "5 guests" },
          { value: "6",  label: "6 guests" },
          { value: "7",  label: "7 guests" },
          { value: "8",  label: "8 guests" },
          { value: "9",  label: "9 guests" },
          { value: "10", label: "10+ guests" }
        ]
      },
      date: {
        label: "Date",
        required: true,
        minDaysAhead: 0,
        maxDaysAhead: 60
      },
      time: {
        label: "Time",
        placeholder: "Select a time",
        required: true,
        options: [
          "12:00", "12:30", "13:00", "13:30", "14:00",
          "18:00", "18:30", "19:00", "19:30",
          "20:00", "20:30", "21:00", "21:30"
        ]
      },
      notes: {
        label: "Special Requests",
        placeholder: "Allergies, celebrations, seating preferences…"
      }
    },
    submitLabel: "Submit Reservation",
    note: "This is a front-end demonstration form. No reservation is actually created — connecting it to a booking system requires backend integration.",
    success: {
      title: "Request Received",
      message: "Thank you, {firstName}. We have noted a request for {guests} on {date} at {time}.",
      note: "This is a front-end demo only. In a live environment our team would confirm your table by email within one hour.",
      resetLabel: "Make Another Request"
    }
  },

  /* ---------- CONTACT ---------- */
  contact: {
    eyebrow: "Contact",
    title: "Come Say Hello",
    subtitle: "Questions about a private event, a large party or a dietary requirement? Our team is always happy to help.",
    items: [
      { icon: "fa-solid fa-location-dot", label: "Address",       value: "[RESTAURANT ADDRESS]" },
      { icon: "fa-solid fa-phone",        label: "Phone",         value: "[PHONE NUMBER]",     href: "tel:[PHONE NUMBER]" },
      { icon: "fa-solid fa-envelope",     label: "Email",         value: "[EMAIL ADDRESS]",    href: "mailto:[EMAIL ADDRESS]" },
      { icon: "fa-solid fa-clock",        label: "Opening Hours", value: "[BUSINESS HOURS]" }
    ],
    socials: [
      { label: "Instagram", icon: "fa-brands fa-instagram",   url: "" },
      { label: "Facebook",  icon: "fa-brands fa-facebook-f",  url: "" },
      { label: "X",         icon: "fa-brands fa-x-twitter",   url: "" },
      { label: "Pinterest", icon: "fa-brands fa-pinterest-p", url: "" }
    ],
    form: {
      title: "Send Us a Message",
      subtitle: "We reply to all enquiries within one business day.",
      fields: {
        name:    { label: "Full Name", placeholder: "Jane Doe",               required: true },
        email:   { label: "Email",     placeholder: "jane@example.com",       required: true },
        subject: { label: "Subject",   placeholder: "Private dining enquiry", required: false },
        message: { label: "Message",   placeholder: "How can we help?",       required: true }
      },
      submitLabel: "Send Message",
      successMessage: "Thank you — your message has been captured. (Demo form: no data is sent.)",
      messageMinLength: 10
    },
    map: {
      embedUrl: "https://maps.google.com/maps?q=51.5074,-0.1278&z=14&output=embed",
      title: "Map showing the location of Baraska"
    }
  },

  /* ---------- NEWSLETTER ---------- */
  newsletter: {
    eyebrow: "Stay in the Loop",
    title: "Seasonal Menus, First",
    text: "Join our list for new menu launches, wine dinners and the occasional table released at short notice. No noise — just the good stuff.",
    placeholder: "Your email address",
    submitLabel: "Subscribe",
    successMessage: "You're on the list. Watch your inbox for our next menu launch.",
    note: "This is a front-end demo — no email is stored or sent. Unsubscribe anytime."
  },

  /* ---------- FOOTER ---------- */
  footer: {
    description: "A seasonal kitchen and dining room devoted to produce, patience and the quiet pleasure of a table well kept.",
    explore: {
      title: "Explore",
      links: [
        { label: "Home",         href: "#home" },
        { label: "Our Story",    href: "#story" },
        { label: "Menu",         href: "#menu" },
        { label: "Gallery",      href: "#gallery" },
        { label: "Reservations", href: "#reservations" },
        { label: "Contact",      href: "#contact" }
      ]
    },
    menuLinks: {
      title: "The Menu",
      links: [
        { label: "Starters",         filter: "starters" },
        { label: "Main Course",      filter: "mains" },
        { label: "Pizza & Pasta",    filter: "pizza" },
        { label: "Desserts",         filter: "desserts" },
        { label: "Beverages",        filter: "beverages" },
        { label: "Specialties",      filter: "specialties" }
      ]
    },
    contact: {
      title: "Visit Us",
      items: [
        { icon: "fa-solid fa-location-dot", text: "[RESTAURANT ADDRESS]" },
        { icon: "fa-solid fa-phone",        text: "[PHONE NUMBER]",     href: "tel:[PHONE NUMBER]" },
        { icon: "fa-solid fa-envelope",     text: "[EMAIL ADDRESS]",    href: "mailto:[EMAIL ADDRESS]" },
        { icon: "fa-solid fa-clock",        text: "[BUSINESS HOURS]" }
      ]
    },
    copyright: "© {year} Baraska. All rights reserved.",
    legal: [
      { label: "Privacy Policy",   href: "#home", placeholder: true },
      { label: "Terms of Service", href: "#home", placeholder: true },
      { label: "Accessibility",    href: "#home", placeholder: true }
    ]
  },

  /* ---------- UI STRINGS ---------- */
  ui: {
    cart: {
      title: "Your Order",
      subtotalLabel: "Subtotal",
      note: "Taxes and service charge are calculated at the table. This is a demonstration cart — no payment will be taken.",
      checkoutLabel: "Proceed to Checkout",
      checkoutDemoLabel: "Order Logged (Demo)",
      clearLabel: "Clear cart",
      addLabel: "Add to Cart",
      addedLabel: "Added",
      addAria: "Add {name} to cart",
      eachLabel: "each",
      itemSingular: "item",
      itemPlural: "items",
      emptyTitle: "Your cart is empty",
      emptyText: "Add a dish from our menu and it will appear here.",
      emptyCta: "Browse Menu"
    },
    menu: {
      empty: "No dishes in this category yet — please check back soon."
    },
    toasts: {
      added: "{name} added to your cart",
      removed: "{name} removed from your cart",
      cleared: "Cart cleared",
      emptyCart: "Your cart is empty",
      checkout: "Demo checkout — {count} item(s), {total}. No payment taken.",
      reservation: "Reservation request captured (demo)",
      contact: "Message captured (demo form)",
      newsletter: "Subscribed (demo — no email stored)",
      social: "{network} — link placeholder, add your profile URL",
      placeholder: "{label} — placeholder link"
    },
    validation: {
      nameRequired: "Full name is required.",
      nameShort: "Please enter at least 2 characters.",
      emailRequired: "Email address is required.",
      emailInvalid: "Please enter a valid email address.",
      phoneRequired: "Phone number is required.",
      phoneInvalid: "Please enter a valid phone number.",
      guestsRequired: "Please select a party size.",
      timeRequired: "Please select a time.",
      dateRequired: "Please choose a date.",
      datePast: "Please choose a date from today onwards.",
      dateFar: "Bookings open up to {days} days in advance.",
      messageRequired: "Message is required.",
      messageShort: "Please write at least {min} characters."
    }
  }

};
