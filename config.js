/* ============================================================
   config.js — EMPTY SCAFFOLD
   ============================================================
   Fill in every value below to populate the website.
   The structure must be preserved: the page reads these keys
   on load, so missing or renamed keys will leave sections blank.

   Only three technical defaults are pre-filled (locale,
   autoplayMs, min/maxDaysAhead) because empty values there
   would throw a runtime error. Everything else is yours.
   ============================================================ */

window.RESTAURANT_CONFIG = {

  /* ---------- HEAD / SEO ---------- */
  seo: {
    title: "baraska • 5 star",
    description: "something u can't forget",
    ogImage: "",
    siteName: "baraska",
    themeColor: ""
  },

  /* BCP 47 language tag — must stay valid (e.g. "en-US", "fr-FR") */
  locale: "en-US",

  /* ---------- BRAND ---------- */
  brand: {
    name: "BaraSka",
    tagline: "have sex at nigh",
    logoMark: ""            // single letter/symbol shown in the square logo
  },

  /* ---------- NAVIGATION ---------- */
  nav: {
    links: [
      // { label: "", href: "#home" },
      // { label: "", href: "#story" },
      // { label: "", href: "#menu" },
      // { label: "", href: "#gallery" },
      // { label: "", href: "#reservations" },
      // { label: "", href: "#contact" }
    ],
    cta: {
      label: "",
      href: "#reservations"
    }
  },

  /* ---------- HERO ---------- */
  hero: {
    eyebrow: "",
    title: {
      lead: "",
      accent: ""
    },
    lede: "",
    image: "",
    imageAlt: "",
    actions: [
      // { label: "", href: "#menu", style: "gold", icon: "fa-arrow-right" },
      // { label: "", href: "#reservations", style: "ghost-light", icon: "" }
    ],
    meta: [
      // { k: "", v: "" }
    ],
    scrollCue: ""
  },

  /* ---------- MARQUEE STRIP ---------- */
  marquee: [
    // "",
    // ""
  ],

  /* ---------- OUR STORY ---------- */
  story: {
    eyebrow: "",
    title: "",
    images: {
      main:      { src: "", alt: "" },
      secondary: { src: "", alt: "" }
    },
    badge: {
      number: "",
      labelLines: []        // e.g. ["Years of", "Craft"]
    },
    paragraphs: [
      // "",
      // ""
    ],
    quote: "",
    signature: {
      name: "",
      role: ""
    },
    stats: [
      // { value: 0, suffix: "+", label: "" }
    ]
  },

  /* ---------- SPECIALTIES ---------- */
  specialties: {
    eyebrow: "",
    title: "",
    subtitle: "",
    items: [
      // {
      //   image: "",
      //   alt: "",
      //   label: "",
      //   name: "",
      //   description: "",
      //   price: ""
      // }
    ],
    cta: {
      label: "",
      href: "#menu"
    }
  },

  /* ---------- MENU ---------- */
  menu: {
    eyebrow: "",
    title: "",
    subtitle: "",

    categories: [
      // { id: "all",      label: "" },
      // { id: "starters", label: "" },
      // { id: "mains",    label: "" },
      // { id: "pizza",    label: "" },
      // { id: "desserts", label: "" },
      // { id: "beverages",label: "" }
    ],

    /* Maps a dietary tag label to its CSS class */
    tagStyles: {
      // "Vegetarian": "tag-veg",
      // "Bestseller": "tag-best",
      // "Spicy":      "tag-spicy"
    },

    items: [
      // {
      //   id: "",
      //   category: "",       // must match a categories[].id
      //   name: "",
      //   price: 0,
      //   description: "",
      //   image: "",
      //   tags: []
      // }
    ]
  },

  /* ---------- WHY CHOOSE US ---------- */
  why: {
    eyebrow: "",
    title: "",
    subtitle: "",
    cards: [
      // { icon: "fa-solid fa-seedling", title: "", description: "" }
    ]
  },

  /* ---------- GALLERY ---------- */
  gallery: {
    eyebrow: "",
    title: "",
    subtitle: "",
    items: [
      // {
      //   thumb:   "",
      //   full:    "",
      //   alt:     "",
      //   caption: "",
      //   layout:  ""        // "", "g-tall", or "g-wide"
      // }
    ]
  },

  /* ---------- TESTIMONIALS ---------- */
  testimonials: {
    eyebrow: "",
    title: "",
    autoplayMs: 6500,
    items: [
      // {
      //   stars: 5,
      //   quote: "",
      //   name:  "",
      //   role:  "",
      //   avatar: ""
      // }
    ]
  },

  /* ---------- RESERVATIONS ---------- */
  reservation: {
    eyebrow: "",
    title: "",
    intro: "",
    backgroundImage: "",
    backgroundAlt: "",
    details: [
      // { icon: "fa-solid fa-clock", label: "", value: "", href: "" }
    ],
    fields: {
      name: {
        label: "",
        placeholder: "",
        required: true,
        autocomplete: "name"
      },
      email: {
        label: "",
        placeholder: "",
        required: true,
        autocomplete: "email"
      },
      phone: {
        label: "",
        placeholder: "",
        required: true,
        autocomplete: "tel"
      },
      guests: {
        label: "",
        placeholder: "",
        required: true,
        options: [
          // { value: "1", label: "" }
        ]
      },
      date: {
        label: "",
        required: true,
        minDaysAhead: 0,
        maxDaysAhead: 60
      },
      time: {
        label: "",
        placeholder: "",
        required: true,
        options: [
          // "12:00",
          // "18:00"
        ]
      },
      notes: {
        label: "",
        placeholder: ""
      }
    },
    submitLabel: "",
    note: "",
    success: {
      title: "",
      message: "",          // supports {firstName} {guests} {date} {time}
      note: "",
      resetLabel: ""
    }
  },

  /* ---------- CONTACT ---------- */
  contact: {
    eyebrow: "",
    title: "",
    subtitle: "",
    items: [
      // { icon: "fa-solid fa-location-dot", label: "", value: "", href: "" }
    ],
    socials: [
      // { label: "", icon: "fa-brands fa-instagram", url: "" }
    ],
    form: {
      title: "",
      subtitle: "",
      fields: {
        name:    { label: "", placeholder: "", required: true },
        email:   { label: "", placeholder: "", required: true },
        subject: { label: "", placeholder: "", required: false },
        message: { label: "", placeholder: "", required: true }
      },
      submitLabel: "",
      successMessage: "",
      messageMinLength: 10
    },
    map: {
      embedUrl: "",
      title: ""
    }
  },

  /* ---------- NEWSLETTER ---------- */
  newsletter: {
    eyebrow: "",
    title: "",
    text: "",
    placeholder: "",
    submitLabel: "",
    successMessage: "",
    note: ""
  },

  /* ---------- FOOTER ---------- */
  footer: {
    description: "",
    explore: {
      title: "",
      links: [
        // { label: "", href: "#home" }
      ]
    },
    menuLinks: {
      title: "",
      links: [
        // { label: "", filter: "starters" }
      ]
    },
    contact: {
      title: "",
      items: [
        // { icon: "fa-solid fa-location-dot", text: "", href: "" }
      ]
    },
    copyright: "",          // supports {year} and {name}
    legal: [
      // { label: "", href: "#", placeholder: true }
    ]
  },

  /* ---------- UI STRINGS ---------- */
  ui: {
    cart: {
      title: "",
      subtotalLabel: "",
      note: "",
      checkoutLabel: "",
      checkoutDemoLabel: "",
      clearLabel: "",
      addLabel: "",
      addedLabel: "",
      addAria: "",          // supports {name}
      eachLabel: "",
      itemSingular: "",
      itemPlural: "",
      emptyTitle: "",
      emptyText: "",
      emptyCta: ""
    },
    menu: {
      empty: ""
    },
    toasts: {
      added: "",            // {name}
      removed: "",          // {name}
      cleared: "",
      emptyCart: "",
      checkout: "",         // {count} {total}
      reservation: "",
      contact: "",
      newsletter: "",
      social: "",           // {network}
      placeholder: ""       // {label}
    },
    validation: {
      nameRequired: "",
      nameShort: "",
      emailRequired: "",
      emailInvalid: "",
      phoneRequired: "",
      phoneInvalid: "",
      guestsRequired: "",
      timeRequired: "",
      dateRequired: "",
      datePast: "",
      dateFar: "",          // {days}
      messageRequired: "",
      messageShort: ""      // {min}
    }
  }

};
