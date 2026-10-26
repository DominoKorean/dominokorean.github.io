(() => {
  'use strict';

  const storageKey = 'pages-language';
  const supportedLanguages = ['ko', 'en'];
  const languageSelect = document.getElementById('language');
  const translations = Array.from(document.querySelectorAll('[data-ko]'), element => ({
    element,
    en: element.textContent,
    ko: element.dataset.ko
  }));
  let preference = 'auto';

  // Reading storage can throw in private or restricted browsing contexts.
  try {
    const saved = localStorage.getItem(storageKey);
    if (supportedLanguages.includes(saved)) preference = saved;
  } catch { /* Automatic detection works without storage. */ }

  function browserLanguage() {
    const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
    for (const language of languages) {
      const base = (language || '').toLowerCase().split(/[-_]/)[0];
      if (supportedLanguages.includes(base)) return base;
    }
    return 'en';
  }

  function applyLanguage() {
    const language = preference === 'auto' ? browserLanguage() : preference;
    document.documentElement.lang = language;
    for (const translation of translations) translation.element.textContent = translation[language];
    languageSelect.value = preference;
  }

  languageSelect.addEventListener('change', () => {
    preference = supportedLanguages.includes(languageSelect.value) ? languageSelect.value : 'auto';
    try {
      if (preference === 'auto') localStorage.removeItem(storageKey);
      else localStorage.setItem(storageKey, preference);
    } catch { /* Keep the choice active for this visit when storage is unavailable. */ }
    applyLanguage();
  });

  window.addEventListener('languagechange', () => {
    if (preference === 'auto') applyLanguage();
  });

  applyLanguage();
  document.querySelector('.language-control').hidden = false;
})();
