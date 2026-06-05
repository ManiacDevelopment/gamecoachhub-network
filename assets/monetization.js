(function () {
  const STORAGE_KEY = "gch_language";
  const config = Object.assign(
    {
      adsensePublisherId: "",
      enableAdsense: false,
      disclosure: {
        en: "Disclosure: Game Coach Hub may use ads, sponsorships or affiliate links to support free guide content. Paid placements will be clearly labeled.",
        da: "Disclosure: Game Coach Hub kan bruge annoncer, sponsorater eller affiliate-links til at støtte gratis guideindhold. Betalte placeringer markeres tydeligt."
      }
    },
    window.GCH_MONETIZATION || {}
  );

  function language() {
    return (localStorage.getItem(STORAGE_KEY) || document.documentElement.lang || "en").startsWith("da") ? "da" : "en";
  }

  function loadAdsense() {
    if (!config.enableAdsense || !config.adsensePublisherId) return;
    if (document.querySelector("script[data-gch-adsense]")) return;

    const script = document.createElement("script");
    script.async = true;
    script.crossOrigin = "anonymous";
    script.dataset.gchAdsense = "true";
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(config.adsensePublisherId)}`;
    document.head.appendChild(script);
  }

  function markSlots() {
    document.querySelectorAll("[data-ad-slot]").forEach((slot) => {
      slot.dataset.state = config.enableAdsense && config.adsensePublisherId ? "ready" : "inactive";
    });
  }

  function ensureDisclosure() {
    let box = document.querySelector("[data-monetization-disclosure]");
    if (!box) {
      const main = document.querySelector("main") || document.querySelector(".app") || document.body;
      box = document.createElement("p");
      box.className = "monetization-disclosure";
      box.dataset.monetizationDisclosure = "true";
      main.appendChild(box);
    }
    box.textContent = config.disclosure[language()] || config.disclosure.en;
  }

  function boot() {
    loadAdsense();
    markSlots();
    ensureDisclosure();

    const observer = new MutationObserver(() => {
      markSlots();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  window.addEventListener("gch:languagechange", ensureDisclosure);
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
