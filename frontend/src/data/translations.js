export const translations = {
  en: {
    nav: {
      explore: "Explore",
      events: "Events",
      myJourney: "My Journey",
      about: "About",
      suggest: "Suggest Art Form"
    },
    hero: {
      title: "Discover something you didn’t know existed.",
      subtitle: "Explore India’s living traditions, the artists behind them, and the stories that deserve to be seen.",
      exploreBtn: "Explore traditions",
      surpriseBtn: "✦ Surprise me"
    },
    footer: {
      copyright: "© 2024 Tvarita Cultural Foundation. Preserving New Heritage.",
      archives: "Archives",
      contribute: "Contribute",
      legal: "Legal",
      press: "Press"
    }
  }
};

export const getTranslation = (key, lang = 'en') => {
  const keys = key.split('.');
  let current = translations[lang] || translations.en;
  for (const k of keys) {
    if (current && current[k]) {
      current = current[k];
    } else {
      return key;
    }
  }
  return current;
};
