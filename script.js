(() => {
  "use strict";

  // Navigation is intentionally handled in ONE place.
  // No page-transition library, timeout, GSAP, Lenis or duplicate scroll handler.
  const header = document.querySelector(".site-header");
  const nav = document.querySelector("#site-nav");
  const toggle = document.querySelector(".menu-toggle");
  const links = [...document.querySelectorAll('a[href^="#"]')];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function closeMenu() {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation");
  }

  toggle?.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  });

  links.forEach(link => {
    link.addEventListener("click", (event) => {
      const hash = link.getAttribute("href");
      if (!hash || hash === "#" || !hash.startsWith("#")) return;

      const target = document.querySelector(hash);
      if (!target) return;

      event.preventDefault();
      closeMenu();

      // Cancel any previous browser smooth scroll before starting this one.
      window.scrollTo({ top: window.scrollY, behavior: "auto" });

      const headerOffset = header?.offsetHeight || 0;
      const targetTop = Math.max(
        0,
        target.getBoundingClientRect().top + window.scrollY - headerOffset
      );

      window.scrollTo({
        top: targetTop,
        behavior: reduceMotion ? "auto" : "smooth"
      });

      // Keep URL state without triggering a second navigation.
      history.pushState(null, "", hash);
    });
  });

  // Reveal-on-scroll only affects opacity/transform; it never changes scroll position.
  const revealItems = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

  revealItems.forEach(item => observer.observe(item));

  document.querySelector("#year").textContent = new Date().getFullYear();

  // Close the mobile menu on Escape.
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMenu();
  });
})();
